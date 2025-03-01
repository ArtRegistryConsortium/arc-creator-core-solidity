// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";
import "./ARTTokenLib.sol";

/**
 * @title ARTRoyaltyLib
 * @dev Library for managing royalties in the ART system
 */
library ARTRoyaltyLib {
    /**
     * @dev Sets the default royalty for a contract
     * @param contract_ The ERC2981 contract
     * @param receiver The address that should receive royalties
     * @param feeNumerator The royalty fee numerator (e.g., 1000 for 10%)
     */
    function setDefaultRoyalty(
        ERC2981Upgradeable contract_,
        address receiver,
        uint96 feeNumerator
    ) internal {
        // We can't directly call _setDefaultRoyalty as it's internal
        // Instead, we'll use a workaround by calling the public method
        bytes memory data = abi.encodeWithSignature("_setDefaultRoyalty(address,uint96)", receiver, feeNumerator);
        // solhint-disable-next-line avoid-low-level-calls
        (bool success, ) = address(contract_).call(data);
        require(success, "Failed to set default royalty");
    }
    
    /**
     * @dev Sets the royalty for a specific token
     * @param contract_ The ERC2981 contract
     * @param tokenId The ID of the token
     * @param receiver The address that should receive royalties
     * @param feeNumerator The royalty fee numerator (e.g., 1000 for 10%)
     * @param tokenData The storage reference to the token data
     */
    function setTokenRoyalty(
        ERC2981Upgradeable contract_,
        uint256 tokenId,
        address receiver,
        uint96 feeNumerator,
        ARTTokenLib.TokenData storage tokenData
    ) internal {
        // We can't directly call _setTokenRoyalty as it's internal
        // Instead, we'll use a workaround by calling the public method
        bytes memory data = abi.encodeWithSignature("_setTokenRoyalty(uint256,address,uint96)", tokenId, receiver, feeNumerator);
        // solhint-disable-next-line avoid-low-level-calls
        (bool success, ) = address(contract_).call(data);
        require(success, "Failed to set token royalty");
        
        tokenData.hasCustomRoyalty = true;
        tokenData.royaltyReceiver = receiver;
        tokenData.royaltyFraction = feeNumerator;
    }
    
    /**
     * @dev Resets the royalty for a specific token to use the contract default
     * @param contract_ The ERC2981 contract
     * @param tokenId The ID of the token
     * @param tokenData The storage reference to the token data
     */
    function resetTokenRoyalty(
        ERC2981Upgradeable contract_,
        uint256 tokenId,
        ARTTokenLib.TokenData storage tokenData
    ) internal {
        // We can't directly call _resetTokenRoyalty as it's internal
        // Instead, we'll use a workaround by calling the public method
        bytes memory data = abi.encodeWithSignature("_resetTokenRoyalty(uint256)", tokenId);
        // solhint-disable-next-line avoid-low-level-calls
        (bool success, ) = address(contract_).call(data);
        require(success, "Failed to reset token royalty");
        
        tokenData.hasCustomRoyalty = false;
        tokenData.royaltyReceiver = address(0);
        tokenData.royaltyFraction = 0;
    }
    
    /**
     * @dev Gets the royalty information for a token
     * @param tokenId The ID of the token
     * @param salePrice The sale price of the token
     * @param tokenData The storage reference to the token data
     * @param contract_ The ERC2981 contract
     * @return receiver The address that should receive royalties
     * @return royaltyAmount The royalty amount for the given sale price
     */
    function getRoyaltyInfo(
        uint256 tokenId,
        uint256 salePrice,
        ARTTokenLib.TokenData storage tokenData,
        ERC2981Upgradeable contract_
    ) internal view returns (address receiver, uint256 royaltyAmount) {
        if (tokenData.hasCustomRoyalty) {
            return ARTTokenLib.calculateRoyaltyAmount(tokenData, salePrice);
        } else {
            return contract_.royaltyInfo(tokenId, salePrice);
        }
    }
} 