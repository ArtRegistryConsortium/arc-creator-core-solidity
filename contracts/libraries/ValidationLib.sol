// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "../interfaces/IArtContract.sol";
import "./ArcConstants.sol";

/**
 * @title ValidationLib
 * @dev Library for validation-related functions used in ArtContract
 */
library ValidationLib {
    /**
     * @dev Validates ART metadata
     * @param metadata ART metadata to validate
     */
    function validateArtMetadata(IArtContract.ArtMetadata memory metadata) internal pure {
        require(metadata.artistIdentityId > 0, "Artist identity ID must be set");
        require(bytes(metadata.title).length > 0, "Title cannot be empty");
        require(bytes(metadata.description).length > 0, "Description cannot be empty");
        require(bytes(metadata.image).length > 0, "Image cannot be empty");
    }
    
    /**
     * @dev Validates royalties in basis points
     * @param royaltiesInBasisPoints Royalties in basis points (e.g., 1000 = 10%)
     */
    function validateRoyalties(uint256 royaltiesInBasisPoints) internal pure {
        require(royaltiesInBasisPoints <= ArcConstants.MAX_ROYALTIES, ArcConstants.ERROR_INVALID_ROYALTIES);
    }
    
    /**
     * @dev Validates that a token exists
     * @param exists Whether the token exists
     */
    function validateTokenExists(bool exists) internal pure {
        require(exists, ArcConstants.ERROR_TOKEN_NOT_FOUND);
    }
    
    /**
     * @dev Validates that an identity exists
     * @param identityId Identity ID
     * @param identityExists Whether the identity exists
     */
    function validateIdentityExists(uint256 identityId, bool identityExists) internal pure {
        require(identityExists, ArcConstants.ERROR_IDENTITY_NOT_FOUND);
    }
    
    /**
     * @dev Validates that a caller is authorized
     * @param isAuthorized Whether the caller is authorized
     */
    function validateAuthorization(bool isAuthorized) internal pure {
        require(isAuthorized, ArcConstants.ERROR_UNAUTHORIZED);
    }
} 