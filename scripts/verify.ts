import { run } from "hardhat";

async function main() {
  // Get the implementation address from command line arguments or environment variables
  const implementationAddress = process.env.IMPLEMENTATION_ADDRESS;
  if (!implementationAddress) {
    throw new Error("Please provide an implementation address via IMPLEMENTATION_ADDRESS environment variable");
  }

  console.log(`Verifying contract at ${implementationAddress}...`);

  try {
    // Verify the implementation contract
    await run("verify:verify", {
      address: implementationAddress,
      constructorArguments: [],
    });
    
    console.log("Contract verified successfully!");
  } catch (error: any) {
    if (error.message.includes("Already Verified")) {
      console.log("Contract is already verified!");
    } else {
      console.error("Error verifying contract:", error);
      throw error;
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 