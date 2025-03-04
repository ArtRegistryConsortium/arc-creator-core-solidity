// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";
import "./ARTToken.sol";
import "./ARTPermissions.sol";
import "./ARTFactoryLib.sol";
import "./ARTFactoryManager.sol";

/**
 * @title ARTFactory
 * @dev Factory contract for deploying Artwork Registry Token (ART) contracts
 * with role-based access control
 */
contract ARTFactory is Initializable, OwnableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable {
    using ARTPermissions for AccessControlUpgradeable;
    using ARTFactoryLib for mapping(address => address);
    
    // Role definitions
    bytes32 public constant FULL_ADMIN_ROLE = keccak256("FULL_ADMIN_ROLE");
    
    // Implementation address for ART contracts
    address public artImplementation;
    address public manager;
    
    // Mapping from artist address to their deployed ART contracts
    mapping(address => address) public artistToContract;
    
    // Event emitted when a new ART contract is deployed
    event ARTContractDeployed(address indexed artist, address indexed artContract);
    
    // Event emitted when the ART implementation is updated
    event ARTImplementationUpdated(address indexed oldImplementation, address indexed newImplementation);
    
    // Event emitted when an artist is mapped to a contract
    event ArtistContractMapped(address indexed artist, address indexed artContract);
    
    // Event emitted when a contract artist is verified
    event ContractArtistVerified(address indexed artContract, address indexed artist, address indexed registeredArtist);
    
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /**
     * @dev Initializes the factory contract
     * @param initialOwner The initial owner of the factory
     * @param managerAddress The address of the manager contract
     * @param artImplementationAddress The address of the pre-deployed ART implementation contract
     */
    function initialize(address initialOwner, address managerAddress, address artImplementationAddress) public initializer {
        __Ownable_init(initialOwner);
        __AccessControl_init();
        __UUPSUpgradeable_init();
        
        // Setup roles
        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
        _grantRole(FULL_ADMIN_ROLE, initialOwner);
        
        // Set the implementation address for ART tokens
        artImplementation = artImplementationAddress;
        
        // Set the manager address
        manager = managerAddress;
    }

    /**
     * @dev Updates the ART implementation contract
     * @param newImplementation The address of the new implementation
     */
    function updateARTImplementation(address newImplementation) public {
        require(ARTPermissions.hasAdminOnlyPermission(this, msg.sender), "2");
        
        address oldImplementation = artImplementation;
        artImplementation = newImplementation;
        
        emit ARTImplementationUpdated(oldImplementation, newImplementation);
    }

    /**
     * @dev Deploys a new ART contract for an artist
     * @param artistName The artist's full name or alias
     * @param symbol The symbol of the token collection
     * @return The address of the newly deployed ART contract
     */
    function deployARTContract(
        string memory artistName,
        string memory symbol
    ) public returns (address) {
        artistToContract.validateDeployment(msg.sender);
        
        // Automatically format the contract name as "ARC / Artist Name"
        string memory formattedName = string(abi.encodePacked("ARC / ", artistName));
        
        TransparentUpgradeableProxy proxy = new TransparentUpgradeableProxy(
            artImplementation,
            address(this),
            abi.encodeWithSelector(
                ARTToken(address(0)).initialize.selector,
                artistName,
                msg.sender,
                formattedName,
                symbol,
                address(this),
                hasRole(ARTPermissions.FULL_ADMIN_ROLE, msg.sender) ? msg.sender : owner()
            )
        );
        
        address artContractAddress = address(proxy);
        
        // Set the manager address in the ARTToken contract
        ARTToken(artContractAddress).setManager(manager);
        
        // Set the factory manager address in the ARTToken contract
        ARTToken(artContractAddress).setFactoryManager(manager);
        
        // Map the artist to their contract
        artistToContract[msg.sender] = artContractAddress;
        
        // Add debug logging
        emit ArtistContractMapped(msg.sender, artContractAddress);
        
        // Set the contract artist in the factory manager
        ARTFactoryManager(manager).setContractArtist(artContractAddress, msg.sender);
        
        // Verify the mapping was set correctly
        address registeredArtist = ARTFactoryManager(manager).getContractArtist(artContractAddress);
        emit ContractArtistVerified(artContractAddress, msg.sender, registeredArtist);
        
        // Double check that the contract is recognized as valid
        bool isValid = ARTFactoryManager(manager).isARTContract(artContractAddress);
        require(isValid, "Contract not properly registered in manager");
        
        emit ARTContractDeployed(msg.sender, artContractAddress);
        
        return artContractAddress;
    }

    /**
     * @dev Grants a role to an account
     * @param role The role to grant
     * @param account The account to grant the role to
     */
    function grantRole(bytes32 role, address account) public override {
        require(ARTPermissions.hasAdminOnlyPermission(this, msg.sender), "2");
        super.grantRole(role, account);
    }

    /**
     * @dev Revokes a role from an account
     * @param role The role to revoke
     * @param account The account to revoke the role from
     */
    function revokeRole(bytes32 role, address account) public override {
        require(ARTPermissions.hasAdminOnlyPermission(this, msg.sender), "2");
        super.revokeRole(role, account);
    }

    /**
     * @dev Grants a role to an account on a specific ART contract
     * @param artContract The address of the ART contract
     * @param role The role to grant
     * @param account The account to grant the role to
     */
    function grantRoleOnARTContract(address artContract, bytes32 role, address account) public {
        ARTFactoryManager(manager).grantRoleOnARTContract(artContract, role, account);
    }

    /**
     * @dev Sets the royalty on a specific ART contract
     * @param artContract The address of the ART contract
     * @param receiver The address of the royalty receiver
     * @param feeNumerator The fee numerator for the royalty
     */
    function setRoyaltyOnARTContract(address artContract, address receiver, uint96 feeNumerator) public {
        ARTFactoryManager(manager).setRoyaltyOnARTContract(artContract, receiver, feeNumerator);
    }

    /**
     * @dev Checks if an address is a deployed ART contract
     * @param contractAddress The address to check
     * @return Whether the address is a deployed ART contract
     */
    function isARTContract(address contractAddress) public view returns (bool) {
        return ARTFactoryManager(manager).isARTContract(contractAddress);
    }

    /**
     * @dev Checks if an artist already has a deployed contract
     * @param artist The address of the artist to check
     * @return bool True if the artist already has a contract, false otherwise
     */
    function artistHasContract(address artist) public view returns (bool) {
        return artistToContract[artist] != address(0);
    }

    /**
     * @dev Gets the contract address for an artist
     * @param artist The address of the artist
     * @return The address of the artist's contract, or address(0) if none exists
     */
    function getArtistContract(address artist) public view returns (address) {
        return artistToContract[artist];
    }

    /**
     * @dev Returns the artist for a specific deployed ART contract
     * @param artContract The address of the deployed ART contract
     * @return The address of the artist
     */
    function getContractArtist(address artContract) public view returns (address) {
        return ARTFactoryManager(manager).getContractArtist(artContract);
    }

    /**
     * @dev Gets all users with a specific role for a specific contract
     * @param artContract The address of the ART contract
     * @param role The role to query
     * @return An array of addresses that have the specified role
     */
    function getUsersWithRoleForContract(address artContract, bytes32 role) public view returns (address[] memory) {
        require(isARTContract(artContract), "Not a valid ART contract");
        return ARTToken(artContract).getUsersWithRole(role);
    }

    /**
     * @dev Required override for _authorizeUpgrade with access control
     */
    function _authorizeUpgrade(address) internal override view {
        require(ARTPermissions.hasAdminOnlyPermission(this, msg.sender), "2");
    }

    /**
     * @dev Transfers ownership of the factory
     * @param newOwner The address of the new owner
     */
    function transferOwnership(address newOwner) public override onlyOwner {
        require(ARTPermissions.hasAdminOnlyPermission(this, msg.sender), "2");
        super.transferOwnership(newOwner);
        
        // Update roles
        revokeRole(FULL_ADMIN_ROLE, owner());
        _grantRole(FULL_ADMIN_ROLE, newOwner);
    }
} 
