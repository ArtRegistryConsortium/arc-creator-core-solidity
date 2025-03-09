import { ethers } from "hardhat";

async function main() {
  console.log("Verifying ARC contracts state...");

  // Contract addresses from deployment and interaction
  const identityAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const artFactoryAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  const artContractAddress = "0x856e4424f806D16E8CBC702B3c0F2ede5468eae5";

  // Get signers
  const [deployer, artist] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);
  console.log("Artist address:", artist.address);

  // Get contract instances
  // Using 'any' type to bypass TypeScript type checking
  const identity: any = await ethers.getContractAt("Identity", identityAddress);
  const artFactory: any = await ethers.getContractAt("ArtFactory", artFactoryAddress);
  const artContract: any = await ethers.getContractAt("ArtContract", artContractAddress);

  // Verify identity details
  console.log("\nVerifying identity details...");
  const artistIdentity = await identity.getIdentityByAddress(artist.address);
  console.log("Artist identity ID:", artistIdentity.id.toString());
  console.log("Artist identity name:", artistIdentity.name);
  console.log("Artist identity type:", artistIdentity.identityType);

  // Verify ART contract details
  console.log("\nVerifying ART contract details...");
  const artistIdentityId = artistIdentity.id;
  const artContracts = await artFactory.getArtContractsByArtist(artistIdentityId);
  console.log("ART contracts for artist:", artContracts);
  
  const artistIdFromContract = await artContract.getArtistIdentityId();
  console.log("Artist ID from ART contract:", artistIdFromContract.toString());

  // Verify token ownership
  console.log("\nVerifying token ownership...");
  const tokenId = 1n;
  const tokenOwner = await artContract.ownerOf(tokenId);
  console.log("Token owner:", tokenOwner);
  console.log("Is owner the artist?", tokenOwner === artist.address);

  // Verify token metadata
  console.log("\nVerifying token metadata...");
  const artMetadata = await artContract.getArtMetadata(tokenId);
  console.log("Title:", artMetadata.title);
  console.log("Description:", artMetadata.description);
  console.log("Year of creation:", artMetadata.yearOfCreation.toString());
  console.log("Medium:", artMetadata.medium);
  console.log("Dimensions:", artMetadata.dimensions);
  console.log("Edition:", artMetadata.edition);
  console.log("Series:", artMetadata.series);
  console.log("Catalogue inventory:", artMetadata.catalogueInventory);
  console.log("Image:", artMetadata.image);
  console.log("Certification method:", artMetadata.certificationMethod);
  console.log("Artist statement:", artMetadata.artistStatement);
  console.log("Status:", artMetadata.status);
  console.log("Note:", artMetadata.note);
  console.log("Royalties:", artMetadata.royalties.toString());

  // Verify royalty info
  console.log("\nVerifying royalty info...");
  const salePrice = ethers.parseEther("1.0");
  const [receiver, royaltyAmount] = await artContract.royaltyInfo(tokenId, salePrice);
  console.log("Royalty receiver:", receiver);
  console.log("Royalty amount for 1 ETH sale:", ethers.formatEther(royaltyAmount), "ETH");
  console.log("Royalty percentage:", (Number(royaltyAmount) * 100 / Number(salePrice)).toFixed(2), "%");

  console.log("\nVerification complete!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 