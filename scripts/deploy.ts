import { ethers, upgrades } from "hardhat";

async function main() {
  console.log("Deploying ARC contracts with role-based access control and royalty management...");

  // Get signers
  const [deployer, artist1, artist2, partialEditor, fullEditor] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract factories
  const ARTFactory = await ethers.getContractFactory("ARTFactory");
  const ARTFactoryManager = await ethers.getContractFactory("ARTFactoryManager");
  const ARTToken = await ethers.getContractFactory("ARTToken");
  
  // Deploy the ART implementation first
  console.log("Deploying ARTToken implementation...");
  const artTokenImpl = await ARTToken.deploy();
  await artTokenImpl.waitForDeployment();
  const artTokenImplAddress = await artTokenImpl.getAddress();
  console.log("ARTToken implementation deployed to:", artTokenImplAddress);
  
  // Deploy the manager
  console.log("Deploying ARTFactoryManager...");
  const artFactoryManager = await upgrades.deployProxy(ARTFactoryManager, [ethers.ZeroAddress], {
    kind: "uups",
  }) as any;
  
  await artFactoryManager.waitForDeployment();
  const artFactoryManagerAddress = await artFactoryManager.getAddress();
  
  console.log("ARTFactoryManager deployed to:", artFactoryManagerAddress);
  
  // Deploy the factory as a proxy
  console.log("Deploying ARTFactory...");
  const artFactory = await upgrades.deployProxy(ARTFactory, [deployer.address, artFactoryManagerAddress, artTokenImplAddress], {
    kind: "uups",
  }) as any;
  
  await artFactory.waitForDeployment();
  const artFactoryAddress = await artFactory.getAddress();
  
  console.log("ARTFactory deployed to:", artFactoryAddress);
  
  // Update the factory address in the manager
  console.log("Updating factory address in the manager...");
  let tx = await artFactoryManager.setFactory(artFactoryAddress);
  await tx.wait();
  
  // For testing purposes, deploy a sample ART contract
  console.log("Deploying a sample ART contract for artist1...");
  tx = await artFactory.connect(artist1).deployARTContract(
    "John Doe",
    "John Doe Collection",
    "JDC"
  );
  
  await tx.wait();
  
  // Get the deployed ART contract address
  const artContractAddress = await artFactory.getArtistContract(artist1.address);
  console.log("Sample ART contract deployed to:", artContractAddress);
  
  // Get the ART contract instance
  const artContract = ARTToken.attach(artContractAddress) as any;
  
  // Test role assignments
  console.log("Testing role assignments...");
  
  // Define role constants (must match the ones in the contracts)
  const FULL_ADMIN_ROLE = ethers.keccak256(ethers.toUtf8Bytes("FULL_ADMIN_ROLE"));
  const LEGACY_PROTECTOR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("LEGACY_PROTECTOR_ROLE"));
  const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));
  const FULL_EDITOR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("FULL_EDITOR_ROLE"));
  const PARTIAL_EDITOR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("PARTIAL_EDITOR_ROLE"));
  
  // Assign artist2 as a legacy protector for artist1's contract
  console.log("Assigning artist2 as a legacy protector for artist1's contract...");
  tx = await artContract.connect(artist1).grantRole(
    LEGACY_PROTECTOR_ROLE,
    artist2.address
  );
  await tx.wait();
  
  // Assign partialEditor as a partial editor
  console.log("Assigning partialEditor as a partial editor...");
  tx = await artContract.connect(artist1).grantRole(
    PARTIAL_EDITOR_ROLE,
    partialEditor.address
  );
  await tx.wait();
  
  // Assign fullEditor as a full editor
  console.log("Assigning fullEditor as a full editor...");
  tx = await artContract.connect(artist1).grantRole(
    FULL_EDITOR_ROLE,
    fullEditor.address
  );
  await tx.wait();
  
  // Mint two tokens as artist1
  console.log("Minting token 0 as artist1...");
  tx = await artContract.connect(artist1).mintToken(
    artist1.address,
    "ipfs://QmXxxx1",
    "First Artwork",
    "This is the first artwork in the collection",
    false // Not locked
  );
  await tx.wait();
  
  console.log("Minting token 1 as artist1...");
  tx = await artContract.connect(artist1).mintToken(
    artist1.address,
    "ipfs://QmXxxx2",
    "Second Artwork",
    "This is the second artwork in the collection",
    false // Not locked
  );
  await tx.wait();
  
  // Grant token-specific permission to partialEditor for token 0 only
  console.log("Granting partialEditor permission for token 0 only...");
  tx = await artContract.connect(artist1).grantPartialEditorPermission(
    partialEditor.address,
    0
  );
  await tx.wait();
  
  // Check if partialEditor has permission for token 0
  const hasPermissionForToken0 = await artContract.hasTokenPermission(partialEditor.address, 0);
  console.log("Partial editor has permission for token 0:", hasPermissionForToken0);
  
  // Check if partialEditor has permission for token 1
  const hasPermissionForToken1 = await artContract.hasTokenPermission(partialEditor.address, 1);
  console.log("Partial editor has permission for token 1:", hasPermissionForToken1);
  
  // Check default royalty (should be 10% to artist1)
  const salePrice = ethers.parseEther("1.0");
  let [receiver, royaltyAmount] = await artContract.royaltyInfo(0, salePrice);
  console.log("Default royalty:", {
    receiver: receiver,
    amount: ethers.formatEther(royaltyAmount),
    percentage: (Number(royaltyAmount) / Number(salePrice)) * 100 + "%"
  });
  
  // Full Admin (deployer) sets contract-level royalty to 15%
  console.log("Full Admin sets contract-level royalty to 15%...");
  tx = await artContract.connect(deployer).setRoyalty(deployer.address, 1500);
  await tx.wait();
  
  // Check updated contract-level royalty
  [receiver, royaltyAmount] = await artContract.royaltyInfo(0, salePrice);
  console.log("Updated contract-level royalty:", {
    receiver: receiver,
    amount: ethers.formatEther(royaltyAmount),
    percentage: (Number(royaltyAmount) / Number(salePrice)) * 100 + "%"
  });
  
  // Artist (Contract Owner) sets token-level royalty for token 0 to 20%
  console.log("Artist sets token-level royalty for token 0 to 20%...");
  tx = await artContract.connect(artist1).setTokenRoyalty(0, artist1.address, 2000);
  await tx.wait();
  
  // Check token 0 royalty
  [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(0, salePrice);
  console.log("Token 0 royalty:", {
    receiver: receiver,
    amount: ethers.formatEther(royaltyAmount),
    percentage: (Number(royaltyAmount) / Number(salePrice)) * 100 + "%"
  });
  
  // Check token 1 royalty (should still use contract-level royalty)
  [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(1, salePrice);
  console.log("Token 1 royalty:", {
    receiver: receiver,
    amount: ethers.formatEther(royaltyAmount),
    percentage: (Number(royaltyAmount) / Number(salePrice)) * 100 + "%"
  });
  
  // Legacy Protector (artist2) sets token-level royalty for token 1 to 12.5%
  console.log("Legacy Protector sets token-level royalty for token 1 to 12.5%...");
  tx = await artContract.connect(artist2).setTokenRoyalty(1, artist2.address, 1250);
  await tx.wait();
  
  // Check token 1 royalty
  [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(1, salePrice);
  console.log("Updated token 1 royalty:", {
    receiver: receiver,
    amount: ethers.formatEther(royaltyAmount),
    percentage: (Number(royaltyAmount) / Number(salePrice)) * 100 + "%"
  });
  
  // Full Editor sets contract-level royalty to 10% (back to original)
  console.log("Full Editor sets contract-level royalty back to 10%...");
  tx = await artContract.connect(fullEditor).setRoyalty(artist1.address, 1000);
  await tx.wait();
  
  // Partial Editor tries to set token-level royalty for token 1 (should fail)
  console.log("Partial Editor tries to set token-level royalty for token 1 (should fail)...");
  try {
    tx = await artContract.connect(partialEditor).setTokenRoyalty(1, partialEditor.address, 500);
    await tx.wait();
    console.log("Unexpectedly succeeded in setting token 1 royalty");
  } catch (error) {
    console.log("Expected failure when setting token 1 royalty (no permission)");
  }
  
  // Partial Editor sets token-level royalty for token 0 (should succeed)
  console.log("Partial Editor sets token-level royalty for token 0 to 5%...");
  try {
    tx = await artContract.connect(partialEditor).setTokenRoyalty(0, partialEditor.address, 500);
    await tx.wait();
    console.log("Successfully set token 0 royalty");
    
    // Check token 0 royalty
    [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(0, salePrice);
    console.log("Updated token 0 royalty:", {
      receiver: receiver,
      amount: ethers.formatEther(royaltyAmount),
      percentage: (Number(royaltyAmount) / Number(salePrice)) * 100 + "%"
    });
  } catch (error) {
    console.error("Failed to set token 0 royalty:", error);
  }
  
  // Reset token 0 royalty to use contract default
  console.log("Resetting token 0 royalty to use contract default...");
  tx = await artContract.connect(artist1).resetTokenRoyalty(0);
  await tx.wait();
  
  // Check token 0 royalty (should now use contract default)
  [receiver, royaltyAmount] = await artContract.getRoyaltyInfo(0, salePrice);
  console.log("Token 0 royalty after reset:", {
    receiver: receiver,
    amount: ethers.formatEther(royaltyAmount),
    percentage: (Number(royaltyAmount) / Number(salePrice)) * 100 + "%"
  });
  
  console.log("Deployment and testing completed successfully!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 