import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Checking balance for address:", deployer.address);
  
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Balance:", ethers.formatEther(balance), "ETH");
  
  if (balance < ethers.parseEther("0.1")) {
    console.log("WARNING: Your balance is low. You might need more ETH for deployment.");
    console.log("Consider getting ETH from a Sepolia faucet: https://sepoliafaucet.com/");
  } else {
    console.log("You have enough ETH for deployment.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 