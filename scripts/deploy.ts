import { ethers, upgrades } from "hardhat";
import * as fs from "fs";
import { execSync } from "child_process";
import * as path from "path";

/**
 * Comprehensive deployment script for ARC Creator Core contracts
 * This script handles:
 * 1. Deployment of Identity contract (UUPS proxy)
 * 2. Deployment of ArtContract implementation
 * 3. Deployment of ArtFactory contract (UUPS proxy)
 * 4. Saving deployment information to a file
 * 5. Creating flattened contract files for verification
 */
async function main() {
  console.log("Starting deployment of ARC contracts...");

  // Get the deployer account
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy Identity contract
  console.log("\nDeploying Identity contract...");
  const Identity = await ethers.getContractFactory("Identity");
  const identity = await upgrades.deployProxy(Identity, [deployer.address], {
    kind: "uups",
    initializer: "initialize",
  });
  await identity.waitForDeployment();
  const identityAddress = await identity.getAddress();
  // Get the implementation address for Identity
  const identityImplementationAddress = await upgrades.erc1967.getImplementationAddress(identityAddress);
  
  console.log("Identity proxy deployed to:", identityAddress);
  console.log("Identity implementation deployed to:", identityImplementationAddress);

  // Deploy ArtContract implementation
  console.log("\nDeploying ArtContract implementation...");
  const ArtContract = await ethers.getContractFactory("ArtContract");
  const artContractImplementation = await ArtContract.deploy();
  await artContractImplementation.waitForDeployment();
  const artContractImplementationAddress = await artContractImplementation.getAddress();
  console.log("ArtContract implementation deployed to:", artContractImplementationAddress);

  // Deploy ArtFactory contract
  console.log("\nDeploying ArtFactory contract...");
  const ArtFactory = await ethers.getContractFactory("ArtFactory");
  const artFactory = await upgrades.deployProxy(
    ArtFactory,
    [deployer.address, identityAddress, artContractImplementationAddress],
    {
      kind: "uups",
      initializer: "initialize",
    }
  );
  await artFactory.waitForDeployment();
  const artFactoryAddress = await artFactory.getAddress();
  // Get the implementation address for ArtFactory
  const artFactoryImplementationAddress = await upgrades.erc1967.getImplementationAddress(artFactoryAddress);
  
  console.log("ArtFactory proxy deployed to:", artFactoryAddress);
  console.log("ArtFactory implementation deployed to:", artFactoryImplementationAddress);

  // Create initial admin identity
  console.log("\nCreating initial admin identity...");
  const adminLinks = JSON.stringify({
    links: [
      {
        type: "website",
        url: "https://artregistryconsortium.com",
        title: "Website"
      }
    ]
  });

  const adminAddresses = JSON.stringify({
    addresses: []
  });

  await identity.createIdentity(
    2, // Institution
    "ARC",
    "Admin with institution identity",
    "https://arweave.net/OcwKLGCOQWx8lgKbtUZK8czfDOX7k6THQHr4etFQ5dU",
    adminLinks,
    ["admin", "institution"],
    946684800, // Jan 1, 2000
    0, // Not deceased
    "New York",
    adminAddresses,
    "", // representedBy
    "" // representedArtists
  );
  console.log("Initial admin identity created");

  console.log("\nDeployment completed successfully!");
  console.log("\nContract addresses:");
  console.log("Identity proxy:", identityAddress);
  console.log("Identity implementation:", identityImplementationAddress);
  console.log("ArtContract Implementation:", artContractImplementationAddress);
  console.log("ArtFactory proxy:", artFactoryAddress);
  console.log("ArtFactory implementation:", artFactoryImplementationAddress);

  // Get network information
  const network = await ethers.provider.getNetwork();
  console.log(`🌐 Network: ${network.name} (chainId: ${network.chainId})`);

  // Get gas price information
  const feeData = await ethers.provider.getFeeData();
  console.log(`⛽ Gas Price: ${ethers.formatUnits(feeData.gasPrice || 0n, "gwei")} gwei`);

  // Create deployments directory if it doesn't exist
  const deploymentsDir = "./deployments";
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir, { recursive: true });
  }

  // Create flattened directory if it doesn't exist
  const flattenedDir = "./flattened";
  if (!fs.existsSync(flattenedDir)) {
    fs.mkdirSync(flattenedDir, { recursive: true });
  }

  // Deployment information object
  const deploymentInfo = {
    network: network.name,
    chainId: Number(network.chainId),
    timestamp: new Date().toISOString(),
    deployer: deployer.address,
    contracts: {
      identity: {
        proxy: identityAddress,
        implementation: identityImplementationAddress
      },
      artContractImplementation: artContractImplementationAddress,
      artFactory: {
        proxy: artFactoryAddress,
        implementation: artFactoryImplementationAddress
      }
    }
  };

  try {
    // Save deployment information to a file
    const timestamp = Date.now();
    const networkName = network.name === "unknown" ? "localhost" : network.name;
    const deploymentPath = `${deploymentsDir}/${networkName}-${timestamp}.json`;
    
    fs.writeFileSync(
      deploymentPath,
      JSON.stringify(deploymentInfo, null, 2)
    );
    
    console.log(`📄 Deployment information saved to ${deploymentPath}`);
    
    // Create flattened contract files for verification
    console.log("\n🔄 Creating flattened contract files for verification...");
    
    // Flatten Identity contract
    console.log("Flattening Identity.sol...");
    const identityFlattenedPath = path.join(flattenedDir, "Identity_flattened.sol");
    try {
      const identityFlattened = execSync(
        `npx hardhat flatten contracts/Identity.sol`
      ).toString();
      
      // Remove SPDX license identifiers except the first one
      const cleanedIdentityFlattened = removeDuplicateLicenseIdentifiers(identityFlattened);
      fs.writeFileSync(identityFlattenedPath, cleanedIdentityFlattened);
      console.log(`✅ Identity flattened contract saved to ${identityFlattenedPath}`);
    } catch (error) {
      console.error("❌ Failed to flatten Identity contract:", error);
    }
    
    // Flatten ArtContract
    console.log("Flattening ArtContract.sol...");
    const artContractFlattenedPath = path.join(flattenedDir, "ArtContract_flattened.sol");
    try {
      const artContractFlattened = execSync(
        `npx hardhat flatten contracts/ArtContract.sol`
      ).toString();
      
      // Remove SPDX license identifiers except the first one
      const cleanedArtContractFlattened = removeDuplicateLicenseIdentifiers(artContractFlattened);
      fs.writeFileSync(artContractFlattenedPath, cleanedArtContractFlattened);
      console.log(`✅ ArtContract flattened contract saved to ${artContractFlattenedPath}`);
    } catch (error) {
      console.error("❌ Failed to flatten ArtContract contract:", error);
    }
    
    // Flatten ArtFactory
    console.log("Flattening ArtFactory.sol...");
    const artFactoryFlattenedPath = path.join(flattenedDir, "ArtFactory_flattened.sol");
    try {
      const artFactoryFlattened = execSync(
        `npx hardhat flatten contracts/ArtFactory.sol`
      ).toString();
      
      // Remove SPDX license identifiers except the first one
      const cleanedArtFactoryFlattened = removeDuplicateLicenseIdentifiers(artFactoryFlattened);
      fs.writeFileSync(artFactoryFlattenedPath, cleanedArtFactoryFlattened);
      console.log(`✅ ArtFactory flattened contract saved to ${artFactoryFlattenedPath}`);
    } catch (error) {
      console.error("❌ Failed to flatten ArtFactory contract:", error);
    }
    
    // Print verification instructions
    console.log("\n📋 Verification Instructions:");
    console.log("1. Verify ArtContract implementation:");
    console.log(`   npx hardhat verify --network ${networkName} ${artContractImplementationAddress}`);
    console.log("\n2. Verify Identity implementation:");
    console.log(`   npx hardhat verify --network ${networkName} ${identityImplementationAddress}`);
    console.log("\n3. Verify ArtFactory implementation:");
    console.log(`   npx hardhat verify --network ${networkName} ${artFactoryImplementationAddress}`);
    console.log("\n4. Alternative: Verify using flattened files via Etherscan UI:");
    console.log("   a. Go to the contract address on Etherscan");
    console.log("   b. Click on the 'Contract' tab");
    console.log("   c. Click 'Verify and Publish'");
    console.log("   d. Select 'Solidity (Single file)'");
    console.log("   e. Upload the flattened file from the 'flattened' directory");
    console.log("\n5. For proxy contracts, verify through Etherscan UI:");
    console.log("   a. Go to the contract address on Etherscan");
    console.log("   b. Click on the 'Contract' tab");
    console.log("   c. Click 'Verify and Publish'");
    console.log("   d. Select 'Proxy Contract'");
    console.log("   e. Follow the instructions to verify the implementation contract");
    
  } catch (error) {
    console.error("\n❌ Deployment failed:");
    console.error(error);
    process.exitCode = 1;
  }
}

/**
 * Helper function to remove duplicate SPDX license identifiers from flattened contract
 * @param flattened The flattened contract content
 * @returns Cleaned flattened contract content
 */
function removeDuplicateLicenseIdentifiers(flattened: string): string {
  const lines = flattened.split('\n');
  let firstLicenseFound = false;
  
  const filteredLines = lines.filter(line => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('// SPDX-License-Identifier:')) {
      if (!firstLicenseFound) {
        firstLicenseFound = true;
        return true;
      }
      return false;
    }
    return true;
  });
  
  return filteredLines.join('\n');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 