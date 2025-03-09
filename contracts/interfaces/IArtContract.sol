// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

/**
 * @title IArtContract
 * @dev Interface for the ART Contract
 */
interface IArtContract {
    enum ArtStatus { Available, NotAvailable, Sold }

    struct ArtMetadata {
        uint256 artistIdentityId;
        string title;
        uint256 yearOfCreation;
        string medium;
        string dimensions;
        string edition;
        string series;
        string catalogueInventory;
        string image; // Arweave link
        string salesInformation; // JSON string
        string certificationMethod;
        string exhibitionHistory; // JSON string
        string conditionReports; // JSON string
        string artistStatement;
        string bibliography; // JSON string
        string[] keywords;
        string locationCollection; // JSON string
        ArtStatus status;
        string note;
        uint256 royalties; // Basis points (e.g., 1000 = 10%)
    }

    event ArtMinted(uint256 indexed tokenId, uint256 indexed artistIdentityId, address indexed minter);
    event ArtUpdated(uint256 indexed tokenId, uint256 indexed artistIdentityId, address indexed updater);
    event RoyaltiesSet(uint256 indexed tokenId, uint256 royalties);
    event DefaultRoyaltiesSet(uint256 royalties);
    event RoleGranted(bytes32 indexed role, uint256 indexed identityId, address indexed grantor);
    event RoleRevoked(bytes32 indexed role, uint256 indexed identityId, address indexed revoker);
    event OwnershipTransferred(uint256 indexed previousOwner, uint256 indexed newOwner);

    function initialize(uint256 artistIdentityId, string memory name, string memory symbol) external;
    function mint(ArtMetadata memory metadata) external returns (uint256);
    function updateArt(uint256 tokenId, ArtMetadata memory metadata) external;
    function setRoyalties(uint256 tokenId, uint256 royaltiesInBasisPoints) external;
    function setDefaultRoyalties(uint256 royaltiesInBasisPoints) external;
    function getAllArt() external view returns (uint256[] memory);
    function getArtMetadata(uint256 tokenId) external view returns (ArtMetadata memory);
    function getArtCount() external view returns (uint256);
    function getArtistIdentityId() external view returns (uint256);
    function transferOwnership(uint256 newOwnerIdentityId) external;
    function grantRole(bytes32 role, uint256 identityId) external;
    function revokeRole(bytes32 role, uint256 identityId) external;
    function hasRole(bytes32 role, uint256 identityId) external view returns (bool);
    function assignPartialEditor(uint256 tokenId, uint256 editorIdentityId) external;
    function removePartialEditor(uint256 tokenId, uint256 editorIdentityId) external;
    function setIdentityContract(address identityContract) external;
} 