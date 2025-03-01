import { ethers } from "hardhat";

async function main() {
  // Get the factory address from environment variables
  const factoryAddress = process.env.FACTORY_PROXY_ADDRESS;
  if (!factoryAddress) {
    throw new Error("Please provide a factory address via FACTORY_PROXY_ADDRESS environment variable");
  }

  console.log(`Interacting with ARTFactory at ${factoryAddress}...`);

  // Get the contract factory
  const ARTFactory = await ethers.getContractFactory("ARTFactory");
  
  // Attach to the deployed factory
  const artFactory = ARTFactory.attach(factoryAddress);
  
  // Get the total number of deployed ART contracts
  const totalDeployed = await artFactory.getTotalDeployedContracts();
  console.log(`Total deployed ART contracts: ${totalDeployed}`);
  
  // Get all deployed ART contracts
  const deployedContracts = await artFactory.getAllDeployedContracts();
  console.log("Deployed ART contracts:", deployedContracts);
  
  // If there are deployed contracts, interact with the first one
  if (deployedContracts.length > 0) {
    const artContractAddress = deployedContracts[0];
    console.log(`Interacting with ART contract at ${artContractAddress}...`);
    
    // Get the ART contract
    const ARTToken = await ethers.getContractFactory("ARTToken");
    const artContract = ARTToken.attach(artContractAddress);
    
    // Get artist information
    const artistName = await artContract.getArtistName();
    const artistAddress = await artContract.getArtistAddress();
    
    console.log(`Artist Name: ${artistName}`);
    console.log(`Artist Address: ${artistAddress}`);
    
    // Get the total supply of tokens
    try {
      const totalSupply = await artContract.balanceOf(artistAddress);
      console.log(`Total tokens owned by artist: ${totalSupply}`);
    } catch (error) {
      console.error("Error getting token balance:", error);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 