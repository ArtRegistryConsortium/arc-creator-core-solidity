// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

/**
 * @title ARTFactoryIntegrationLib
 * @dev Library for factory integration in the ART system
 */
library ARTFactoryIntegrationLib {
    /**
     * @dev Validates that the caller is the factory
     * @param factory The factory address
     * @param caller The address calling the function
     * @return Whether the caller is the factory
     */
    function validateFactoryCaller(
        address factory,
        address caller
    ) internal pure returns (bool) {
        return caller == factory;
    }
    
    /**
     * @dev Sets the manager address for a contract
     * @param factory The factory address
     * @param caller The address calling the function
     * @return Whether the operation was successful
     */
    function setManager(
        address factory,
        address caller,
        address
    ) internal pure returns (bool) {
        require(caller == factory, "Caller is not factory");
        return true;
    }
    
    /**
     * @dev Sets the factory manager address for a contract
     * @param factory The factory address
     * @param caller The address calling the function
     * @return Whether the operation was successful
     */
    function setFactoryManager(
        address factory,
        address caller,
        address
    ) internal pure returns (bool) {
        require(caller == factory, "Caller is not factory");
        return true;
    }
    
    /**
     * @dev Checks if a token exists
     * @param tokenId The ID of the token to check
     * @param ownerOfFn A function that returns the owner of a token
     * @return Whether the token exists
     */
    function tokenExists(
        uint256 tokenId,
        function(uint256) external view returns (address) ownerOfFn
    ) internal view returns (bool) {
        try ownerOfFn(tokenId) returns (address) {
            return true;
        } catch {
            return false;
        }
    }
} 