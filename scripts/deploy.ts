import { ethers } from "hardhat";
import { upgrades } from "hardhat";

async function main() {
  console.log("Deploying ARC contracts...");

  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);

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
  console.log({
    identityAddress,
    artContractImplementationAddress,
    artFactoryAddress,
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 