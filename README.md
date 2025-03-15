# Art Registry Consortium (ARC) Smart Contracts

<div>
  <p><strong>Establishing the standard for blockchain-based art provenance</strong></p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Solidity](https://img.shields.io/badge/Solidity-0.8.22-blue.svg)](https://soliditylang.org/)
  [![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-5.2.0-blue.svg)](https://openzeppelin.com/)
  [![Hardhat](https://img.shields.io/badge/Hardhat-2.22.19-orange.svg)](https://hardhat.org/)
</div>

The Art Registry Consortium (ARC) establishes an open standard for documenting and tracking physical artworks on the blockchain. This system uses identity management, artist-owned smart contracts, and a modular token system to ensure secure, standardized, and immutable records of provenance, exhibition history, and ownership for artworks.

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Contract Details](#-contract-details)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Compilation](#compilation)
  - [Testing](#testing)
  - [Deployment](#deployment)
- [Interacting with Contracts](#-interacting-with-contracts)
- [Security Considerations](#-security-considerations)
- [Upgradeability](#-upgradeability)
- [Roles and Permissions](#-roles-and-permissions)
- [Gas Optimization Strategies](#-gas-optimization-strategies)
- [Contract Size Considerations](#-contract-size-considerations)
- [Metadata Structure](#-metadata-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 📋 Overview

The ARC system provides a comprehensive solution for artists, galleries, institutions, and collectors to document and track physical artworks on the blockchain. Key benefits include:

- **🔗 Provenance Tracking**: Immutable record of artwork history and ownership
- **🎨 Artist Control**: Artists maintain ownership of their catalog through dedicated smart contracts
- **📊 Standardized Metadata**: Consistent format for artwork details across the ecosystem
- **💰 Royalty Management**: Built-in support for artist royalties on secondary sales (EIP-2981)
- **🔐 Identity Verification**: Robust identity management for all ecosystem participants
- **🔄 Upgradeability**: Future-proof design with upgradeable contracts

## 🏗️ Architecture

The ARC system consists of the following core components:

1. **Identity Contract**: Manages user identities (Artists, Galleries, Institutions, Collectors) with associated metadata.
2. **ART Factory Contract**: Allows artists to deploy their own ART Contracts.
3. **ART Contract**: Represents an artist's catalog and manages individual ART tokens (unique records tied to physical artworks).
4. **ART Token**: A unique ERC721 token representing a physical artwork with detailed metadata.

The ARC system follows a modular architecture with clear separation of concerns:

1. **Identity Management**: Handled by the Identity contract
2. **Art Contract Deployment**: Managed by the ArtFactory contract
3. **Artwork Management**: Implemented in the ArtContract
4. **Authorization Logic**: Extracted to the AuthorizationLib library
5. **Validation Logic**: Centralized in the ValidationLib library
6. **Constants**: Defined in the ArcConstants library

This modular approach allows for better maintainability, gas optimization, and easier upgrades.

All contracts are upgradable using the UUPS (Universal Upgradeable Proxy Standard) pattern from OpenZeppelin, ensuring future extensibility while maintaining data integrity.

## 📄 Contract Details

### Identity Contract

The Identity Contract manages user identities within the ARC ecosystem. Each identity has a unique ID and is associated with a wallet address.

**Key Features:**
- Four identity types: Artist, Gallery, Institution, Collector
- Comprehensive metadata storage for each identity type
- Custodian system for delegated management
- Role-based access control

**Storage:**
- Unique ID (`uint256`)
- Wallet address (`address`)
- Type (`enum`: Artist, Gallery, Institution, Collector)
- Name (`string`, or alias)
- Description (`string`)
- Identity_image (`string`, an Arweave link)
- Links (`string[]`, e.g., website or social media URLs)
- Tags (`string[]`)
- (Artist-specific) DOB (`uint256`, timestamp)
- (Artist-specific) DOD (`uint256`, timestamp, optional)
- (Artist-specific) Location (`string`)
- (Gallery/Institution-specific) Addresses (`string[]`)
- (Artist-specific) RepresentedBy (`uint256[]`, array of gallery/institution identity IDs representing the artist)
- (Gallery/Institution-specific) RepresentedArtists (`uint256[]`, array of artist identity IDs represented by the gallery/institution)

**Identity Types:**
- 0: Artist
- 1: Gallery
- 2: Institution
- 3: Collector

**Key Functions:**
```solidity
function createIdentity(
    uint8 identityType,
    string memory name,
    string memory description,
    string memory image,
    string[] memory links,
    string[] memory tags,
    uint256 dob,
    uint256 dod,
    string memory location,
    string[] memory addresses
) external returns (uint256);

function updateIdentity(
    uint256 identityId,
    string memory name,
    string memory description,
    string memory image,
    string[] memory links,
    string[] memory tags,
    uint256 dob,
    uint256 dod,
    string memory location,
    string[] memory addresses
) external;

function getIdentityById(uint256 identityId) external view returns (Identity memory);
function getIdentityByAddress(address walletAddress) external view returns (Identity memory);
function assignCustodian(uint256 identityId, uint256 custodianIdentityId) external;
function removeCustodian(uint256 identityId, uint256 custodianIdentityId) external;
function addRepresentation(uint256 artistIdentityId, uint256 representativeIdentityId) external;
function removeRepresentation(uint256 artistIdentityId, uint256 representativeIdentityId) external;
function getRepresentedBy(uint256 artistIdentityId) external view returns (uint256[] memory);
function getRepresentedArtists(uint256 representativeIdentityId) external view returns (uint256[] memory);
```

### ART Factory Contract

The ART Factory Contract allows users with an Artist-type Identity to deploy their own ART Contract.

**Key Features:**
- Minimal proxy pattern for gas-efficient deployments
- Artist-specific contract deployment
- Comprehensive contract tracking
- Automatic naming of ART contracts as "ARC / [Artist Name]" for consistent branding

**Key Functions:**
```solidity
function deployArtContract(
    uint256 artistIdentityId,
    string memory symbol
) external returns (address);

function getArtContractsByArtist(uint256 artistIdentityId) external view returns (address[] memory);
function getAllArtContracts() external view returns (address[] memory);
function upgradeImplementation(address newImplementation) external;
```

**Note:** The `deployArtContract` function automatically sets the name of the ART contract to "ARC / [Artist Name]" based on the artist's name in the Identity contract, ensuring consistent branding across all ART contracts in the ecosystem.

### ART Contract

The ART Contract represents an artist's catalog and manages individual ART tokens.

**Key Features:**
- ERC721 token standard for artwork representation
- EIP-2981 royalty standard implementation
- Comprehensive metadata storage
- Role-based access control for artwork management

**Storage:**
- Artist Identity ID (`uint256`, links to Identity Contract)

**Key Functions:**
```solidity
function mint(ArtMetadata memory metadata) external returns (uint256);
function updateArt(uint256 tokenId, ArtMetadata memory metadata) external;
function setRoyalties(uint256 tokenId, uint256 royaltiesInBasisPoints) external;
function setDefaultRoyalties(uint256 royaltiesInBasisPoints) external;
function getAllArt() external view returns (uint256[] memory);
function getArtMetadata(uint256 tokenId) external view returns (ArtMetadata memory);
function getArtCount() external view returns (uint256);
function getArtistIdentityId() external view returns (uint256);
function transferOwnership(uint256 newArtistIdentityId) external;
function assignPartialEditor(uint256 tokenId, uint256 editorIdentityId) external;
function removePartialEditor(uint256 tokenId, uint256 editorIdentityId) external;
function transferFrom(address from, address to, uint256 tokenId) public override(ERC721Upgradeable, IERC721);
function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public virtual override(ERC721Upgradeable, IERC721);
```

**Optimization Notes:**
- Authorization logic has been moved to the AuthorizationLib library
- Validation logic has been moved to the ValidationLib library
- This reduces the contract size by approximately 1KB (4.31% of the size limit)

**Transfer Functionality:**
- ART tokens follow the ERC721 standard for transfers
- See the [Transferring ART Tokens](#transferring-art-tokens) section for details on transfer functionality

### ART Token (ERC721)

Each ART token represents a physical artwork with detailed metadata.

**Metadata Structure:**
The ART token uses a comprehensive metadata structure to store artwork details. See the [Metadata Structure](#metadata-structure) section for a detailed explanation of all fields and JSON structures.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (v7 or later)
- [Hardhat](https://hardhat.org/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/arc-creator-core-solidity.git
   cd arc-creator-core-solidity
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Compilation

Compile the contracts:

```bash
npx hardhat compile
```

### Testing

Run the test suite:

```bash
npx hardhat test
```

The tests cover all key functionality:
- Creating and updating Identities
- Deploying ART Contracts via the Art Factory
- Minting, updating, and transferring ART tokens
- Assigning and revoking roles
- Upgrading contracts using the UUPS pattern
- Verifying role-based access control
- Testing royalty settings and transfers (EIP-2981 compliance)
- Handling JSON strings in metadata fields
- Edge cases (e.g., unauthorized actions, invalid inputs)

### Deployment

#### Quick Start

1. Create a `.env` file with your credentials (see [Environment Setup](#environment-setup))
2. Deploy to your chosen network:
   ```bash
   # Local development
   npm run deploy:local

   # Sepolia testnet
   npm run deploy:sepolia
   ```

#### Environment Setup

Create a `.env` file with the following variables:

```
# Your private key (keep this secret!)
PRIVATE_KEY=your_private_key_here

# RPC URLs
SEPOLIA_RPC_URL=your_sepolia_rpc_url_here
MAINNET_RPC_URL=your_mainnet_rpc_url_here

# Etherscan API key for verification
ETHERSCAN_API_KEY=your_etherscan_api_key_here
```

#### Deployment Process

The deployment script performs the following steps:

1. Deploys the Identity contract as a UUPS proxy
2. Deploys the ArtContract implementation
3. Deploys the ArtFactory contract as a UUPS proxy
4. Saves deployment information to the `./deployments` directory

#### Deployment Steps

1. **Compile the contracts**:
   ```bash
   npm run compile
   ```

2. **Deploy to a network**:

   **Local Development Network**:

   Start a local Hardhat node:
   ```bash
   npx hardhat node
   ```

   In a separate terminal, deploy to the local network:
   ```bash
   npm run deploy:local
   ```

   **Sepolia Testnet**:
   ```bash
   npm run deploy:sepolia
   ```

   **Other Networks**:
   ```bash
   npx hardhat run scripts/deploy.ts --network <network-name>
   ```
   Make sure the network is configured in your `hardhat.config.ts` file.

3. **Verify contracts on Etherscan**:
   ```bash
   npm run verify:sepolia
   ```

   For other networks:
   ```bash
   npx hardhat run scripts/verify.ts --network <network-name>
   ```

#### Verification Process

The verification script performs the following steps:

1. Finds the most recent deployment for the current network
2. Verifies the ArtContract implementation on Etherscan
3. Provides instructions for verifying the proxy contracts

For the proxy contracts (Identity and ArtFactory), you'll need to verify them manually through the Etherscan UI:

1. Go to the contract address on Etherscan
2. Click on the 'Contract' tab
3. Click 'Verify and Publish'
4. Select 'Proxy Contract'
5. Follow the instructions to verify the implementation contract

#### Troubleshooting Deployment

- **Not enough ETH**: Make sure your wallet has enough ETH for gas fees
- **Nonce too high**: If you get a nonce error, reset your account in MetaMask or use a different account
- **Verification fails**: Double-check your Etherscan API key and make sure the contract was deployed successfully
- **Gas price too low**: If transactions are not being mined, try increasing the gas price in `hardhat.config.ts`
- **Contract size exceeded**: If you encounter "code size exceeded" errors:
  - Verify optimizer settings in `hardhat.config.ts` (set `runs: 1` and `viaIR: true`)
  - See the [Contract Size Considerations](#-contract-size-considerations) section for more strategies
  - Consider splitting functionality into multiple contracts or libraries

### Testnet Deployment Guide

This section explains how to deploy the ARC Creator Core contracts to the Sepolia testnet.

#### Prerequisites for Testnet Deployment

1. Node.js (v16 or later) and npm (v7 or later)
2. An Ethereum wallet with a private key
3. Some Sepolia ETH for gas (you can get this from a faucet like [Sepolia Faucet](https://sepoliafaucet.com/))
4. An RPC URL for the Sepolia network (from Infura, Alchemy, or another provider)
5. An Etherscan API key (for contract verification)

#### Setup for Testnet

1. Create a `.env` file in the root directory with the following variables:

```
# Your private key (keep this secret and never commit to git!)
PRIVATE_KEY=your_private_key_here

# Sepolia RPC URL (from Infura, Alchemy, or other provider)
SEPOLIA_RPC_URL=your_sepolia_rpc_url_here

# Etherscan API key for contract verification
ETHERSCAN_API_KEY=your_etherscan_api_key_here
```

Replace the placeholder values with your actual credentials.

#### Testnet Deployment Steps

1. Compile the contracts:

```bash
npm run compile
```

2. Deploy to Sepolia testnet:

```bash
npm run deploy:sepolia
```

This will:
- Deploy the Identity contract as a UUPS proxy
- Deploy the ArtContract implementation
- Deploy the ArtFactory contract as a UUPS proxy
- Save deployment information to the `./deployments` directory

3. Verify contracts on Etherscan:

```bash
npm run verify:sepolia
```

This will:
- Verify the ArtContract implementation on Etherscan
- Provide instructions for verifying the proxy contracts

#### Manual Proxy Verification

For the proxy contracts (Identity and ArtFactory), you'll need to verify them manually through the Etherscan UI:

1. Go to the contract address on Etherscan
2. Click on the 'Contract' tab
3. Click 'Verify and Publish'
4. Select 'Proxy Contract'
5. Follow the instructions to verify the implementation contract

#### Troubleshooting Testnet Deployment

- **Not enough ETH**: Make sure your wallet has enough Sepolia ETH for gas fees
- **Nonce too high**: If you get a nonce error, reset your account in MetaMask or use a different account
- **Verification fails**: Double-check your Etherscan API key and make sure the contract was deployed successfully
- **Gas price too low**: If transactions are not being mined, try increasing the gas price in `hardhat.config.ts`
- **Contract size exceeded**: If you encounter "code size exceeded" errors:
  - Verify optimizer settings in `hardhat.config.ts` (set `runs: 1` and `viaIR: true`)
  - See the [Contract Size Considerations](#-contract-size-considerations) section for more strategies
  - Consider splitting functionality into multiple contracts or libraries

#### Testnet Resources

- [Hardhat Documentation](https://hardhat.org/docs)
- [OpenZeppelin Upgrades Documentation](https://docs.openzeppelin.com/upgrades-plugins/1.x/)
- [Etherscan API Documentation](https://docs.etherscan.io/)
- [Sepolia Testnet Faucet](https://sepoliafaucet.com/)

## 🔄 Interacting with Contracts

### Creating an Identity

```typescript
// Get Identity contract instance
const identity = await ethers.getContractAt("Identity", identityAddress);

// Create artist identity
await identity.connect(artist).createIdentity(
  0, // Artist type
  "Artist Name",
  "Artist description",
  "https://arweave.net/artist-image",
  ["https://artist.com"],
  ["artist", "painter"],
  946684800, // Jan 1, 2000
  0, // Not deceased
  "Paris",
  []
);

// Get artist identity ID
const artistIdentity = await identity.getIdentityByAddress(artist.address);
const artistIdentityId = artistIdentity.id;
```

### Deploying an ART Contract

```typescript
// Get ART Factory contract instance
const artFactory = await ethers.getContractAt("ArtFactory", artFactoryAddress);

// Deploy ART contract for artist
await artFactory.connect(artist).deployArtContract(
  artistIdentityId,
  "ARTC" // Symbol only - name is automatically set to "ARC / [Artist Name]"
);

// Get deployed ART contract address
const artContracts = await artFactory.getArtContractsByArtist(artistIdentityId);
const artContractAddress = artContracts[0];
```

### Minting an ART Token

```typescript
// Get ART contract instance
const artContract = await ethers.getContractAt("ArtContract", artContractAddress);

// Mint ART token
// For a detailed explanation of all metadata fields, see the Metadata Structure section
const metadata = {
  artistIdentityId: artistIdentityId,
  title: "Artwork Title",
  description: "A detailed description of the artwork, its context, and significance.",
  yearOfCreation: 2024,
  medium: "Oil on canvas",
  dimensions: "100x150 cm",
  edition: "1/1",
  series: "Abstract Series",
  catalogueInventory: "ART-2024-001",
  image: "https://arweave.net/artwork-image",
  // JSON strings for complex data structures
  manualSalesInformation: JSON.stringify({ price: "1000000000000000000", buyer: "0x0000000000000000000000000000000000000000", date: "2024-03-08" }),
  certificationMethod: "NFC chip",
  exhibitionHistory: JSON.stringify([{ name: "Sample Gallery", date: "2024-01-15", location: "New York" }]),
  conditionReports: JSON.stringify([{ date: "2024-02-01", report: "Excellent condition" }]),
  artistStatement: "This artwork represents my vision of the future.",
  bibliography: JSON.stringify([{ title: "Art Today", author: "Jane Doe", page: "45" }]),
  keywords: ["abstract", "contemporary", "colorful"],
  locationCollection: JSON.stringify({ location: "New York", collection: "Private Collection" }),
  status: 0, // Available
  note: "Special commission",
  royalties: 1000 // 10%
};

await artContract.connect(artist).mint(metadata);
```

### Transferring ART Tokens

```typescript
// Transfer as the token owner
await artContract.connect(tokenOwner).transferFrom(tokenOwner.address, recipient.address, tokenId);

// Transfer as an admin (with FULL_ADMIN_ROLE) - can transfer any token regardless of ownership
await artContract.connect(admin).transferFrom(tokenOwner.address, recipient.address, tokenId);

// Safe transfer (checks if recipient is a contract that can receive ERC721 tokens)
await artContract.connect(tokenOwner).safeTransferFrom(tokenOwner.address, recipient.address, tokenId);
```

### Setting Royalties

```typescript
// Set royalties for a specific token
await artContract.connect(artist).setRoyalties(1, 2000); // 20%

// Set default royalties for all new tokens
await artContract.connect(artist).setDefaultRoyalties(1500); // 15%
```

### Transferring Ownership

```typescript
// Transfer ownership to another artist
await artContract.connect(artist).transferOwnership(newArtistIdentityId);
```

## 📚 Libraries

### AuthorizationLib

The AuthorizationLib centralizes all authorization logic for the ARC ecosystem, providing functions to check if a user has the necessary permissions to perform specific actions.

**Key Functions:**
```solidity
function isAuthorizedToMint(uint256 identityId, uint256 artistIdentityId, IIdentity identityContract) internal view returns (bool);
function isAuthorizedToUpdate(uint256 identityId, uint256 tokenId, uint256 artistIdentityId, IIdentity identityContract, mapping(uint256 => mapping(uint256 => bool)) storage partialEditors) internal view returns (bool);
function isAuthorizedToSetRoyalties(uint256 identityId, uint256 artistIdentityId, IIdentity identityContract) internal view returns (bool);
```

### ValidationLib

The ValidationLib centralizes input validation logic across the ARC ecosystem, ensuring consistent validation of all inputs.

**Key Functions:**
```solidity
function validateArtMetadata(IArtContract.ArtMetadata memory metadata) internal pure;
function validateRoyalties(uint256 royaltiesInBasisPoints) internal pure;
function validateTokenExists(bool exists) internal pure;
function validateAuthorization(bool isAuthorized) internal pure;
```

### ArcConstants

The ArcConstants library defines all constants used throughout the ARC ecosystem, ensuring consistency and reducing gas costs.

**Key Constants:**
```solidity
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
```

## 👥 Roles and Permissions

The ARC system implements a robust role-based access control system tied to Identity IDs rather than addresses. This approach provides more flexibility and security, as roles are associated with verified identities rather than changeable wallet addresses.

### Core Roles

1. **Full Admin (ARC) - FULL_ADMIN_ROLE (1)**:
   - Can add/remove other Full Admins (via Identity ID)
   - Deployer of contract infrastructure
   - Can upgrade all contracts
   - Can modify all storage in Identity Contract
   - Can add/remove roles (via Identity ID) on Identity and ART Contracts
   - Can mint/update/transfer ART on any contract
   - Can set royalties on any ART or ART Contract

2. **Art Contract Owner (Artist)**:
   - Can transfer ownership of their ART Contract to another Identity ID
   - Can grant/remove roles (Custodian, Minter, Full Editor, Partial Editor) via Identity ID
   - Can mint/update ART and set royalties in their ART Contract

3. **Custodian**:
   - Can update their assigned Identity (via Identity ID) or ART Contract
   - Can mint/update ART and set royalties in their assigned ART Contract
   - Can assign roles (Minter, Full Editor, Partial Editor) via Identity ID

4. **Minter**:
   - Can mint and update ART in their assigned ART Contract (no royalty control)

5. **Full Editor**:
   - Can update all ART in their assigned ART Contract (no royalty control)

6. **Partial Editor - PARTIAL_EDITOR_ROLE (2)**:
   - Can update specific ART they are assigned to (no royalty control)
   - Cannot transfer tokens or set royalties
   - Cannot assign or revoke roles

7. **Everyone**:
   - Can update their own Identity
   - Can own and transfer ART tokens they own

### Role Assignment

Roles are assigned at different levels:

1. **Contract Level**: Roles that apply to the entire contract (e.g., FULL_ADMIN_ROLE, Minter, Full Editor)
2. **Token Level**: Roles that apply to specific tokens (e.g., PARTIAL_EDITOR_ROLE)

**Key Functions for Role Management:**
```solidity
function assignRole(uint256 identityId, uint256 roleId) external;
function revokeRole(uint256 identityId, uint256 roleId) external;
function assignPartialEditor(uint256 tokenId, uint256 editorIdentityId) external;
function removePartialEditor(uint256 tokenId, uint256 editorIdentityId) external;
```

### Custodian System

In addition to roles, the ARC system implements a custodian system that allows identities to delegate control to other identities:

1. **Artist Custodians**: Can perform actions on behalf of the artist
2. **Gallery Custodians**: Can manage gallery operations
3. **Institution Custodians**: Can manage institution operations

**Key Functions for Custodian Management:**
```solidity
function assignCustodian(uint256 identityId, uint256 custodianIdentityId) external;
function removeCustodian(uint256 identityId, uint256 custodianIdentityId) external;
```

### Authorization Flow

When a user attempts to perform an action, the authorization flow is as follows:

1. Check if the user has a valid identity
2. Check if the user is the artist or a custodian of the artist
3. Check if the user has the required role for the action
4. For token-specific actions, check if the user has the required role for the specific token
5. For transfers, check if the user is the token owner, approved address, operator, or has the FULL_ADMIN_ROLE

## ⚡ Gas Optimization Strategies

The ARC system implements several gas optimization strategies to reduce transaction costs:

### 1. Compiler Optimization

The contracts use aggressive Solidity compiler optimization settings to reduce contract size:

- **Optimizer Enabled**: Set to `true` in hardhat.config.ts
- **Runs Parameter**: Set to `1` to optimize for deployment size rather than runtime efficiency
- **Via IR**: Enabled for more thorough optimization
- **Results**: Successfully reduced the ArtContract implementation size from over 25KB to under the 24.576KB EVM limit

### 2. Library Usage

By moving common logic to libraries, the ARC system reduces contract size and deployment costs:

- **AuthorizationLib**: Centralizes authorization logic
- **ValidationLib**: Centralizes validation logic
- **ArcConstants**: Centralizes constants

This approach reduces the size of the main contracts by approximately 4-5KB, resulting in significant gas savings during deployment.

### 3. Storage Optimization

The ARC system optimizes storage usage to reduce gas costs:

- **Packed Storage**: Related variables are packed into single storage slots where possible
- **Minimal Storage**: Only essential data is stored on-chain
- **JSON Strings**: Complex data structures are stored as JSON strings to reduce storage complexity

### 4. Batch Operations

Where appropriate, the ARC system supports batch operations to reduce the number of transactions:

- **Batch Minting**: Multiple tokens can be minted in a single transaction
- **Batch Role Assignment**: Multiple roles can be assigned in a single transaction

### 5. Proxy Pattern

The use of the UUPS proxy pattern (see [Upgradeability](#upgradeability) section) reduces deployment costs:

- **Shared Implementation**: All ART contracts share the same implementation
- **Minimal Proxy**: Only the proxy contract needs to be deployed for each new artist

### 6. Event Optimization

Events are optimized to reduce gas costs:

- **Indexed Parameters**: Key parameters are indexed for efficient filtering
- **Minimal Event Data**: Only essential data is included in events

### 7. Function Optimization

Functions are optimized to reduce gas costs:

- **View Functions**: Read-only functions are marked as `view` to avoid unnecessary state changes
- **External vs. Public**: Functions are marked as `external` where possible to save gas
- **Function Modifiers**: Custom modifiers are used sparingly to avoid unnecessary gas costs

## 📏 Contract Size Considerations

Ethereum has a maximum contract size limit of 24,576 bytes (24KB) as established by the Spurious Dragon hard fork (EIP-170). The ARC system's contracts, particularly the ArtContract implementation, are complex and feature-rich, which can lead to bytecode that approaches or exceeds this limit.

### Addressing Size Limitations

To ensure successful deployment on Ethereum mainnet and testnets, we've implemented several strategies:

1. **Aggressive Compiler Optimization**: 
   - Set optimizer to enabled with `runs: 1` to prioritize contract size over gas efficiency
   - Enabled `viaIR: true` for more thorough optimization
   - These settings reduced the ArtContract implementation from over 25KB to under the 24.576KB limit

2. **Library Extraction**:
   - Moved authorization logic to AuthorizationLib
   - Moved validation logic to ValidationLib
   - Centralized constants in ArcConstants

3. **Code Refactoring**:
   - Simplified function implementations where possible
   - Reduced redundant code
   - Optimized storage patterns

### Deployment Considerations

When deploying to testnets or mainnet:
- Always compile with optimization enabled
- Monitor contract size during development
- Consider further modularization if adding new features
- Test deployments on testnets before mainnet

If you encounter "code size exceeded" errors during deployment:
1. Verify optimizer settings in hardhat.config.ts
2. Consider further refactoring or splitting functionality
3. Evaluate if all features are necessary or if some can be implemented in separate contracts

## 📋 Metadata Structure

The ARC system uses a standardized metadata structure for artworks, ensuring consistency across the ecosystem. The metadata is stored on-chain for immutability and accessibility.

### ART Token Metadata

The ArtMetadata struct contains comprehensive information about the artwork:

```solidity
struct ArtMetadata {
    uint256 artistIdentityId;
    string title;
    string description;
    uint256 yearOfCreation;
    string medium;
    string dimensions;
    string edition;
    string series;
    string catalogueInventory;
    string image; // Arweave link
    string manualSalesInformation; // JSON string
    string certificationMethod;
    string exhibitionHistory; // JSON string
    string conditionReports; // JSON string
    string artistStatement;
    string bibliography; // JSON string
    string[] keywords;
    string locationCollection; // JSON string
    ArtStatus status;
    string note;
    uint256 royalties; // Basis points (e.g., 1000 = 10%)
}
```

### JSON Fields

Several fields in the metadata use JSON strings to store complex data structures:

#### Manual Sales Information

```json
{
  "price": "1000000000000000000", // Price in wei
  "buyer": "0x1234567890123456789012345678901234567890", // Buyer address
  "date": "2024-03-08", // Date of sale
  "currency": "ETH", // Currency used for the sale
  "marketplace": "OpenSea", // Optional marketplace information
  "transactionHash": "0x..." // Optional transaction hash
}
```

#### Exhibition History

```json
[
  {
    "name": "Contemporary Art Exhibition",
    "date": "2024-01-15",
    "endDate": "2024-02-15", // Optional end date
    "location": "New York",
    "venue": "Metropolitan Museum of Art",
    "curator": "John Doe",
    "description": "A showcase of contemporary art"
  },
  {
    "name": "Digital Art Festival",
    "date": "2023-06-10",
    "location": "Paris",
    "venue": "Centre Pompidou"
  }
]
```

#### Condition Reports

```json
[
  {
    "date": "2024-02-01",
    "report": "Excellent condition",
    "inspector": "Jane Smith",
    "notes": "No visible damage or deterioration",
    "images": ["https://arweave.net/condition-image-1"]
  },
  {
    "date": "2023-10-15",
    "report": "Minor wear on frame",
    "inspector": "Conservation Department",
    "notes": "Frame shows minor wear on bottom edge"
  }
]
```

#### Bibliography

```json
[
  {
    "title": "Art Today",
    "author": "Jane Doe",
    "publication": "Art Press",
    "year": "2023",
    "page": "45",
    "isbn": "978-3-16-148410-0",
    "url": "https://example.com/article"
  },
  {
    "title": "Contemporary Masters",
    "author": "John Smith",
    "publication": "Art Review",
    "year": "2022",
    "page": "78-80"
  }
]
```

#### Location Collection

```json
{
  "location": "New York",
  "collection": "Private Collection",
  "collector": "Anonymous",
  "storageConditions": "Climate controlled",
  "notes": "On display in private residence"
}
```

### Metadata Validation

The ValidationLib ensures that all metadata fields meet the required standards:

- **Required Fields**: Title, description, and image are required
- **Field Length**: Maximum length limits are enforced for string fields
- **Year Validation**: Year of creation must be valid
- **Royalties Validation**: Royalties must be between 0 and 10000 basis points (0-100%)

### Metadata Updates

Metadata can be updated by users with the appropriate permissions:

- **Artist or Custodian**: Can update all metadata fields
- **FULL_ADMIN_ROLE**: Can update all metadata fields
- **PARTIAL_EDITOR_ROLE**: Can update specific metadata fields for assigned tokens

All metadata updates are recorded on-chain, ensuring a complete history of changes.

## 🔒 Security Considerations

The ARC contracts implement several security measures:

1. **Role-Based Access Control**: Granular permissions tied to Identity IDs
2. **Input Validation**: Thorough validation of all inputs
3. **Upgradeability**: UUPS pattern for secure upgrades
4. **Reentrancy Protection**: OpenZeppelin's ReentrancyGuard where needed
5. **Error Handling**: Custom error messages for better debugging
6. **Gas Limits**: Consideration of gas limits in loops and batch operations
7. **Library Usage**: Separation of concerns for better maintainability

### Best Practices

- Always verify the identity of users before granting roles
- Regularly audit the contracts for security vulnerabilities
- Test upgrades thoroughly before deploying to mainnet
- Monitor gas usage patterns for optimization opportunities
- Keep private keys secure and use multisig wallets for admin operations

## 🔄 Upgradeability

The ARC contracts use the UUPS (Universal Upgradeable Proxy Standard) pattern from OpenZeppelin for upgradeability:

1. **Proxy Contracts**: Store the state but delegate function calls to the implementation
2. **Implementation Contracts**: Contain the logic but no state
3. **Initializer Functions**: Used instead of constructors for initialization
4. **_authorizeUpgrade Function**: Controls who can upgrade the contract

**Key Components:**

- Only accounts with the FULL_ADMIN_ROLE can upgrade contracts
- The _authorizeUpgrade function is protected by access control
- Upgrades should be thoroughly tested before deployment

To upgrade a contract:

```typescript
// Deploy new implementation
const NewImplementation = await ethers.getContractFactory("NewImplementation");
const newImplementation = await NewImplementation.deploy();

// Upgrade proxy
await upgrades.upgradeProxy(proxyAddress, NewImplementation);
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Project Link: [https://artregistryconsortium.com](https://artregistryconsortium.com)

---

<div>
  <p>Made with ❤️ by the ARC Team</p>

  <a href="https://discord.gg/Cr8fcmDa">
    <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord">
  </a>
  <a href="https://github.com/ArtRegistryConsortium">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</div>
