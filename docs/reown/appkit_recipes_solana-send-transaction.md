Skip to main content
On this page
# How to Sign Messages, Send Transactions, and Get Balance on Solana using AppKit
Learn how to use Reown AppKit for essential wallet functionalities such as signing messages, sending transactions, and retrieving wallet balances.
In this recipe, you will learn how to:
  * Retrieve the balance of the connected wallet.
  * Sign a message using a connected wallet.
  * Send a transaction to the Solana blockchain.


This guide takes approximately 20 minutes to complete.
Let’s dive in!
![](https://docs.reown.com/assets/images/solanaGuide-45e587c1cfa152b137a6950fc8752880.gif)
## Prerequisites​
  * A fundamental understanding of JavaScript and React.
  * A minimal installation of AppKit in React.
  * Obtain a new project Id on Reown Cloud at https://cloud.reown.com


## Final project​
![GitHub](https://docs.reown.com/assets/github.svg)
### Appkit Example for Interacting with the Solana Blockchain
Clone this Github repo to try it out locally.
## AppKit Minimal Installation​
You can start a small project following the guidelines from our installation React docs using Solana
## Start building​
In this guide, we are going to use the library @solana/web3.js to make the calls to the Solana blockchain and to interact with the wallet.
### Get Balance​
Fetching a user's balance is straightforward using the Connection object from Solana.
  1. Start by importing the `useAppKitConnection` hook from the solana Adapter, the `useAppKitAccount` AppKit hook to get the account information and `PublicKey` from the solana/web3 library.


```
import{ useAppKitConnection }from'@reown/appkit-adapter-solana/react'import{ useAppKitAccount }from'@reown/appkit/react'import{PublicKey,LAMPORTS_PER_SOL}from"@solana/web3.js";
```

  1. Use the hooks to retrieve the connection Solana object, the user's address and check if they are connected.


```
const{ connection }=useAppKitConnection();const{ isConnected, address }=useAppKitAccount()
```

  1. Create a function to fetch and display (in console) the balance when triggered


```
// function to get the balanceconsthandleGetBalance=async()=>{const wallet =newPublicKey(address);const balance =await connection?.getBalance(wallet);// get the amount in LAMPORTSconsole.log(`${balance /LAMPORTS_PER_SOL} SOL`);}
```

  1. Finally, in order to call the function you can show the button in a component when `isConnected` is `true`


```
return(  isConnected &&(<div><buttononClick={getBalance}>Get Balance</button></div>))
```

### Sign a message​
In order to raise the modal to sign a message with your wallet. You can follow these steps:
  1. Start by importing the `useAppKitProvider` hook.


```
import{ useAppKitProvider }from'@reown/appkit/react';import type {Provider}from'@reown/appkit-adapter-solana/react';
```

  1. Extract the `walletProvider` function from the `useAppKitProvider` hook. This function allows you to prompt the connected wallet to sign a specific message. Also the `useAppKitAccount` AppKit hook to get the address and isConnected as explain before.


```
// Get the wallet provider with the AppKit hookconst{ walletProvider }= useAppKitProvider<Provider>('solana');// AppKit hook to get the address and check if the user is connectedconst{ address, isConnected }=useAppKitAccount()
```

  1. Create a function to prompt the modal for signing the message.


```
// function to sing a msg consthandleSignMsg=async()=>{// message to signconst encodedMessage =newTextEncoder().encode("Hello Reown AppKit!");// Raise the modal const sig =await walletProvider.signMessage(encodedMessage);// Print the signed message in hexadecimal formatconsole.log(Buffer.from(sig).toString("hex"));}
```

  1. Finally, in order to call the function:


```
return(  isConnected &&(<div><buttononClick={handleSignMsg}>Sign Message</button></div>))
```

### Send a transaction in Solana​
In order to raise the modal to sign and send a transaction with your wallet. It's a bit more complex, but you can follow these steps:
  1. Start by importing very similar packages from the previous examples and also the Transaction and SystemProgram object from solana/web3.js library.


```
import{ useAppKitConnection }from'@reown/appkit-adapter-solana/react';import{PublicKey,Transaction,SystemProgram}from"@solana/web3.js";import{ useAppKitAccount, useAppKitProvider }from'@reown/appkit/react';import type {Provider}from'@reown/appkit-adapter-solana/react';
```

  1. Use the `useAppKitAccount`, useAppKitConnection and useAppKitProvider AppKit hooks to get the connection object, the walletProvider and the address from the user.


```
const{ isConnected, address }=useAppKitAccount();const{ connection }=useAppKitConnection();const{ walletProvider }= useAppKitProvider<Provider>('solana');
```

  1. Create the function to raise the modal to send the transaction


```
// function to send a TXconsthandleSendTx=()=>{const latestBlockhash =await connection.getLatestBlockhash();// create the transaction const transaction=newTransaction({feePayer: wallet,recentBlockhash: latestBlockhash?.blockhash,}).add(SystemProgram.transfer({fromPubkey: wallet,toPubkey:newPublicKey(address),// destination addresslamports:1000,}));// raise the modalconst signature =await walletProvider.sendTransaction(transaction, connection)// print the Transaction Signatureconsole.log(signature);}
```

  1. Finally, in order to call the function:


```
return(  isConnected &&(<div><buttononClick={handleSendTx}>Send Transaction</button></div>))
```

## Conclusion​
By following this guide, you’ve learned how to integrate Reown AppKit and Solana into your React application to perform essential wallet operations. You can now fetch wallet balances, sign messages, and send transactions in the Solana blockchain.
Keep exploring AppKit to enhance your dApp’s functionality and user experience!
  * Prerequisites
  * Final project
  * AppKit Minimal Installation
  * Start building
    * Get Balance
    * Sign a message
    * Send a transaction in Solana
  * Conclusion


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=3b95ab35-add0-416b-8ff8-a5d667701ae1&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=d3c17682-a92d-408d-95ad-a38005d89ef8&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Frecipes%2Fsolana-send-transaction&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=3b95ab35-add0-416b-8ff8-a5d667701ae1&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=d3c17682-a92d-408d-95ad-a38005d89ef8&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Frecipes%2Fsolana-send-transaction&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
