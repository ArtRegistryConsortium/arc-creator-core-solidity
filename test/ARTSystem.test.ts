import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("ART Registry System with Role-Based Access Control", function () {
  let artFactory: any;
  let artFactoryManager: any;
  let artTokenImpl: any;
  let owner: SignerWithAddress;
  let artist1: SignerWithAddress;
  let artist2: SignerWithAddress;
  let collector: SignerWithAddress;
  let legacyProtector: SignerWithAddress;
  let minter: SignerWithAddress;
  let fullEditor: SignerWithAddress;
  let partialEditor: SignerWithAddress;

  // Role constants
  let FULL_ADMIN_ROLE: string;
  let CONTRACT_OWNER_ROLE: string;
  let LEGACY_PROTECTOR_ROLE: string;
  let MINTER_ROLE: string;
  let FULL_EDITOR_ROLE: string;
  let PARTIAL_EDITOR_ROLE: string;

  const artistName1 = "Pablo Picasso";
  const collectionName1 = "Cubism Collection";
  const collectionSymbol1 = "CUBE";

  const artistName2 = "Vincent van Gogh";
  const collectionName2 = "Starry Night Collection";
  const collectionSymbol2 = "STAR";

  beforeEach(async function () {
    // Get signers
    [owner, artist1, artist2, collector, legacyProtector, minter, fullEditor, partialEditor] = await ethers.getSigners();

    // Define role constants
    FULL_ADMIN_ROLE = ethers.keccak256(ethers.toUtf8Bytes("FULL_ADMIN_ROLE"));
    CONTRACT_OWNER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("CONTRACT_OWNER_ROLE"));
    LEGACY_PROTECTOR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("LEGACY_PROTECTOR_ROLE"));
    MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));
    FULL_EDITOR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("FULL_EDITOR_ROLE"));
    PARTIAL_EDITOR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("PARTIAL_EDITOR_ROLE"));

    // Deploy the ART implementation
    const ARTToken = await ethers.getContractFactory("ARTToken");
    artTokenImpl = await ARTToken.deploy();
    await artTokenImpl.waitForDeployment();
    
    // Deploy the manager
    const ARTFactoryManager = await ethers.getContractFactory("ARTFactoryManager");
    artFactoryManager = await upgrades.deployProxy(ARTFactoryManager, [ethers.ZeroAddress], {
      kind: "uups",
    });
    await artFactoryManager.waitForDeployment();
    
    // Deploy the factory
    const ARTFactory = await ethers.getContractFactory("ARTFactory");
    const artTokenImplAddress = await artTokenImpl.getAddress();
    const artFactoryManagerAddress = await artFactoryManager.getAddress();
    
    artFactory = await upgrades.deployProxy(ARTFactory, [owner.address, artFactoryManagerAddress, artTokenImplAddress], {
      kind: "uups",
    });
    await artFactory.waitForDeployment();
    
    // Update the factory address in the manager
    const artFactoryAddress = await artFactory.getAddress();
    await artFactoryManager.setFactory(artFactoryAddress);
  });

  describe("ARTFactory", function () {
    it("Should deploy the factory correctly", async function () {
      expect(await artFactory.getAddress()).to.be.properAddress;
      
      // Check if owner has FULL_ADMIN_ROLE
      expect(await artFactory.hasRole(FULL_ADMIN_ROLE, owner.address)).to.be.true;
    });

    it("Should allow an artist to deploy an ART contract", async function () {
      // Artist 1 deploys a contract
      await artFactory.connect(artist1).deployARTContract(
        artistName1,
        collectionSymbol1
      );

      // Check if contract was deployed and tracked
      const artContractAddress = await artFactory.getArtistContract(artist1.address);
      expect(artContractAddress).to.be.properAddress;
      
      const artistAddress = await artFactory.getContractArtist(artContractAddress);
      expect(artistAddress).to.equal(artist1.address);
    });

    it("Should allow multiple artists to deploy ART contracts", async function () {
      // Artist 1 deploys a contract
      await artFactory.connect(artist1).deployARTContract(
        artistName1,
        collectionSymbol1
      );

      // Artist 2 deploys a contract
      await artFactory.connect(artist2).deployARTContract(
        artistName2,
        collectionSymbol2
      );

      // Check if contracts were deployed and tracked
      const artist1ContractAddress = await artFactory.getArtistContract(artist1.address);
      expect(artist1ContractAddress).to.be.properAddress;
      
      const artist2ContractAddress = await artFactory.getArtistContract(artist2.address);
      expect(artist2ContractAddress).to.be.properAddress;
      
      expect(artist1ContractAddress).to.not.equal(artist2ContractAddress);
    });

    it("Should allow the artist to grant roles on their ART contract through the factory", async function () {
      // Artist 1 deploys a contract
      await artFactory.connect(artist1).deployARTContract(
        artistName1,
        collectionSymbol1
      );

      const artContractAddress = await artFactory.getArtistContract(artist1.address);

      // Get the ART contract
      const ARTToken = await ethers.getContractFactory("ARTToken");
      const artContract = ARTToken.attach(artContractAddress) as any;

      // Check initial roles
      const DEFAULT_ADMIN_ROLE = await artContract.DEFAULT_ADMIN_ROLE();
      expect(await artContract.hasRole(DEFAULT_ADMIN_ROLE, artist1.address)).to.be.false;
      expect(await artContract.hasRole(CONTRACT_OWNER_ROLE, artist1.address)).to.be.true;

      // Artist1 (contract artist) grants legacy protector role through the factory
      
      // Check if factoryManager function exists
      let factoryManagerAddress;
      try {
        factoryManagerAddress = await artContract.factoryManager();
      } catch (error) {
        // Function doesn't exist on the contract
      }
      
      // Get the factory manager contract
      const ARTFactoryManager = await ethers.getContractFactory("ARTFactoryManager");
      const factoryManager = ARTFactoryManager.attach(await artContract.manager()) as any;
      
      try {
        await artFactory.connect(artist1).grantRoleOnARTContract(
          artContractAddress,
          LEGACY_PROTECTOR_ROLE,
          legacyProtector.address
        );
      } catch (error) {
        // Role granting failed
      }

      // Check if role was granted
      expect(await artContract.hasRole(LEGACY_PROTECTOR_ROLE, legacyProtector.address)).to.be.true;
      
      // Try direct call to grantRoleDirectly
      try {
        await artContract.connect(artist1).grantRoleDirectly(
          LEGACY_PROTECTOR_ROLE,
          legacyProtector.address
        );
      } catch (error) {
        // Direct role grant failed
      }
      
      // Check if role was granted after direct call
      expect(await artContract.hasRole(LEGACY_PROTECTOR_ROLE, legacyProtector.address)).to.be.true;

      // Direct call to grant MINTER_ROLE
      await artContract.connect(artist1).grantRoleDirectly(
        MINTER_ROLE,
        minter.address
      );

      // Check if role was granted
      expect(await artContract.hasRole(MINTER_ROLE, minter.address)).to.be.true;

      // Artist1 grants full editor role to fullEditor through the factory
      await artFactory.connect(artist1).grantRoleOnARTContract(
        artContractAddress,
        FULL_EDITOR_ROLE,
        fullEditor.address
      );
      expect(await artContract.hasRole(FULL_EDITOR_ROLE, fullEditor.address)).to.be.true;
    });
  });

  describe("ARTToken", function () {
    let artContract: any;
    let artContractAddress: string;

    beforeEach(async function () {
      // Artist 1 deploys a contract
      await artFactory.connect(artist1).deployARTContract(
        artistName1,
        collectionSymbol1
      );

      // Get the deployed contract address
      artContractAddress = await artFactory.getArtistContract(artist1.address);

      // Get the contract instance
      const ARTToken = await ethers.getContractFactory("ARTToken");
      artContract = ARTToken.attach(artContractAddress) as any;

      // Setup roles for testing directly on the contract using artist1 who has DEFAULT_ADMIN_ROLE
      await artContract.connect(artist1).grantRole(LEGACY_PROTECTOR_ROLE, legacyProtector.address);
      await artContract.connect(artist1).grantRole(MINTER_ROLE, minter.address);
      await artContract.connect(artist1).grantRole(FULL_EDITOR_ROLE, fullEditor.address);
      await artContract.connect(artist1).grantRole(PARTIAL_EDITOR_ROLE, partialEditor.address);
    });

    it("Should store artist information correctly", async function () {
      expect(await artContract.getArtistName()).to.equal(artistName1);
      expect(await artContract.getArtistAddress()).to.equal(artist1.address);
    });

    it("Should allow the artist to mint tokens", async function () {
      const tokenURI = "ipfs://QmXxxx";
      const title = "First Artwork";
      const description = "This is the first artwork in the collection";
      
      // Artist mints a token
      await artContract.connect(artist1).mintToken(
        collector.address,
        tokenURI,
        title,
        description
      );
      
      // Check token ownership and URI
      expect(await artContract.ownerOf(0)).to.equal(collector.address);
      expect(await artContract.tokenURI(0)).to.equal(tokenURI);
      
      // Check token metadata
      const metadata = await artContract.getTokenMetadata(0);
      expect(metadata[0]).to.equal(title); // title
      expect(metadata[1]).to.equal(description); // description
    });

    it("Should allow the minter role to mint tokens", async function () {
      const tokenURI = "ipfs://QmXxxx";
      const title = "Minter's Artwork";
      const description = "This artwork was minted by a minter";
      
      // Minter mints a token
      await artContract.connect(minter).mintToken(
        collector.address,
        tokenURI,
        title,
        description
      );
      
      // Check token ownership and URI
      expect(await artContract.ownerOf(0)).to.equal(collector.address);
      expect(await artContract.tokenURI(0)).to.equal(tokenURI);
    });

    it("Should allow the legacy protector to mint tokens", async function () {
      const tokenURI = "ipfs://QmXxxx";
      const title = "Legacy Artwork";
      const description = "This artwork was minted by the legacy protector";
      
      // Legacy protector mints a token
      await artContract.connect(legacyProtector).mintToken(
        collector.address,
        tokenURI,
        title,
        description
      );
      
      // Check token ownership and URI
      expect(await artContract.ownerOf(0)).to.equal(collector.address);
      expect(await artContract.tokenURI(0)).to.equal(tokenURI);
    });

    it("Should allow the artist to update token metadata", async function () {
      // Artist mints a token
      await artContract.connect(artist1).mintToken(
        collector.address,
        "ipfs://QmXxxx",
        "Original Title",
        "Original Description"
      );
      
      // Artist updates the token metadata
      await artContract.connect(artist1).updateTokenMetadata(
        0,
        "ipfs://QmYyyy",
        "Updated Title",
        "Updated Description"
      );
      
      // Check updated metadata
      const metadata = await artContract.getTokenMetadata(0);
      expect(metadata[0]).to.equal("Updated Title");
      expect(metadata[1]).to.equal("Updated Description");
    });

    it("Should allow the full editor to update token metadata", async function () {
      // Artist mints a token
      await artContract.connect(artist1).mintToken(
        collector.address,
        "ipfs://QmXxxx",
        "Original Title",
        "Original Description"
      );
      
      // Full editor updates the token metadata
      await artContract.connect(fullEditor).updateTokenMetadata(
        0,
        "ipfs://QmYyyy",
        "Editor Updated Title",
        "Editor Updated Description"
      );
      
      // Check updated metadata
      const metadata = await artContract.getTokenMetadata(0);
      expect(metadata[0]).to.equal("Editor Updated Title");
      expect(metadata[1]).to.equal("Editor Updated Description");
    });

    it("Should allow the partial editor to update token metadata", async function () {
      // Artist mints a token
      await artContract.connect(artist1).mintToken(
        collector.address,
        "ipfs://QmXxxx",
        "Original Title",
        "Original Description"
      );
      
      // Grant permission to partial editor for token 0
      await artContract.connect(artist1).grantPartialEditorPermission(partialEditor.address, 0);
      
      // Partial editor updates the token metadata
      await artContract.connect(partialEditor).updateTokenMetadata(
        0,
        "ipfs://QmYyyy",
        "Partial Editor Updated Title",
        "Partial Editor Updated Description"
      );
      
      // Check updated metadata
      const metadata = await artContract.getTokenMetadata(0);
      expect(metadata[0]).to.equal("Partial Editor Updated Title");
      expect(metadata[1]).to.equal("Partial Editor Updated Description");
    });

    it("Should not allow the artist to update their name", async function () {
      const newName = "Pablo Ruiz Picasso";
      
      // Artist tries to update their name but should fail
      await expect(
        artContract.connect(artist1).updateArtistName(newName)
      ).to.be.revertedWith("10");
      
      // Name should remain unchanged
      expect(await artContract.getArtistName()).to.equal(artistName1);
    });

    it("Should not allow the legacy protector to update the artist name", async function () {
      const newName = "Pablo Ruiz Picasso (Legacy Updated)";
      
      // Legacy protector tries to update the artist name but should fail
      await expect(
        artContract.connect(legacyProtector).updateArtistName(newName)
      ).to.be.revertedWith("10");
      
      // Name should remain unchanged
      expect(await artContract.getArtistName()).to.equal(artistName1);
    });

    it("Should not allow non-authorized users to update the artist name", async function () {
      const newName = "Fake Picasso";
      
      // Collector tries to update the artist name
      await expect(
        artContract.connect(collector).updateArtistName(newName)
      ).to.be.revertedWith("10");
      
      // Name should remain unchanged
      expect(await artContract.getArtistName()).to.equal(artistName1);
    });

    it("Should not allow partial editors to update tokens without specific permission", async function () {
      // Artist mints a token
      await artContract.connect(artist1).mintToken(
        collector.address,
        "ipfs://QmXxxx",
        "Original Title",
        "Original Description"
      );
      
      // Partial editor tries to update the token metadata without permission
      await expect(
        artContract.connect(partialEditor).updateTokenMetadata(
          0,
          "ipfs://QmYyyy",
          "Attempted Update",
          "Attempted Description"
        )
      ).to.be.revertedWith("2");
    });

    it("Should allow partial editors to update specific tokens they have permission for", async function () {
      // Artist mints two tokens
      await artContract.connect(artist1).mintToken(
        collector.address,
        "ipfs://QmXxxx1",
        "First Artwork",
        "First Description"
      );
      
      await artContract.connect(artist1).mintToken(
        collector.address,
        "ipfs://QmXxxx2",
        "Second Artwork",
        "Second Description"
      );
      
      // Grant permission for token 0 only
      await artContract.connect(artist1).grantPartialEditorPermission(
        partialEditor.address,
        0
      );
      
      // Partial editor updates token 0 (should succeed)
      await artContract.connect(partialEditor).updateTokenMetadata(
        0,
        "ipfs://QmYyyy",
        "Updated First Artwork",
        "Updated First Description"
      );
      
      // Check updated metadata
      const metadata = await artContract.getTokenMetadata(0);
      expect(metadata[0]).to.equal("Updated First Artwork");
      
      // Partial editor tries to update token 1 (should fail)
      await expect(
        artContract.connect(partialEditor).updateTokenMetadata(
          1,
          "ipfs://QmYyyy",
          "Attempted Update",
          "Attempted Description"
        )
      ).to.be.revertedWith("2");
    });

    it("Should allow revoking partial editor permission for specific tokens", async function () {
      // Artist mints a token
      await artContract.connect(artist1).mintToken(
        collector.address,
        "ipfs://QmXxxx",
        "Original Title",
        "Original Description"
      );
      
      // Grant permission for token 0
      await artContract.connect(artist1).grantPartialEditorPermission(
        partialEditor.address,
        0
      );
      
      // Partial editor updates token 0 (should succeed)
      await artContract.connect(partialEditor).updateTokenMetadata(
        0,
        "ipfs://QmYyyy",
        "First Update",
        "First Update Description"
      );
      
      // Revoke permission for token 0
      await artContract.connect(artist1).revokePartialEditorPermission(
        partialEditor.address,
        0
      );
      
      // Partial editor tries to update token 0 again (should fail)
      await expect(
        artContract.connect(partialEditor).updateTokenMetadata(
          0,
          "ipfs://QmZzzz",
          "Second Update",
          "Second Update Description"
        )
      ).to.be.revertedWith("2");
    });

    it("Should correctly report token permissions with hasTokenPermission", async function () {
      // Artist mints a token
      await artContract.connect(artist1).mintToken(
        collector.address,
        "ipfs://QmXxxx",
        "Original Title",
        "Original Description"
      );
      
      // Check permissions before granting
      expect(await artContract.hasTokenPermission(partialEditor.address, 0)).to.be.false;
      expect(await artContract.hasTokenPermission(fullEditor.address, 0)).to.be.true;
      expect(await artContract.hasTokenPermission(artist1.address, 0)).to.be.true;
      
      // Grant permission for token 0
      await artContract.connect(artist1).grantPartialEditorPermission(
        partialEditor.address,
        0
      );
      
      // Check permissions after granting
      expect(await artContract.hasTokenPermission(partialEditor.address, 0)).to.be.true;
      
      // Revoke permission
      await artContract.connect(artist1).revokePartialEditorPermission(
        partialEditor.address,
        0
      );
      
      // Check permissions after revoking
      expect(await artContract.hasTokenPermission(partialEditor.address, 0)).to.be.false;
    });

    it("Should set default royalty to artist during initialization", async function () {
      // Get royalty info for a token
      const salePrice = ethers.parseEther("1.0");
      const [receiver, royaltyAmount] = await artContract.royaltyInfo(0, salePrice);
      
      // Default royalty should be 10% to the artist
      expect(receiver).to.equal(artist1.address);
      expect(royaltyAmount).to.equal(ethers.parseEther("0.1")); // 10% of 1 ETH
    });

    describe("Royalty Management", function () {
      beforeEach(async function () {
        // Mint a token for testing royalties
        await artContract.connect(artist1).mintToken(
          collector.address,
          "ipfs://QmXxxx",
          "Royalty Test Artwork",
          "This is an artwork for testing royalties"
        );
      });

      it("Should allow Full Admin to set contract-level royalties", async function () {
        const salePrice = ethers.parseEther("1.0");
        
        // Full Admin sets contract royalty to 15%
        await artContract.connect(owner).setRoyalty(owner.address, 1500);
        
        // Check if royalty was updated
        const [receiver, royaltyAmount] = await artContract.royaltyInfo(0, salePrice);
        expect(receiver).to.equal(owner.address);
        expect(royaltyAmount).to.equal(ethers.parseEther("0.15")); // 15% of 1 ETH
      });

      it("Should allow Full Admin to set token-level royalties", async function () {
        const salePrice = ethers.parseEther("1.0");
        
        // Full Admin sets token royalty to 20%
        await artContract.connect(owner).setTokenRoyalty(0, owner.address, 2000);
        
        // Check if token royalty was updated
        const [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(0, salePrice);
        expect(receiver).to.equal(owner.address);
        expect(royaltyAmount).to.equal(ethers.parseEther("0.2")); // 20% of 1 ETH
      });

      it("Should allow Contract Owner to set contract-level royalties", async function () {
        const salePrice = ethers.parseEther("1.0");
        
        // Contract Owner (artist) sets contract royalty to 12.5%
        await artContract.connect(artist1).setRoyalty(artist1.address, 1250);
        
        // Check if royalty was updated
        const [receiver, royaltyAmount] = await artContract.royaltyInfo(0, salePrice);
        expect(receiver).to.equal(artist1.address);
        expect(royaltyAmount).to.equal(ethers.parseEther("0.125")); // 12.5% of 1 ETH
      });

      it("Should allow Contract Owner to set token-level royalties", async function () {
        const salePrice = ethers.parseEther("1.0");
        
        // Contract Owner sets token royalty to 17.5%
        await artContract.connect(artist1).setTokenRoyalty(0, artist1.address, 1750);
        
        // Check if token royalty was updated
        const [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(0, salePrice);
        expect(receiver).to.equal(artist1.address);
        expect(royaltyAmount).to.equal(ethers.parseEther("0.175")); // 17.5% of 1 ETH
      });

      it("Should allow Legacy Protector to set contract-level royalties", async function () {
        const salePrice = ethers.parseEther("1.0");
        
        // Legacy Protector sets contract royalty to 8%
        await artContract.connect(legacyProtector).setRoyalty(legacyProtector.address, 800);
        
        // Check if royalty was updated
        const [receiver, royaltyAmount] = await artContract.royaltyInfo(0, salePrice);
        expect(receiver).to.equal(legacyProtector.address);
        expect(royaltyAmount).to.equal(ethers.parseEther("0.08")); // 8% of 1 ETH
      });

      it("Should allow Legacy Protector to set token-level royalties", async function () {
        const salePrice = ethers.parseEther("1.0");
        
        // Legacy Protector sets token royalty to 9%
        await artContract.connect(legacyProtector).setTokenRoyalty(0, legacyProtector.address, 900);
        
        // Check if token royalty was updated
        const [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(0, salePrice);
        expect(receiver).to.equal(legacyProtector.address);
        expect(royaltyAmount).to.equal(ethers.parseEther("0.09")); // 9% of 1 ETH
      });

      it("Should not allow Minter to set contract-level royalties", async function () {
        // Minter tries to set contract royalty
        await expect(
          artContract.connect(minter).setRoyalty(minter.address, 750)
        ).to.be.revertedWith("3");
      });

      it("Should not allow Minter to set token-level royalties", async function () {
        // Minter tries to set token royalty
        await expect(
          artContract.connect(minter).setTokenRoyalty(0, minter.address, 850)
        ).to.be.revertedWith("3");
      });

      it("Should not allow Full Editor to set contract-level royalties", async function () {
        // Full Editor tries to set contract royalty
        await expect(
          artContract.connect(fullEditor).setRoyalty(fullEditor.address, 650)
        ).to.be.revertedWith("3");
      });

      it("Should not allow Full Editor to set token-level royalties", async function () {
        // Full Editor tries to set token royalty
        await expect(
          artContract.connect(fullEditor).setTokenRoyalty(0, fullEditor.address, 700)
        ).to.be.revertedWith("3");
      });

      it("Should not allow Partial Editor to set token-level royalties even with permission", async function () {
        // Grant permission for token 0
        await artContract.connect(artist1).grantPartialEditorPermission(
          partialEditor.address,
          0
        );
        
        // Partial Editor tries to set token royalty despite having edit permission
        await expect(
          artContract.connect(partialEditor).setTokenRoyalty(0, partialEditor.address, 550)
        ).to.be.revertedWith("3");
      });

      it("Should allow resetting token royalty to use contract default", async function () {
        const salePrice = ethers.parseEther("1.0");
        
        // Set contract royalty to 10%
        await artContract.connect(artist1).setRoyalty(artist1.address, 1000);
        
        // Set token royalty to 15%
        await artContract.connect(artist1).setTokenRoyalty(0, collector.address, 1500);
        
        // Check token-specific royalty
        let [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(0, salePrice);
        expect(receiver).to.equal(collector.address);
        expect(royaltyAmount).to.equal(ethers.parseEther("0.15")); // 15% of 1 ETH
        
        // Reset token royalty
        await artContract.connect(artist1).resetTokenRoyalty(0);
        
        // Check if token royalty was reset to contract default
        [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(0, salePrice);
        expect(receiver).to.equal(artist1.address);
        expect(royaltyAmount).to.equal(ethers.parseEther("0.1")); // 10% of 1 ETH
      });

      it("Should not allow Full Editor to set token-level royalties", async function () {
        // Full Editor tries to set token royalty
        await expect(
          artContract.connect(fullEditor).setTokenRoyalty(0, fullEditor.address, 700)
        ).to.be.revertedWith("3");
      });

      it("Should not allow Partial Editor to set contract-level royalties", async function () {
        // Partial Editor tries to set contract royalty
        await expect(
          artContract.connect(partialEditor).setRoyalty(partialEditor.address, 500)
        ).to.be.revertedWith("3");
      });

      it("Should not allow Partial Editor to set token-level royalties without permission", async function () {
        // Partial Editor tries to set token royalty without permission
        await expect(
          artContract.connect(partialEditor).setTokenRoyalty(0, partialEditor.address, 500)
        ).to.be.revertedWith("3");
      });
    });
  });
}); 