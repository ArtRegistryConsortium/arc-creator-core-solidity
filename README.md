# Art Registry Consortium (ARC) Smart Contracts

The Art Registry Consortium (ARC) establishes an open standard for documenting and tracking physical artworks on the blockchain. This system uses identity management, artist-owned smart contracts, and a modular token system to ensure secure, standardized, and immutable records of provenance, exhibition history, and ownership for artworks.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.22-blue.svg)](https://soliditylang.org/)
[![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-4.9.0-blue.svg)](https://openzeppelin.com/)

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Contract Details](#contract-details)
  - [Identity Contract](#identity-contract)
  - [ART Factory Contract](#art-factory-contract)
  - [ART Contract](#art-contract)
  - [ART Token (ERC721)](#art-token-erc721)
- [Libraries](#libraries)
  - [AuthorizationLib](#authorizationlib)
  - [ValidationLib](#validationlib)
  - [ArcConstants](#arcconstants)
- [Roles and Permissions](#roles-and-permissions)
- [Gas Optimization Strategies](#gas-optimization-strategies)
- [Metadata Structure](#metadata-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Compilation](#compilation)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Testnet Deployment Guide](#testnet-deployment-guide)
- [Interacting with Contracts](#interacting-with-contracts)
  - [Creating an Identity](#creating-an-identity)
  - [Deploying an ART Contract](#deploying-an-art-contract)
  - [Minting an ART Token](#minting-an-art-token)
  - [Setting Royalties](#setting-royalties)
  - [Transferring Ownership](#transferring-ownership)
- [Security Considerations](#security-considerations)
- [Upgradeability](#upgradeability)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The ARC system provides a comprehensive solution for artists, galleries, institutions, and collectors to document and track physical artworks on the blockchain. Key benefits include:

- **Provenance Tracking**: Immutable record of artwork history and ownership
- **Artist Control**: Artists maintain ownership of their catalog through dedicated smart contracts
- **Standardized Metadata**: Consistent format for artwork details across the ecosystem
- **Royalty Management**: Built-in support for artist royalties on secondary sales (EIP-2981)
- **Identity Verification**: Robust identity management for all ecosystem participants
- **Upgradeability**: Future-proof design with upgradeable contracts

## Architecture

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

## Contract Details

### Identity Contract

The Identity Contract manages user identities within the ARC ecosystem. Each identity has a unique ID and is associated with a wallet address.

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
```

### ART Factory Contract

The ART Factory Contract allows users with an Artist-type Identity to deploy their own ART Contract.

**Key Functions:**
```solidity
function deployArtContract(
    uint256 artistIdentityId,
    string memory name,
    string memory symbol
) external returns (address);

function getArtContractsByArtist(uint256 artistIdentityId) external view returns (address[] memory);
function getAllArtContracts() external view returns (address[] memory);
function upgradeImplementation(address newImplementation) external;
```

### ART Contract

The ART Contract represents an artist's catalog and manages individual ART tokens.

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
- ART NFTs can be transferred by both the token owner and users with the FULL_ADMIN_ROLE
- Standard ERC721 authorization applies for token owners (owner, approved address, or operator)
- FULL_ADMIN_ROLE can transfer any token regardless of ownership
- All transfers emit the standard Transfer event for compatibility with marketplaces and wallets

### ART Token (ERC721)

Each ART token represents a physical artwork with detailed metadata.

**Metadata Structure:**
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

**JSON Fields:**

- **manualSalesInformation**: Contains price, buyer address, and date
- **exhibitionHistory**: Array of exhibitions with name, date, and location
- **conditionReports**: Array of reports with date and description
- **bibliography**: Array of references with title, author, and page
- **locationCollection**: Contains location and collection information

## Getting Started

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

The ARC Creator Core contracts can be deployed to various networks, including local development networks and public testnets.

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

#### Testnet Resources

- [Hardhat Documentation](https://hardhat.org/docs)
- [OpenZeppelin Upgrades Documentation](https://docs.openzeppelin.com/upgrades-plugins/1.x/)
- [Etherscan API Documentation](https://docs.etherscan.io/)
- [Sepolia Testnet Faucet](https://sepoliafaucet.com/)

## Interacting with Contracts

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
  "Artist Collection",
  "ARTC"
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
  manualSalesInformation: JSON.stringify({
    price: "1000000000000000000",
    buyer: "0x0000000000000000000000000000000000000000",
    date: "2024-03-08"
  }),
  certificationMethod: "NFC chip",
  exhibitionHistory: JSON.stringify([
    {
      name: "Sample Gallery",
      date: "2024-01-15",
      location: "New York"
    }
  ]),
  conditionReports: JSON.stringify([
    {
      date: "2024-02-01",
      report: "Excellent condition"
    }
  ]),
  artistStatement: "This artwork represents my vision of the future.",
  bibliography: JSON.stringify([
    {
      title: "Art Today",
      author: "Jane Doe",
      page: "45"
    }
  ]),
  keywords: ["abstract", "contemporary", "colorful"],
  locationCollection: JSON.stringify({
    location: "New York",
    collection: "Private Collection"
  }),
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

## Security Considerations

The ARC contracts implement several security measures:

1. **Role-Based Access Control**: Granular permissions tied to Identity IDs
2. **Input Validation**: Thorough validation of all inputs
3. **Upgradeability**: UUPS pattern for secure upgrades
4. **Reentrancy Protection**: OpenZeppelin's ReentrancyGuard where needed
5. **Error Handling**: Custom error messages for better debugging
6. **Gas Limits**: Consideration of gas limits in loops and batch operations
7. **Library Usage**: Separation of concerns for better maintainability

**Best Practices:**

- Always verify the identity of users before granting roles
- Regularly audit the contracts for security vulnerabilities
- Test upgrades thoroughly before deploying to mainnet
- Monitor gas usage patterns for optimization opportunities
- Keep private keys secure and use multisig wallets for admin operations

## Upgradeability

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://artregistryconsortium.com](https://artregistryconsortium.com)

---

<p align="center">
  Made with ❤️ by the ARC Team
</p>
