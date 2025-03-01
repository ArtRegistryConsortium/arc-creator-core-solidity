// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "./ARTPermissions.sol";

library ARTTokenLib {
    struct TokenData {
        string title;
        string description;
        uint96 creationDate;
        bool isLocked;
        bool hasCustomRoyalty;
        address royaltyReceiver;
        uint96 royaltyFraction;
    }
    
    function validateTokenExists(bool exists) internal pure {
        require(exists, "5");
    }
    
    function validateTokenLock(TokenData storage data, address sender, AccessControlUpgradeable access) internal view {
        require(!data.isLocked || 
                ARTPermissions.hasAdminOwnerPermission(access, sender),
                "6");
    }
    
    function validateEditPermission(
        AccessControlUpgradeable access, 
        address sender, 
        uint256 tokenId,
        mapping(address => mapping(uint256 => bool)) storage partialEditorPermissions
    ) internal view {
        require(ARTPermissions.hasEditPermission(access, sender, tokenId, partialEditorPermissions), "2");
    }
    
    function validateRoyaltyPermission(
        AccessControlUpgradeable access, 
        address sender, 
        uint256 tokenId,
        mapping(address => mapping(uint256 => bool)) storage partialEditorPermissions
    ) internal view {
        require(ARTPermissions.hasRoyaltyPermission(access, sender, tokenId, partialEditorPermissions), "3");
    }
    
    function validateAdminOwnerPermission(AccessControlUpgradeable access, address sender) internal view {
        require(ARTPermissions.hasAdminOwnerPermission(access, sender), "4");
    }
    
    function validateAdminOnlyPermission(AccessControlUpgradeable access, address sender) internal view {
        require(ARTPermissions.hasAdminOnlyPermission(access, sender), "8");
    }
    
    function validateFactoryCaller(address sender, address factory) internal pure {
        require(sender == factory, "7");
    }
    
    function validatePartialEditorRole(AccessControlUpgradeable access, address editor) internal view {
        require(access.hasRole(ARTPermissions.PARTIAL_EDITOR_ROLE, editor), "9");
    }
    
    function validateArtistNameUpdate(
        AccessControlUpgradeable access, 
        address sender, 
        address artistAddress
    ) internal view {
        require(
            access.hasRole(ARTPermissions.FULL_ADMIN_ROLE, sender) || 
            access.hasRole(ARTPermissions.CONTRACT_OWNER_ROLE, sender) || 
            access.hasRole(ARTPermissions.LEGACY_PROTECTOR_ROLE, sender) || 
            sender == artistAddress,
            "10"
        );
    }
    
    function calculateRoyaltyAmount(TokenData storage data, uint256 salePrice) internal view returns (address, uint256) {
        return (data.royaltyReceiver, (salePrice * data.royaltyFraction) / 10000);
    }
} 