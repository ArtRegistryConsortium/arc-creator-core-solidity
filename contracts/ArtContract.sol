// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./interfaces/IArtContract.sol";
import "./interfaces/IIdentity.sol";
import "./libraries/ArcConstants.sol";
import "./libraries/AuthorizationLib.sol";
import "./libraries/ValidationLib.sol";

/**
 * @title ArtContract
 * @dev Represents an artist's catalog and manages individual ART tokens
 * Uses UUPS pattern for upgradeability
 */
contract ArtContract is
    Initializable,
    ERC721Upgradeable,
    ERC721URIStorageUpgradeable,
    ERC721EnumerableUpgradeable,
    ERC2981Upgradeable,
    UUPSUpgradeable,
    AccessControlUpgradeable,
    IArtContract
{
    // Artist's identity ID
    uint256 private _artistIdentityId;

    // Counter for token IDs
    uint256 private _tokenIdCounter;

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
     * @param name Name of the collection
     * @param symbol Symbol of the collection
     * @param defaultRoyalties Default royalties in basis points (e.g., 1000 = 10%)
     */
    function initialize(
        uint256 artistIdentityId,
        string memory name,
        string memory symbol,
        uint256 defaultRoyalties
    ) external initializer override {
        __ERC721_init(name, symbol);
        __ERC721URIStorage_init();
        __ERC721Enumerable_init();
        __ERC2981_init();
        __AccessControl_init();
        __UUPSUpgradeable_init();

        _artistIdentityId = artistIdentityId;
        _tokenIdCounter = 1;
        _defaultRoyalties = defaultRoyalties;

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
        ValidationLib.validateAuthorization(
            AuthorizationLib.isAuthorizedToMint(callerIdentityId, _artistIdentityId, _identityContract)
        );

        // Validate metadata
        ValidationLib.validateArtMetadata(metadata);

        uint256 newTokenId = _tokenIdCounter++;

        // Set artist identity ID to the contract owner if not specified
        if (metadata.artistIdentityId == 0) {
            metadata.artistIdentityId = _artistIdentityId;
        }

        // Store metadata
        _artMetadata[newTokenId] = metadata;

        // Mint token
        _mint(msg.sender, newTokenId);

        // Set token royalties using provided value (can be 0)
        _setTokenRoyalty(newTokenId, msg.sender, uint96(metadata.royalties));

        // Set the token URI if provided
        if (bytes(metadata.tokenUri).length > 0) {
            _setTokenURI(newTokenId, metadata.tokenUri);
        }

        emit ArtMinted(newTokenId, metadata.artistIdentityId, msg.sender);

        return newTokenId;
    }

    /**
     * @dev Updates an existing ART token's metadata
     * @param tokenId Token ID
     * @param metadata New metadata
     */
    function updateArt(uint256 tokenId, ArtMetadata memory metadata) external override {
        ValidationLib.validateTokenExists(_exists(tokenId));

        // Check if caller is authorized to update
        uint256 callerIdentityId = _getCallerIdentityId();
        ValidationLib.validateAuthorization(
            AuthorizationLib.isAuthorizedToUpdate(
                callerIdentityId,
                tokenId,
                _artistIdentityId,
                _identityContract,
                _partialEditors
            )
        );

        // Validate metadata
        ValidationLib.validateArtMetadata(metadata);

        // Update metadata
        _artMetadata[tokenId] = metadata;

        // Update the token URI if provided
        if (bytes(metadata.tokenUri).length > 0) {
            _setTokenURI(tokenId, metadata.tokenUri);
        }

        emit ArtUpdated(tokenId, metadata.artistIdentityId, msg.sender);
    }

    /**
     * @dev Sets royalties for a specific token
     * @param tokenId Token ID
     * @param royaltiesInBasisPoints Royalties in basis points (e.g., 1000 = 10%)
     */
    function setRoyalties(uint256 tokenId, uint256 royaltiesInBasisPoints) external override {
        ValidationLib.validateTokenExists(_exists(tokenId));

        // Check if caller is authorized to set royalties
        uint256 callerIdentityId = _getCallerIdentityId();
        ValidationLib.validateAuthorization(
            AuthorizationLib.isAuthorizedToSetRoyalties(callerIdentityId, _artistIdentityId, _identityContract)
        );

        // Validate royalties
        ValidationLib.validateRoyalties(royaltiesInBasisPoints);

        // Update metadata
        _artMetadata[tokenId].royalties = royaltiesInBasisPoints;

        // Set royalties
        _setTokenRoyalty(tokenId, ownerOf(tokenId), uint96(royaltiesInBasisPoints));

        emit RoyaltiesSet(tokenId, royaltiesInBasisPoints);
    }

    /**
     * @dev Sets default royalties for new tokens
     * @param royaltiesInBasisPoints Royalties in basis points (e.g., 1000 = 10%)
     */
    function setDefaultRoyalties(uint256 royaltiesInBasisPoints) external override {
        // Check if caller is authorized to set royalties
        uint256 callerIdentityId = _getCallerIdentityId();
        ValidationLib.validateAuthorization(
            AuthorizationLib.isAuthorizedToSetRoyalties(callerIdentityId, _artistIdentityId, _identityContract)
        );

        // Validate royalties
        ValidationLib.validateRoyalties(royaltiesInBasisPoints);

        // Set default royalties
        _defaultRoyalties = royaltiesInBasisPoints;

        emit DefaultRoyaltiesSet(royaltiesInBasisPoints);
    }

    /**
     * @dev Gets all ART tokens
     * @return Array of token IDs
     */
    function getAllArt() external view override returns (uint256[] memory) {
        uint256 totalSupply = totalSupply();
        uint256[] memory tokens = new uint256[](totalSupply);

        for (uint256 i = 0; i < totalSupply; i++) {
            tokens[i] = tokenByIndex(i);
        }

        return tokens;
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
     * @return Total number of ART tokens
     */
    function getArtCount() external view override returns (uint256) {
        return totalSupply();
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
     * @param newArtistIdentityId New artist's identity ID
     */
    function transferOwnership(uint256 newArtistIdentityId) external override {
        // Check if caller is authorized to transfer ownership
        uint256 callerIdentityId = _getCallerIdentityId();
        ValidationLib.validateAuthorization(
            AuthorizationLib.isAuthorizedToTransferOwnership(callerIdentityId, _artistIdentityId, _identityContract)
        );

        // Ensure new artist identity exists
        require(_identityContract.getIdentityById(newArtistIdentityId).id == newArtistIdentityId, ArcConstants.ERROR_IDENTITY_NOT_FOUND);

        // Ensure new artist is of type Artist (0)
        require(uint8(_identityContract.getIdentityById(newArtistIdentityId).identityType) == 0, ArcConstants.ERROR_INVALID_IDENTITY_TYPE);

        // Store old artist identity ID for event
        uint256 oldArtistIdentityId = _artistIdentityId;

        // Set new artist identity ID
        _artistIdentityId = newArtistIdentityId;

        emit OwnershipTransferred(oldArtistIdentityId, newArtistIdentityId);
    }

    /**
     * @dev Assigns a partial editor for a specific token
     * @param tokenId Token ID
     * @param editorIdentityId Editor's identity ID
     */
    function assignPartialEditor(uint256 tokenId, uint256 editorIdentityId) external override {
        ValidationLib.validateTokenExists(_exists(tokenId));

        // Check if caller is authorized to grant roles
        uint256 callerIdentityId = _getCallerIdentityId();
        ValidationLib.validateAuthorization(
            AuthorizationLib.isAuthorizedToGrantRoles(callerIdentityId, _artistIdentityId, _identityContract)
        );

        // Ensure editor identity exists
        require(_identityContract.getIdentityById(editorIdentityId).id == editorIdentityId, ArcConstants.ERROR_IDENTITY_NOT_FOUND);

        // Assign partial editor
        _partialEditors[tokenId][editorIdentityId] = true;
    }

    /**
     * @dev Removes a partial editor for a specific token
     * @param tokenId Token ID
     * @param editorIdentityId Editor's identity ID
     */
    function removePartialEditor(uint256 tokenId, uint256 editorIdentityId) external override {
        ValidationLib.validateTokenExists(_exists(tokenId));

        // Check if caller is authorized to grant roles
        uint256 callerIdentityId = _getCallerIdentityId();
        ValidationLib.validateAuthorization(
            AuthorizationLib.isAuthorizedToGrantRoles(callerIdentityId, _artistIdentityId, _identityContract)
        );

        // Remove partial editor
        _partialEditors[tokenId][editorIdentityId] = false;
    }

    /**
     * @dev Grants a role to an identity
     * @param role Role to grant
     * @param identityId Identity ID
     */
    function grantRole(bytes32 role, uint256 identityId) external override {
        // Check if caller is authorized to grant roles
        uint256 callerIdentityId = _getCallerIdentityId();
        ValidationLib.validateAuthorization(
            AuthorizationLib.isAuthorizedToGrantRoles(callerIdentityId, _artistIdentityId, _identityContract)
        );

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
        // Check if caller is authorized to grant roles
        uint256 callerIdentityId = _getCallerIdentityId();
        ValidationLib.validateAuthorization(
            AuthorizationLib.isAuthorizedToGrantRoles(callerIdentityId, _artistIdentityId, _identityContract)
        );

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
     * @dev Checks if a token exists
     * @param tokenId Token ID
     * @return True if the token exists
     */
    function _exists(uint256 tokenId) internal view returns (bool) {
        return tokenId < _tokenIdCounter && tokenId > 0;
    }

    /**
     * @dev Required override for _increaseBalance from both ERC721 and EnumerableERC721
     */
    function _increaseBalance(address account, uint128 value) internal override(ERC721Upgradeable, ERC721EnumerableUpgradeable) {
        super._increaseBalance(account, value);
    }

    /**
     * @dev Required override for _update from both ERC721 and EnumerableERC721
     */
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721Upgradeable, ERC721EnumerableUpgradeable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    /**
     * @dev Authorizes an upgrade to a new implementation
     * @param newImplementation Address of the new implementation
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyRole(ArcConstants.FULL_ADMIN_ROLE) {}

    // The following functions are overrides required by Solidity

    function tokenURI(uint256 tokenId) public view override(ERC721Upgradeable, ERC721URIStorageUpgradeable) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721Upgradeable, ERC721URIStorageUpgradeable, ERC721EnumerableUpgradeable, ERC2981Upgradeable, AccessControlUpgradeable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev Override the transferFrom function to allow both the NFT owner and FULL_ADMIN_ROLE to transfer tokens
     * @param from Current owner of the token
     * @param to Address to receive the token
     * @param tokenId ID of the token to be transferred
     */
    function transferFrom(address from, address to, uint256 tokenId) public override(ERC721Upgradeable, IERC721) {
        // Get the caller's identity ID
        uint256 callerIdentityId = _getCallerIdentityId();

        // Check if the caller is authorized to transfer the token
        bool isAuthorized = false;

        // Case 1: Standard ERC721 authorization (owner or approved)
        if (_msgSender() == ownerOf(tokenId) ||
            getApproved(tokenId) == _msgSender() ||
            isApprovedForAll(ownerOf(tokenId), _msgSender())) {
            isAuthorized = true;
            // Use the standard ERC721 transfer
            super.transferFrom(from, to, tokenId);
        }
        // Case 2: Caller has FULL_ADMIN_ROLE
        else if (callerIdentityId > 0 && _identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, callerIdentityId)) {
            isAuthorized = true;
            // Bypass the standard ERC721 authorization checks
            _transfer(from, to, tokenId);
        }

        require(isAuthorized, ArcConstants.ERROR_UNAUTHORIZED);
    }

    /**
     * @dev Override the safeTransferFrom function to allow both the NFT owner and FULL_ADMIN_ROLE to transfer tokens
     * @param from Current owner of the token
     * @param to Address to receive the token
     * @param tokenId ID of the token to be transferred
     * @param data Additional data with no specified format
     */
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public virtual override(ERC721Upgradeable, IERC721) {
        // Get the caller's identity ID
        uint256 callerIdentityId = _getCallerIdentityId();

        // Check if the caller is authorized to transfer the token
        bool isAuthorized = false;

        // Case 1: Standard ERC721 authorization (owner or approved)
        if (_msgSender() == ownerOf(tokenId) ||
            getApproved(tokenId) == _msgSender() ||
            isApprovedForAll(ownerOf(tokenId), _msgSender())) {
            isAuthorized = true;
            // Use the standard ERC721 safe transfer
            super.safeTransferFrom(from, to, tokenId, data);
        }
        // Case 2: Caller has FULL_ADMIN_ROLE
        else if (callerIdentityId > 0 && _identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, callerIdentityId)) {
            isAuthorized = true;
            // Bypass the standard ERC721 authorization checks
            _safeTransfer(from, to, tokenId, data);
        }

        require(isAuthorized, ArcConstants.ERROR_UNAUTHORIZED);
    }
}