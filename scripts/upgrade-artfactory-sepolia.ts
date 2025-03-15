import { ethers } from "hardhat";
import { upgrades } from "hardhat";
import * as fs from "fs";

/**
 * Sepolia Testnet Upgrade Script for ArtFactory contract
 * 
 * This script upgrades the ArtFactory contract with the new implementation
 * that automatically sets the ART contract name to "ARC / " + artist name.
 */
async function main() {
  console.log("=".repeat(80));
  console.log("ARC CREATOR CORE - ARTFACTORY CONTRACT UPGRADE SCRIPT (SEPOLIA)");
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

  // Get the latest deployment info
  const deploymentFiles = fs.readdirSync(deploymentsDir)
    .filter(file => file.startsWith('sepolia-'))
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
  
  // Get the proxy address for the ArtFactory contract
  const artFactoryProxyAddress = latestDeployment.contracts.artFactory;
  if (!artFactoryProxyAddress) {
    throw new Error("ArtFactory contract address not found in deployment file");
  }
  
  console.log(`\n🔍 ArtFactory contract proxy address: ${artFactoryProxyAddress}`);

  // Deployment information object for the upgrade
  const upgradeInfo = {
    network: network.name,
    chainId: Number(network.chainId),
    timestamp: new Date().toISOString(),
    deployer: deployer.address,
    upgradedContracts: {
      artFactory: {
        proxyAddress: artFactoryProxyAddress,
        newImplementation: ""
      }
    }
  };

  // File to save upgrade information
  const timestamp = Date.now();
  const networkName = network.name === "unknown" ? "localhost" : network.name;
  const upgradePath = `${deploymentsDir}/${networkName}-upgrade-artfactory-${timestamp}.json`;

  try {
    // Upgrade ArtFactory contract
    console.log("\n🔄 Preparing to upgrade ArtFactory contract...");
    const ArtFactory = await ethers.getContractFactory("ArtFactory");
    
    console.log("🔄 Upgrading ArtFactory contract...");
    const upgradedArtFactory = await upgrades.upgradeProxy(artFactoryProxyAddress, ArtFactory);
    await upgradedArtFactory.waitForDeployment();
    
    // Get the new implementation address
    const implementationAddress = await upgrades.erc1967.getImplementationAddress(artFactoryProxyAddress);
    console.log(`✅ ArtFactory contract upgraded with new implementation at: ${implementationAddress}`);
    
    // Save upgrade information
    upgradeInfo.upgradedContracts.artFactory.newImplementation = implementationAddress;
    fs.writeFileSync(
      upgradePath,
      JSON.stringify(upgradeInfo, null, 2)
    );
    console.log(`📄 Upgrade information saved to ${upgradePath}`);

    console.log("\n🎉 Upgrade complete!");
    
    // Print verification instructions
    console.log("\n📋 Verification Instructions:");
    console.log("1. Verify the new implementation contract:");
    console.log(`   npx hardhat verify --network ${networkName} ${implementationAddress}`);
    
  } catch (error) {
    console.error("\n❌ Upgrade failed:");
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