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
- [Roles and Permissions](#roles-and-permissions)
- [Gas Optimization Strategies](#gas-optimization-strategies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Compilation](#compilation)
  - [Testing](#testing)
  - [Deployment](#deployment)
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
```

### ART Token (ERC721)

Each ART token represents a physical artwork with detailed metadata.

**Metadata Structure:**
```solidity
struct ArtMetadata {
    uint256 artistIdentityId;
    string title;
    uint256 yearOfCreation;
    string medium;
    string dimensions;
    string edition;
    string series;
    string catalogueInventory;
    string image; // Arweave link
    string salesInformation; // JSON string
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

## Roles and Permissions

The ARC system implements role-based access control tied to Identities (via Identity ID), not wallet addresses:

| Role | Permissions |
|------|-------------|
| **Full Admin (ARC)** | • Can add/remove other Full Admins (via Identity ID)<br>• Deployer of contract infrastructure<br>• Can upgrade all contracts<br>• Can modify all storage in Identity Contract<br>• Can add/remove roles (via Identity ID) on Identity and ART Contracts<br>• Can mint/update/transfer ART on any contract<br>• Can set royalties on any ART or ART Contract |
| **Art Contract Owner (Artist)** | • Can transfer ownership of their ART Contract to another Identity ID<br>• Can grant/remove roles (Custodian, Minter, Full Editor, Partial Editor) via Identity ID<br>• Can mint/update ART and set royalties in their ART Contract |
| **Custodian** | • Can update their assigned Identity (via Identity ID) or ART Contract<br>• Can mint/update ART and set royalties in their assigned ART Contract<br>• Can assign roles (Minter, Full Editor, Partial Editor) via Identity ID |
| **Minter** | • Can mint and update ART in their assigned ART Contract (no royalty control) |
| **Full Editor** | • Can update all ART in their assigned ART Contract (no royalty control) |
| **Partial Editor** | • Can update specific ART they are assigned to (no royalty control) |
| **Everyone** | • Can update their own Identity<br>• Can own and transfer ART tokens they own |

## Gas Optimization Strategies

The contracts implement several gas optimization strategies:

1. **Minimal Proxy Pattern (EIP-1167)**: Used in the ART Factory to deploy new ART Contracts with minimal gas cost.
2. **Efficient Storage**: Using mappings instead of arrays where possible to reduce gas costs.
3. **Batch Operations**: Implementing batch operations where appropriate to reduce transaction costs.
4. **Optimized Data Structures**: Using appropriate data structures to minimize storage and retrieval costs.
5. **Selective Storage**: Storing only essential data on-chain, with options for off-chain storage via Arweave links.

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

Deploy the contracts to a network:

```bash
npx hardhat run scripts/deploy.ts --network <network>
```

Available networks:
- `localhost`: Local Hardhat network
- `goerli`: Ethereum Goerli testnet
- `sepolia`: Ethereum Sepolia testnet
- `mainnet`: Ethereum mainnet

The deployment script will:
1. Deploy the Identity contract
2. Deploy the ART Contract implementation
3. Deploy the ART Factory contract
4. Link the contracts together

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
  yearOfCreation: 2024,
  medium: "Oil on canvas",
  dimensions: "100x150 cm",
  edition: "1/1",
  series: "Abstract Series",
  catalogueInventory: "ART-2024-001",
  image: "https://arweave.net/artwork-image",
  salesInformation: JSON.stringify({
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

## Upgradeability

The ARC contracts use the UUPS (Universal Upgradeable Proxy Standard) pattern from OpenZeppelin for upgradeability:

1. **Proxy Contracts**: Store the state but delegate function calls
2. **Implementation Contracts**: Contain the logic but no state
3. **Upgrade Process**: Replace implementation while preserving state

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

Project Link: [https://github.com/yourusername/arc-creator-core-solidity](https://github.com/yourusername/arc-creator-core-solidity)

---

<p align="center">
  Made with ❤️ by the ARC Team
</p>
