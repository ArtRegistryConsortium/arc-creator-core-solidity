// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "../interfaces/IIdentity.sol";
import "./ArcConstants.sol";

/**
 * @title AuthorizationLib
 * @dev Library for authorization-related functions used in ArtContract
 */
library AuthorizationLib {
    /**
     * @dev Checks if an identity is authorized to mint ART tokens
     * @param identityId Identity ID
     * @param artistIdentityId Artist Identity ID (owner)
     * @param identityContract Identity contract reference
     * @return True if authorized
     */
    function isAuthorizedToMint(
        uint256 identityId,
        uint256 artistIdentityId,
        IIdentity identityContract
    ) internal view returns (bool) {
        if (identityId == ArcConstants.IDENTITY_NOT_FOUND) {
            return false;
        }
        
        // Case 1: Identity is the artist (owner)
        if (identityId == artistIdentityId) {
            return true;
        }
        
        // Case 2: Identity has FULL_ADMIN_ROLE
        if (identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, identityId)) {
            return true;
        }
        
        // Case 3: Identity has CUSTODIAN_ROLE
        if (identityContract.hasRole(ArcConstants.CUSTODIAN_ROLE, identityId)) {
            return true;
        }
        
        // Case 4: Identity has MINTER_ROLE
        if (identityContract.hasRole(ArcConstants.MINTER_ROLE, identityId)) {
            return true;
        }
        
        return false;
    }

    /**
     * @dev Checks if an identity is authorized to update ART tokens
     * @param identityId Identity ID
     * @param tokenId Token ID
     * @param artistIdentityId Artist Identity ID (owner)
     * @param identityContract Identity contract reference
     * @param partialEditors Mapping of token ID to partial editor identity IDs
     * @return True if authorized
     */
    function isAuthorizedToUpdate(
        uint256 identityId,
        uint256 tokenId,
        uint256 artistIdentityId,
        IIdentity identityContract,
        mapping(uint256 => mapping(uint256 => bool)) storage partialEditors
    ) internal view returns (bool) {
        if (identityId == ArcConstants.IDENTITY_NOT_FOUND) {
            return false;
        }
        
        // Case 1: Identity is the artist (owner)
        if (identityId == artistIdentityId) {
            return true;
        }
        
        // Case 2: Identity has FULL_ADMIN_ROLE
        if (identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, identityId)) {
            return true;
        }
        
        // Case 3: Identity has CUSTODIAN_ROLE
        if (identityContract.hasRole(ArcConstants.CUSTODIAN_ROLE, identityId)) {
            return true;
        }
        
        // Case 4: Identity has MINTER_ROLE
        if (identityContract.hasRole(ArcConstants.MINTER_ROLE, identityId)) {
            return true;
        }
        
        // Case 5: Identity has FULL_EDITOR_ROLE
        if (identityContract.hasRole(ArcConstants.FULL_EDITOR_ROLE, identityId)) {
            return true;
        }
        
        // Case 6: Identity is a partial editor for this token
        if (partialEditors[tokenId][identityId]) {
            return true;
        }
        
        return false;
    }

    /**
     * @dev Checks if an identity is authorized to set royalties
     * @param identityId Identity ID
     * @param artistIdentityId Artist Identity ID (owner)
     * @param identityContract Identity contract reference
     * @return True if authorized
     */
    function isAuthorizedToSetRoyalties(
        uint256 identityId,
        uint256 artistIdentityId,
        IIdentity identityContract
    ) internal view returns (bool) {
        if (identityId == ArcConstants.IDENTITY_NOT_FOUND) {
            return false;
        }
        
        // Case 1: Identity is the artist (owner)
        if (identityId == artistIdentityId) {
            return true;
        }
        
        // Case 2: Identity has FULL_ADMIN_ROLE
        if (identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, identityId)) {
            return true;
        }
        
        // Case 3: Identity has CUSTODIAN_ROLE
        if (identityContract.hasRole(ArcConstants.CUSTODIAN_ROLE, identityId)) {
            return true;
        }
        
        return false;
    }

    /**
     * @dev Checks if an identity is authorized to grant roles
     * @param identityId Identity ID
     * @param artistIdentityId Artist Identity ID (owner)
     * @param identityContract Identity contract reference
     * @return True if authorized
     */
    function isAuthorizedToGrantRoles(
        uint256 identityId,
        uint256 artistIdentityId,
        IIdentity identityContract
    ) internal view returns (bool) {
        if (identityId == ArcConstants.IDENTITY_NOT_FOUND) {
            return false;
        }
        
        // Case 1: Identity is the artist (owner)
        if (identityId == artistIdentityId) {
            return true;
        }
        
        // Case 2: Identity has FULL_ADMIN_ROLE
        if (identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, identityId)) {
            return true;
        }
        
        // Case 3: Identity has CUSTODIAN_ROLE
        if (identityContract.hasRole(ArcConstants.CUSTODIAN_ROLE, identityId)) {
            return true;
        }
        
        return false;
    }

    /**
     * @dev Checks if an identity is authorized to transfer ownership
     * @param identityId Identity ID
     * @param artistIdentityId Artist Identity ID (owner)
     * @param identityContract Identity contract reference
     * @return True if authorized
     */
    function isAuthorizedToTransferOwnership(
        uint256 identityId,
        uint256 artistIdentityId,
        IIdentity identityContract
    ) internal view returns (bool) {
        if (identityId == ArcConstants.IDENTITY_NOT_FOUND) {
            return false;
        }
        
        // Case 1: Identity is the artist (owner)
        if (identityId == artistIdentityId) {
            return true;
        }
        
        // Case 2: Identity has FULL_ADMIN_ROLE
        if (identityContract.hasRole(ArcConstants.FULL_ADMIN_ROLE, identityId)) {
            return true;
        }
        
        return false;
    }
} 