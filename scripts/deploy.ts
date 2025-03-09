import { ethers } from "hardhat";
import { upgrades } from "hardhat";
import * as fs from "fs";

/**
 * Comprehensive deployment script for ARC Creator Core contracts
 * This script handles:
 * 1. Deployment of Identity contract (UUPS proxy)
 * 2. Deployment of ArtContract implementation
 * 3. Deployment of ArtFactory contract (UUPS proxy)
 * 4. Saving deployment information to a file
 */
async function main() {
  console.log("=".repeat(80));
  console.log("ARC CREATOR CORE - DEPLOYMENT SCRIPT");
  console.log("=".repeat(80));

  // Get the deployer account
  const [deployer] = await ethers.getSigners();
  console.log(`\n📝 Deployer: ${deployer.address}`);
  
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log(`💰 Balance: ${ethers.formatEther(balance)} ETH`);

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

  // Deployment information object
  const deploymentInfo = {
    network: network.name,
    chainId: Number(network.chainId),
    timestamp: new Date().toISOString(),
    deployer: deployer.address,
    contracts: {} as Record<string, string>
  };

  try {
    // Step 1: Deploy Identity contract
    console.log("\n🔄 Deploying Identity contract...");
    const Identity = await ethers.getContractFactory("Identity");
    const identity = await upgrades.deployProxy(Identity, [deployer.address], {
      kind: "uups",
      initializer: "initialize",
    });
    await identity.waitForDeployment();
    const identityAddress = await identity.getAddress();
    console.log(`✅ Identity contract deployed to: ${identityAddress}`);
    deploymentInfo.contracts.identity = identityAddress;

    // Step 2: Deploy ArtContract implementation
    console.log("\n🔄 Deploying ArtContract implementation...");
    const ArtContract = await ethers.getContractFactory("ArtContract");
    const artContractImplementation = await ArtContract.deploy();
    await artContractImplementation.waitForDeployment();
    const artContractImplementationAddress = await artContractImplementation.getAddress();
    console.log(`✅ ArtContract implementation deployed to: ${artContractImplementationAddress}`);
    deploymentInfo.contracts.artContractImplementation = artContractImplementationAddress;

    // Step 3: Deploy ArtFactory contract
    console.log("\n🔄 Deploying ArtFactory contract...");
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
    console.log(`✅ ArtFactory contract deployed to: ${artFactoryAddress}`);
    deploymentInfo.contracts.artFactory = artFactoryAddress;

    console.log("\n🎉 Deployment complete!");
    
    // Save deployment information to a file
    const timestamp = Date.now();
    const networkName = network.name === "unknown" ? "localhost" : network.name;
    const deploymentPath = `${deploymentsDir}/${networkName}-${timestamp}.json`;
    
    fs.writeFileSync(
      deploymentPath,
      JSON.stringify(deploymentInfo, null, 2)
    );
    
    console.log(`📄 Deployment information saved to ${deploymentPath}`);
    
    // Print verification instructions
    console.log("\n📋 Verification Instructions:");
    console.log("1. Verify ArtContract implementation:");
    console.log(`   npx hardhat verify --network ${networkName} ${artContractImplementationAddress}`);
    console.log("\n2. For proxy contracts (Identity and ArtFactory), verify through Etherscan UI:");
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

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 