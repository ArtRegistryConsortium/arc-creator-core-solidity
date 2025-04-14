// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./interfaces/IArtFactory.sol";
import "./interfaces/IArtContract.sol";
import "./interfaces/IIdentity.sol";
import "./libraries/ArcConstants.sol";
import "./libraries/ValidationLib.sol";

/**
 * @title ArtFactory
 * @dev Factory contract for deploying ART Contracts
 * Uses UUPS pattern for upgradeability and minimal proxy pattern for gas-efficient deployments
 */
contract ArtFactory is Initializable, UUPSUpgradeable, AccessControlUpgradeable, IArtFactory {
    // Implementation contract for ART Contracts
    address private _artContractImplementation;
    
    // Reference to the Identity contract
    IIdentity private _identityContract;
    
    // Mapping from artist identity ID to their ART Contracts
    mapping(uint256 => address[]) private _artistToArtContracts;
    
    // Array of all ART Contracts
    address[] private _allArtContracts;
    
    /**
     * @dev Initializes the contract
     * @param admin Address of the initial admin
     * @param identityContract Address of the Identity contract
     * @param artContractImplementation Address of the ART Contract implementation
     */
    function initialize(
        address admin,
        address identityContract,
        address artContractImplementation
    ) external initializer {
        __AccessControl_init();
        __UUPSUpgradeable_init();
        
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(ArcConstants.FULL_ADMIN_ROLE, admin);
        
        _identityContract = IIdentity(identityContract);
        _artContractImplementation = artContractImplementation;
    }
    
    /**
     * @dev Deploys a new ART Contract for an artist
     * @param artistIdentityId Artist's identity ID
     * @param symbol Symbol of the token collection
     * @param defaultRoyalties Default royalties in basis points (e.g., 1000 = 10%)
     * @return Address of the deployed ART Contract
     */
    function deployArtContract(
        uint256 artistIdentityId,
        string memory symbol,
        uint256 defaultRoyalties
    ) external override returns (address) {
        // Check if caller has an identity
        uint256 callerIdentityId = _getCallerIdentityId();
        require(callerIdentityId > 0, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        
        // Check if the artist identity exists and is of type Artist
        IIdentity.Identity memory artistIdentity = _identityContract.getIdentityById(artistIdentityId);
        require(artistIdentity.id == artistIdentityId, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
        require(artistIdentity.identityType == IIdentity.IdentityType.Artist, ArcConstants.ERROR_INVALID_IDENTITY_TYPE);
        
        // Check if caller is authorized to deploy for this artist
        bool isAuthorized = false;
        
        // Case 1: Caller is the artist
        if (callerIdentityId == artistIdentityId) {
            isAuthorized = true;
        }
        // Case 2: Caller has FULL_ADMIN_ROLE
        else if (_identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, callerIdentityId)) {
            isAuthorized = true;
        }
        
        require(isAuthorized, ArcConstants.ERROR_UNAUTHORIZED);

        // Validate royalties
        ValidationLib.validateRoyalties(defaultRoyalties);
        
        // Create the name as "ARC / " + artist name
        string memory name = string(abi.encodePacked("ARC / ", artistIdentity.name));
        
        // Deploy a new ART Contract using minimal proxy pattern
        address newArtContract = Clones.clone(_artContractImplementation);
        
        // Initialize the new ART Contract
        IArtContract(newArtContract).initialize(artistIdentityId, name, symbol, defaultRoyalties);
        
        // Set the Identity contract reference
        IArtContract(newArtContract).setIdentityContract(address(_identityContract));
        
        // Store the new ART Contract
        _artistToArtContracts[artistIdentityId].push(newArtContract);
        _allArtContracts.push(newArtContract);
        
        emit ArtContractDeployed(newArtContract, artistIdentityId);
        
        return newArtContract;
    }
    
    /**
     * @dev Gets all ART Contracts deployed by an artist
     * @param artistIdentityId Artist's identity ID
     * @return Array of ART Contract addresses
     */
    function getArtContractsByArtist(uint256 artistIdentityId) external view override returns (address[] memory) {
        return _artistToArtContracts[artistIdentityId];
    }
    
    /**
     * @dev Gets all ART Contracts
     * @return Array of all ART Contract addresses
     */
    function getAllArtContracts() external view override returns (address[] memory) {
        return _allArtContracts;
    }
    
    /**
     * @dev Gets the total number of ART Contracts
     * @return Number of ART Contracts
     */
    function getArtContractCount() external view override returns (uint256) {
        return _allArtContracts.length;
    }
    
    /**
     * @dev Gets the implementation contract address
     * @return Implementation contract address
     */
    function getImplementation() external view override returns (address) {
        return _artContractImplementation;
    }
    
    /**
     * @dev Upgrades the implementation contract
     * @param newImplementation Address of the new implementation
     */
    function upgradeImplementation(address newImplementation) external override onlyRole(ArcConstants.FULL_ADMIN_ROLE) {
        require(newImplementation != address(0), "Invalid implementation address");
        _artContractImplementation = newImplementation;
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
     * @dev Authorizes an upgrade to a new implementation
     * @param newImplementation Address of the new implementation
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyRole(ArcConstants.FULL_ADMIN_ROLE) {}
} 