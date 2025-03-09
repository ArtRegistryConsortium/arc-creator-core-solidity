import { run } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  console.log("Verifying contracts on Etherscan...");

  // Get the network name from environment variable
  const network = process.env.HARDHAT_NETWORK || "sepolia";
  
  // Find the most recent deployment file for the current network
  const deploymentsDir = "./deployments";
  
  if (!fs.existsSync(deploymentsDir)) {
    console.error("Deployments directory not found. Please deploy contracts first.");
    process.exit(1);
  }
  
  const deploymentFiles = fs.readdirSync(deploymentsDir)
    .filter(file => file.startsWith(network) && file.endsWith(".json"))
    .sort((a, b) => {
      // Sort by timestamp (descending)
      const timestampA = parseInt(a.split("-")[1].split(".")[0]);
      const timestampB = parseInt(b.split("-")[1].split(".")[0]);
      return timestampB - timestampA;
    });
  
  if (deploymentFiles.length === 0) {
    console.error(`No deployment files found for network ${network}`);
    process.exit(1);
  }
  
  // Get the most recent deployment
  const deploymentFile = deploymentFiles[0];
  const deploymentPath = path.join(deploymentsDir, deploymentFile);
  const deploymentData = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));
  
  console.log(`Using deployment from ${deploymentFile}`);
  
  // Verify the ART Contract implementation
  const artContractImplementationAddress = deploymentData.contracts.artContractImplementationAddress;
  console.log(`Verifying ART Contract implementation at ${artContractImplementationAddress}...`);
  
  try {
    await run("verify:verify", {
      address: artContractImplementationAddress,
      constructorArguments: [],
    });
    console.log("ART Contract implementation verified successfully!");
  } catch (error) {
    console.error("Error verifying ART Contract implementation:", error);
  }
  
  console.log("\nNote: Proxy contracts (Identity and ArtFactory) need to be verified through Etherscan's UI");
  console.log("1. Go to the contract address on Etherscan");
  console.log("2. Click on the 'Contract' tab");
  console.log("3. Click 'Verify and Publish'");
  console.log("4. Select 'Proxy Contract'");
  console.log("5. Follow the instructions to verify the implementation contract");
  
  console.log("\nProxy contract addresses:");
  console.log(`Identity: ${deploymentData.contracts.identityAddress}`);
  console.log(`ArtFactory: ${deploymentData.contracts.artFactoryAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 