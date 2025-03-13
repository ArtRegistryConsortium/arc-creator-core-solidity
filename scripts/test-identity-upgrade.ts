import { ethers } from "hardhat";
import * as fs from "fs";

/**
 * Script to test if the Identity contract upgrade was successful
 * by creating an identity with the new representedBy and representedArtists fields
 */
async function main() {
  console.log("=".repeat(80));
  console.log("TESTING IDENTITY CONTRACT UPGRADE (SEPOLIA)");
  console.log("=".repeat(80));

  // Get the deployer account
  const [deployer] = await ethers.getSigners();
  console.log(`\n📝 Tester: ${deployer.address}`);
  
  // Get network information
  const network = await ethers.provider.getNetwork();
  console.log(`🌐 Network: ${network.name} (chainId: ${network.chainId})`);

  // Get the latest deployment info
  const deploymentsDir = "./deployments";
  const deploymentFiles = fs.readdirSync(deploymentsDir)
    .filter(file => file.startsWith('sepolia-') && !file.includes('upgrade'))
    .sort((a, b) => {
      const timestampA = parseInt(a.split('-')[1].split('.')[0]);
      const timestampB = parseInt(b.split('-')[1].split('.')[0]);
      return timestampB - timestampA; // Sort in descending order (newest first)
    });

  if (deploymentFiles.length === 0) {
    throw new Error("No deployment files found for Sepolia network");
  }

  const latestDeploymentFile = deploymentFiles[0];
  const latestDeploymentPath = `${deploymentsDir}/${latestDeploymentFile}`;
  const latestDeployment = JSON.parse(fs.readFileSync(latestDeploymentPath, 'utf8'));
  
  console.log(`\n📄 Using latest deployment from: ${latestDeploymentFile}`);
  
  // Get the proxy address for the Identity contract
  const identityProxyAddress = latestDeployment.contracts.identity;
  if (!identityProxyAddress) {
    throw new Error("Identity contract address not found in deployment file");
  }
  
  console.log(`\n🔍 Identity contract proxy address: ${identityProxyAddress}`);

  // Connect to the Identity contract
  const Identity = await ethers.getContractFactory("Identity");
  // Use 'any' type to bypass TypeScript's type checking
  const identity: any = Identity.attach(identityProxyAddress);

  // Sample JSON data for representedBy and representedArtists
  const sampleRepresentedBy = JSON.stringify({
    galleries: [
      {
        name: "Test Gallery One",
        location: "New York",
        website: "https://testgalleryone.com",
        since: "2023-01-01"
      }
    ]
  });

  const sampleRepresentedArtists = JSON.stringify({
    artists: [
      {
        name: "Test Artist One",
        medium: "Digital Art",
        since: "2023-05-15"
      }
    ]
  });

  try {
    // Check if the deployer already has an identity
    let artistIdentityId;
    try {
      const existingIdentity = await identity.getIdentityByAddress(deployer.address);
      artistIdentityId = existingIdentity.id;
      console.log(`\n🔍 Deployer already has an identity with ID: ${artistIdentityId}`);
      console.log(`🔍 Artist Name: ${existingIdentity.name}`);
      console.log(`🔍 Artist representedBy: ${existingIdentity.representedBy}`);
      
      // Update the existing identity to test the update functionality
      console.log("\n🔄 Updating the existing artist identity with new representedBy data...");
      
      // Updated representedBy data
      const updatedRepresentedBy = JSON.stringify({
        galleries: [
          {
            name: "Updated Gallery",
            location: "Berlin",
            website: "https://updatedgallery.com",
            since: "2023-10-15"
          }
        ]
      });
      
      const updateTx = await identity.updateIdentity(
        artistIdentityId,
        "Updated Test Artist",
        "An updated test artist after upgrade",
        "arweave://updated-test-image-link",
        ["https://updated-test-website.com"],
        ["updated", "test", "upgrade"],
        20000101, // DOB (unchanged)
        0, // DOD (unchanged)
        "Updated Location",
        [], // addresses (empty for artists)
        updatedRepresentedBy, // Updated representedBy JSON
        "" // representedArtists (empty for artists)
      );
      
      await updateTx.wait();
      console.log("✅ Artist identity updated successfully!");
      
      // Get the updated identity
      const updatedIdentity = await identity.getIdentityById(artistIdentityId);
      console.log(`\n🔍 Updated Artist Name: ${updatedIdentity.name}`);
      console.log(`🔍 Updated Artist representedBy: ${updatedIdentity.representedBy}`);
      
    } catch (error) {
      // If the identity doesn't exist, create a new one
      console.log("\n🔄 Creating a new artist identity with representedBy data...");
      
      const createArtistTx = await identity.createIdentity(
        0, // IdentityType.Artist
        "Test Artist for Upgrade",
        "A test artist to verify the upgrade",
        "arweave://test-image-link",
        ["https://test-website.com"],
        ["test", "upgrade"],
        20000101, // DOB
        0, // DOD (not deceased)
        "Test Location",
        [], // addresses (empty for artists)
        sampleRepresentedBy, // representedBy JSON
        "" // representedArtists (empty for artists)
      );
      
      await createArtistTx.wait();
      console.log("✅ Artist identity created successfully!");
      
      // Get the identity ID
      const artistIdentity = await identity.getIdentityByAddress(deployer.address);
      artistIdentityId = artistIdentity.id;
      console.log(`\n🔍 Artist Identity ID: ${artistIdentityId}`);
      console.log(`🔍 Artist Name: ${artistIdentity.name}`);
      console.log(`🔍 Artist representedBy: ${artistIdentity.representedBy}`);
    }
    
    // Create a gallery identity with a new wallet
    console.log("\n🔄 Creating a test gallery identity with representedArtists data...");
    
    // We need a new account for the gallery since one address can only have one identity
    const galleryWallet = ethers.Wallet.createRandom().connect(ethers.provider);
    
    // Send some ETH to the gallery wallet for gas
    const sendEthTx = await deployer.sendTransaction({
      to: galleryWallet.address,
      value: ethers.parseEther("0.01")
    });
    await sendEthTx.wait();
    console.log(`💰 Sent 0.01 ETH to gallery wallet: ${galleryWallet.address}`);
    
    // Create gallery identity
    const createGalleryTx = await identity.connect(galleryWallet).createIdentity(
      1, // IdentityType.Gallery
      "Test Gallery for Upgrade",
      "A test gallery to verify the upgrade",
      "arweave://test-gallery-image-link",
      ["https://test-gallery-website.com"],
      ["test", "gallery", "upgrade"],
      0, // DOB (not applicable for galleries)
      0, // DOD (not applicable for galleries)
      "", // location (not used for galleries)
      ["123 Test Gallery St, Test City"], // addresses
      "", // representedBy (empty for galleries)
      sampleRepresentedArtists // representedArtists JSON
    );
    
    await createGalleryTx.wait();
    console.log("✅ Gallery identity created successfully!");
    
    // Get the gallery identity
    const galleryIdentityId = await identity.getIdentityByAddress(galleryWallet.address);
    console.log(`\n🔍 Gallery Identity ID: ${galleryIdentityId.id}`);
    console.log(`🔍 Gallery Name: ${galleryIdentityId.name}`);
    console.log(`🔍 Gallery representedArtists: ${galleryIdentityId.representedArtists}`);
    
    console.log("\n🎉 Test completed successfully! The upgrade is working as expected.");
    
  } catch (error) {
    console.error("\n❌ Test failed:");
    console.error(error);
    process.exitCode = 1;
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 