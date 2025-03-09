# Art Registry Consortium (ARC) Smart Contracts

The Art Registry Consortium (ARC) establishes an open standard for documenting and tracking physical artworks on the blockchain. This system uses identity management, artist-owned smart contracts, and a modular token system to ensure secure, standardized, and immutable records of provenance, exhibition history, and ownership for artworks.

## Overview

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
- Unique ID (uint256)
- Wallet address (address)
- Type (enum: Artist, Gallery, Institution, Collector)
- Name (string, or alias)
- Description (string)
- Identity_image (string, an Arweave link)
- Links (string[], e.g., website or social media URLs)
- Tags (string[])
- (Artist-specific) DOB (uint256, timestamp)
- (Artist-specific) DOD (uint256, timestamp, optional)
- (Artist-specific) Location (string)
- (Gallery/Institution-specific) Addresses (string[])

**Key Features:**
- Create and update identities
- Get identity by wallet address or ID
- Get a list of all identities
- Assign and remove custodians for identities
- Role-based access control tied to Identity IDs

### ART Factory Contract

The ART Factory Contract allows users with an Artist-type Identity to deploy their own ART Contract.

**Key Features:**
- Deploy new ART Contracts for artists
- Get a list of ART Contracts by artist
- Get a list of all ART Contracts
- Upgrade the implementation contract for new deployments
- Uses minimal proxy pattern (EIP-1167) for gas-efficient deployments

### ART Contract

The ART Contract represents an artist's catalog and manages individual ART tokens.

**Storage:**
- Artist Identity ID (uint256, links to Identity Contract)

**Key Features:**
- Mint new ART tokens
- Update existing ART tokens
- Set royalties for specific tokens or as a default
- Get a list of all ART tokens
- Transfer ownership to another artist
- Role-based access control tied to Identity IDs
- Assign and remove partial editors for specific tokens

### ART Token (ERC721)

Each ART token represents a physical artwork with detailed metadata.

**Metadata:**
1. Artist(s) Identity (uint256, links to Identity Contract)
2. Title (string)
3. Year of Creation (uint256)
4. Medium (string)
5. Dimensions (string, e.g., "50x70x5 cm")
6. Edition (string, e.g., "1/10", optional)
7. Series (string, optional)
8. Catalogue Inventory (string, e.g., "CR-2024-01")
9. Image (string, an Arweave link, optional)
10. Sales Information (string, a JSON string, optional)
11. Certification Method (string, e.g., "NFC chip")
12. Exhibition History (string, a JSON string, optional)
13. Condition Reports (string, a JSON string, optional)
14. Artist Statement (string)
15. Bibliography (string, a JSON string, optional)
16. Keywords or Tags (string[])
17. Location / Collection (string, a JSON string, optional)
18. Status (enum: Available, NotAvailable, Sold)
19. Note (string, optional)
20. Royalties (uint256, percentage in basis points, e.g., 1000 = 10%)

## Roles and Permissions

The ARC system implements role-based access control tied to Identities (via Identity ID), not wallet addresses:

### Full Admin (ARC)
- Can add/remove other Full Admins (via Identity ID)
- Deployer of contract infrastructure
- Can upgrade all contracts
- Can modify all storage in Identity Contract
- Can add/remove roles (via Identity ID) on Identity and ART Contracts
- Can mint/update/transfer ART on any contract
- Can set royalties on any ART or ART Contract

### Art Contract Owner (Artist)
- Can transfer ownership of their ART Contract to another Identity ID
- Can grant/remove roles (Custodian, Minter, Full Editor, Partial Editor) via Identity ID
- Can mint/update ART and set royalties in their ART Contract

### Custodian
- Can update their assigned Identity (via Identity ID) or ART Contract
- Can mint/update ART and set royalties in their assigned ART Contract
- Can assign roles (Minter, Full Editor, Partial Editor) via Identity ID

### Minter
- Can mint and update ART in their assigned ART Contract (no royalty control)

### Full Editor
- Can update all ART in their assigned ART Contract (no royalty control)

### Partial Editor
- Can update specific ART they are assigned to (no royalty control)

### Everyone
- Can update their own Identity
- Can own and transfer ART tokens they own

## Gas Optimization Strategies

The contracts implement several gas optimization strategies:

1. **Minimal Proxy Pattern (EIP-1167)**: Used in the ART Factory to deploy new ART Contracts with minimal gas cost.
2. **Efficient Storage**: Using mappings instead of arrays where possible to reduce gas costs.
3. **Batch Operations**: Implementing batch operations where appropriate to reduce transaction costs.
4. **Optimized Data Structures**: Using appropriate data structures to minimize storage and retrieval costs.
5. **Selective Storage**: Storing only essential data on-chain, with options for off-chain storage via Arweave links.

## Deployment

To deploy the ARC contracts:

1. Clone the repository
2. Install dependencies: `npm install`
3. Compile contracts: `npx hardhat compile`
4. Run deployment script: `npx hardhat run scripts/deploy.ts --network <network>`

The deployment script will:
1. Deploy the Identity contract
2. Deploy the ART Contract implementation
3. Deploy the ART Factory contract
4. Link the contracts together

## Testing

To run the tests:

```
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

## Dependencies

- Solidity ^0.8.20
- OpenZeppelin Contracts (Ownable, AccessControl, ERC721, UUPS Upgradeable)
- Hardhat development environment

## License

MIT
