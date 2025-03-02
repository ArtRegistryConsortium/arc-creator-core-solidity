// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";
import "./ARTPermissions.sol";
import "./ARTTokenLib.sol";
import "./ARTRoyaltyLib.sol";
import "./ARTMetadataLib.sol";
import "./ARTRoleLib.sol";
import "./ARTFactoryIntegrationLib.sol";

/**
 * @title ARTToken
 * @dev Artwork Registry Token (ART) - An upgradeable ERC-721 contract for artists
 * with role-based access control and royalty management
 */
contract ARTToken is 
    Initializable, 
    ERC721Upgradeable, 
    ERC721URIStorageUpgradeable, 
    OwnableUpgradeable,
    AccessControlUpgradeable,
    UUPSUpgradeable,
    ERC2981Upgradeable
{
    using ARTPermissions for AccessControlUpgradeable;
    using ARTTokenLib for ARTTokenLib.TokenData;
    
    string private _artistName;
    address private _artistAddress;
    uint96 private _tokenIdCounter;
    address public factory;
    address public manager;
    address public factoryManager;
    
    mapping(uint256 => ARTTokenLib.TokenData) private _tokenData;
    mapping(address => mapping(uint256 => bool)) private _partialEditorPermissions;
    
    event TokenMetadataUpdated(uint256 indexed tokenId, address indexed editor);
    event LegacyProtectorAssigned(address indexed legacyProtector);
    event PartialEditorPermissionGranted(address indexed editor, uint256 indexed tokenId);
    event PartialEditorPermissionRevoked(address indexed editor, uint256 indexed tokenId);
    event ContractRoyaltySet(address indexed receiver, uint96 royaltyFraction, address indexed setter);
    event TokenRoyaltySet(uint256 indexed tokenId, address indexed receiver, uint96 royaltyFraction, address indexed setter);
    event TokenMinted(uint256 indexed tokenId, address indexed to, string uri);
    event TokenURIUpdated(uint256 indexed tokenId, string uri);
    event RoyaltySet(address indexed receiver, uint96 feeNumerator);

    // Roles
    bytes32 public constant CONTRACT_OWNER_ROLE = keccak256("CONTRACT_OWNER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant LEGACY_PROTECTOR_ROLE = keccak256("LEGACY_PROTECTOR_ROLE");
    bytes32 public constant PARTIAL_EDITOR_ROLE = keccak256("PARTIAL_EDITOR_ROLE");
    bytes32 public constant FULL_EDITOR_ROLE = keccak256("FULL_EDITOR_ROLE");
    
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /**
     * @dev Initializes the contract with artist information
     * @param artistName_ The artist's full name or alias
     * @param artistAddress_ The artist's wallet address
     * @param name_ The name of the token collection
     * @param symbol_ The symbol of the token collection
     * @param initialOwner The initial owner of the contract (typically the factory)
     * @param fullAdmin The address of the full admin (ARC)
     */
    function initialize(
        string memory artistName_,
        address artistAddress_,
        string memory name_,
        string memory symbol_,
        address initialOwner,
        address fullAdmin
    ) public initializer {
        __ERC721_init(name_, symbol_);
        __ERC721URIStorage_init();
        __Ownable_init(initialOwner);
        __AccessControl_init();
        __UUPSUpgradeable_init();
        __ERC2981_init();

        _artistName = artistName_;
        _artistAddress = artistAddress_;
        _tokenIdCounter = 0;
        factory = msg.sender;
        manager = msg.sender;
        factoryManager = msg.sender;
        
        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
        _grantRole(ARTPermissions.FULL_ADMIN_ROLE, fullAdmin);
        _grantRole(ARTPermissions.CONTRACT_OWNER_ROLE, artistAddress_);
        _grantRole(ARTPermissions.MINTER_ROLE, artistAddress_);
        _grantRole(ARTPermissions.FULL_EDITOR_ROLE, artistAddress_);
        
        _setDefaultRoyalty(artistAddress_, 1000);
        emit ContractRoyaltySet(artistAddress_, 1000, msg.sender);
    }

    /**
     * @dev Mints a new token with metadata
     * @param to The address that will own the minted token
     * @param uri The token URI for the new token
     * @param title The title of the artwork
     * @param description The description of the artwork
     * @return The ID of the newly minted token
     */
    function mintToken(
        address to,
        string memory uri,
        string memory title,
        string memory description
    ) public returns (uint256) {
        require(ARTPermissions.hasMintPermission(this, _msgSender()), "1");
        
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        
        // Set token data
        ARTMetadataLib.initializeTokenData(
            tokenId,
            title,
            description,
            _tokenData[tokenId]
        );
        
        emit TokenMinted(tokenId, to, uri);
        
        return tokenId;
    }

    /**
     * @dev Updates token metadata
     * @param tokenId The ID of the token
     * @param uri The new token URI
     * @param title The new title
     * @param description The new description
     */
    function updateTokenMetadata(
        uint256 tokenId,
        string memory uri,
        string memory title,
        string memory description
    ) public {
        bool exists = _exists(tokenId);
        ARTTokenLib.validateTokenExists(exists);
        ARTTokenLib.validateEditPermission(this, _msgSender(), tokenId, _partialEditorPermissions);
        
        _setTokenURI(tokenId, uri);
        
        _tokenData[tokenId].title = title;
        _tokenData[tokenId].description = description;
        
        emit TokenMetadataUpdated(tokenId, _msgSender());
    }

    /**
     * @dev Sets the default royalty for the entire contract
     * @param receiver The address that should receive royalties
     * @param feeNumerator The royalty fee numerator (e.g., 1000 for 10%)
     */
    function setRoyalty(address receiver, uint96 feeNumerator) public {
        require(
            hasRole(ARTPermissions.FULL_ADMIN_ROLE, _msgSender()) || 
            hasRole(ARTPermissions.CONTRACT_OWNER_ROLE, _msgSender()) || 
            hasRole(ARTPermissions.LEGACY_PROTECTOR_ROLE, _msgSender()),
            "3"
        );
        
        _setDefaultRoyalty(receiver, feeNumerator);
        emit ContractRoyaltySet(receiver, feeNumerator, _msgSender());
    }

    /**
     * @dev Sets the default royalty directly, bypassing permission checks
     * @param receiver The address that should receive royalties
     * @param feeNumerator The royalty fee numerator (e.g., 1000 for 10%)
     * @notice This function can only be called by the factory
     */
    function setRoyaltyDirectly(address receiver, uint96 feeNumerator) external {
        ARTTokenLib.validateFactoryCaller(_msgSender(), factory);
        _setDefaultRoyalty(receiver, feeNumerator);
        emit ContractRoyaltySet(receiver, feeNumerator, _msgSender());
    }
    
    /**
     * @dev Sets the royalty for a specific token
     * @param tokenId The ID of the token
     * @param receiver The address that should receive royalties
     * @param feeNumerator The royalty fee numerator (e.g., 1000 for 10%)
     */
    function setTokenRoyalty(uint256 tokenId, address receiver, uint96 feeNumerator) public {
        bool exists = _exists(tokenId);
        ARTTokenLib.validateTokenExists(exists);
        ARTTokenLib.validateRoyaltyPermission(this, _msgSender());
        
        _setTokenRoyalty(tokenId, receiver, feeNumerator);
        _tokenData[tokenId].hasCustomRoyalty = true;
        _tokenData[tokenId].royaltyReceiver = receiver;
        _tokenData[tokenId].royaltyFraction = feeNumerator;
        
        emit TokenRoyaltySet(tokenId, receiver, feeNumerator, _msgSender());
    }
    
    /**
     * @dev Resets the royalty for a specific token to use the contract default
     * @param tokenId The ID of the token
     */
    function resetTokenRoyalty(uint256 tokenId) public {
        bool exists = _exists(tokenId);
        ARTTokenLib.validateTokenExists(exists);
        ARTTokenLib.validateRoyaltyPermission(this, _msgSender());
        
        _resetTokenRoyalty(tokenId);
        _tokenData[tokenId].hasCustomRoyalty = false;
        _tokenData[tokenId].royaltyReceiver = address(0);
        _tokenData[tokenId].royaltyFraction = 0;
        
        emit TokenRoyaltySet(tokenId, address(0), 0, _msgSender());
    }
    
    /**
     * @dev Gets the royalty information for a token
     * @param tokenId The ID of the token
     * @return receiver The address that should receive royalties
     * @return royaltyAmount The royalty amount for the given sale price
     */
    function getRoyaltyInfo(uint256 tokenId, uint256 salePrice) public view returns (address receiver, uint256 royaltyAmount) {
        if (_tokenData[tokenId].hasCustomRoyalty) {
            return ARTTokenLib.calculateRoyaltyAmount(_tokenData[tokenId], salePrice);
        } else {
            return super.royaltyInfo(tokenId, salePrice);
        }
    }

    /**
     * @dev Manages roles by granting or revoking them
     * @param role The role to grant or revoke
     * @param account The account to grant or revoke the role from
     * @param isGrant Whether to grant (true) or revoke (false) the role
     */
    function manageRoles(bytes32 role, address account, bool isGrant) public {
        if (role == ARTPermissions.FULL_ADMIN_ROLE) {
            ARTTokenLib.validateAdminOnlyPermission(this, _msgSender());
        } else {
            ARTTokenLib.validateAdminOwnerPermission(this, _msgSender());
        }
        
        if (isGrant) {
            _grantRole(role, account);
            if (role == ARTPermissions.LEGACY_PROTECTOR_ROLE) {
                emit LegacyProtectorAssigned(account);
            }
        } else {
            _revokeRole(role, account);
        }
    }

    /**
     * @dev Grants a role to an account
     * @param role The role to grant
     * @param account The account to grant the role to
     */
    function grantRole(bytes32 role, address account) public override {
        manageRoles(role, account, true);
    }

    /**
     * @dev Revokes a role from an account
     * @param role The role to revoke
     * @param account The account to revoke the role from
     */
    function revokeRole(bytes32 role, address account) public override {
        manageRoles(role, account, false);
    }

    function grantRoleDirectly(bytes32 role, address account) external {
        require(
            _msgSender() == factory || 
            _msgSender() == manager || 
            _msgSender() == factoryManager ||
            hasRole(CONTRACT_OWNER_ROLE, _msgSender()), 
            "Caller is not factory, manager, factory manager, or artist"
        );
        _grantRole(role, account);
    }

    /**
     * @dev Alternative grant role function that also accepts the factory manager address
     * This allows the factory manager to grant roles on behalf of the factory
     */
    function grantRoleDirectlyWithManager(bytes32 role, address account, address _factoryManager) external {
        require(
            _msgSender() == factory || 
            _msgSender() == manager || 
            _msgSender() == _factoryManager || 
            _msgSender() == factoryManager ||
            hasRole(CONTRACT_OWNER_ROLE, _msgSender()), 
            "Caller is not factory, manager, factory manager, or artist"
        );
        _grantRole(role, account);
    }

    /**
     * @dev Manages partial editor permissions
     * @param editor The address of the partial editor
     * @param tokenId The ID of the token
     * @param isGrant Whether to grant or revoke the permission
     */
    function managePartialEditorPermission(address editor, uint256 tokenId, bool isGrant) public {
        if (isGrant) {
            bool exists = _exists(tokenId);
            ARTTokenLib.validateTokenExists(exists);
            ARTTokenLib.validatePartialEditorRole(this, editor);
        }
        ARTTokenLib.validateAdminOwnerPermission(this, _msgSender());
        
        ARTRoleLib.managePartialEditorPermission(
            editor,
            tokenId,
            isGrant,
            _partialEditorPermissions
        );
        
        if (isGrant) {
            emit PartialEditorPermissionGranted(editor, tokenId);
        } else {
            emit PartialEditorPermissionRevoked(editor, tokenId);
        }
    }

    /**
     * @dev Grants permission to a partial editor for a specific token
     * @param editor The address of the partial editor
     * @param tokenId The ID of the token
     */
    function grantPartialEditorPermission(address editor, uint256 tokenId) public {
        managePartialEditorPermission(editor, tokenId, true);
    }

    /**
     * @dev Revokes permission from a partial editor for a specific token
     * @param editor The address of the partial editor
     * @param tokenId The ID of the token
     */
    function revokePartialEditorPermission(address editor, uint256 tokenId) public {
        managePartialEditorPermission(editor, tokenId, false);
    }

    /**
     * @dev Checks if an editor has permission for a specific token
     * @param editor The address of the editor
     * @param tokenId The ID of the token
     * @return Whether the editor has permission for the token
     */
    function hasTokenPermission(address editor, uint256 tokenId) public view returns (bool) {
        return ARTPermissions.hasEditPermission(this, editor, tokenId, _partialEditorPermissions);
    }

    /**
     * @dev Returns the artist's name and address
     */
    function getArtistInfo() public view returns (string memory name, address artistAddress) {
        return (_artistName, _artistAddress);
    }

    /**
     * @dev Returns the artist's name
     */
    function getArtistName() public view returns (string memory) {
        return _artistName;
    }

    /**
     * @dev Returns the artist's address
     */
    function getArtistAddress() public view returns (address) {
        return _artistAddress;
    }

    /**
     * @dev Updates the artist's name
     * @param newName The new artist name
     */
    function updateArtistName(string memory newName) public {
        ARTTokenLib.validateArtistNameUpdate(this, _msgSender(), _artistAddress);
        _artistName = newName;
    }

    /**
     * @dev Returns token metadata
     * @param tokenId The ID of the token
     */
    function getTokenMetadata(uint256 tokenId) public view returns (
        string memory title,
        string memory description,
        uint256 creationDate
    ) {
        bool exists = _exists(tokenId);
        ARTTokenLib.validateTokenExists(exists);
        
        return ARTMetadataLib.getTokenMetadata(
            tokenId,
            _tokenData[tokenId]
        );
    }

    /**
     * @dev Transfers ownership of the contract
     * @param newOwner The address of the new owner
     */
    function transferOwnership(address newOwner) public override onlyOwner {
        ARTTokenLib.validateAdminOwnerPermission(this, _msgSender());
        
        super.transferOwnership(newOwner);
        
        revokeRole(ARTPermissions.CONTRACT_OWNER_ROLE, owner());
        _grantRole(ARTPermissions.CONTRACT_OWNER_ROLE, newOwner);
    }

    /**
     * @dev Required override for _authorizeUpgrade with access control
     */
    function _authorizeUpgrade(address) internal override view {
        ARTTokenLib.validateAdminOnlyPermission(this, _msgSender());
    }

    /**
     * @dev Check if a token exists
     * @param tokenId The ID of the token
     */
    function _exists(uint256 tokenId) internal view returns (bool) {
        return ARTFactoryIntegrationLib.tokenExists(tokenId, this.ownerOf);
    }

    // The following functions are overrides required by Solidity
    function tokenURI(uint256 tokenId) public view override(ERC721Upgradeable, ERC721URIStorageUpgradeable) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721Upgradeable, ERC721URIStorageUpgradeable, AccessControlUpgradeable, ERC2981Upgradeable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev Sets the manager address
     * @param managerAddress The address of the manager contract
     */
    function setManager(address managerAddress) external {
        require(ARTFactoryIntegrationLib.validateFactoryCaller(factory, _msgSender()), "Caller is not factory");
        manager = managerAddress;
    }

    /**
     * @dev Sets the factory manager address
     * @param factoryManagerAddress The address of the factory manager
     */
    function setFactoryManager(address factoryManagerAddress) external {
        require(ARTFactoryIntegrationLib.validateFactoryCaller(factory, _msgSender()), "Caller is not factory");
        factoryManager = factoryManagerAddress;
    }
} 