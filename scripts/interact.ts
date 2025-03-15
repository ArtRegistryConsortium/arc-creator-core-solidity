import { ethers } from "hardhat";

async function main() {
  console.log("Interacting with deployed ARC contracts...");

  // Contract addresses from deployment
  const identityAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const artFactoryAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

  // Get signers
  const [deployer, artist] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);
  console.log("Artist address:", artist.address);

  // Get contract instances
  // Using 'any' type to bypass TypeScript type checking
  const identity: any = await ethers.getContractAt("Identity", identityAddress);
  const artFactory: any = await ethers.getContractAt("ArtFactory", artFactoryAddress);

  // Create artist identity
  console.log("Creating artist identity...");
  const tx1 = await identity.connect(artist).createIdentity(
    0, // Artist type
    "Test Artist",
    "Artist for testing",
    "https://arweave.net/artist-image",
    ["https://artist.com"],
    ["artist", "painter"],
    946684800, // Jan 1, 2000
    0, // Not deceased
    "Paris",
    [],
    "", // representedBy
    "" // representedArtists
  );
  await tx1.wait();
  console.log("Artist identity created");

  // Get artist identity ID
  const artistIdentity = await identity.getIdentityByAddress(artist.address);
  const artistIdentityId = artistIdentity.id;
  console.log("Artist identity ID:", artistIdentityId.toString());

  // Deploy ART contract for artist
  console.log("Deploying ART contract for artist...");
  const tx2 = await artFactory.connect(artist).deployArtContract(
    artistIdentityId,
    "ARTC"
  );
  await tx2.wait();
  console.log("ART contract deployed");

  // Get deployed ART contract address
  const artContracts = await artFactory.getArtContractsByArtist(artistIdentityId);
  const artContractAddress = artContracts[0];
  console.log("ART contract address:", artContractAddress);

  // Get ART contract instance
  const artContract: any = await ethers.getContractAt("ArtContract", artContractAddress);

  // Mint ART token
  console.log("Minting ART token...");
  const metadata = {
    artistIdentityId: artistIdentityId,
    title: "Sample Artwork",
    yearOfCreation: 2024,
    medium: "Oil on canvas",
    dimensions: "100x150 cm",
    edition: "1/1",
    series: "Abstract Series",
    catalogueInventory: "ART-2024-001",
    image: "https://arweave.net/sample-hash",
    manualSalesInformation: JSON.stringify({
      price: "1000000000000000000",
      buyer: "0x0000000000000000000000000000000000000000",
      date: "2024-03-08"
    }),
    certificationMethod: "NFC chip",
    exhibitionHistory: JSON.stringify([
      {
        name: "Sample Gallery",
        date: "2024-01-15",
        location: "New York"
      }
    ]),
    conditionReports: JSON.stringify([
      {
        date: "2024-02-01",
        report: "Excellent condition"
      }
    ]),
    artistStatement: "This artwork represents my vision of the future.",
    bibliography: JSON.stringify([
      {
        title: "Art Today",
        author: "Jane Doe",
        page: "45"
      }
    ]),
    keywords: ["abstract", "contemporary", "colorful"],
    locationCollection: JSON.stringify({
      location: "New York",
      collection: "Private Collection"
    }),
    status: 0, // Available
    note: "Special commission",
    royalties: 1000 // 10%
  };

  const tx3 = await artContract.connect(artist).mint(metadata);
  await tx3.wait();
  console.log("ART token minted");

  // Get ART token metadata
  const tokenId = 1n;
  const artMetadata = await artContract.getArtMetadata(tokenId);
  console.log(`\nART Token #${tokenId} Metadata:`);
  console.log("  Title:", artMetadata.title);
  console.log("  Description:", artMetadata.description);
  console.log("  Medium:", artMetadata.medium);
  console.log("  Artist Identity ID:", artMetadata.artistIdentityId.toString());
  console.log("  Royalties:", artMetadata.royalties.toString());

  console.log("Interaction complete!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 