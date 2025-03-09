import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { Contract } from "ethers";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("ARC Contracts", function () {
  // Contracts
  let identity: Contract;
  let artContractImplementation: Contract;
  let artFactory: Contract;
  let artistArtContract: Contract;

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

  // Sample metadata
  const sampleArtMetadata = {
    artistIdentityId: 0n, // Will be set during tests
    title: "Sample Artwork",
    yearOfCreation: 2024,
    medium: "Oil on canvas",
    dimensions: "100x150 cm",
    edition: "1/1",
    series: "Abstract Series",
    catalogueInventory: "ART-2024-001",
    image: "https://arweave.net/sample-hash",
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

    // Create identities
    await identity.connect(admin).createIdentity(
      0, // Artist
      "Admin Artist",
      "Admin with artist identity",
      "https://arweave.net/admin-image",
      ["https://admin.com"],
      ["admin", "artist"],
      946684800, // Jan 1, 2000
      0, // Not deceased
      "New York",
      []
    );
    adminIdentityId = await identity.getIdentityByAddress(admin.address).then(id => id.id);

    await identity.connect(artist).createIdentity(
      0, // Artist
      "Test Artist",
      "Artist for testing",
      "https://arweave.net/artist-image",
      ["https://artist.com"],
      ["artist", "painter"],
      946684800, // Jan 1, 2000
      0, // Not deceased
      "Paris",
      []
    );
    artistIdentityId = await identity.getIdentityByAddress(artist.address).then(id => id.id);

    await identity.connect(gallery).createIdentity(
      1, // Gallery
      "Test Gallery",
      "Gallery for testing",
      "https://arweave.net/gallery-image",
      ["https://gallery.com"],
      ["gallery", "contemporary"],
      0,
      0,
      "",
      ["123 Gallery St, New York, NY"]
    );
    galleryIdentityId = await identity.getIdentityByAddress(gallery.address).then(id => id.id);

    await identity.connect(collector).createIdentity(
      3, // Collector
      "Test Collector",
      "Collector for testing",
      "https://arweave.net/collector-image",
      ["https://collector.com"],
      ["collector", "art lover"],
      0,
      0,
      "",
      []
    );
    collectorIdentityId = await identity.getIdentityByAddress(collector.address).then(id => id.id);

    await identity.connect(custodian).createIdentity(
      3, // Collector (acting as custodian)
      "Test Custodian",
      "Custodian for testing",
      "https://arweave.net/custodian-image",
      ["https://custodian.com"],
      ["custodian"],
      0,
      0,
      "",
      []
    );
    custodianIdentityId = await identity.getIdentityByAddress(custodian.address).then(id => id.id);

    // Grant roles
    await identity.connect(admin).grantRole(CUSTODIAN_ROLE, custodianIdentityId);

    // Deploy an ART Contract for the artist
    const artContractTx = await artFactory.connect(artist).deployArtContract(
      artistIdentityId,
      "Artist Collection",
      "ARTC"
    );
    const receipt = await artContractTx.wait();
    const event = receipt?.logs.find(
      (log: any) => log.fragment?.name === "ArtContractDeployed"
    );
    const artContractAddress = event?.args[0];
    
    // Get the deployed ART Contract
    const ArtContractFactory = await ethers.getContractFactory("ArtContract");
    artistArtContract = ArtContractFactory.attach(artContractAddress);
    
    // Set the Identity contract reference in the ART Contract
    await artistArtContract.connect(admin).setIdentityContract(await identity.getAddress());
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
        artistIdentityId,
        "Updated Artist",
        "Updated description",
        "https://arweave.net/updated-artist-image",
        ["https://updated-artist.com"],
        ["updated", "artist"],
        946684800, // Jan 1, 2000
        0, // Not deceased
        "Berlin",
        []
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
        artistIdentityId,
        "Custodian Updated Artist",
        "Custodian updated description",
        "https://arweave.net/custodian-updated-artist-image",
        ["https://custodian-updated-artist.com"],
        ["custodian", "updated", "artist"],
        946684800, // Jan 1, 2000
        0, // Not deceased
        "London",
        []
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
          "Should Fail",
          "Should fail description",
          "https://arweave.net/should-fail-image",
          ["https://should-fail.com"],
          ["should", "fail"],
          946684800, // Jan 1, 2000
          0, // Not deceased
          "Tokyo",
          []
        )
      ).to.be.revertedWith("Unauthorized");
    });

    it("Should grant and revoke roles correctly", async function () {
      // Grant MINTER_ROLE to gallery
      await identity.connect(admin).grantRole(MINTER_ROLE, galleryIdentityId);
      
      // Check if gallery has MINTER_ROLE
      expect(await identity.hasRole(MINTER_ROLE, galleryIdentityId)).to.be.true;
      
      // Revoke MINTER_ROLE from gallery
      await identity.connect(admin).revokeRole(MINTER_ROLE, galleryIdentityId);
      
      // Check if gallery no longer has MINTER_ROLE
      expect(await identity.hasRole(MINTER_ROLE, galleryIdentityId)).to.be.false;
    });
  });

  describe("ART Factory Contract", function () {
    it("Should deploy ART Contracts correctly", async function () {
      // Check if the ART Contract was deployed correctly
      const artContracts = await artFactory.getArtContractsByArtist(artistIdentityId);
      expect(artContracts.length).to.equal(1);
      
      // Check if the ART Contract has the correct artist
      const artistId = await artistArtContract.getArtistIdentityId();
      expect(artistId).to.equal(artistIdentityId);
    });

    it("Should only allow artists or admins to deploy ART Contracts", async function () {
      // Try to deploy an ART Contract as a gallery (should fail)
      await expect(
        artFactory.connect(gallery).deployArtContract(
          galleryIdentityId,
          "Gallery Collection",
          "GALC"
        )
      ).to.be.revertedWith("Invalid identity type");
      
      // Try to deploy an ART Contract for another artist (should fail)
      await expect(
        artFactory.connect(gallery).deployArtContract(
          artistIdentityId,
          "Unauthorized Collection",
          "UNAUTH"
        )
      ).to.be.revertedWith("Unauthorized");
      
      // Deploy an ART Contract as admin for an artist
      await artFactory.connect(admin).deployArtContract(
        artistIdentityId,
        "Admin Deployed Collection",
        "ADMC"
      );
      
      // Check if the ART Contract was deployed correctly
      const artContracts = await artFactory.getArtContractsByArtist(artistIdentityId);
      expect(artContracts.length).to.equal(2);
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
      
      // Check metadata
      expect(artMetadata.title).to.equal("Sample Artwork");
      expect(artMetadata.medium).to.equal("Oil on canvas");
      expect(artMetadata.artistIdentityId).to.equal(artistIdentityId);
    });

    it("Should update ART tokens correctly", async function () {
      // Set the artist identity ID in the metadata
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      
      // Mint an ART token
      await artistArtContract.connect(artist).mint(metadata);
      
      // Update the ART token
      const updatedMetadata = {
        ...metadata,
        title: "Updated Artwork",
        medium: "Acrylic on canvas",
        note: "Updated note"
      };
      
      await artistArtContract.connect(artist).updateArt(1, updatedMetadata);
      
      // Get the updated ART token metadata
      const tokenId = 1n;
      const artMetadata = await artistArtContract.getArtMetadata(tokenId);
      
      // Check updated metadata
      expect(artMetadata.title).to.equal("Updated Artwork");
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
      // Grant MINTER_ROLE to gallery
      await artistArtContract.connect(artist).grantRole(MINTER_ROLE, galleryIdentityId);
      
      // Set the artist identity ID in the metadata
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      
      // Mint an ART token as gallery
      await artistArtContract.connect(gallery).mint(metadata);
      
      // Check if the ART token was minted correctly
      const artCount = await artistArtContract.getArtCount();
      expect(artCount).to.equal(1n);
      
      // Grant FULL_EDITOR_ROLE to collector
      await artistArtContract.connect(artist).grantRole(FULL_EDITOR_ROLE, collectorIdentityId);
      
      // Update the ART token as collector
      const updatedMetadata = {
        ...metadata,
        title: "Collector Updated Artwork",
        note: "Updated by collector"
      };
      
      await artistArtContract.connect(collector).updateArt(1, updatedMetadata);
      
      // Get the updated ART token metadata
      const tokenId = 1n;
      const artMetadata = await artistArtContract.getArtMetadata(tokenId);
      
      // Check updated metadata
      expect(artMetadata.title).to.equal("Collector Updated Artwork");
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
        note: "Updated by partial editor"
      };
      
      await artistArtContract.connect(collector).updateArt(1, updatedMetadata1);
      
      // Try to update token 2 as collector (should fail)
      const updatedMetadata2 = {
        ...metadata,
        title: "Should Fail",
        note: "Should fail"
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
  });
}); 