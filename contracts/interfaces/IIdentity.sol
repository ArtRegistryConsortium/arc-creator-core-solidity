// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

/**
 * @title IIdentity
 * @dev Interface for the Identity contract
 */
interface IIdentity {
    enum IdentityType { Artist, Gallery, Institution, Collector }

    struct Identity {
        uint256 id;
        address walletAddress;
        IdentityType identityType;
        string name;
        string description;
        string identityImage; // Arweave link
        string[] links;
        string[] tags;
        uint256 dob; // Only for Artists
        uint256 dod; // Only for Artists, optional
        string location; // Only for Artists
        string[] addresses; // Only for Galleries/Institutions
    }

    event IdentityCreated(uint256 indexed id, address indexed walletAddress, IdentityType identityType);
    event IdentityUpdated(uint256 indexed id, address indexed walletAddress);
    event RoleGranted(bytes32 indexed role, uint256 indexed identityId, address indexed grantor);
    event RoleRevoked(bytes32 indexed role, uint256 indexed identityId, address indexed revoker);

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
    ) external returns (uint256);

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
    ) external;

    function getIdentityByAddress(address walletAddress) external view returns (Identity memory);
    function getIdentityById(uint256 identityId) external view returns (Identity memory);
    function getAllIdentities() external view returns (Identity[] memory);
    function getIdentityCount() external view returns (uint256);
    function hasRole(bytes32 role, uint256 identityId) external view returns (bool);
    function grantRole(bytes32 role, uint256 identityId) external;
    function revokeRole(bytes32 role, uint256 identityId) external;
    function assignCustodian(uint256 identityId, uint256 custodianIdentityId) external;
    function removeCustodian(uint256 identityId, uint256 custodianIdentityId) external;
} 