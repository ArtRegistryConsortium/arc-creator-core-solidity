// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ArcConstants
 * @dev Library for constants used across ARC contracts
 */
library ArcConstants {
    // Roles
    bytes32 public constant FULL_ADMIN_ROLE = keccak256("FULL_ADMIN_ROLE");
    bytes32 public constant CUSTODIAN_ROLE = keccak256("CUSTODIAN_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant FULL_EDITOR_ROLE = keccak256("FULL_EDITOR_ROLE");
    bytes32 public constant PARTIAL_EDITOR_ROLE = keccak256("PARTIAL_EDITOR_ROLE");
    
    // Royalties
    uint256 public constant MAX_ROYALTIES = 5000; // 50% in basis points
    
    // Identity
    uint256 public constant IDENTITY_NOT_FOUND = 0;
    
    // Errors
    string public constant ERROR_IDENTITY_NOT_FOUND = "Identity not found";
    string public constant ERROR_INVALID_IDENTITY_TYPE = "Invalid identity type";
    string public constant ERROR_UNAUTHORIZED = "Unauthorized";
    string public constant ERROR_INVALID_ROYALTIES = "Invalid royalties";
    string public constant ERROR_TOKEN_NOT_FOUND = "Token not found";
    string public constant ERROR_INVALID_PARAMETER = "Invalid parameter";
} 