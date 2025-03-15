import { ethers } from "hardhat";
import * as fs from "fs";

/**
 * Script to test if the ArtFactory contract upgrade was successful
 * by deploying a new ART contract and checking if the name is set to "ARC / " + artist name
 */
async function main() {
  console.log("=".repeat(80));
  console.log("TESTING ARTFACTORY CONTRACT UPGRADE (SEPOLIA)");
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
  
  // Get the proxy addresses for the contracts
  const identityProxyAddress = latestDeployment.contracts.identity;
  const artFactoryProxyAddress = latestDeployment.contracts.artFactory;
  
  if (!identityProxyAddress) {
    throw new Error("Identity contract address not found in deployment file");
  }
  
  if (!artFactoryProxyAddress) {
    throw new Error("ArtFactory contract address not found in deployment file");
  }
  
  console.log(`\n🔍 Identity contract proxy address: ${identityProxyAddress}`);
  console.log(`🔍 ArtFactory contract proxy address: ${artFactoryProxyAddress}`);

  // Connect to the contracts
  const Identity = await ethers.getContractFactory("Identity");
  const identity = Identity.attach(identityProxyAddress);
  
  const ArtFactory = await ethers.getContractFactory("ArtFactory");
  const artFactory = ArtFactory.attach(artFactoryProxyAddress);
  
  try {
    // Get the existing identity
    console.log("\n🔄 Getting the existing identity...");
    const artistIdentity = await identity.getIdentityByAddress(deployer.address);
    const artistIdentityId = artistIdentity.id;
    const artistName = artistIdentity.name;
    console.log(`✅ Found existing identity with ID: ${artistIdentityId} and name: ${artistName}`);
    
    // Deploy a new ART contract
    console.log("\n🔄 Deploying a new ART contract...");
    const tx2 = await artFactory.deployArtContract(
      artistIdentityId,
      "TEST"
    );
    await tx2.wait();
    
    // Get the deployed ART contract address
    const artContracts = await artFactory.getArtContractsByArtist(artistIdentityId);
    const artContractAddress = artContracts[artContracts.length - 1]; // Get the latest contract
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