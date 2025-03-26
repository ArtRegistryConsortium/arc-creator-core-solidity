import { ethers } from "hardhat";
import * as fs from "fs";

async function main() {
  console.log("=".repeat(80));
  console.log("INTERACTING WITH DEPLOYED CONTRACTS ON SEPOLIA");
  console.log("=".repeat(80));

  // Get the deployer account
  const [deployer] = await ethers.getSigners();
  console.log(`\n📝 Deployer: ${deployer.address}`);
  
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
  
  // Get the contract addresses
  const identityAddress = latestDeployment.contracts.identity;
  const artFactoryAddress = latestDeployment.contracts.artFactory;
  
  console.log(`\n🔍 Identity contract address: ${identityAddress}`);
  console.log(`🔍 ArtFactory contract address: ${artFactoryAddress}`);

  // Connect to the contracts
  const Identity = await ethers.getContractFactory("Identity");
  const identity = Identity.attach(identityAddress);
  
  const ArtFactory = await ethers.getContractFactory("ArtFactory");
  const artFactory = ArtFactory.attach(artFactoryAddress);
  
  try {
    // Create an artist identity
    console.log("\n🔄 Creating an artist identity...");
    const artistName = "Test Artist on Sepolia";
    const tx1 = await identity.createIdentity(
      0, // Artist type
      artistName,
      "Artist for testing on Sepolia",
      "https://arweave.net/artist-image",
      ["https://artist.com"],
      ["artist", "painter"],
      946684800, // Jan 1, 2000
      0, // Not deceased
      "Paris",
      [],
      "", // representedBy
      "" // representedArtists
    );
    await tx1.wait();
    
    // Get the artist identity ID
    const artistIdentity = await identity.getIdentityByAddress(deployer.address);
    const artistIdentityId = artistIdentity.id;
    console.log(`✅ Artist identity created with ID: ${artistIdentityId} and name: ${artistName}`);
    
    // Deploy an ART contract
    console.log("\n🔄 Deploying an ART contract...");
    const tx2 = await artFactory.deployArtContract(
      artistIdentityId,
      "TEST"
    );
    await tx2.wait();
    
    // Get the deployed ART contract address
    const artContracts = await artFactory.getArtContractsByArtist(artistIdentityId);
    const artContractAddress = artContracts[0];
    console.log(`✅ ART contract deployed at: ${artContractAddress}`);
    
    // Get the ART contract instance
    const ArtContract = await ethers.getContractFactory("ArtContract");
    const artContract = ArtContract.attach(artContractAddress);
    
    // Get the name of the ART contract
    const name = await artContract.name();
    console.log(`\n📝 ART contract name: ${name}`);
    
    // Check if the name is set correctly
    const expectedName = `ARC / ${artistName}`;
    if (name === expectedName) {
      console.log(`\n✅ SUCCESS: ART contract name is set correctly to "${expectedName}"`);
    } else {
      console.log(`\n❌ FAILURE: ART contract name is "${name}", expected "${expectedName}"`);
    }
    
    // Mint an ART token
    console.log("\n🔄 Minting an ART token...");
    const metadata = {
      artistIdentityId: artistIdentityId,
      title: "Sample Artwork on Sepolia",
      description: "A beautiful abstract painting created on Sepolia testnet.",
      yearOfCreation: 2024,
      medium: "Oil on canvas",
      dimensions: "100x150 cm",
      edition: "1/1",
      series: "Abstract Series",
      image: "https://arweave.net/sample-hash",
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
    
    const tx3 = await artContract.mint(metadata);
    await tx3.wait();
    console.log(`✅ ART token minted`);
    
    // Get the ART token metadata
    const tokenId = 1;
    const artMetadata = await artContract.getArtMetadata(tokenId);
    console.log(`\n📝 ART Token #${tokenId} Metadata:`);
    console.log(`  Title: ${artMetadata.title}`);
    console.log(`  Description: ${artMetadata.description}`);
    console.log(`  Medium: ${artMetadata.medium}`);
    console.log(`  Artist Identity ID: ${artMetadata.artistIdentityId}`);
    console.log(`  Royalties: ${artMetadata.royalties}`);
    
    console.log("\n🎉 Interaction complete!");
    
  } catch (error) {
    console.error("\n❌ Interaction failed:");
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