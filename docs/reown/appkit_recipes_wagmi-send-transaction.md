Skip to main content
On this page
# How to Sign Messages, Send Transactions, and Get Balance in EVM using AppKit with Wagmi
Learn how to use Reown AppKit for essential wallet functionalities such as signing messages, sending transactions, and retrieving wallet balances.
In this recipe, you will learn how to:
  * Retrieve the balance of the connected wallet.
  * Sign a message using a connected wallet.
  * Send a transaction to the EVM blockchain.


This guide takes approximately 20 minutes to complete.
Let’s dive in!
![](https://docs.reown.com/assets/images/animatedGuideTx-3cf14ec7004f118743976d55cae5cd94.gif)
## Prerequisites​
  * A fundamental understanding of JavaScript and React.
  * A minimal installation of AppKit in React.
  * Obtain a new project Id on Reown Cloud at https://cloud.reown.com


## Final project​
![GitHub](https://docs.reown.com/assets/github.svg)
### Appkit wagmi Example with blockchain interactions
Download the full project to try it directly on your computer.
## AppKit Minimal Installation​
You can start a small project following the guidelines from our installation React docs using Wagmi
## Start building​
In this guide we are going to use the library Wagmi to make the calls to the blockchain and to interact with the wallet.
### Get Balance​
Fetching a user's balance is straightforward using the `useBalance` hook from wagmi.
  1. Start by importing the useBalance hook, the AppKit hook to get the account information and the Address type.


```
import{ useBalance }from'wagmi'import{ useAppKitAccount }from'@reown/appkit/react'import{ type Address}from'viem'
```

  1. Use the `useAppKitAccount` hook to retrieve the user's address and check if they are connected. Also call the `useBalance` hook.


```
// AppKit hook to get the address and check if the user is connectedconst{ address, isConnected }=useAppKitAccount()// Call the useBalance hook with the user's address to prepare for fetching the balance.const{ refetch }=useBalance({address: address asAddress});
```

  1. Create a function to fetch and display (in console) the balance when triggered


```
// function to get the balanceconsthandleGetBalance=async()=>{const balance =awaitrefetch();console.log(`${balance?.data?.value.toString()}${balance?.data?.symbol.toString()}`);}
```

  1. Finally, in order to call the function you can show the button in a component when `isConnected` is `true`


```
return(  isConnected &&(<div><buttononClick={getBalance}>Get Balance</button></div>))
```

### Sign a message​
In order to raise the modal to sign a message with your wallet. You can follow these steps:
  1. Start by importing the `useSignMessage` hook.


```
import{ useSignMessage }from'wagmi'
```

  1. Extract the `signMessageAsync` function from the `useSignMessage` hook. This function allows you to prompt the connected wallet to sign a specific message. Also get the address and isConnected as explain before.


```
// Wagmi hook to sign a messageconst{ signMessageAsync }=useSignMessage()// AppKit hook to get the address and check if the user is connectedconst{ address, isConnected }=useAppKitAccount()
```

  1. Generate the function to raise the modal to sign the message


```
// function to sing a msg consthandleSignMsg=async()=>{// message to signconst msg ="Hello Reown AppKit!"const sig =awaitsignMessageAsync({message: msg,account: address asAddress});}
```

  1. Finally, in order to call the function:


```
return(  isConnected &&(<div><buttononClick={handleSignMsg}>Sign Message</button></div>))
```

### Send a transaction in EVM​
In order to raise the modal to sign and send a transaction with your wallet. You can follow these steps:
  1. Start by importing `useEstimateGas` and `useSendTransaction` hooks.


```
import{ useEstimateGas, useSendTransaction }from'wagmi'import{ parseGwei, type Address}from'viem'
```

  1. Use the `useEstimateGas` hook to calculate the gas required for the transaction, then proceed to send the transaction and get the user's connection status with the provided hooks.


```
// test transactionconstTEST_TX={to:"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"asAddress,// vitalik addressvalue:parseGwei('0.0001')}// Wagmi hook to estimate gasconst{data: gas }=useEstimateGas({...TEST_TX});// Wagmi hook to send a transactionconst{data: hash, sendTransaction,}=useSendTransaction();// AppKit hook to check if the user is connectedconst{ isConnected }=useAppKitAccount()
```

  1. Generate the function to raise the modal to send the transaction


```
// function to send a TXconsthandleSendTx=()=>{try{sendTransaction({...TEST_TX,    gas // Add the gas to the transaction});}catch(err){console.log('Error sending transaction:', err);}}
```

  1. Finally, in order to call the function:


```
return(  isConnected &&(<div><buttononClick={handleSendTx}>Send Transaction</button></div>))
```

## Conclusion​
By following this guide, you’ve learned how to integrate Reown AppKit and Wagmi in your React application to perform essential wallet operations. You can now fetch wallet balances, sign messages, and send transactions seamlessly in an EVM-compatible blockchain environment.
Keep exploring AppKit to enhance your dApp’s functionality and user experience!
  * Prerequisites
  * Final project
  * AppKit Minimal Installation
  * Start building
    * Get Balance
    * Sign a message
    * Send a transaction in EVM
  * Conclusion


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=d11e973e-2180-4a7a-9e75-14f6a6b0f72e&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=6e3f0b88-b533-4621-b52e-25353927d92e&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Frecipes%2Fwagmi-send-transaction&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=d11e973e-2180-4a7a-9e75-14f6a6b0f72e&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=6e3f0b88-b533-4621-b52e-25353927d92e&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Frecipes%2Fwagmi-send-transaction&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
