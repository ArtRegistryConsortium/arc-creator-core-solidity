// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

library ARTPermissions {
    bytes32 public constant FULL_ADMIN_ROLE = keccak256("FULL_ADMIN_ROLE");
    bytes32 public constant CONTRACT_OWNER_ROLE = keccak256("CONTRACT_OWNER_ROLE");
    bytes32 public constant LEGACY_PROTECTOR_ROLE = keccak256("LEGACY_PROTECTOR_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant FULL_EDITOR_ROLE = keccak256("FULL_EDITOR_ROLE");
    bytes32 public constant PARTIAL_EDITOR_ROLE = keccak256("PARTIAL_EDITOR_ROLE");

    function hasMintPermission(AccessControlUpgradeable access, address account) internal view returns (bool) {
        return access.hasRole(FULL_ADMIN_ROLE, account) || 
               access.hasRole(CONTRACT_OWNER_ROLE, account) || 
               access.hasRole(LEGACY_PROTECTOR_ROLE, account) || 
               access.hasRole(MINTER_ROLE, account);
    }

    function hasEditPermission(
        AccessControlUpgradeable access, 
        address account, 
        uint256 tokenId,
        mapping(address => mapping(uint256 => bool)) storage partialEditorPermissions
    ) internal view returns (bool) {
        return access.hasRole(FULL_ADMIN_ROLE, account) || 
               access.hasRole(CONTRACT_OWNER_ROLE, account) || 
               access.hasRole(LEGACY_PROTECTOR_ROLE, account) || 
               access.hasRole(FULL_EDITOR_ROLE, account) || 
               (access.hasRole(PARTIAL_EDITOR_ROLE, account) && partialEditorPermissions[account][tokenId]);
    }

    function hasRoyaltyPermission(
        AccessControlUpgradeable access, 
        address account
    ) internal view returns (bool) {
        return access.hasRole(FULL_ADMIN_ROLE, account) || 
               access.hasRole(CONTRACT_OWNER_ROLE, account) || 
               access.hasRole(LEGACY_PROTECTOR_ROLE, account);
    }

    function hasAdminOwnerPermission(AccessControlUpgradeable access, address account) internal view returns (bool) {
        return access.hasRole(FULL_ADMIN_ROLE, account) || 
               access.hasRole(CONTRACT_OWNER_ROLE, account);
    }

    function hasAdminOnlyPermission(AccessControlUpgradeable access, address account) internal view returns (bool) {
        return access.hasRole(FULL_ADMIN_ROLE, account);
    }
} 