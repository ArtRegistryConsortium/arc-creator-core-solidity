// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "./interfaces/IArtContract.sol";
import "./interfaces/IIdentity.sol";
import "./libraries/ArcConstants.sol";

/**
 * @title ArtContract
 * @dev Represents an artist's catalog and manages individual ART tokens
 * Uses UUPS pattern for upgradeability
 */
contract ArtContract is 
    Initializable, 
    ERC721Upgradeable, 
    ERC721URIStorageUpgradeable, 
    ERC2981Upgradeable, 
    UUPSUpgradeable, 
    AccessControlUpgradeable, 
    IArtContract 
{
    // Artist's identity ID
    uint256 private _artistIdentityId;
    
    // Counter for token IDs
    uint256 private _tokenIdCounter;
    
    // Array of all token IDs
    uint256[] private _allTokenIds;
    
    // Mapping from token ID to ArtMetadata
    mapping(uint256 => ArtMetadata) private _artMetadata;
    
    // Mapping from token ID to partial editor identity IDs
    mapping(uint256 => mapping(uint256 => bool)) private _partialEditors;
    
    // Default royalties in basis points (e.g., 1000 = 10%)
    uint256 private _defaultRoyalties;
    
    // Reference to the Identity contract
    IIdentity private _identityContract;
    
    /**
     * @dev Initializes the contract
     * @param artistIdentityId Artist's identity ID
     * @param name Name of the token collection
     * @param symbol Symbol of the token collection
     */
    function initialize(
        uint256 artistIdentityId,
        string memory name,
        string memory symbol
    ) external initializer override {
        __ERC721_init(name, symbol);
        __ERC721URIStorage_init();
        __ERC2981_init();
        __AccessControl_init();
        __UUPSUpgradeable_init();
        
        _artistIdentityId = artistIdentityId;
        _tokenIdCounter = 1;
        _defaultRoyalties = 1000; // Default 10%
        
        // Set the deployer as the contract owner with both roles
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ArcConstants.FULL_ADMIN_ROLE, msg.sender);
    }
    
    /**
     * @dev Sets the Identity contract reference
     * @param identityContract Address of the Identity contract
     */
    function setIdentityContract(address identityContract) external override onlyRole(ArcConstants.FULL_ADMIN_ROLE) {
        _identityContract = IIdentity(identityContract);
    }
    
    /**
     * @dev Mints a new ART token
     * @param metadata Metadata for the new ART token
     * @return New token ID
     */
    function mint(ArtMetadata memory metadata) external override returns (uint256) {
        // Check if caller is authorized to mint
        uint256 callerIdentityId = _getCallerIdentityId();
        require(_isAuthorizedToMint(callerIdentityId), ArcConstants.ERROR_UNAUTHORIZED);
        
        // Validate metadata
        require(bytes(metadata.title).length > 0, "Title cannot be empty");
        require(metadata.yearOfCreation > 0, "Year of creation must be set");
        require(bytes(metadata.medium).length > 0, "Medium cannot be empty");
        require(bytes(metadata.dimensions).length > 0, "Dimensions cannot be empty");
        require(bytes(metadata.catalogueInventory).length > 0, "Catalogue inventory cannot be empty");
        require(bytes(metadata.certificationMethod).length > 0, "Certification method cannot be empty");
        require(bytes(metadata.artistStatement).length > 0, "Artist statement cannot be empty");
        
        // Validate royalties
        require(metadata.royalties <= ArcConstants.MAX_ROYALTIES, ArcConstants.ERROR_INVALID_ROYALTIES);
        
        uint256 newTokenId = _tokenIdCounter++;
        
        // Set artist identity ID to the contract owner if not specified
        if (metadata.artistIdentityId == 0) {
            metadata.artistIdentityId = _artistIdentityId;
        }
        
        // Store metadata
        _artMetadata[newTokenId] = metadata;
        
        // Mint token
        _mint(msg.sender, newTokenId);
        
        // Set token-specific royalties if specified, otherwise use default
        if (metadata.royalties > 0) {
            _setTokenRoyalty(newTokenId, msg.sender, uint96(metadata.royalties));
        } else {
            _setTokenRoyalty(newTokenId, msg.sender, uint96(_defaultRoyalties));
        }
        
        _allTokenIds.push(newTokenId);
        
        emit ArtMinted(newTokenId, metadata.artistIdentityId, msg.sender);
        
        return newTokenId;
    }
    
    /**
     * @dev Updates an existing ART token's metadata
     * @param tokenId Token ID
     * @param metadata New metadata
     */
    function updateArt(uint256 tokenId, ArtMetadata memory metadata) external override {
        require(_exists(tokenId), ArcConstants.ERROR_TOKEN_NOT_FOUND);
        
        // Check if caller is authorized to update
        uint256 callerIdentityId = _getCallerIdentityId();
        require(_isAuthorizedToUpdate(callerIdentityId, tokenId), ArcConstants.ERROR_UNAUTHORIZED);
        
        // Validate metadata
        require(bytes(metadata.title).length > 0, "Title cannot be empty");
        require(metadata.yearOfCreation > 0, "Year of creation must be set");
        require(bytes(metadata.medium).length > 0, "Medium cannot be empty");
        require(bytes(metadata.dimensions).length > 0, "Dimensions cannot be empty");
        require(bytes(metadata.catalogueInventory).length > 0, "Catalogue inventory cannot be empty");
        require(bytes(metadata.certificationMethod).length > 0, "Certification method cannot be empty");
        require(bytes(metadata.artistStatement).length > 0, "Artist statement cannot be empty");
        
        // Validate royalties
        require(metadata.royalties <= ArcConstants.MAX_ROYALTIES, ArcConstants.ERROR_INVALID_ROYALTIES);
        
        // Preserve the artist identity ID
        metadata.artistIdentityId = _artMetadata[tokenId].artistIdentityId;
        
        // Update metadata
        _artMetadata[tokenId] = metadata;
        
        // Update royalties if authorized and changed
        if (_isAuthorizedToSetRoyalties(callerIdentityId) && 
            metadata.royalties != _artMetadata[tokenId].royalties) {
            _setTokenRoyalty(tokenId, ownerOf(tokenId), uint96(metadata.royalties));
            emit RoyaltiesSet(tokenId, metadata.royalties);
        }
        
        emit ArtUpdated(tokenId, metadata.artistIdentityId, msg.sender);
    }
    
    /**
     * @dev Sets royalties for a specific token
     * @param tokenId Token ID
     * @param royaltiesInBasisPoints Royalties in basis points (e.g., 1000 = 10%)
     */
    function setRoyalties(uint256 tokenId, uint256 royaltiesInBasisPoints) external override {
        require(_exists(tokenId), ArcConstants.ERROR_TOKEN_NOT_FOUND);
        require(royaltiesInBasisPoints <= ArcConstants.MAX_ROYALTIES, ArcConstants.ERROR_INVALID_ROYALTIES);
        
        // Check if caller is authorized to set royalties
        uint256 callerIdentityId = _getCallerIdentityId();
        require(_isAuthorizedToSetRoyalties(callerIdentityId), ArcConstants.ERROR_UNAUTHORIZED);
        
        _setTokenRoyalty(tokenId, ownerOf(tokenId), uint96(royaltiesInBasisPoints));
        
        // Update metadata
        _artMetadata[tokenId].royalties = royaltiesInBasisPoints;
        
        emit RoyaltiesSet(tokenId, royaltiesInBasisPoints);
    }
    
    /**
     * @dev Sets default royalties for new tokens
     * @param royaltiesInBasisPoints Royalties in basis points (e.g., 1000 = 10%)
     */
    function setDefaultRoyalties(uint256 royaltiesInBasisPoints) external override {
        require(royaltiesInBasisPoints <= ArcConstants.MAX_ROYALTIES, ArcConstants.ERROR_INVALID_ROYALTIES);
        
        // Check if caller is authorized to set royalties
        uint256 callerIdentityId = _getCallerIdentityId();
        require(_isAuthorizedToSetRoyalties(callerIdentityId), ArcConstants.ERROR_UNAUTHORIZED);
        
        _defaultRoyalties = royaltiesInBasisPoints;
        
        emit DefaultRoyaltiesSet(royaltiesInBasisPoints);
    }
    
    /**
     * @dev Gets all ART token IDs
     * @return Array of token IDs
     */
    function getAllArt() external view override returns (uint256[] memory) {
        return _allTokenIds;
    }
    
    /**
     * @dev Gets metadata for a specific ART token
     * @param tokenId Token ID
     * @return ART token metadata
     */
    function getArtMetadata(uint256 tokenId) external view override returns (ArtMetadata memory) {
        require(_exists(tokenId), ArcConstants.ERROR_TOKEN_NOT_FOUND);
        
        return _artMetadata[tokenId];
    }
    
    /**
     * @dev Gets the total number of ART tokens
     * @return Number of ART tokens
     */
    function getArtCount() external view override returns (uint256) {
        return _allTokenIds.length;
    }
    
    /**
     * @dev Gets the artist's identity ID
     * @return Artist's identity ID
     */
    function getArtistIdentityId() external view override returns (uint256) {
        return _artistIdentityId;
    }
    
    /**
     * @dev Transfers ownership of the contract to a new artist
     * @param newOwnerIdentityId New owner's identity ID
     */
    function transferOwnership(uint256 newOwnerIdentityId) external override {
        // Check if caller is the current owner
        uint256 callerIdentityId = _getCallerIdentityId();
        require(callerIdentityId == _artistIdentityId, ArcConstants.ERROR_UNAUTHORIZED);
        
        // Ensure new owner exists
        require(_identityContract.getIdentityById(newOwnerIdentityId).id == newOwnerIdentityId, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        uint256 previousOwner = _artistIdentityId;
        _artistIdentityId = newOwnerIdentityId;
        
        emit OwnershipTransferred(previousOwner, newOwnerIdentityId);
    }
    
    /**
     * @dev Grants a role to an identity
     * @param role Role to grant
     * @param identityId Identity ID
     */
    function grantRole(bytes32 role, uint256 identityId) external override {
        // Check if caller is authorized to grant roles
        uint256 callerIdentityId = _getCallerIdentityId();
        require(_isAuthorizedToGrantRoles(callerIdentityId), ArcConstants.ERROR_UNAUTHORIZED);
        
        // Ensure identity exists
        require(_identityContract.getIdentityById(identityId).id == identityId, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        // Get the wallet address for the identity
        address walletAddress = _identityContract.getIdentityById(identityId).walletAddress;
        
        _grantRole(role, walletAddress);
        
        emit RoleGranted(role, identityId, msg.sender);
    }
    
    /**
     * @dev Revokes a role from an identity
     * @param role Role to revoke
     * @param identityId Identity ID
     */
    function revokeRole(bytes32 role, uint256 identityId) external override {
        // Check if caller is authorized to revoke roles
        uint256 callerIdentityId = _getCallerIdentityId();
        require(_isAuthorizedToGrantRoles(callerIdentityId), ArcConstants.ERROR_UNAUTHORIZED);
        
        // Ensure identity exists
        require(_identityContract.getIdentityById(identityId).id == identityId, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        // Get the wallet address for the identity
        address walletAddress = _identityContract.getIdentityById(identityId).walletAddress;
        
        _revokeRole(role, walletAddress);
        
        emit RoleRevoked(role, identityId, msg.sender);
    }
    
    /**
     * @dev Checks if an identity has a role
     * @param role Role to check
     * @param identityId Identity ID
     * @return True if the identity has the role
     */
    function hasRole(bytes32 role, uint256 identityId) external view override returns (bool) {
        // Ensure identity exists
        require(_identityContract.getIdentityById(identityId).id == identityId, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        // Get the wallet address for the identity
        address walletAddress = _identityContract.getIdentityById(identityId).walletAddress;
        
        return super.hasRole(role, walletAddress);
    }
    
    /**
     * @dev Assigns a partial editor to a specific ART token
     * @param tokenId Token ID
     * @param editorIdentityId Editor's identity ID
     */
    function assignPartialEditor(uint256 tokenId, uint256 editorIdentityId) external override {
        require(_exists(tokenId), ArcConstants.ERROR_TOKEN_NOT_FOUND);
        
        // Check if caller is authorized to assign partial editors
        uint256 callerIdentityId = _getCallerIdentityId();
        require(_isAuthorizedToGrantRoles(callerIdentityId), ArcConstants.ERROR_UNAUTHORIZED);
        
        // Ensure editor identity exists
        require(_identityContract.getIdentityById(editorIdentityId).id == editorIdentityId, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        _partialEditors[tokenId][editorIdentityId] = true;
    }
    
    /**
     * @dev Removes a partial editor from a specific ART token
     * @param tokenId Token ID
     * @param editorIdentityId Editor's identity ID
     */
    function removePartialEditor(uint256 tokenId, uint256 editorIdentityId) external override {
        require(_exists(tokenId), ArcConstants.ERROR_TOKEN_NOT_FOUND);
        
        // Check if caller is authorized to remove partial editors
        uint256 callerIdentityId = _getCallerIdentityId();
        require(_isAuthorizedToGrantRoles(callerIdentityId), ArcConstants.ERROR_UNAUTHORIZED);
        
        _partialEditors[tokenId][editorIdentityId] = false;
    }
    
    /**
     * @dev Gets the caller's identity ID
     * @return Caller's identity ID
     */
    function _getCallerIdentityId() internal view returns (uint256) {
        try _identityContract.getIdentityByAddress(msg.sender) returns (IIdentity.Identity memory identity) {
            return identity.id;
        } catch {
            return ArcConstants.IDENTITY_NOT_FOUND;
        }
    }
    
    /**
     * @dev Checks if an identity is authorized to mint ART tokens
     * @param identityId Identity ID
     * @return True if authorized
     */
    function _isAuthorizedToMint(uint256 identityId) internal view returns (bool) {
        if (identityId == ArcConstants.IDENTITY_NOT_FOUND) {
            return false;
        }
        
        // Case 1: Identity is the artist (owner)
        if (identityId == _artistIdentityId) {
            return true;
        }
        
        // Case 2: Identity has FULL_ADMIN_ROLE
        if (_identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, identityId)) {
            return true;
        }
        
        // Case 3: Identity has CUSTODIAN_ROLE
        if (_identityContract.hasRole(ArcConstants.CUSTODIAN_ROLE, identityId)) {
            return true;
        }
        
        // Case 4: Identity has MINTER_ROLE
        if (_identityContract.hasRole(ArcConstants.MINTER_ROLE, identityId)) {
            return true;
        }
        
        return false;
    }
    
    /**
     * @dev Checks if an identity is authorized to update ART tokens
     * @param identityId Identity ID
     * @param tokenId Token ID
     * @return True if authorized
     */
    function _isAuthorizedToUpdate(uint256 identityId, uint256 tokenId) internal view returns (bool) {
        if (identityId == ArcConstants.IDENTITY_NOT_FOUND) {
            return false;
        }
        
        // Case 1: Identity is the artist (owner)
        if (identityId == _artistIdentityId) {
            return true;
        }
        
        // Case 2: Identity has FULL_ADMIN_ROLE
        if (_identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, identityId)) {
            return true;
        }
        
        // Case 3: Identity has CUSTODIAN_ROLE
        if (_identityContract.hasRole(ArcConstants.CUSTODIAN_ROLE, identityId)) {
            return true;
        }
        
        // Case 4: Identity has MINTER_ROLE
        if (_identityContract.hasRole(ArcConstants.MINTER_ROLE, identityId)) {
            return true;
        }
        
        // Case 5: Identity has FULL_EDITOR_ROLE
        if (_identityContract.hasRole(ArcConstants.FULL_EDITOR_ROLE, identityId)) {
            return true;
        }
        
        // Case 6: Identity is a partial editor for this token
        if (_partialEditors[tokenId][identityId]) {
            return true;
        }
        
        return false;
    }
    
    /**
     * @dev Checks if an identity is authorized to set royalties
     * @param identityId Identity ID
     * @return True if authorized
     */
    function _isAuthorizedToSetRoyalties(uint256 identityId) internal view returns (bool) {
        if (identityId == ArcConstants.IDENTITY_NOT_FOUND) {
            return false;
        }
        
        // Case 1: Identity is the artist (owner)
        if (identityId == _artistIdentityId) {
            return true;
        }
        
        // Case 2: Identity has FULL_ADMIN_ROLE
        if (_identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, identityId)) {
            return true;
        }
        
        // Case 3: Identity has CUSTODIAN_ROLE
        if (_identityContract.hasRole(ArcConstants.CUSTODIAN_ROLE, identityId)) {
            return true;
        }
        
        return false;
    }
    
    /**
     * @dev Checks if an identity is authorized to grant roles
     * @param identityId Identity ID
     * @return True if authorized
     */
    function _isAuthorizedToGrantRoles(uint256 identityId) internal view returns (bool) {
        if (identityId == ArcConstants.IDENTITY_NOT_FOUND) {
            return false;
        }
        
        // Case 1: Identity is the artist (owner)
        if (identityId == _artistIdentityId) {
            return true;
        }
        
        // Case 2: Identity has FULL_ADMIN_ROLE
        if (_identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, identityId)) {
            return true;
        }
        
        // Case 3: Identity has CUSTODIAN_ROLE
        if (_identityContract.hasRole(ArcConstants.CUSTODIAN_ROLE, identityId)) {
            return true;
        }
        
        return false;
    }
    
    /**
     * @dev Checks if a token exists
     * @param tokenId Token ID
     * @return True if the token exists
     */
    function _exists(uint256 tokenId) internal view returns (bool) {
        return tokenId > 0 && tokenId < _tokenIdCounter;
    }
    
    /**
     * @dev Authorizes an upgrade to a new implementation
     * @param newImplementation Address of the new implementation
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyRole(ArcConstants.FULL_ADMIN_ROLE) {}
    
    // The following functions are overrides required by Solidity
    
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721Upgradeable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }
    
    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721Upgradeable)
    {
        super._increaseBalance(account, value);
    }
    
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable, ERC2981Upgradeable, AccessControlUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
} 