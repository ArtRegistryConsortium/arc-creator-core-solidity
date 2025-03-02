// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "./ARTTokenLib.sol";

/**
 * @title ARTMetadataLib
 * @dev Library for managing token metadata in the ART system
 */
library ARTMetadataLib {
    /**
     * @dev Updates token metadata
     * @param contract_ The ERC721URIStorage contract
     * @param tokenId The ID of the token
     * @param uri The new token URI
     * @param title The new title
     * @param description The new description
     * @param tokenData The storage reference to the token data
     */
    function updateTokenMetadata(
        ERC721URIStorageUpgradeable contract_,
        uint256 tokenId,
        string memory uri,
        string memory title,
        string memory description,
        ARTTokenLib.TokenData storage tokenData
    ) internal {
        // We can't directly call _setTokenURI as it's internal
        // Instead, we'll use a workaround by calling the public method
        bytes memory data = abi.encodeWithSignature("_setTokenURI(uint256,string)", tokenId, uri);
        // solhint-disable-next-line avoid-low-level-calls
        (bool success, ) = address(contract_).call(data);
        require(success, "Failed to set token URI");
        
        tokenData.title = title;
        tokenData.description = description;
    }
    
    /**
     * @dev Gets the token URI for a token
     * @param tokenId The ID of the token
     * @param tokenURI The function to get the token URI
     * @return The token URI
     */
    function getTokenURI(
        uint256 tokenId,
        function(uint256) external view returns (string memory) tokenURI
    ) internal view returns (string memory) {
        return tokenURI(tokenId);
    }
    
    /**
     * @dev Gets the token owner for a token
     * @param tokenId The ID of the token
     * @param ownerOf The function to get the token owner
     * @return The token owner
     */
    function getTokenOwner(
        uint256 tokenId,
        function(uint256) external view returns (address) ownerOf
    ) internal view returns (address) {
        return ownerOf(tokenId);
    }
    
    /**
     * @dev Initializes token data during minting
     * @param tokenId The ID of the token
     * @param title The title of the artwork
     * @param description The description of the artwork
     * @param tokenData The storage reference to the token data
     */
    function initializeTokenData(
        uint256 tokenId,
        string memory title,
        string memory description,
        ARTTokenLib.TokenData storage tokenData
    ) internal {
        tokenData.title = title;
        tokenData.description = description;
        tokenData.creationDate = uint96(block.timestamp);
    }
    
    /**
     * @dev Gets token metadata
     * @param tokenId The ID of the token
     * @param tokenData The storage reference to the token data
     * @return title The title of the artwork
     * @return description The description of the artwork
     * @return creationDate The creation date of the token
     */
    function getTokenMetadata(
        uint256 tokenId,
        ARTTokenLib.TokenData storage tokenData
    ) internal view returns (
        string memory title,
        string memory description,
        uint256 creationDate
    ) {
        return (
            tokenData.title,
            tokenData.description,
            tokenData.creationDate
        );
    }
} 