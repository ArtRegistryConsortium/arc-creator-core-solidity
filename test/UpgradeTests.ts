import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { Contract } from "ethers";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("ARC Contract Upgrades", function () {
  // Contracts
  let identity: any;
  let identityV2: any;
  let artContract: any;
  let artContractV2: any;
  let artFactory: any;
  let artFactoryV2: any;

  // Signers
  let admin: HardhatEthersSigner;
  let artist: HardhatEthersSigner;
  let collector: HardhatEthersSigner;

  // Identity IDs
  let adminIdentityId: bigint;
  let artistIdentityId: bigint;

  // Constants
  const FULL_ADMIN_ROLE = ethers.keccak256(ethers.toUtf8Bytes("FULL_ADMIN_ROLE"));
  const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;

  // Sample metadata
  const sampleArtMetadata = {
    artistIdentityId: 0n,
    title: "Sample Artwork",
    description: "A beautiful abstract painting exploring themes of color and form.",
    yearOfCreation: 2024,
    medium: "Oil on canvas",
    dimensions: "100x150 cm",
    edition: "1/1",
    series: "Abstract Series",
    catalogueInventory: "ART-2024-001",
    image: "https://arweave.net/sample-hash",
    tokenUri: "https://metadata.arc.com/sample-artwork-metadata",
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
    status: 0,
    note: "Special commission",
    royalties: 1000 // 10%
  };

  beforeEach(async function () {
    // Get signers
    [admin, artist, collector] = await ethers.getSigners();

    // Deploy Identity contract
    const Identity = await ethers.getContractFactory("Identity");
    identity = await upgrades.deployProxy(Identity, [admin.address], {
      kind: "uups",
      initializer: "initialize",
    });
    await identity.waitForDeployment();

    // Create identities
    await identity.connect(admin).createIdentity(
      0, // Artist
      "Admin Artist",
      "Admin with artist identity",
      "https://arweave.net/admin-image",
      JSON.stringify({
        links: [
          {
            type: "website",
            url: "https://admin.com",
            title: "Admin Website"
          }
        ]
      }),
      ["admin", "artist"],
      946684800, // Jan 1, 2000
      0, // Not deceased
      "New York",
      JSON.stringify({
        addresses: []
      }),
      "", // representedBy
      "" // representedArtists
    );
    adminIdentityId = await identity.getIdentityByAddress(admin.address).then(id => id.id);

    await identity.connect(artist).createIdentity(
      0, // Artist
      "Test Artist",
      "Artist for testing",
      "https://arweave.net/artist-image",
      JSON.stringify({
        links: [
          {
            type: "website",
            url: "https://artist.com",
            title: "Artist Website"
          }
        ]
      }),
      ["artist", "painter"],
      946684800, // Jan 1, 2000
      0, // Not deceased
      "Paris",
      JSON.stringify({
        addresses: []
      }),
      "", // representedBy
      "" // representedArtists
    );
    artistIdentityId = await identity.getIdentityByAddress(artist.address).then(id => id.id);

    // Deploy ART Contract implementation
    const ArtContract = await ethers.getContractFactory("ArtContract");
    const artContractImplementation = await ArtContract.deploy();
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
    artContract = await upgrades.deployProxy(
      ArtContract,
      [artistIdentityId, "Artist Collection", "ARTC"],
      {
        kind: "uups",
        initializer: "initialize",
      }
    );
    await artContract.waitForDeployment();
    
    // Set the Identity contract reference in the ART Contract
    await artContract.setIdentityContract(await identity.getAddress());
  });

  describe("Identity Contract Upgrade", function () {
    it("Should upgrade the Identity contract and preserve state", async function () {
      // Create a mock V2 contract with a new function
      const IdentityV2 = await ethers.getContractFactory("Identity");
      identityV2 = await upgrades.upgradeProxy(await identity.getAddress(), IdentityV2);
      
      // Verify the upgrade was successful
      expect(await identityV2.getAddress()).to.equal(await identity.getAddress());
      
      // Verify state was preserved
      const adminIdentity = await identityV2.getIdentityById(adminIdentityId);
      expect(adminIdentity.name).to.equal("Admin Artist");
      
      const artistIdentity = await identityV2.getIdentityById(artistIdentityId);
      expect(artistIdentity.name).to.equal("Test Artist");
      
      // Verify functionality still works
      await identityV2.connect(artist).updateIdentity(
        artistIdentityId,
        0, // Artist type
        "Updated Artist Name",
        "Updated description",
        "https://arweave.net/updated-image",
        "{\"links\":[{\"type\":\"website\",\"url\":\"https://updated-artist.com\",\"title\":\"Updated Artist Website\"}]}",
        ["updated", "artist"],
        946684800,
        0,
        "Berlin",
        "{\"addresses\":[]}",
        "",
        ""
      );
      
      const updatedArtistIdentity = await identityV2.getIdentityById(artistIdentityId);
      expect(updatedArtistIdentity.name).to.equal("Updated Artist Name");
      expect(updatedArtistIdentity.location).to.equal("Berlin");
    });
    
    it("Should prevent unauthorized upgrades", async function () {
      const IdentityV2 = await ethers.getContractFactory("Identity", artist);
      
      // Artist should not be able to upgrade the contract
      await expect(
        upgrades.upgradeProxy(await identity.getAddress(), IdentityV2)
      ).to.be.reverted;
    });
  });

  describe("ArtContract Upgrade", function () {
    it("Should upgrade the ArtContract and preserve state", async function () {
      // Mint a token before upgrade
      const metadata = { ...sampleArtMetadata, artistIdentityId: artistIdentityId };
      await artContract.connect(artist).mint(metadata);
      
      // Get token count and metadata before upgrade
      const tokenCountBefore = await artContract.getArtCount();
      const tokenMetadataBefore = await artContract.getArtMetadata(1);
      
      // Upgrade the contract
      const ArtContractV2 = await ethers.getContractFactory("ArtContract");
      artContractV2 = await upgrades.upgradeProxy(await artContract.getAddress(), ArtContractV2);
      
      // Verify the upgrade was successful
      expect(await artContractV2.getAddress()).to.equal(await artContract.getAddress());
      
      // Verify state was preserved
      const tokenCountAfter = await artContractV2.getArtCount();
      expect(tokenCountAfter).to.equal(tokenCountBefore);
      
      // Check that the token metadata is preserved
      const tokenMetadataAfter = await artContractV2.getArtMetadata(1);
      expect(tokenMetadataAfter.title).to.equal(tokenMetadataBefore.title);
      expect(tokenMetadataAfter.description).to.equal(tokenMetadataBefore.description);
      expect(tokenMetadataAfter.medium).to.equal(tokenMetadataBefore.medium);
      expect(tokenMetadataAfter.artistIdentityId).to.equal(tokenMetadataBefore.artistIdentityId);
      
      // Mint a new token with the upgraded contract
      const newMetadata = {
        ...sampleArtMetadata,
        artistIdentityId: artistIdentityId,
        title: "New Artwork After Upgrade",
        description: "This artwork was created after the contract upgrade."
      };

      await artContractV2.connect(artist).mint(newMetadata);

      // Check the new token
      const newTokenMetadata = await artContractV2.getArtMetadata(2);
      expect(newTokenMetadata.title).to.equal("New Artwork After Upgrade");
      expect(newTokenMetadata.description).to.equal("This artwork was created after the contract upgrade.");
      expect(newTokenMetadata.artistIdentityId).to.equal(artistIdentityId);
    });
    
    it("Should prevent unauthorized upgrades", async function () {
      const ArtContractV2 = await ethers.getContractFactory("ArtContract", artist);
      
      // Artist should not be able to upgrade the contract
      await expect(
        upgrades.upgradeProxy(await artContract.getAddress(), ArtContractV2)
      ).to.be.reverted;
    });
  });

  describe("ArtFactory Upgrade", function () {
    it("Should upgrade the ArtFactory and preserve state", async function () {
      // Deploy an ART contract through the factory before upgrade
      await artFactory.connect(artist).deployArtContract(
        artistIdentityId,
        "PRE"
      );
      
      // Get deployed contracts before upgrade
      const contractsBeforeUpgrade = await artFactory.getArtContractsByArtist(artistIdentityId);
      
      // Upgrade the contract
      const ArtFactoryV2 = await ethers.getContractFactory("ArtFactory");
      artFactoryV2 = await upgrades.upgradeProxy(await artFactory.getAddress(), ArtFactoryV2);
      
      // Verify the upgrade was successful
      expect(await artFactoryV2.getAddress()).to.equal(await artFactory.getAddress());
      
      // Verify state was preserved
      const contractsAfterUpgrade = await artFactoryV2.getArtContractsByArtist(artistIdentityId);
      expect(contractsAfterUpgrade.length).to.equal(contractsBeforeUpgrade.length);
      expect(contractsAfterUpgrade[0]).to.equal(contractsBeforeUpgrade[0]);
      
      // Verify functionality still works
      await artFactoryV2.connect(artist).deployArtContract(
        artistIdentityId,
        "POST"
      );
      
      const contractsAfterNewDeploy = await artFactoryV2.getArtContractsByArtist(artistIdentityId);
      expect(contractsAfterNewDeploy.length).to.equal(contractsBeforeUpgrade.length + 1);
    });
    
    it("Should prevent unauthorized upgrades", async function () {
      const ArtFactoryV2 = await ethers.getContractFactory("ArtFactory", artist);
      
      // Artist should not be able to upgrade the contract
      await expect(
        upgrades.upgradeProxy(await artFactory.getAddress(), ArtFactoryV2)
      ).to.be.reverted;
    });
  });
}); 