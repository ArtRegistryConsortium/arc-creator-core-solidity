import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { Contract } from "ethers";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("ARC Contracts", function () {
  // Contracts
  let identity: any;
  let artContractImplementation: any;
  let artFactory: any;
  let artistArtContract: any;

  // Signers
  let admin: HardhatEthersSigner;
  let artist: HardhatEthersSigner;
  let gallery: HardhatEthersSigner;
  let collector: HardhatEthersSigner;
  let custodian: HardhatEthersSigner;

  // Identity IDs
  let adminIdentityId: bigint;
  let artistIdentityId: bigint;
  let galleryIdentityId: bigint;
  let collectorIdentityId: bigint;
  let custodianIdentityId: bigint;

  // Constants
  const FULL_ADMIN_ROLE = ethers.keccak256(ethers.toUtf8Bytes("FULL_ADMIN_ROLE"));
  const CUSTODIAN_ROLE = ethers.keccak256(ethers.toUtf8Bytes("CUSTODIAN_ROLE"));
  const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));
  const FULL_EDITOR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("FULL_EDITOR_ROLE"));
  const PARTIAL_EDITOR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("PARTIAL_EDITOR_ROLE"));
  const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;

  // Interfaces for specific function signatures
  const identityRoleInterface = new ethers.Interface([
    "function grantRole(bytes32 role, uint256 identityId)",
    "function revokeRole(bytes32 role, uint256 identityId)",
    "function hasRole(bytes32 role, uint256 identityId) view returns (bool)"
  ]);

  const artContractRoleInterface = new ethers.Interface([
    "function grantRole(bytes32 role, uint256 identityId)",
    "function revokeRole(bytes32 role, uint256 identityId)",
    "function hasRole(bytes32 role, uint256 identityId) view returns (bool)"
  ]);

  const accessControlInterface = new ethers.Interface([
    "function grantRole(bytes32 role, address account)",
    "function revokeRole(bytes32 role, address account)",
    "function hasRole(bytes32 role, address account) view returns (bool)"
  ]);

  // Sample metadata
  const sampleArtMetadata = {
    artistIdentityId: 0n, // Will be set during tests
    title: "Sample Artwork",
    description: "A beautiful abstract painting exploring themes of color and form.",
    yearOfCreation: 2024,
    medium: "Oil on canvas",
    dimensions: "100x150 cm",
    edition: "1/1",
    series: "Abstract Series",
    image: "https://arweave.net/sample-hash",
    tokenUri: "https://metadata.arc.com/sample-artwork-metadata",
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
    note: "Special commission",
    royalties: 1000 // 10%
  };

  beforeEach(async function () {
    // Get signers
    [admin, artist, gallery, collector, custodian] = await ethers.getSigners();

    // Deploy Identity contract
    const Identity = await ethers.getContractFactory("Identity");
    identity = await upgrades.deployProxy(Identity, [admin.address], {
      kind: "uups",
      initializer: "initialize",
    });
    await identity.waitForDeployment();

    // Create identities
    const adminLinks = JSON.stringify({
      links: [
        {
          type: "website",
          url: "https://admin.com",
          title: "Admin Website"
        }
      ]
    });

    const adminAddresses = JSON.stringify({
      addresses: []
    });

    await identity.connect(admin).createIdentity(
      0, // Artist
      "Admin Artist",
      "Admin with artist identity",
      "https://arweave.net/admin-image",
      adminLinks,
      ["admin", "artist"],
      946684800, // Jan 1, 2000
      0, // Not deceased
      "New York",
      adminAddresses,
      "", // representedBy
      "" // representedArtists
    );
    adminIdentityId = await identity.getIdentityByAddress(admin.address).then(id => id.id);

    const artistLinks = JSON.stringify({
      links: [
        {
          type: "website",
          url: "https://artist.com",
          title: "Artist Website"
        }
      ]
    });

    const artistAddresses = JSON.stringify({
      addresses: []
    });

    await identity.connect(artist).createIdentity(
      0, // Artist
      "Test Artist",
      "Artist for testing",
      "https://arweave.net/artist-image",
      artistLinks,
      ["artist", "painter"],
      946684800, // Jan 1, 2000
      0, // Not deceased
      "Paris",
      artistAddresses,
      "", // representedBy
      "" // representedArtists
    );
    artistIdentityId = await identity.getIdentityByAddress(artist.address).then(id => id.id);

    const galleryLinks = JSON.stringify({
      links: [
        {
          type: "website",
          url: "https://gallery.com",
          title: "Gallery Website"
        }
      ]
    });

    const galleryAddresses = JSON.stringify({
      addresses: [
        {
          type: "gallery",
          street: "123 Gallery St",
          city: "New York",
          state: "NY",
          country: "USA",
          postalCode: "10001",
          isPrimary: true
        }
      ]
    });

    await identity.connect(gallery).createIdentity(
      1, // Gallery
      "Test Gallery",
      "Gallery for testing",
      "https://arweave.net/gallery-image",
      galleryLinks,
      ["gallery", "contemporary"],
      0,
      0,
      "",
      galleryAddresses,
      "", // representedBy
      "" // representedArtists
    );
    galleryIdentityId = await identity.getIdentityByAddress(gallery.address).then(id => id.id);

    await identity.connect(collector).createIdentity(
      3, // Collector
      "Test Collector",
      "Collector for testing",
      "https://arweave.net/collector-image",
      JSON.stringify({
        links: [
          {
            type: "website",
            url: "https://collector.com",
            title: "Collector Website"
          }
        ]
      }),
      ["collector", "art lover"],
      0,
      0,
      "",
      JSON.stringify({
        addresses: []
      }),
      "", // representedBy
      "" // representedArtists
    );
    collectorIdentityId = await identity.getIdentityByAddress(collector.address).then(id => id.id);

    await identity.connect(custodian).createIdentity(
      3, // Collector (acting as custodian)
      "Test Custodian",
      "Custodian for testing",
      "https://arweave.net/custodian-image",
      JSON.stringify({
        links: [
          {
            type: "website",
            url: "https://custodian.com",
            title: "Custodian Website"
          }
        ]
      }),
      ["custodian"],
      0,
      0,
      "",
      JSON.stringify({
        addresses: []
      }),
      "", // representedBy
      "" // representedArtists
    );
    custodianIdentityId = await identity.getIdentityByAddress(custodian.address).then(id => id.id);

    // Grant roles - use the specific interface to avoid ambiguity
    const identityWithRoles = new ethers.Contract(
      await identity.getAddress(),
      identityRoleInterface,
      admin
    );
    await identityWithRoles.grantRole(CUSTODIAN_ROLE, custodianIdentityId);

    // Deploy ART Contract implementation
    const ArtContract = await ethers.getContractFactory("ArtContract");
    artContractImplementation = await ArtContract.deploy();
    await artContractImplementation.waitForDeployment();

    // Deploy ART Factory contract
    const ArtFactory = await ethers.getContractFactory("ArtFactory");
    artFactory = await upgrades.deployProxy(
      ArtFactory,
      [admin.address, await identity.getAddress(), await artContractImplementation.getAddress()],
      {
        kind: "uups",
        initializer: "initialize",
      }
    );
    await artFactory.waitForDeployment();

    // Deploy an ART Contract directly (not through factory)
    const artContractProxy = await upgrades.deployProxy(
      ArtContract,
      [artistIdentityId, "Artist Collection", "ARTC"],
      {
        kind: "uups",
        initializer: "initialize",
      }
    );
    await artContractProxy.waitForDeployment();
    artistArtContract = artContractProxy;
    
    // Set the Identity contract reference in the ART Contract
    await artistArtContract.setIdentityContract(await identity.getAddress());
  });

  describe("Identity Contract", function () {
    it("Should create identities correctly", async function () {
      const adminIdentity = await identity.getIdentityById(adminIdentityId);
      expect(adminIdentity.name).to.equal("Admin Artist");
      expect(adminIdentity.identityType).to.equal(0); // Artist

      const artistIdentity = await identity.getIdentityById(artistIdentityId);
      expect(artistIdentity.name).to.equal("Test Artist");
      expect(artistIdentity.identityType).to.equal(0); // Artist

      const galleryIdentity = await identity.getIdentityById(galleryIdentityId);
      expect(galleryIdentity.name).to.equal("Test Gallery");
      expect(galleryIdentity.identityType).to.equal(1); // Gallery
    });

    it("Should update identities correctly", async function () {
      await identity.connect(artist).updateIdentity(
        2, // identityId
        0, // Artist type
        "Updated Artist",
        "Updated description",
        "https://arweave.net/updated-artist-image",
        "{\"links\":[{\"type\":\"website\",\"url\":\"https://updated-artist.com\",\"title\":\"Updated Artist Website\"}]}",
        ["updated", "artist"],
        946684800,
        0,
        "Berlin",
        "{\"addresses\":[]}",
        "",
        ""
      );

      const updatedArtistIdentity = await identity.getIdentityById(artistIdentityId);
      expect(updatedArtistIdentity.name).to.equal("Updated Artist");
      expect(updatedArtistIdentity.description).to.equal("Updated description");
      expect(updatedArtistIdentity.location).to.equal("Berlin");
    });

    it("Should assign and remove custodians correctly", async function () {
      // Assign custodian
      await identity.connect(artist).assignCustodian(artistIdentityId, custodianIdentityId);

      // Update identity as custodian
      await identity.connect(custodian).updateIdentity(
        artistIdentityId, // Use the correct ID instead of hardcoded 2
        0, // Artist type
        "Custodian Updated Artist",
        "Custodian updated description",
        "https://arweave.net/custodian-updated-artist-image",
        "{\"links\":[{\"type\":\"website\",\"url\":\"https://custodian-updated-artist.com\",\"title\":\"Custodian Updated Artist Website\"}]}",
        ["custodian", "updated", "artist"],
        946684800,
        0,
        "London",
        "{\"addresses\":[]}",
        "",
        ""
      );

      const custodianUpdatedArtistIdentity = await identity.getIdentityById(artistIdentityId);
      expect(custodianUpdatedArtistIdentity.name).to.equal("Custodian Updated Artist");
      expect(custodianUpdatedArtistIdentity.location).to.equal("London");

      // Remove custodian
      await identity.connect(artist).removeCustodian(artistIdentityId, custodianIdentityId);

      // Try to update identity as custodian (should fail)
      await expect(
        identity.connect(custodian).updateIdentity(
          artistIdentityId,
          0, // Artist type
          "Should Fail",
          "Should fail description",
          "https://arweave.net/should-fail-image",
          JSON.stringify({
            links: [
              {
                type: "website",
                url: "https://should-fail.com",
                title: "Should Fail Website"
              }
            ]
          }),
          ["should", "fail"],
          946684800, // Jan 1, 2000
          0, // Not deceased
          "Tokyo",
          JSON.stringify({
            addresses: []
          }),
          "", // representedBy
          "" // representedArtists
        )
      ).to.be.revertedWith("Unauthorized");
    });

    it("Should grant and revoke roles correctly", async function () {
      // Create contract instances with specific interfaces
      const identityWithRoles = new ethers.Contract(
        await identity.getAddress(),
        identityRoleInterface,
        admin
      );
      
      // Grant MINTER_ROLE to gallery
      await identityWithRoles.grantRole(MINTER_ROLE, galleryIdentityId);
      
      // Check if gallery has MINTER_ROLE
      expect(await identityWithRoles.hasRole(MINTER_ROLE, galleryIdentityId)).to.be.true;
      
      // Revoke MINTER_ROLE from gallery
      await identityWithRoles.revokeRole(MINTER_ROLE, galleryIdentityId);
      
      // Check if gallery no longer has MINTER_ROLE
      expect(await identityWithRoles.hasRole(MINTER_ROLE, galleryIdentityId)).to.be.false;
    });
  });

  describe("ART Contract", function () {
    it("Should mint ART tokens correctly", async function () {
      // Set the artist identity ID in the metadata
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      
      // Mint an ART token
      await artistArtContract.connect(artist).mint(metadata);
      
      // Check if the ART token was minted correctly
      const artCount = await artistArtContract.getArtCount();
      expect(artCount).to.equal(1n);
      
      // Get the ART token metadata
      const tokenId = 1n;
      const artMetadata = await artistArtContract.getArtMetadata(tokenId);
      
      // Verify metadata
      expect(artMetadata.title).to.equal("Sample Artwork");
      expect(artMetadata.description).to.equal("A beautiful abstract painting exploring themes of color and form.");
      expect(artMetadata.medium).to.equal("Oil on canvas");
      expect(artMetadata.artistIdentityId).to.equal(artistIdentityId);
    });

    it("Should update ART tokens correctly", async function () {
      // Set the artist identity ID in the metadata
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      
      // Mint an ART token
      await artistArtContract.connect(artist).mint(metadata);
      
      // Update metadata
      const updatedMetadata = {
        ...metadata,
        title: "Updated Artwork",
        description: "An updated description for the artwork after modifications.",
        medium: "Acrylic on canvas",
        note: "Updated note"
      };

      // Update artwork
      const tokenId = 1n;
      await artistArtContract.connect(artist).updateArt(tokenId, updatedMetadata);

      // Verify updated metadata
      const artMetadata = await artistArtContract.getArtMetadata(tokenId);

      // Check updated metadata
      expect(artMetadata.title).to.equal("Updated Artwork");
      expect(artMetadata.description).to.equal("An updated description for the artwork after modifications.");
      expect(artMetadata.medium).to.equal("Acrylic on canvas");
      expect(artMetadata.note).to.equal("Updated note");
    });

    it("Should set royalties correctly", async function () {
      // Set the artist identity ID in the metadata
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      
      // Mint an ART token
      await artistArtContract.connect(artist).mint(metadata);
      
      // Set royalties for the token
      const newRoyalties = 2000; // 20%
      await artistArtContract.connect(artist).setRoyalties(1, newRoyalties);
      
      // Get the ART token metadata
      const tokenId = 1n;
      const artMetadata = await artistArtContract.getArtMetadata(tokenId);
      
      // Check royalties
      expect(artMetadata.royalties).to.equal(newRoyalties);
      
      // Check royalty info
      const salePrice = 1000000n;
      const [receiver, royaltyAmount] = await artistArtContract.royaltyInfo(tokenId, salePrice);
      expect(royaltyAmount).to.equal((salePrice * BigInt(newRoyalties)) / 10000n);
    });

    it("Should assign and use roles correctly", async function () {
      
      // First, mint a token as the artist
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      await artistArtContract.connect(artist).mint(metadata);
      
      // Grant MINTER_ROLE to gallery's identity ID in the Identity contract
      const identityWithRoles = new ethers.Contract(
        await identity.getAddress(),
        identityRoleInterface,
        admin
      );
      await identityWithRoles.grantRole(MINTER_ROLE, galleryIdentityId);
      
      // Verify that the gallery's identity has the MINTER_ROLE
      expect(await identityWithRoles.hasRole(MINTER_ROLE, galleryIdentityId)).to.be.true;
      
      // Set the artist identity ID in the metadata for the second token
      const metadata2 = { 
        ...sampleArtMetadata, 
        artistIdentityId: artistIdentityId,
        title: "Gallery Minted Artwork",
        description: "Artwork minted by a gallery on behalf of the artist.",
        yearOfCreation: 2024,
        medium: "Oil on canvas",
        dimensions: "100x150 cm",
        edition: "1/1",
        series: "Abstract Series",
        image: "https://arweave.net/sample-hash",
        tokenUri: "https://metadata.arc.com/gallery-artwork-metadata",
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
        note: "Special commission",
        royalties: 1000 // 10%
      };
      
      // Mint an ART token as gallery
      await artistArtContract.connect(gallery).mint(metadata2);
      
      // Check if the ART token was minted correctly
      const artCount = await artistArtContract.getArtCount();
      expect(artCount).to.equal(2n);
      
      // Grant FULL_EDITOR_ROLE to collector's identity ID in the Identity contract
      await identityWithRoles.grantRole(FULL_EDITOR_ROLE, collectorIdentityId);
      
      // Verify that the collector's identity has the FULL_EDITOR_ROLE
      expect(await identityWithRoles.hasRole(FULL_EDITOR_ROLE, collectorIdentityId)).to.be.true;
      
      // Update the ART token as collector
      const updatedMetadata = {
        ...metadata2,
        title: "Collector Updated Artwork",
        description: "Description updated by the collector who has partial editor rights.",
        note: "Updated by collector",
        tokenUri: "https://metadata.arc.com/collector-updated-artwork"
      };
      
      const tokenId = 2n;
      await artistArtContract.connect(collector).updateArt(tokenId, updatedMetadata);
      
      // Get the updated ART token metadata
      const artMetadata = await artistArtContract.getArtMetadata(tokenId);
      
      // Check updated metadata
      expect(artMetadata.title).to.equal("Collector Updated Artwork");
      expect(artMetadata.description).to.equal("Description updated by the collector who has partial editor rights.");
      expect(artMetadata.note).to.equal("Updated by collector");
    });

    it("Should assign and use partial editors correctly", async function () {
      // Set the artist identity ID in the metadata
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      
      // Mint two ART tokens
      await artistArtContract.connect(artist).mint(metadata);
      await artistArtContract.connect(artist).mint(metadata);
      
      // Assign collector as partial editor for token 1
      await artistArtContract.connect(artist).assignPartialEditor(1, collectorIdentityId);
      
      // Update token 1 as collector
      const updatedMetadata1 = {
        ...metadata,
        title: "Partial Editor Updated Artwork 1",
        note: "Updated by partial editor",
        tokenUri: "https://metadata.arc.com/partial-editor-updated-artwork"
      };
      
      await artistArtContract.connect(collector).updateArt(1, updatedMetadata1);
      
      // Try to update token 2 as collector (should fail)
      const updatedMetadata2 = {
        ...metadata,
        title: "Should Fail",
        note: "Should fail",
        tokenUri: "https://metadata.arc.com/should-fail-artwork"
      };
      
      await expect(
        artistArtContract.connect(collector).updateArt(2, updatedMetadata2)
      ).to.be.revertedWith("Unauthorized");
    });

    it("Should transfer ownership correctly", async function () {
      // Transfer ownership to admin (who is also an artist)
      await artistArtContract.connect(artist).transferOwnership(adminIdentityId);
      
      // Check if ownership was transferred correctly
      const newOwner = await artistArtContract.getArtistIdentityId();
      expect(newOwner).to.equal(adminIdentityId);
      
      // Try to mint as the original artist (should fail)
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      
      await expect(
        artistArtContract.connect(artist).mint(metadata)
      ).to.be.revertedWith("Unauthorized");
      
      // Mint as the new owner
      await artistArtContract.connect(admin).mint(metadata);
      
      // Check if the ART token was minted correctly
      const artCount = await artistArtContract.getArtCount();
      expect(artCount).to.equal(1n);
    });

    it("Should allow NFT owner to transfer their token", async function () {
      // Mint a token as the artist
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      await artistArtContract.connect(artist).mint(metadata);
      
      // Get the token ID
      const tokenId = 1n;
      
      // Check initial owner
      const initialOwner = await artistArtContract.ownerOf(tokenId);
      expect(initialOwner).to.equal(artist.address);
      
      // Transfer to collector
      await artistArtContract.connect(artist).transferFrom(artist.address, collector.address, tokenId);
      
      // Check new owner
      const newOwner = await artistArtContract.ownerOf(tokenId);
      expect(newOwner).to.equal(collector.address);
    });

    it("Should allow FULL_ADMIN_ROLE to transfer tokens they don't own", async function () {
      // Mint a token as the artist
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      await artistArtContract.connect(artist).mint(metadata);
      
      // Get the token ID - this should be the next token ID after the previous test
      const tokenId = await artistArtContract.getArtCount();
      
      // Check initial owner
      const initialOwner = await artistArtContract.ownerOf(tokenId);
      expect(initialOwner).to.equal(artist.address);
      
      // Transfer from artist to collector using admin (who has FULL_ADMIN_ROLE)
      await artistArtContract.connect(admin).transferFrom(artist.address, collector.address, tokenId);
      
      // Check new owner
      const newOwner = await artistArtContract.ownerOf(tokenId);
      expect(newOwner).to.equal(collector.address);
    });

    it("Should emit Transfer event when FULL_ADMIN_ROLE transfers a token", async function () {
      // Mint a token as the artist
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      await artistArtContract.connect(artist).mint(metadata);
      
      // Get the token ID - this should be the next token ID after the previous test
      const tokenId = await artistArtContract.getArtCount();
      
      // Check initial owner
      const initialOwner = await artistArtContract.ownerOf(tokenId);
      expect(initialOwner).to.equal(artist.address);
      
      // Check that the Transfer event is emitted when admin transfers the token
      await expect(artistArtContract.connect(admin).transferFrom(artist.address, collector.address, tokenId))
        .to.emit(artistArtContract, 'Transfer')
        .withArgs(artist.address, collector.address, tokenId);
    });

    it("Should not allow non-owner without FULL_ADMIN_ROLE to transfer tokens", async function () {
      // Mint a token as the artist
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      await artistArtContract.connect(artist).mint(metadata);
      
      // Get the token ID - this should be the next token ID after the previous test
      const tokenId = await artistArtContract.getArtCount();
      
      // Check initial owner
      const initialOwner = await artistArtContract.ownerOf(tokenId);
      expect(initialOwner).to.equal(artist.address);
      
      // Try to transfer from artist to collector using collector (who doesn't have FULL_ADMIN_ROLE)
      await expect(
        artistArtContract.connect(collector).transferFrom(artist.address, collector.address, tokenId)
      ).to.be.revertedWith("Unauthorized");
      
      // Check owner hasn't changed
      const currentOwner = await artistArtContract.ownerOf(tokenId);
      expect(currentOwner).to.equal(artist.address);
    });

    it("Should allow gallery to mint when granted MINTER_ROLE on identity", async function () {
      // Grant MINTER_ROLE to gallery's identity ID in the Identity contract
      const identityWithRoles = new ethers.Contract(
        await identity.getAddress(),
        identityRoleInterface,
        admin
      );
      await identityWithRoles.grantRole(MINTER_ROLE, galleryIdentityId);
      
      // Verify that the gallery's identity has the MINTER_ROLE
      expect(await identityWithRoles.hasRole(MINTER_ROLE, galleryIdentityId)).to.be.true;
      
      // Mint as gallery
      const galleryMetadata = {
        ...sampleArtMetadata,
        artistIdentityId: artistIdentityId,
        title: "Gallery Minted Artwork",
        description: "Artwork minted by a gallery on behalf of the artist.",
        yearOfCreation: 2024,
        medium: "Oil on canvas",
        dimensions: "100x150 cm",
        edition: "1/1",
        series: "Abstract Series",
        image: "https://arweave.net/sample-hash",
        tokenUri: "https://metadata.arc.com/gallery-artwork-metadata",
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
        note: "Special commission",
        royalties: 1000 // 10%
      };

      await artistArtContract.connect(gallery).mint(galleryMetadata);

      // Verify metadata
      const tokenId = 1n;
      const artMetadata = await artistArtContract.getArtMetadata(tokenId);

      // Check metadata
      expect(artMetadata.title).to.equal("Gallery Minted Artwork");
      expect(artMetadata.description).to.equal("Artwork minted by a gallery on behalf of the artist.");
      expect(artMetadata.artistIdentityId).to.equal(artistIdentityId);
    });
  });

  describe("ART Factory Contract", function () {
    it("Should deploy ART Contracts correctly", async function () {
      // Deploy an ART Contract through the factory
      await artFactory.connect(artist).deployArtContract(
        artistIdentityId,
        "FDC"
      );
      
      // Check if the ART Contract was deployed correctly
      const artContracts = await artFactory.getArtContractsByArtist(artistIdentityId);
      expect(artContracts.length).to.equal(1);
    });

    it("Should only allow artists or admins to deploy ART Contracts", async function () {
      // First, deploy one contract to establish a baseline
      await artFactory.connect(artist).deployArtContract(
        artistIdentityId,
        "FIRST"
      );
      
      // Try to deploy an ART Contract as a gallery (should fail)
      await expect(
        artFactory.connect(gallery).deployArtContract(
          galleryIdentityId,
          "GALC"
        )
      ).to.be.revertedWith("Invalid identity type");
      
      // Try to deploy an ART Contract for another artist (should fail)
      await expect(
        artFactory.connect(gallery).deployArtContract(
          artistIdentityId,
          "UNAUTH"
        )
      ).to.be.revertedWith("Unauthorized");
      
      // Deploy an ART Contract as admin for an artist
      await artFactory.connect(admin).deployArtContract(
        artistIdentityId,
        "ADMC"
      );
      
      // Check if the ART Contract was deployed correctly
      const artContracts = await artFactory.getArtContractsByArtist(artistIdentityId);
      expect(artContracts.length).to.equal(2);
    });
  });
}); 