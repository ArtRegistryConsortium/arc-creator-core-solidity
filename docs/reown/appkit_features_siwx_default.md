Skip to main content
On this page
## Introduction​
The **Sign In With X** feature enables decentralized applications (Dapps) to authenticate users seamlessly across multiple blockchain networks, such as Ethereum, Polygon or Solana. This feature allows developers using our SDK to implement authentication by having users sign a unique string message with their blockchain wallets. The **Sign In With X** feature is designed in accordance with the CAIP-122 standard, which establishes a chain-agnostic framework for blockchain-based authentication and authorization on off-chain services.
![](https://docs.reown.com/assets/siwe-connect.gif)
Try Demo
## Getting Started​
**SIWX** works as a plugin system for AppKit and you are going to add the plugin in the AppKit configuration. There are some ways to implement the **SIWX** feature:
  * Use the default implementation provided by AppKit
  * Use Cloud Auth SIWX to manage the sessions in the Cloud Dashboard
  * Create a custom implementation to suit your specific requirements.


To initialize the **SIWX** feature, you need to add the `siwx` parameter to the `createAppKit` function.
### Default Implementation​
By using the default implementation, you can quickly integrate the **SIWX** feature into your Dapp. The default implementation provides a set of pre-built components that allow you to have the feature up and running in no time.
Read more about the Default Implementation.
### Cloud Auth Implementation​
The Cloud Auth SIWX is a predefined implementation of the SIWX configuration plugin that uses the Cloud service to create and manage SIWX messages and sessions. With Cloud Auth SIWX, you will be able to see and control the sessions of your users using the User Management Dashboard.
Read more about the Cloud Auth Implementation.
### Custom Implementation​
The `siwx` param expects to receive a defined interface from which you are able to create your own implementation. This is what allows you to customize the feature to suit your specific requirements.
The defined interface must follow specific rules to make sure that AppKit can interact with it correctly. Read more about how to have your Custom Implementation.
## SIWX Expected Behavior​
  * **SIWX** will prompt to get the user signature and verify his identity every time a connection happen;
  * In case a SIWX session is already stored, the user will be automatically signed in and the prompt step will be skipped;
  * If the user changes the connected network, **SIWX** will prompt to get the user signature and verify his identity again;
  * If the user disconnects from the Dapp, **SIWX** will revoke the session and the user will need to sign in again.


## Migrating from SIWE to SIWX​
If you are currently already using **SIWE** from `@reown/appkit-siwe`, after AppKit version 1.5.0, you will be migrated into **SIWX**. The migration process is automatic and your `siweConfig` from `createAppKit` function will be mapped internally.
caution
It is important to note that if you cannot use `siweConfig` and `siwx` at the same time, `createAppKit` will throw an error in case this happens.
You may replace `siweConfig` with your own `siwx` configuration manually if you would like to do so.
  * Introduction
  * Getting Started
    * Default Implementation
    * Cloud Auth Implementation
    * Custom Implementation
  * SIWX Expected Behavior
  * Migrating from SIWE to SIWX


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=53b70c8e-9c4b-4563-8aa9-83d9447e9fb1&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=b1d41f20-ae0b-4a35-bfe6-45c20c77c6da&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Ffeatures%2Fsiwx%2Fdefault&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=53b70c8e-9c4b-4563-8aa9-83d9447e9fb1&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=b1d41f20-ae0b-4a35-bfe6-45c20c77c6da&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Ffeatures%2Fsiwx%2Fdefault&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
