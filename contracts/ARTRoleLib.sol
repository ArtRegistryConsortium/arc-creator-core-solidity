// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "./ARTPermissions.sol";

/**
 * @title ARTRoleLib
 * @dev Library for managing roles in the ART system
 */
library ARTRoleLib {
    /**
     * @dev Manages roles by granting or revoking them
     * @param access The AccessControl contract
     * @param role The role to grant or revoke
     * @param account The account to grant or revoke the role from
     * @param isGrant Whether to grant (true) or revoke (false) the role
     * @return Whether the operation was successful
     */
    function manageRole(
        AccessControlUpgradeable access,
        bytes32 role,
        address account,
        bool isGrant
    ) internal returns (bool) {
        if (isGrant) {
            // We can't directly call _grantRole as it's internal
            // Instead, we'll use a workaround by calling the public method
            bytes memory data = abi.encodeWithSignature("grantRole(bytes32,address)", role, account);
            // solhint-disable-next-line avoid-low-level-calls
            (bool success, ) = address(access).call(data);
            require(success, "Failed to grant role");
        } else {
            // We can't directly call _revokeRole as it's internal
            // Instead, we'll use a workaround by calling the public method
            bytes memory data = abi.encodeWithSignature("revokeRole(bytes32,address)", role, account);
            // solhint-disable-next-line avoid-low-level-calls
            (bool success, ) = address(access).call(data);
            require(success, "Failed to revoke role");
        }
        return true;
    }
    
    /**
     * @dev Grants a role directly, bypassing permission checks
     * @param access The AccessControl contract
     * @param role The role to grant
     * @param account The account to grant the role to
     * @param caller The address calling the function
     * @param factory The factory address
     * @param manager The manager address
     * @param factoryManager The factory manager address
     * @param artistRole The role that identifies the artist
     * @return Whether the operation was successful
     */
    function grantRoleDirectly(
        AccessControlUpgradeable access,
        bytes32 role,
        address account,
        address caller,
        address factory,
        address manager,
        address factoryManager,
        bytes32 artistRole
    ) internal view returns (bool) {
        return (
            caller == factory || 
            caller == manager || 
            caller == factoryManager ||
            access.hasRole(artistRole, caller)
        );
    }
    
    /**
     * @dev Grants a role directly with an additional manager address
     * @param access The AccessControl contract
     * @param role The role to grant
     * @param account The account to grant the role to
     * @param caller The address calling the function
     * @param factory The factory address
     * @param manager The manager address
     * @param factoryManager The factory manager address
     * @param additionalManager An additional manager address
     * @param artistRole The role that identifies the artist
     * @return Whether the operation was successful
     */
    function grantRoleDirectlyWithManager(
        AccessControlUpgradeable access,
        bytes32 role,
        address account,
        address caller,
        address factory,
        address manager,
        address factoryManager,
        address additionalManager,
        bytes32 artistRole
    ) internal view returns (bool) {
        return (
            caller == factory || 
            caller == manager || 
            caller == factoryManager ||
            caller == additionalManager ||
            access.hasRole(artistRole, caller)
        );
    }
    
    /**
     * @dev Manages partial editor permissions
     * @param editor The address of the partial editor
     * @param tokenId The ID of the token
     * @param isGrant Whether to grant or revoke the permission
     * @param partialEditorPermissions The mapping of partial editor permissions
     */
    function managePartialEditorPermission(
        address editor,
        uint256 tokenId,
        bool isGrant,
        mapping(address => mapping(uint256 => bool)) storage partialEditorPermissions
    ) internal {
        partialEditorPermissions[editor][tokenId] = isGrant;
    }
} 