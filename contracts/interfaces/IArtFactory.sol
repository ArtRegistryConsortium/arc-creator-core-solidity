// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IArtFactory
 * @dev Interface for the ART Factory contract
 */
interface IArtFactory {
    event ArtContractDeployed(address indexed artContractAddress, uint256 indexed artistIdentityId);

    function deployArtContract(uint256 artistIdentityId, string memory name, string memory symbol) external returns (address);
    function getArtContractsByArtist(uint256 artistIdentityId) external view returns (address[] memory);
    function getAllArtContracts() external view returns (address[] memory);
    function getArtContractCount() external view returns (uint256);
    function getImplementation() external view returns (address);
    function upgradeImplementation(address newImplementation) external;
} 