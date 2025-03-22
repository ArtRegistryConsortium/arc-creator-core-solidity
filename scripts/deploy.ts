import { ethers, upgrades } from "hardhat";
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
  console.log("Identity contract deployed to:", await identity.getAddress());

  // Deploy ArtContract implementation
  console.log("\nDeploying ArtContract implementation...");
  const ArtContract = await ethers.getContractFactory("ArtContract");
  const artContractImplementation = await ArtContract.deploy();
  await artContractImplementation.waitForDeployment();
  console.log("ArtContract implementation deployed to:", await artContractImplementation.getAddress());

  // Deploy ArtFactory contract
  console.log("\nDeploying ArtFactory contract...");
  const ArtFactory = await ethers.getContractFactory("ArtFactory");
  const artFactory = await upgrades.deployProxy(
    ArtFactory,
    [deployer.address, await identity.getAddress(), await artContractImplementation.getAddress()],
    {
      kind: "uups",
      initializer: "initialize",
    }
  );
  await artFactory.waitForDeployment();
  console.log("ArtFactory contract deployed to:", await artFactory.getAddress());

  // Create initial admin identity
  console.log("\nCreating initial admin identity...");
  const adminLinks = JSON.stringify({
    links: [
      {
        type: "website",
        url: "https://admin.com",
        title: "Admin Website"
      }
    ]
  });

  const adminAddresses = JSON.stringify({
    addresses: []
  });

  await identity.createIdentity(
    0, // Artist
    "Admin Artist",
    "Admin with artist identity",
    "https://arweave.net/admin-image",
    adminLinks,
    ["admin", "artist"],
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
  console.log("Identity:", await identity.getAddress());
  console.log("ArtContract Implementation:", await artContractImplementation.getAddress());
  console.log("ArtFactory:", await artFactory.getAddress());

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
    deploymentInfo.contracts.identity = await identity.getAddress();
    deploymentInfo.contracts.artContractImplementation = await artContractImplementation.getAddress();
    deploymentInfo.contracts.artFactory = await artFactory.getAddress();

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
    console.log(`   npx hardhat verify --network ${networkName} ${await artContractImplementation.getAddress()}`);
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