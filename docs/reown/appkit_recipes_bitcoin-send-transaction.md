Skip to main content
On this page
# How to Sign Messages, get the balance and send transactions on Bitcoin using AppKit
Learn how to use Reown AppKit for essential wallet functionalities such as signing messages, getting the balance and sending transactions.
In this recipe, you will learn how to:
  * Sign a message using a connected wallet.
  * Send a transaction to the Bitcoin blockchain.
  * Get the balance from an Address.
  * Get the Public Key.


This guide will take approximately 20 minutes to complete.
Let's dive in!
## Prerequisites​
  * A fundamental understanding of JavaScript and React.
  * A minimal installation of AppKit in React.
  * Obtain a new project Id on Reown Cloud at https://cloud.reown.com


## Final project​
![GitHub](https://docs.reown.com/assets/github.svg)
### Appkit Example for Interacting with the Bitcoin Blockchain
Clone this Github repo to try it out locally.
## AppKit Minimal Installation​
You can start a small project following the guidelines from our installation React docs using Bitcoin
## Start building​
In this guide we are going to use AppKit to make the calls to the Bitcoin blockchain and interact with the wallet.
  1. Start by importing the `useAppKitProvider` and `useAppKitAccount` hooks.


```
import{ useAppKitProvider, useAppKitAccount }from'@reown/appkit/react';import type {BitcoinConnector}from'@reown/appkit-adapter-bitcoin';
```

  1. Extract the `walletProvider` function from the `useAppKitProvider` hook. This function allows you to prompt the connected wallet to sign a specific message. Also, we are using `useAppKitAccount` to get the address and isConnected as explained before.


```
// Get the wallet provider with the AppKit hookconst{ walletProvider }= useAppKitProvider<BitcoinConnector>('bip122');// AppKit hook to get the address and check if the user is connectedconst{ allAccounts, address, isConnected }=useAppKitAccount()
```

### Sign a message​
In order to raise the modal to sign a message with your wallet continue with the following steps:
  1. Create a function to prompt the modal for signing the message.


```
// function to sign a messageconsthandleSignMsg=async()=>{// raise the modal to sign the messageconst signature =await walletProvider.signMessage({   address,message:"Hello Reown AppKit!"});// Print the signed message in consoleconsole.log(signature);}
```

  1. Finally, to call the function:


```
return(  isConnected &&(<div><buttononClick={handleSignMsg}>Sign Message</button></div>))
```

### Send a transaction in Bitcoin​
  1. Create a function to raise the modal to send the transaction


```
// function to send a TXconsthandleSendTx=()=>{const signature =await walletProvider.sendTransfer({recipient: recipientAddress,amount:"1000"// amount in satoshis})// print the Transaction Signature in consoleconsole.log(signature);}
```

  1. Finally, to call the function:


```
return(  isConnected &&(<div><buttononClick={handleSendTx}>Send Transaction</button></div>))
```

### Get Balance​
  1. Create the function to get the balance


```
consthandleGetBalance=()=>{const isTestnet =true;// change to false if you want to get the balance on mainnet// get all the utxos from the addressconst response =awaitfetch(`https://mempool.space${isTestnet ?'/testnet':''}/api/address/${address}/utxo`);const data =await response.json();// get the utxos - the list of unspent transactions that the sender hasconst utxos =awaitgetUTXOs(address, isTestnet)// return the sum of the utxos ... The balance of the senderconst balance = utxos.reduce((sum, utxo)=> sum + utxo.value,0)// print the balance in consoleconsole.log(balance);}// Get the utxos ... List of unspent transactions that the sender hasconst getUTXOs =async(address: string,isTestnet: boolean =false):Promise<UTXO[]>=>{const response =awaitfetch(`https://mempool.space${isTestnet ?'/testnet':''}/api/address/${address}/utxo`)returnawait response.json();}// Type of the UTXO ... List of unspent transactions that the sender hastype UTXO={txid: stringvout: numbervalue: numberstatus:{confirmed: booleanblock_height: numberblock_hash: stringblock_time: number}}
```

  1. Finally, to call the function:


```
return(  isConnected &&(<div><buttononClick={handleGetBalance}>Get Balance</button></div>))
```

### Get the Public Key​
  1. Create the function to get the public key


```
consthandleGetPublicKey=async()=>{// get the public key from the accountconst bip122Account = allAccounts?.find(a=> a.address=== address)let publicKey = bip122Account?.publicKey ||''// print the public key in consoleconsole.log(publicKey);}
```

  1. Finally, to call the function:


```
return(  isConnected &&(<div><buttononClick={handleGetPublicKey}>Get Public Key</button></div>))
```

## Conclusion​
By following this guide, you've learned how to integrate Reown AppKit and Bitcoin into your React application to perform essential wallet operations. You can now sign messages, get the balance, get the public key and send transactions in the Bitcoin blockchain.
Keep exploring AppKit to enhance your dApp functionality and user experience!
  * Prerequisites
  * Final project
  * AppKit Minimal Installation
  * Start building
    * Sign a message
    * Send a transaction in Bitcoin
    * Get Balance
    * Get the Public Key
  * Conclusion


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=daf231ff-3948-40e8-b7ba-cef7cce1875f&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=876b0749-52c3-4857-b430-3951910dab82&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Frecipes%2Fbitcoin-send-transaction&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=daf231ff-3948-40e8-b7ba-cef7cce1875f&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=876b0749-52c3-4857-b430-3951910dab82&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Frecipes%2Fbitcoin-send-transaction&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
