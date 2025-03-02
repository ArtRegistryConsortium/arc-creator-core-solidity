# Art Registry Consortium (ARC) Smart Contracts

This repository contains the smart contract system for the Art Registry Consortium (ARC), enabling artists to deploy their own Artwork Registry Token (ART) contracts.

## Overview

The ARC system consists of three main components:

1. **ARTFactory**: An upgradeable factory contract that allows artists to deploy their own ART contracts and keeps track of all deployed contracts.

2. **ARTFactoryManager**: An upgradeable manager contract that handles role management and permissions for ART contracts deployed through the factory.

3. **ARTToken**: An upgradeable ERC-721 contract that represents an artist's collection. Each ART contract stores the artist's name and wallet address, and allows the artist to mint NFTs with token URIs pointing to off-chain metadata.

## Key Features

- **Upgradeable Contracts**: The factory, manager, and individual ART contracts are upgradeable via the UUPS proxy pattern.
- **Artist Ownership**: Artists own and control their deployed ART contracts.
- **One Contract Per Artist**: Each artist can deploy only one contract, ensuring a clear and consistent representation of their work.
- **Efficient Storage**: Only token URIs are stored on-chain, with all other metadata stored off-chain.
- **Access Control**: Comprehensive role-based access control system with six distinct roles.
- **Contract Tracking**: The factory maintains a registry of all deployed ART contracts.
- **Royalty Management**: Support for ERC-2981 royalty standard with both contract-level and token-level royalties.

## Architecture

The ARC system architecture follows a factory pattern with upgradeable contracts:

```
+-------------------+          +-------------------+
|                   |          |                   |
|    ARTFactory     |<-------->|  ARTFactoryManager|
|    (Upgradeable)  |          |    (Upgradeable)  |
|                   |          |                   |
+-------------------+          +-------------------+
         |                              |
         | deploys                      | manages roles
         |                              |
         v                              v
+-------------------+
|                   |
|     ARTToken      |<-----------------+
|    (Upgradeable)  |                  |
|                   |                  |
+-------------------+                  |
         |                             |
         | mints                       | upgrades
         |                             |
         v                             |
+-------------------+                  |
|                   |                  |
|       NFTs        |                  |
|                   |                  |
+-------------------+                  |
                                       |
                                       |
+-------------------+                  |
|                   |                  |
|   ARTFactoryLib   |                  |
|                   |                  |
+-------------------+                  |
                                       |
+-------------------+                  |
|                   |                  |
|    ARTTokenLib    |                  |
|                   |                  |
+-------------------+                  |
                                       |
+-------------------+                  |
|                   |                  |
|  ARTPermissions   |------------------+
|                   |
+-------------------+
```

### Upgrade Process

The ARTFactory, ARTFactoryManager, and ARTToken contracts are upgradeable using the UUPS (Universal Upgradeable Proxy Standard) pattern. This allows us to fix bugs and add new features without losing the contract state or changing the contract addresses.

The upgrade process works as follows:

1. Deploy a new implementation contract
2. Call the upgrade function on the proxy contract
3. The proxy will now delegate calls to the new implementation

### Contract Relationships

- **ARTFactory** is the entry point for artists to create their own ART contracts.
- **ARTFactoryManager** handles role management and permissions for ART contracts.
- Each **ARTToken** contract is owned by the artist who created it.
- **ARTFactoryLib** provides utility functions for the factory and manager contracts.
- **ARTTokenLib** provides utility functions for the token contracts.
- **ARTPermissions** defines the role-based access control system.
- Artists can mint NFTs through their ART contracts.

### Data Storage

- **ARTFactory** stores:
  - The implementation address for ART contracts
  - An array of all deployed ART contracts
  - A mapping from artist addresses to their deployed contracts

- **ARTFactoryManager** stores:
  - A mapping from contract addresses to artist addresses
  - Role assignments for factory-level permissions

- **ARTToken** stores:
  - The artist's name and wallet address
  - Token ownership and URI information (inherited from ERC-721)
  - Token metadata (title, description, creation date, lock status)
  - Royalty information at both contract and token levels
  - References to the factory and manager contracts

## Role-Based Access Control

The ARC system implements a comprehensive role-based access control (RBAC) system that defines specific roles and permissions for different users across the factory contract and individual ART contracts.

### Roles and Permissions

#### 1. Full Admin / Deployer (ARC) (Global Role)

The Full Admin role is assigned to the ARC organization and has the highest level of permissions:

- **Can upgrade contracts**: Both the factory and individual ART contracts
- **Can mint ART**: On any ART contract
- **Can modify any ART token**: Including metadata for any token
- **Can add/remove any roles**: On any contract
- **Can transfer any ART token**: Using the standard ERC-721 transfer functions
- **Can transfer ownership**: Of any ART contract
- **Can set royalties**: For any ART contract and any ART token
- **Can update artist name**: Can modify the artist's name on any ART contract (exclusive to Full Admins)

#### 2. Contract Owner (Artist) (Per ART Contract)

The Contract Owner role is assigned to the artist who deploys an ART contract:

- **Can mint ART**: Within their own ART contract
- **Can update ART**: Within their own ART contract
- **Can grant/revoke roles**: Within their own ART contract (except FULL_ADMIN_ROLE)
- **Can assign a legacy protector**: For their ART contract
- **Can manage token-specific permissions**: For partial editors
- **Can set royalties**: For their own ART contract and any ART token in their contract
- **Cannot update artist name**: Artist names can only be updated by Full Admins

#### 3. Legacy Protector (Artist Delegate) (Per ART Contract)

The Legacy Protector role is assigned to manage an ART contract when the artist passes away:

- **Can mint ART**: Within the assigned ART contract
- **Can update ART**: Within the assigned ART contract
- **Cannot update artist name**: Only Full Admins can update artist names
- **Can set royalties**: For the ART contract they manage and any ART token in that contract

#### 4. Minter (Per ART Contract)

The Minter role is assigned to users who can mint new tokens:

- **Can mint ART**: Within the assigned ART contract
- **Can update ART**: That they have minted

#### 5. Full Editor (Per ART Contract)

The Full Editor role is assigned to users who can update token metadata:

- **Can update ART**: Within the assigned ART contract

#### 6. Partial Editor (Per Token)

The Partial Editor role is assigned to users with limited editing capabilities:

- **Can update specific ART tokens**: Only tokens they have been explicitly granted permission for

### Token-Specific Permissions

The ARC system implements token-specific permissions for Partial Editors:

1. **Granular Access Control**: Partial Editors can only edit tokens they have been explicitly granted permission for
2. **Permission Management**: Contract Owners and Full Admins can grant and revoke permissions for specific tokens
3. **Permission Verification**: The system verifies permissions before allowing token metadata updates

### Royalty Management

The ARC system implements royalty management using the ERC-2981 standard:

1. **Contract-Level Royalties**: Default royalties that apply to all tokens in a contract
2. **Token-Level Royalties**: Custom royalties for specific tokens that override the contract default
3. **Role-Based Permissions**: Only specific roles have permissions for setting royalties

Royalty permissions by role:

| Role | Contract-Level Royalties | Token-Level Royalties |
|------|--------------------------|------------------------|
| Full Admin | Any ART contract | Any ART token |
| Contract Owner | Own ART contract | Any token in own contract |
| Legacy Protector | Managed ART contract | Any token in managed contract |
| Minter | None | None |
| Full Editor | None | None |
| Partial Editor | None | None |

## Usage Guide

### For Artists

#### Deploying Your Own ART Contract

As an artist, you can deploy your own Artwork Registry Token (ART) contract through the ARTFactory:

1. Connect your wallet to the dApp or interact directly with the ARTFactory contract.
2. Call the `deployARTContract` function with the following parameters:
   - `artistName`: Your full name or alias
   - `collectionSymbol`: The symbol for your token collection (usually 3-5 characters)

> Note: The contract name will be automatically formatted as "ARC / [Artist Name]"
>
> Important: Each artist can deploy only one contract. If you attempt to deploy a second contract with the same wallet address, the transaction will be reverted.

```javascript
// Example using ethers.js
const tx = await artFactory.deployARTContract(
  "Jane Smith",
  "JSC"
);
await tx.wait();

// You can check if you already have a contract
const hasContract = await artFactory.artistHasContract(myAddress);
if (hasContract) {
  const contractAddress = await artFactory.getArtistContract(myAddress);
  console.log("Your contract address:", contractAddress);
}
```

3. After deployment, you'll receive the address of your new ART contract.

#### Managing Your ART Contract

Once you have deployed your ART contract, you can:

1. **Mint new tokens**:
   ```javascript
   const tokenURI = "ipfs://QmXxxx"; // IPFS URI to your token metadata
   await artContract.mintToken(
     recipientAddress, 
     tokenURI,
     "Artwork Title",
     "Artwork Description"
   );
   ```

2. **View your contract information**:
   ```javascript
   const artistName = await artContract.getArtistName();
   const artistAddress = await artContract.getArtistAddress();
   ```

   > Note: Artist names can only be updated by Full Admins, not by the artists themselves or Legacy Protectors.

3. **Set royalties** (only available to Contract Owner, Full Admin, and Legacy Protector):
   ```javascript
   // Set default royalty for the contract (10%)
   await artContract.setRoyalty(artistAddress, 1000);
   
   // Set custom royalty for a specific token (15%)
   await artContract.setTokenRoyalty(tokenId, artistAddress, 1500);
   ```

4. **Manage roles directly on your contract**:
   ```javascript
   // Grant a role
   await artContract.grantRole(MINTER_ROLE, minterAddress);
   
   // Revoke a role
   await artContract.revokeRole(MINTER_ROLE, minterAddress);
   ```

5. **Manage roles through the factory**:
   ```javascript
   // Grant a role using the factory
   await artFactory.grantRoleOnARTContract(
     artContractAddress,
     LEGACY_PROTECTOR_ROLE,
     legacyProtectorAddress
   );
   ```

6. **Manage partial editor permissions**:
   ```javascript
   // Grant permission for a specific token
   await artContract.grantPartialEditorPermission(partialEditorAddress, tokenId);
   
   // Revoke permission for a specific token
   await artContract.revokePartialEditorPermission(partialEditorAddress, tokenId);
   ```

### For Collectors

#### Viewing Token Information

As a collector, you can view information about tokens you own:

1. **Check token ownership**:
   ```javascript
   const isOwner = await artContract.ownerOf(tokenId) === myAddress;
   ```

2. **Get token metadata URI**:
   ```javascript
   const tokenURI = await artContract.tokenURI(tokenId);
   ```

3. **View artist information**:
   ```javascript
   const artistName = await artContract.getArtistName();
   const artistAddress = await artContract.getArtistAddress();
   ```

4. **Get royalty information**:
   ```javascript
   const salePrice = ethers.parseEther("1.0");
   const [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(tokenId, salePrice);
   ```

### For Developers

#### Interacting with the Factory

To interact with the ARTFactory:

1. **Get all deployed ART contracts**:
   ```javascript
   const allContracts = await artFactory.getAllDeployedContracts();
   ```

2. **Get contracts deployed by a specific artist**:
   ```javascript
   const artistContracts = await artFactory.getArtistContracts(artistAddress);
   ```

3. **Get the total number of deployed contracts**:
   ```javascript
   const totalContracts = await artFactory.getTotalDeployedContracts();
   ```

4. **Check if an artist already has a contract**:
   ```javascript
   const hasContract = await artFactory.artistHasContract(artistAddress);
   ```

5. **Get an artist's contract address**:
   ```javascript
   const contractAddress = await artFactory.getArtistContract(artistAddress);
   ```

#### Interacting with the Factory Manager

To interact with the ARTFactoryManager:

1. **Check if an address is a valid ART contract**:
   ```javascript
   const isValid = await artFactoryManager.isARTContract(contractAddress);
   ```

2. **Get the artist address for a contract**:
   ```javascript
   const artistAddress = await artFactoryManager.getContractArtist(contractAddress);
   ```

3. **Grant a role on an ART contract through the manager**:
   ```javascript
   await artFactoryManager.grantRoleOnARTContract(
     artContractAddress,
     LEGACY_PROTECTOR_ROLE,
     legacyProtectorAddress
   );
   ```

4. **Set royalty on an ART contract through the manager** (requires appropriate permissions):
   ```javascript
   await artFactoryManager.setRoyaltyOnARTContract(
     artContractAddress,
     receiverAddress,
     1000 // 10%
   );
   ```

#### Upgrading Contracts

To upgrade the contracts (requires appropriate permissions):

1. **Upgrade the ARTFactory**:
   ```javascript
   // Deploy new implementation
   const ARTFactory = await ethers.getContractFactory("ARTFactory");
   const upgraded = await upgrades.upgradeProxy(factoryProxyAddress, ARTFactory);
   ```

2. **Upgrade the ARTFactoryManager**:
   ```javascript
   // Deploy new implementation
   const ARTFactoryManager = await ethers.getContractFactory("ARTFactoryManager");
   const upgraded = await upgrades.upgradeProxy(managerProxyAddress, ARTFactoryManager);
   ```

3. **Upgrade an ART contract**:
   ```javascript
   // Deploy new implementation
   const ARTToken = await ethers.getContractFactory("ARTToken");
   const upgraded = await upgrades.upgradeProxy(artTokenProxyAddress, ARTToken);
   ```

#### Token Metadata Format

The metadata for each token should follow the OpenSea metadata standard:

```json
{
  "name": "Artwork Name",
  "description": "Description of the artwork",
  "image": "ipfs://QmXxxx",
  "attributes": [
    {
      "trait_type": "Medium",
      "value": "Digital"
    },
    {
      "trait_type": "Style",
      "value": "Abstract"
    }
  ]
}
```

Store this metadata on IPFS or another decentralized storage solution, and use the resulting URI when minting tokens.

## Technical Details

### Smart Contracts

- `ARTFactory.sol`: The factory contract for deploying and tracking ART contracts.
- `ARTFactoryManager.sol`: The manager contract for handling role management and permissions.
- `ARTToken.sol`: The ERC-721 contract for representing an artist's collection.
- `ARTFactoryLib.sol`: Library with utility functions for the factory and manager contracts.
- `ARTTokenLib.sol`: Library with utility functions for the token contracts.
- `ARTPermissions.sol`: Library defining the role-based access control system.

### Recent Changes

- **One Contract Per Artist**: Enforced a restriction that allows each artist to deploy only one contract, with a clear error message when attempting to create multiple contracts.
- **Royalty Permission Restrictions**: Modified the permission model to only allow Full Admins, Contract Owners (Artists), and Legacy Protectors to set or modify royalties. Previously, Minters, Full Editors, and Partial Editors (with token permission) could also set royalties.
- **Removed Token Locking Feature**: Simplified the token management by removing the ability to lock tokens from editing.
- **Artist Name Update Restrictions**: Modified the permission model to only allow Full Admins to update artist names. Previously, Legacy Protectors could also update artist names.

## Development

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Testing

```bash
# Run tests
npx hardhat test
```

### Deployment

```bash
# Deploy to local hardhat network
npx hardhat run scripts/deploy.ts
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Security

These contracts have not been audited and are provided as-is. Use at your own risk in production environments.
