// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

/**
 * @title IIdentity
 * @dev Interface for the Identity contract
 */
interface IIdentity {
    enum IdentityType { Artist, Gallery, Institution, Collector, Custodian }

    struct Identity {
        uint256 id;
        address walletAddress;
        IdentityType identityType;
        string name;
        string description;
        string identityImage; // Arweave link
        string links; // JSON string containing array of links
        string[] tags;
        uint256 dob; // Only for Artists
        uint256 dod; // Only for Artists, optional
        string location; // Only for Artists
        string addresses; // JSON string containing array of addresses
        string representedBy; // JSON string, only for Artists
        string representedArtists; // JSON string, only for Galleries
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
        string memory links, // JSON string containing array of links
        string[] memory tags,
        uint256 dob,
        uint256 dod,
        string memory location,
        string memory addresses, // JSON string containing array of addresses
        string memory representedBy,
        string memory representedArtists
    ) external returns (uint256);

    function updateIdentity(
        uint256 identityId,
        IdentityType identityType,
        string memory name,
        string memory description,
        string memory identityImage,
        string memory links, // JSON string containing array of links
        string[] memory tags,
        uint256 dob,
        uint256 dod,
        string memory location,
        string memory addresses, // JSON string containing array of addresses
        string memory representedBy,
        string memory representedArtists
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