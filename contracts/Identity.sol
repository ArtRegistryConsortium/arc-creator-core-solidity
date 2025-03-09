// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "./interfaces/IIdentity.sol";
import "./libraries/ArcConstants.sol";

/**
 * @title Identity
 * @dev Manages user identities (Artists, Galleries, Institutions, Collectors) with associated metadata
 * Uses UUPS pattern for upgradeability
 */
contract Identity is Initializable, UUPSUpgradeable, AccessControlUpgradeable, IIdentity {
    // Counter for identity IDs
    uint256 private _identityCounter;
    
    // Mapping from identity ID to Identity struct
    mapping(uint256 => Identity) private _identities;
    
    // Mapping from wallet address to identity ID
    mapping(address => uint256) private _addressToIdentityId;
    
    // Array of all identity IDs
    uint256[] private _allIdentityIds;
    
    // Mapping from identity ID to custodian identity IDs
    mapping(uint256 => mapping(uint256 => bool)) private _custodians;
    
    /**
     * @dev Initializes the contract
     * @param admin Address of the initial admin
     */
    function initialize(address admin) external initializer {
        __AccessControl_init();
        __UUPSUpgradeable_init();
        
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(ArcConstants.FULL_ADMIN_ROLE, admin);
        
        // Start identity counter at 1 (0 is reserved for "not found")
        _identityCounter = 1;
    }
    
    /**
     * @dev Creates a new identity
     * @param identityType Type of identity (Artist, Gallery, Institution, Collector)
     * @param name Name or alias
     * @param description Description
     * @param identityImage Arweave link to identity image
     * @param links Array of links (website, social media, etc.)
     * @param tags Array of tags
     * @param dob Date of birth (timestamp, only for Artists)
     * @param dod Date of death (timestamp, optional, only for Artists)
     * @param location Location (only for Artists)
     * @param addresses Array of addresses (only for Galleries/Institutions)
     * @return New identity ID
     */
    function createIdentity(
        IdentityType identityType,
        string memory name,
        string memory description,
        string memory identityImage,
        string[] memory links,
        string[] memory tags,
        uint256 dob,
        uint256 dod,
        string memory location,
        string[] memory addresses
    ) external override returns (uint256) {
        // Ensure the caller doesn't already have an identity
        require(_addressToIdentityId[msg.sender] == 0, "Identity already exists for this address");
        
        uint256 newIdentityId = _identityCounter++;
        
        _identities[newIdentityId] = Identity({
            id: newIdentityId,
            walletAddress: msg.sender,
            identityType: identityType,
            name: name,
            description: description,
            identityImage: identityImage,
            links: links,
            tags: tags,
            dob: dob,
            dod: dod,
            location: location,
            addresses: addresses
        });
        
        _addressToIdentityId[msg.sender] = newIdentityId;
        _allIdentityIds.push(newIdentityId);
        
        emit IdentityCreated(newIdentityId, msg.sender, identityType);
        
        return newIdentityId;
    }
    
    /**
     * @dev Updates an existing identity
     * @param identityId ID of the identity to update
     * @param name Name or alias
     * @param description Description
     * @param identityImage Arweave link to identity image
     * @param links Array of links (website, social media, etc.)
     * @param tags Array of tags
     * @param dob Date of birth (timestamp, only for Artists)
     * @param dod Date of death (timestamp, optional, only for Artists)
     * @param location Location (only for Artists)
     * @param addresses Array of addresses (only for Galleries/Institutions)
     */
    function updateIdentity(
        uint256 identityId,
        string memory name,
        string memory description,
        string memory identityImage,
        string[] memory links,
        string[] memory tags,
        uint256 dob,
        uint256 dod,
        string memory location,
        string[] memory addresses
    ) external override {
        require(identityId > 0 && identityId < _identityCounter, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        // Check if caller is authorized to update this identity
        bool isAuthorized = false;
        
        // Case 1: Caller is the identity owner
        if (_identities[identityId].walletAddress == msg.sender) {
            isAuthorized = true;
        }
        // Case 2: Caller is a custodian of this identity
        else if (_custodians[identityId][_addressToIdentityId[msg.sender]]) {
            isAuthorized = true;
        }
        // Case 3: Caller has FULL_ADMIN_ROLE
        else if (hasRole(ArcConstants.FULL_ADMIN_ROLE, _addressToIdentityId[msg.sender])) {
            isAuthorized = true;
        }
        
        require(isAuthorized, ArcConstants.ERROR_UNAUTHORIZED);
        
        // Update identity fields
        Identity storage identity = _identities[identityId];
        
        identity.name = name;
        identity.description = description;
        identity.identityImage = identityImage;
        identity.links = links;
        identity.tags = tags;
        
        // Update type-specific fields
        if (identity.identityType == IdentityType.Artist) {
            identity.dob = dob;
            identity.dod = dod;
            identity.location = location;
        } else if (identity.identityType == IdentityType.Gallery || identity.identityType == IdentityType.Institution) {
            identity.addresses = addresses;
        }
        
        emit IdentityUpdated(identityId, identity.walletAddress);
    }
    
    /**
     * @dev Gets an identity by wallet address
     * @param walletAddress Wallet address
     * @return Identity struct
     */
    function getIdentityByAddress(address walletAddress) external view override returns (Identity memory) {
        uint256 identityId = _addressToIdentityId[walletAddress];
        require(identityId > 0, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        return _identities[identityId];
    }
    
    /**
     * @dev Gets an identity by ID
     * @param identityId Identity ID
     * @return Identity struct
     */
    function getIdentityById(uint256 identityId) external view override returns (Identity memory) {
        require(identityId > 0 && identityId < _identityCounter, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        return _identities[identityId];
    }
    
    /**
     * @dev Gets all identities
     * @return Array of Identity structs
     */
    function getAllIdentities() external view override returns (Identity[] memory) {
        Identity[] memory allIdentities = new Identity[](_allIdentityIds.length);
        
        for (uint256 i = 0; i < _allIdentityIds.length; i++) {
            allIdentities[i] = _identities[_allIdentityIds[i]];
        }
        
        return allIdentities;
    }
    
    /**
     * @dev Gets the total number of identities
     * @return Number of identities
     */
    function getIdentityCount() external view override returns (uint256) {
        return _allIdentityIds.length;
    }
    
    /**
     * @dev Checks if an identity has a role
     * @param role Role to check
     * @param identityId Identity ID
     * @return True if the identity has the role
     */
    function hasRole(bytes32 role, uint256 identityId) public view override returns (bool) {
        require(identityId > 0 && identityId < _identityCounter, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        address walletAddress = _identities[identityId].walletAddress;
        return super.hasRole(role, walletAddress);
    }
    
    /**
     * @dev Grants a role to an identity
     * @param role Role to grant
     * @param identityId Identity ID
     */
    function grantRole(bytes32 role, uint256 identityId) external override {
        require(identityId > 0 && identityId < _identityCounter, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        // Only FULL_ADMIN_ROLE can grant roles
        require(
            hasRole(ArcConstants.FULL_ADMIN_ROLE, _addressToIdentityId[msg.sender]),
            ArcConstants.ERROR_UNAUTHORIZED
        );
        
        address walletAddress = _identities[identityId].walletAddress;
        _grantRole(role, walletAddress);
        
        emit RoleGranted(role, identityId, msg.sender);
    }
    
    /**
     * @dev Revokes a role from an identity
     * @param role Role to revoke
     * @param identityId Identity ID
     */
    function revokeRole(bytes32 role, uint256 identityId) external override {
        require(identityId > 0 && identityId < _identityCounter, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        // Only FULL_ADMIN_ROLE can revoke roles
        require(
            hasRole(ArcConstants.FULL_ADMIN_ROLE, _addressToIdentityId[msg.sender]),
            ArcConstants.ERROR_UNAUTHORIZED
        );
        
        address walletAddress = _identities[identityId].walletAddress;
        _revokeRole(role, walletAddress);
        
        emit RoleRevoked(role, identityId, msg.sender);
    }
    
    /**
     * @dev Assigns a custodian to an identity
     * @param identityId Identity ID
     * @param custodianIdentityId Custodian's identity ID
     */
    function assignCustodian(uint256 identityId, uint256 custodianIdentityId) external override {
        require(identityId > 0 && identityId < _identityCounter, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        require(custodianIdentityId > 0 && custodianIdentityId < _identityCounter, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        // Check if caller is authorized to assign custodian
        bool isAuthorized = false;
        
        // Case 1: Caller is the identity owner
        if (_identities[identityId].walletAddress == msg.sender) {
            isAuthorized = true;
        }
        // Case 2: Caller has FULL_ADMIN_ROLE
        else if (hasRole(ArcConstants.FULL_ADMIN_ROLE, _addressToIdentityId[msg.sender])) {
            isAuthorized = true;
        }
        
        require(isAuthorized, ArcConstants.ERROR_UNAUTHORIZED);
        
        _custodians[identityId][custodianIdentityId] = true;
    }
    
    /**
     * @dev Removes a custodian from an identity
     * @param identityId Identity ID
     * @param custodianIdentityId Custodian's identity ID
     */
    function removeCustodian(uint256 identityId, uint256 custodianIdentityId) external override {
        require(identityId > 0 && identityId < _identityCounter, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        // Check if caller is authorized to remove custodian
        bool isAuthorized = false;
        
        // Case 1: Caller is the identity owner
        if (_identities[identityId].walletAddress == msg.sender) {
            isAuthorized = true;
        }
        // Case 2: Caller has FULL_ADMIN_ROLE
        else if (hasRole(ArcConstants.FULL_ADMIN_ROLE, _addressToIdentityId[msg.sender])) {
            isAuthorized = true;
        }
        
        require(isAuthorized, ArcConstants.ERROR_UNAUTHORIZED);
        
        _custodians[identityId][custodianIdentityId] = false;
    }
    
    /**
     * @dev Authorizes an upgrade to a new implementation
     * @param newImplementation Address of the new implementation
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyRole(ArcConstants.FULL_ADMIN_ROLE) {}
} 