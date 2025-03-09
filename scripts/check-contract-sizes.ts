import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";
import { FunctionFragment } from "ethers";

async function main() {
  console.log("Checking contract sizes...");
  
  // Maximum contract size in bytes (24KB)
  const MAX_CONTRACT_SIZE = 24 * 1024;
  
  // Get the artifacts directory
  const artifactsDir = path.join(__dirname, "../artifacts/contracts");
  
  // List of contracts to check
  const contractsToCheck = [
    "Identity.sol/Identity.json",
    "ArtContract.sol/ArtContract.json",
    "ArtFactory.sol/ArtFactory.json"
  ];
  
  console.log(`Maximum contract size: ${MAX_CONTRACT_SIZE} bytes (24KB)\n`);
  
  // Check each contract
  for (const contractFile of contractsToCheck) {
    const contractPath = path.join(artifactsDir, contractFile);
    
    if (fs.existsSync(contractPath)) {
      const artifact = JSON.parse(fs.readFileSync(contractPath, "utf8"));
      const bytecodeSize = artifact.deployedBytecode.length / 2 - 1; // Convert hex to bytes
      const percentOfLimit = (bytecodeSize / MAX_CONTRACT_SIZE * 100).toFixed(2);
      
      console.log(`Contract: ${path.basename(contractFile, ".json")}`);
      console.log(`Size: ${bytecodeSize} bytes (${(bytecodeSize / 1024).toFixed(2)} KB)`);
      console.log(`Percentage of limit: ${percentOfLimit}%`);
      
      if (bytecodeSize > MAX_CONTRACT_SIZE) {
        console.log(`⚠️ WARNING: Contract exceeds the size limit of ${MAX_CONTRACT_SIZE} bytes!`);
      } else {
        console.log(`✅ Contract is within the size limit.`);
      }
      
      console.log("");
    } else {
      console.log(`Contract file not found: ${contractFile}\n`);
    }
  }
  
  // Check if we're using the UUPS pattern correctly by examining source code
  console.log("Checking UUPS implementation in source code...");
  const contractsDir = path.join(__dirname, "../contracts");
  const contractFiles = [
    "Identity.sol",
    "ArtContract.sol",
    "ArtFactory.sol"
  ];
  
  for (const contractFile of contractFiles) {
    const contractPath = path.join(contractsDir, contractFile);
    
    if (fs.existsSync(contractPath)) {
      const sourceCode = fs.readFileSync(contractPath, "utf8");
      const hasAuthorizeUpgrade = sourceCode.includes("function _authorizeUpgrade(address");
      
      console.log(`${path.basename(contractFile, ".sol")}: ${hasAuthorizeUpgrade ? "✅ Has _authorizeUpgrade function" : "❌ Missing _authorizeUpgrade function"}`);
      
      // Check if UUPSUpgradeable is imported and inherited
      const hasUUPSImport = sourceCode.includes("UUPSUpgradeable");
      const hasUUPSInheritance = sourceCode.includes("UUPSUpgradeable,") || 
                                 sourceCode.includes("UUPSUpgradeable {") || 
                                 sourceCode.includes("UUPSUpgradeable\n");
      
      console.log(`${path.basename(contractFile, ".sol")}: ${hasUUPSImport ? "✅ Imports UUPSUpgradeable" : "❌ Missing UUPSUpgradeable import"}`);
      console.log(`${path.basename(contractFile, ".sol")}: ${hasUUPSInheritance ? "✅ Inherits from UUPSUpgradeable" : "❌ Does not inherit from UUPSUpgradeable"}`);
      
      // Check for initializer function
      const hasInitializer = sourceCode.includes("function initialize(") && 
                            sourceCode.includes("initializer");
      
      console.log(`${path.basename(contractFile, ".sol")}: ${hasInitializer ? "✅ Has initializer function" : "❌ Missing initializer function"}`);
      console.log("");
    } else {
      console.log(`Contract file not found: ${contractFile}\n`);
    }
  }
  
  console.log("\nContract size check complete!");
  
  // Provide recommendations based on contract sizes
  console.log("\nRecommendations:");
  
  // ArtContract is close to the limit
  if (contractsToCheck.some(file => {
    const contractPath = path.join(artifactsDir, file);
    if (fs.existsSync(contractPath)) {
      const artifact = JSON.parse(fs.readFileSync(contractPath, "utf8"));
      const bytecodeSize = artifact.deployedBytecode.length / 2 - 1;
      return bytecodeSize > MAX_CONTRACT_SIZE * 0.8; // 80% of the limit
    }
    return false;
  })) {
    console.log("1. Consider optimizing the ArtContract as it's approaching the size limit (90%):");
    console.log("   - Move non-critical functions to a separate contract");
    console.log("   - Optimize storage patterns");
    console.log("   - Reduce string literals and redundant code");
    console.log("   - Consider using libraries for complex logic");
  }
  
  console.log("2. Ensure all contracts properly implement the UUPS pattern:");
  console.log("   - _authorizeUpgrade function should be properly secured");
  console.log("   - Initialize function should be properly implemented");
  console.log("   - Consider adding upgrade tests to verify upgrade functionality");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 