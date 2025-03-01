import { ethers, upgrades } from "hardhat";

async function main() {
  // Get the proxy address from command line arguments or environment variables
  const proxyAddress = process.env.PROXY_ADDRESS;
  if (!proxyAddress) {
    throw new Error("Please provide a proxy address via PROXY_ADDRESS environment variable");
  }

  console.log(`Upgrading contract at ${proxyAddress}...`);

  // Determine which contract to upgrade based on the proxy address
  // You would need to maintain a registry of which proxy is for which contract type
  // For this example, we'll assume it's the ARTFactory
  
  // Get the contract factory for the new implementation
  const ARTFactory = await ethers.getContractFactory("ARTFactory");
  
  // Upgrade the proxy to the new implementation
  const upgraded = await upgrades.upgradeProxy(proxyAddress, ARTFactory);
  
  await upgraded.waitForDeployment();
  console.log("Contract upgraded successfully!");
  
  // If you want to upgrade an ARTToken contract instead, you would use:
  // const ARTToken = await ethers.getContractFactory("ARTToken");
  // const upgraded = await upgrades.upgradeProxy(proxyAddress, ARTToken);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 