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
        require(bytes(metadata.title).length > 0, "Title cannot be empty");
        require(metadata.yearOfCreation > 0, "Year of creation must be set");
        require(bytes(metadata.medium).length > 0, "Medium cannot be empty");
        require(bytes(metadata.dimensions).length > 0, "Dimensions cannot be empty");
        require(bytes(metadata.catalogueInventory).length > 0, "Catalogue inventory cannot be empty");
        require(bytes(metadata.certificationMethod).length > 0, "Certification method cannot be empty");
        require(bytes(metadata.artistStatement).length > 0, "Artist statement cannot be empty");
        
        // Validate royalties
        require(metadata.royalties <= ArcConstants.MAX_ROYALTIES, ArcConstants.ERROR_INVALID_ROYALTIES);
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