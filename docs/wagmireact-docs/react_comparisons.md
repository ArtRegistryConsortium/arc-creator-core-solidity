Skip to content 
Menu
On this page
#### Paradigm
![Paradigm](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/paradigm-light.svg)
#### Ithaca
![Ithaca](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/ithaca-light.svg)
#### Stripe
![Stripe](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/stripe-light.svg)
#### zkSync
![zkSync](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/zksync-light.svg)
#### Linea
![Linea](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/linea-light.svg)
#### Routescan
![Routescan](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/routescan-light.svg)
# Comparison ​
There are multiple options when it comes to React libraries for Ethereum that help manage wallet connections, provide utility methods/hooks, etc.
TIP
Comparisons strive to be as accurate and as unbiased as possible. If you use any of these libraries and feel the information could be improved, feel free to suggest changes.
## Overview ​
wagmi| web3-react| useDApp  
---|---|---  
GitHub Stars| ![wagmi star count](https://img.shields.io/github/stars/wagmi-dev/wagmi?colorB=27292E&label=)| ![web3-react star count](https://img.shields.io/github/stars/Uniswap/web3-react?colorB=27292E&label=)| ![useDApp star count](https://img.shields.io/github/stars/EthWorks/useDApp?colorB=27292E&label=)  
Open Issues| ![wagmi issue count](https://img.shields.io/github/issues/wagmi-dev/wagmi?colorB=27292E&label=)| ![web3-react issue count](https://img.shields.io/github/issues/Uniswap/web3-react?colorB=27292E&label=)| ![useDApp issue count](https://img.shields.io/github/issues/EthWorks/useDApp?colorB=27292E&label=)  
Downloads| ![wagmi downloads](https://img.shields.io/npm/dw/wagmi?colorB=27292E&label=)| ![web3-react downloads](https://img.shields.io/npm/dw/@web3-react/core?colorB=27292E&label=)| ![useDApp downloads](https://img.shields.io/npm/dw/@usedapp/core?colorB=27292E&label=)  
License| ![wagmi license](https://img.shields.io/github/license/wagmi-dev/wagmi?colorB=27292E&label=)| ![web3-react license](https://img.shields.io/github/license/Uniswap/web3-react?colorB=27292E&label=)| ![useDApp license](https://img.shields.io/github/license/EthWorks/useDApp?colorB=27292E&label=)  
Their Comparison| –| none| none  
Supported Frameworks| React, Vanilla JS| React| React  
Documentation| ✅| 🛑| ✅  
TypeScript| ✅| 🔶| 🔶  
EIP-6963 Support| ✅| 🔴| 🔴  
Test Suite| ✅| 🔶| 🔶  
Examples| ✅| 🔶| ✅  
Comparison Key
  1. Documentation


  * Comprehensive documentation for all library features ✅
  * No documentation 🔴


  1. Typescript


  * Infer types from ABIs, EIP-712 Typed Data, etc. ✅
  * Can add types with explicit generics, type annotations, etc. 🔶


  1. Test Suite


  * Runs against forked Ethereum network(s) ✅
  * Mocking functionality (i.e. RPC calls) is 🔶


  1. EIP-6963 Support


  * Fully compatible with EIP-6963 ✅
  * Not compatible with EIP-6963 🔴


  1. Examples


  * Has multiple examples ✅
  * Has single example 🔶


## Wagmi ​
### Pros ​
  * 20+ hooks for working with wallets, ENS, contracts, transactions, signing, etc.
  * Built-in wallet connectors for injected providers (EIP-6963 support), WalletConnect, MetaMask, Coinbase Wallet
  * Caching, request deduplication, and persistence powered by TanStack Query
  * Auto-refresh data on wallet, block, and network changes
  * Multicall support
  * Test suite running against forked Ethereum networks
  * TypeScript ready (infer types from ABIs and EIP-712 Typed Data)
  * Extensive documentation and examples
  * Used by Coinbase, Stripe, Shopify, Uniswap, Optimism, ENS, Sushi, and many more
  * MIT License


### Cons ​
  * Not as many built-in connectors as `web3-react`


## web3-react ​
### Pros ​
  * Supports many different connectors (conceptually similar to Wagmi's connectors)
  * Basic hooks for managing account


### Cons ​
  * Need to set up connectors and method for connecting wallet on your own
  * Need to install connectors separately
  * Almost no tests or documentation; infrequent updates
  * GPL-3.0 License


## useDApp ​
### Pros ​
  * Auto-refresh on new blocks and wallet changes
  * Multicall support
  * Transaction notifications
  * Chrome extension and Firefox add-on
  * MIT License


### Cons ​
  * Non-standard hook API


