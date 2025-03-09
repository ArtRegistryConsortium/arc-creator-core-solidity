import * as fs from "fs";
import * as path from "path";

async function main() {
  console.log("Analyzing ArtContract for optimization opportunities...");
  
  const contractPath = path.join(__dirname, "../contracts/ArtContract.sol");
  
  if (!fs.existsSync(contractPath)) {
    console.error("ArtContract.sol not found!");
    return;
  }
  
  const sourceCode = fs.readFileSync(contractPath, "utf8");
  const lines = sourceCode.split("\n");
  
  // Analysis results
  const analysis = {
    totalLines: lines.length,
    functionCount: 0,
    largestFunctions: [] as {name: string, lineCount: number, startLine: number}[],
    stateVariables: 0,
    mappings: 0,
    arrays: 0,
    stringLiterals: 0,
    comments: 0,
    potentialLibraryCandidates: [] as string[]
  };
  
  // Analyze functions
  let currentFunction = "";
  let functionStartLine = 0;
  let inFunction = false;
  let bracketCount = 0;
  let functionLines = 0;
  
  // Regex patterns
  const functionPattern = /function\s+(\w+)\s*\(/;
  const mappingPattern = /mapping\s*\(/;
  const arrayPattern = /\[\s*\]/;
  const stringLiteralPattern = /["'][^"']*["']/;
  const commentPattern = /^\s*(\/\/|\/\*)/;
  const stateVarPattern = /^\s*(uint|int|bool|address|string|bytes|mapping)\s+\w+/;
  
  // Analyze line by line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Count comments
    if (commentPattern.test(line)) {
      analysis.comments++;
    }
    
    // Count state variables
    if (stateVarPattern.test(line) && !inFunction) {
      analysis.stateVariables++;
    }
    
    // Count mappings
    if (mappingPattern.test(line)) {
      analysis.mappings++;
    }
    
    // Count arrays
    if (arrayPattern.test(line)) {
      analysis.arrays++;
    }
    
    // Count string literals
    const stringMatches = line.match(stringLiteralPattern);
    if (stringMatches) {
      analysis.stringLiterals += stringMatches.length;
    }
    
    // Function analysis
    const functionMatch = line.match(functionPattern);
    if (functionMatch && !inFunction) {
      currentFunction = functionMatch[1];
      functionStartLine = i + 1;
      inFunction = true;
      bracketCount = 0;
      functionLines = 0;
    }
    
    if (inFunction) {
      functionLines++;
      
      // Count brackets to determine function end
      bracketCount += (line.match(/{/g) || []).length;
      bracketCount -= (line.match(/}/g) || []).length;
      
      if (bracketCount === 0 && line.includes("}")) {
        inFunction = false;
        analysis.functionCount++;
        
        // Track large functions
        if (functionLines > 15) {
          analysis.largestFunctions.push({
            name: currentFunction,
            lineCount: functionLines,
            startLine: functionStartLine
          });
        }
        
        // Identify potential library candidates
        if (functionLines > 30 || 
            currentFunction.startsWith("_is") || 
            currentFunction.startsWith("_get") || 
            currentFunction.startsWith("_validate")) {
          analysis.potentialLibraryCandidates.push(currentFunction);
        }
      }
    }
  }
  
  // Sort largest functions by line count
  analysis.largestFunctions.sort((a, b) => b.lineCount - a.lineCount);
  
  // Print analysis results
  console.log("\nArtContract Analysis Results:");
  console.log(`Total lines: ${analysis.totalLines}`);
  console.log(`Function count: ${analysis.functionCount}`);
  console.log(`State variables: ${analysis.stateVariables}`);
  console.log(`Mappings: ${analysis.mappings}`);
  console.log(`Arrays: ${analysis.arrays}`);
  console.log(`String literals: ${analysis.stringLiterals}`);
  console.log(`Comments: ${analysis.comments}`);
  
  console.log("\nLargest Functions (potential optimization targets):");
  analysis.largestFunctions.slice(0, 5).forEach(func => {
    console.log(`- ${func.name}: ${func.lineCount} lines (starts at line ${func.startLine})`);
  });
  
  console.log("\nPotential Library Candidates:");
  analysis.potentialLibraryCandidates.forEach(func => {
    console.log(`- ${func}`);
  });
  
  console.log("\nOptimization Recommendations:");
  
  // Recommend based on analysis
  if (analysis.largestFunctions.length > 0) {
    console.log("1. Consider moving these large functions to a library:");
    analysis.largestFunctions.slice(0, 3).forEach(func => {
      console.log(`   - ${func.name} (${func.lineCount} lines)`);
    });
  }
  
  if (analysis.potentialLibraryCandidates.length > 0) {
    console.log("2. These utility functions are good library candidates:");
    analysis.potentialLibraryCandidates.slice(0, 5).forEach(func => {
      console.log(`   - ${func}`);
    });
  }
  
  console.log("3. General optimization strategies:");
  console.log("   - Use bytes32 instead of string where possible");
  console.log("   - Combine related state variables into structs");
  console.log("   - Use events instead of storing historical data");
  console.log("   - Consider using a diamond pattern for very large contracts");
  console.log("   - Remove unnecessary comments and whitespace in production");
  
  console.log("\nOptimization analysis complete!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 