// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "./ARTPermissions.sol";
import "./ARTToken.sol";

library ARTFactoryLib {
    function validateDeployment(mapping(address => address) storage artistToContract, address artist) internal view {
        require(artistToContract[artist] == address(0), "Artist already has a deployed contract");
    }
    
    function validateARTContract(
        address artContract,
        mapping(address => address) storage contractToArtist
    ) internal view returns (bool) {
        address artist = contractToArtist[artContract];
        bool isValid = artist != address(0);
        return isValid;
    }
    
    function validatePermission(
        address artContract,
        address sender,
        mapping(address => address) storage contractToArtist
    ) internal view returns (bool) {
        address artist = contractToArtist[artContract];
        bool isValid = artist != address(0);
        if (!isValid) {
            return false;
        }
        
        bool isContractArtist = artist == sender;
        
        // Check if the sender is the contract artist
        return isContractArtist;
    }
    
    function grantRoleOnContract(
        address artContract,
        bytes32 role,
        address account,
        address manager
    ) internal returns (bool) {
        // First try the direct method which should work for artists
        try ARTToken(artContract).grantRoleDirectly(role, account) {
            return true;
        } catch {
            // If that fails, try the method with manager
            try ARTToken(artContract).grantRoleDirectlyWithManager(role, account, manager) {
                return true;
            } catch {
                // If both fail, return false
                return false;
            }
        }
    }
    
    function setRoyaltyOnContract(
        address artContract, 
        address receiver, 
        uint96 feeNumerator
    ) internal {
        ARTToken(artContract).setRoyaltyDirectly(receiver, feeNumerator);
    }
} 