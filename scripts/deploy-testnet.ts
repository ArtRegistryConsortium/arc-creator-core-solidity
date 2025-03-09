import { ethers } from "hardhat";
import { upgrades } from "hardhat";
import * as fs from "fs";

async function main() {
  console.log("Deploying ARC contracts to testnet...");

  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);
  console.log("Deployer balance:", ethers.formatEther(await ethers.provider.getBalance(deployer.address)), "ETH");

  // Deploy Identity contract
  console.log("Deploying Identity contract...");
  const Identity = await ethers.getContractFactory("Identity");
  const identity = await upgrades.deployProxy(Identity, [deployer.address], {
    kind: "uups",
    initializer: "initialize",
  });
  await identity.waitForDeployment();
  const identityAddress = await identity.getAddress();
  console.log("Identity contract deployed to:", identityAddress);

  // Deploy ART Contract implementation
  console.log("Deploying ART Contract implementation...");
  const ArtContract = await ethers.getContractFactory("ArtContract");
  const artContractImplementation = await ArtContract.deploy();
  await artContractImplementation.waitForDeployment();
  const artContractImplementationAddress = await artContractImplementation.getAddress();
  console.log("ART Contract implementation deployed to:", artContractImplementationAddress);

  // Deploy ART Factory contract
  console.log("Deploying ART Factory contract...");
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
  console.log("ART Factory contract deployed to:", artFactoryAddress);

  console.log("Deployment complete!");
  
  const deploymentInfo = {
    network: process.env.HARDHAT_NETWORK || "unknown",
    timestamp: new Date().toISOString(),
    deployer: deployer.address,
    contracts: {
      identityAddress,
      artContractImplementationAddress,
      artFactoryAddress,
    }
  };

  // Save deployment information to a file
  const deploymentPath = `./deployments/${deploymentInfo.network}-${Date.now()}.json`;
  
  // Create deployments directory if it doesn't exist
  if (!fs.existsSync('./deployments')) {
    fs.mkdirSync('./deployments', { recursive: true });
  }
  
  fs.writeFileSync(
    deploymentPath,
    JSON.stringify(deploymentInfo, null, 2)
  );
  
  console.log(`Deployment information saved to ${deploymentPath}`);
  console.log("To verify contracts on Etherscan, run:");
  console.log(`npx hardhat verify --network ${deploymentInfo.network} ${artContractImplementationAddress}`);
  console.log("Note: Proxy contracts will need to be verified through Etherscan's UI");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 