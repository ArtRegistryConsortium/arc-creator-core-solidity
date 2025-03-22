import { ethers, upgrades } from "hardhat";

async function main() {
  const proxyAddress = "0x5a753e460AA01e0494b120E3d614B088CF6A512d";
  console.log("Upgrading Identity contract...");

  const Identity = await ethers.getContractFactory("Identity");
  await upgrades.upgradeProxy(proxyAddress, Identity);

  console.log("Identity contract upgraded successfully.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 