import { run } from "hardhat";
import * as fs from "fs";
import * as path from "path";

/**
 * Verification script for ARC Creator Core contracts
 * This script handles:
 * 1. Finding the most recent deployment for the current network
 * 2. Verifying the ArtContract implementation on Etherscan
 * 3. Providing instructions for verifying proxy contracts
 */
async function main() {
  console.log("=".repeat(80));
  console.log("ARC CREATOR CORE - VERIFICATION SCRIPT");
  console.log("=".repeat(80));

  // Get the network name from environment variable
  const networkName = process.env.HARDHAT_NETWORK || "localhost";
  console.log(`\n🌐 Network: ${networkName}`);
  
  // Find the most recent deployment file for the current network
  const deploymentsDir = "./deployments";
  
  if (!fs.existsSync(deploymentsDir)) {
    console.error("\n❌ Deployments directory not found. Please deploy contracts first.");
    process.exit(1);
  }
  
  const deploymentFiles = fs.readdirSync(deploymentsDir)
    .filter(file => file.startsWith(networkName) && file.endsWith(".json"))
    .sort((a, b) => {
      // Sort by timestamp (descending)
      const timestampA = parseInt(a.split("-")[1].split(".")[0]);
      const timestampB = parseInt(b.split("-")[1].split(".")[0]);
      return timestampB - timestampA;
    });
  
  if (deploymentFiles.length === 0) {
    console.error(`\n❌ No deployment files found for network ${networkName}`);
    process.exit(1);
  }
  
  // Get the most recent deployment
  const deploymentFile = deploymentFiles[0];
  const deploymentPath = path.join(deploymentsDir, deploymentFile);
  const deploymentData = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));
  
  console.log(`\n📄 Using deployment from ${deploymentFile}`);
  console.log(`📅 Deployment timestamp: ${deploymentData.timestamp}`);
  console.log(`👤 Deployer: ${deploymentData.deployer}`);
  
  // Verify the ArtContract implementation
  const artContractImplementationAddress = deploymentData.contracts.artContractImplementation;
  if (!artContractImplementationAddress) {
    console.error("\n❌ ArtContract implementation address not found in deployment file");
    process.exit(1);
  }
  
  console.log(`\n🔄 Verifying ArtContract implementation at ${artContractImplementationAddress}...`);
  
  try {
    await run("verify:verify", {
      address: artContractImplementationAddress,
      constructorArguments: [],
    });
    console.log("\n✅ ArtContract implementation verified successfully!");
  } catch (error: any) {
    if (error.message.includes("Already Verified")) {
      console.log("\n✅ ArtContract implementation already verified!");
    } else {
      console.error("\n❌ Error verifying ArtContract implementation:", error);
    }
  }
  
  // Print instructions for verifying proxy contracts
  console.log("\n📋 Proxy Contract Verification Instructions:");
  console.log("For proxy contracts (Identity and ArtFactory), verify through Etherscan UI:");
  console.log("1. Go to the contract address on Etherscan");
  console.log("2. Click on the 'Contract' tab");
  console.log("3. Click 'Verify and Publish'");
  console.log("4. Select 'Proxy Contract'");
  console.log("5. Follow the instructions to verify the implementation contract");
  
  console.log("\n📄 Proxy contract addresses:");
  console.log(`Identity: ${deploymentData.contracts.identity}`);
  console.log(`ArtFactory: ${deploymentData.contracts.artFactory}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 