![Solidity logo](https://docs.soliditylang.org/en/latest/_static/img/logo.svg){skip to content}
  *   * Solidity
  * Edit on GitHub


# Solidity
Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs that govern the behavior of accounts within the Ethereum state.
Solidity is a curly-bracket language designed to target the Ethereum Virtual Machine (EVM). It is influenced by C++, Python, and JavaScript. You can find more details about which languages Solidity has been inspired by in the language influences section.
Solidity is statically typed, supports inheritance, libraries, and complex user-defined types, among other features.
With Solidity, you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets.
When deploying contracts, you should use the latest released version of Solidity. Apart from exceptional cases, only the latest version receives security fixes. Furthermore, breaking changes, as well as new features, are introduced regularly. We currently use a 0.y.z version number to indicate this fast pace of change.
Warning
Solidity recently released the 0.8.x version that introduced a lot of breaking changes. Make sure you read the full list.
Ideas for improving Solidity or this documentation are always welcome, read our contributors guide for more details.
Hint
You can download this documentation as PDF, HTML or Epub by clicking on the versions flyout menu in the bottom-right corner and selecting the preferred download format.
## Getting Started
**1. Understand the Smart Contract Basics**
If you are new to the concept of smart contracts, we recommend you to get started by digging into the “Introduction to Smart Contracts” section, which covers the following:
  * A simple example smart contract written in Solidity.
  * Blockchain Basics.
  * The Ethereum Virtual Machine.


**2. Get to Know Solidity**
Once you are accustomed to the basics, we recommend you read the “Solidity by Example” and “Language Description” sections to understand the core concepts of the language.
**3. Install the Solidity Compiler**
There are various ways to install the Solidity compiler, simply choose your preferred option and follow the steps outlined on the installation page.
Hint
You can try out code examples directly in your browser with the Remix IDE. Remix is a web browser-based IDE that allows you to write, deploy and administer Solidity smart contracts, without the need to install Solidity locally.
Warning
As humans write software, it can have bugs. Therefore, you should follow established software development best practices when writing your smart contracts. This includes code review, testing, audits, and correctness proofs. Smart contract users are sometimes more confident with code than their authors, and blockchains and smart contracts have their own unique issues to watch out for, so before working on production code, make sure you read the Security Considerations section.
**4. Learn More**
If you want to learn more about building decentralized applications on Ethereum, the Ethereum Developer Resources can help you with further general documentation around Ethereum, and a wide selection of tutorials, tools, and development frameworks.
If you have any questions, you can try searching for answers or asking on the Ethereum StackExchange, or our Gitter channel.
## Translations
Community contributors help translate this documentation into several languages. Note that they have varying degrees of completeness and up-to-dateness. The English version stands as a reference.
You can switch between languages by clicking on the flyout menu in the bottom-left corner and selecting the preferred language.
  * Chinese
  * French
  * Indonesian
  * Japanese
  * Korean
  * Persian
  * Russian
  * Spanish
  * Turkish


Note
We set up a GitHub organization and translation workflow to help streamline the community efforts. Please refer to the translation guide in the solidity-docs org for information on how to start a new language or contribute to the community translations.
# Contents
Keyword Index, Search Page
Basics
  * Introduction to Smart Contracts
    * A Simple Smart Contract
    * Blockchain Basics
    * The Ethereum Virtual Machine
  * Solidity by Example
    * Voting
    * Blind Auction
    * Safe Remote Purchase
    * Micropayment Channel
    * Modular Contracts
  * Installing the Solidity Compiler
    * Versioning
    * Remix
    * npm / Node.js
    * Docker
    * Linux Packages
    * macOS Packages
    * Static Binaries
    * Building from Source
    * CMake Options
    * The Version String in Detail
    * Important Information About Versioning


Language Description
  * Layout of a Solidity Source File
    * SPDX License Identifier
    * Pragmas
    * Importing other Source Files
    * Comments
  * Structure of a Contract
    * State Variables
    * Functions
    * Function Modifiers
    * Events
    * Errors
    * Struct Types
    * Enum Types
  * Types
    * Value Types
    * Reference Types
    * Mapping Types
    * Operators
    * Conversions between Elementary Types
    * Conversions between Literals and Elementary Types
  * Units and Globally Available Variables
    * Ether Units
    * Time Units
    * Special Variables and Functions
    * Reserved Keywords
  * Expressions and Control Structures
    * Control Structures
    * Function Calls
    * Creating Contracts via `new`
    * Order of Evaluation of Expressions
    * Assignment
    * Scoping and Declarations
    * Checked or Unchecked Arithmetic
    * Error handling: Assert, Require, Revert and Exceptions
  * Contracts
    * Creating Contracts
    * Visibility and Getters
    * Function Modifiers
    * Transient Storage
    * Composability of Smart Contracts and the Caveats of Transient Storage
    * Constant and Immutable State Variables
    * Functions
    * Events
    * Custom Errors
    * Inheritance
    * Abstract Contracts
    * Interfaces
    * Libraries
    * Using For
  * Inline Assembly
    * Example
    * Access to External Variables, Functions and Libraries
    * Things to Avoid
    * Conventions in Solidity
    * Advanced Safe Use of Memory
  * Cheatsheet
    * Order of Precedence of Operators
    * ABI Encoding and Decoding Functions
    * Members of `bytes` and `string`
    * Members of `address`
    * Block and Transaction Properties
    * Validations and Assertions
    * Mathematical and Cryptographic Functions
    * Contract-related
    * Type Information
    * Function Visibility Specifiers
    * Modifiers
  * Language Grammar


Compiler
  * Using the Compiler
    * Using the Commandline Compiler
    * Setting the EVM Version to Target
    * Compiler Input and Output JSON Description
  * Analysing the Compiler Output
  * Solidity IR-based Codegen Changes
    * Semantic Only Changes
    * Internals


Internals
  * Layout of State Variables in Storage and Transient Storage
    * Mappings and Dynamic Arrays
    * JSON Output
  * Layout in Memory
    * Differences to Layout in Storage
  * Layout of Call Data
  * Cleaning Up Variables
  * Source Mappings
  * The Optimizer
    * Benefits of Optimizing Solidity Code
    * Differences between Optimized and Non-Optimized Code
    * Optimizer Parameter Runs
    * Opcode-Based Optimizer Module
    * Yul-Based Optimizer Module
    * Codegen-Based Optimizer Module
  * Contract Metadata
    * Encoding of the Metadata Hash in the Bytecode
    * Usage for Automatic Interface Generation and NatSpec
    * Usage for Source Code Verification
  * Contract ABI Specification
    * Basic Design
    * Function Selector
    * Argument Encoding
    * Types
    * Design Criteria for the Encoding
    * Formal Specification of the Encoding
    * Function Selector and Argument Encoding
    * Examples
    * Use of Dynamic Types
    * Events
    * Errors
    * JSON
    * Strict Encoding Mode
    * Non-standard Packed Mode
    * Encoding of Indexed Event Parameters


Advisory content
  * Security Considerations
    * Pitfalls
    * Recommendations
  * List of Known Bugs
  * Solidity v0.5.0 Breaking Changes
    * Semantic Only Changes
    * Semantic and Syntactic Changes
    * Explicitness Requirements
    * Deprecated Elements
    * Interoperability With Older Contracts
    * Example
  * Solidity v0.6.0 Breaking Changes
    * Changes the Compiler Might not Warn About
    * Explicitness Requirements
    * Semantic and Syntactic Changes
    * New Features
    * Interface Changes
    * How to update your code
  * Solidity v0.7.0 Breaking Changes
    * Silent Changes of the Semantics
    * Changes to the Syntax
    * Removal of Unused or Unsafe Features
    * Interface Changes
    * How to update your code
  * Solidity v0.8.0 Breaking Changes
    * Silent Changes of the Semantics
    * New Restrictions
    * Interface Changes
    * How to update your code


Additional Material
  * NatSpec Format
    * Documentation Example
    * Tags
    * Documentation Output
  * SMTChecker and Formal Verification
    * Tutorial
    * SMTChecker Options and Tuning
    * Abstraction and False Positives
    * Real World Assumptions
  * Yul
    * Motivation and High-level Description
    * Simple Example
    * Stand-Alone Usage
    * Informal Description of Yul
    * Specification of Yul
    * Specification of Yul Object
    * Yul Optimizer
    * Complete ERC20 Example
  * Import Path Resolution
    * Virtual Filesystem
    * Imports
    * Base Path and Include Paths
    * Allowed Paths
    * Import Remapping
    * Using URLs in imports


Resources
  * Style Guide
    * Introduction
    * Code Layout
    * Order of Layout
    * Naming Conventions
    * NatSpec
  * Common Patterns
    * Withdrawal from Contracts
    * Restricting Access
    * State Machine
  * Resources
    * General Resources
    * Integrated (Ethereum) Development Environments
    * Editor Integrations
    * Solidity Tools
    * Third-Party Solidity Parsers and Grammars
  * Contributing
    * Team Calls
    * How to Report Issues
    * Workflow for Pull Requests
    * Running the Compiler Tests
    * Running the Fuzzer via AFL
    * Whiskers
    * Documentation Style Guide
    * Solidity Language Design
  * Language Influences
  * Solidity Brand Guide
    * The Solidity Brand
    * Solidity Brand Name
    * Solidity Logo License
    * Solidity Logo Guidelines
    * Credits


