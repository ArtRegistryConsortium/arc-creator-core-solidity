// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "./ARTToken.sol";
import "./ARTPermissions.sol";
import "./ARTFactoryLib.sol";
import "./ARTTokenLib.sol";

contract ARTFactoryManager is Initializable, AccessControlUpgradeable, UUPSUpgradeable {
    using ARTPermissions for AccessControlUpgradeable;
    
    bytes32 public constant FULL_ADMIN_ROLE = keccak256("FULL_ADMIN_ROLE");
    
    // Mapping from contract address to artist address
    mapping(address => address) private contractToArtist;
    
    address public factory;
    
    // Event emitted when a contract artist is set
    event ContractArtistSet(address indexed contractAddress, address indexed artist);
    event RoleGranted(address indexed artContract, bytes32 indexed role, address indexed account, address grantor);
    
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }
    
    function initialize(address factoryAddress) public initializer {
        __AccessControl_init();
        __UUPSUpgradeable_init();
        factory = factoryAddress;
        _grantRole(DEFAULT_ADMIN_ROLE, factoryAddress);
        _grantRole(FULL_ADMIN_ROLE, factoryAddress);
    }
    
    function setFactory(address factoryAddress) external {
        require(factory == address(0) || msg.sender == factory, "7");
        factory = factoryAddress;
    }
    
    function setContractArtist(address contractAddress, address artist) public {
        require(msg.sender == ARTToken(contractAddress).factory(), "Only factory can set contract artist");
        contractToArtist[contractAddress] = artist;
        emit ContractArtistSet(contractAddress, artist);
    }
    
    function grantRoleOnARTContract(address artContract, bytes32 role, address account) public {
        // Validate the contract
        bool isValidContract = ARTFactoryLib.validateARTContract(artContract, contractToArtist);
        address artist = contractToArtist[artContract];
        
        require(isValidContract, "Not a valid ART contract");
        
        // Check if the caller is the artist of the contract or has admin role
        bool isArtist = artist == msg.sender;
        bool isAdmin = hasRole(DEFAULT_ADMIN_ROLE, msg.sender);
        bool isFactory = msg.sender == factory;
        
        require(isArtist || isAdmin || isFactory, "Caller must be artist, admin, or factory");
        
        // Try to grant the role using the library function
        bool success = ARTFactoryLib.grantRoleOnContract(artContract, role, account, address(this));
        require(success, "Failed to grant role");
        
        emit RoleGranted(artContract, role, account, msg.sender);
    }

    function setRoyaltyOnARTContract(address artContract, address receiver, uint96 feeNumerator) public {
        ARTFactoryLib.validatePermission(artContract, msg.sender, contractToArtist);
        ARTFactoryLib.setRoyaltyOnContract(artContract, receiver, feeNumerator);
    }

    function isARTContract(address contractAddress) public view returns (bool) {
        return ARTFactoryLib.validateARTContract(contractAddress, contractToArtist);
    }

    function getContractArtist(address contractAddress) public view returns (address) {
        return contractToArtist[contractAddress];
    }
    
    function _authorizeUpgrade(address newImplementation) internal override {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not an admin");
    }
} 