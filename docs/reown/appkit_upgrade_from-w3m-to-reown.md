Skip to main content
On this page
## Introduction​
This guide is designed to help existing AppKit customers better understand the latest version of the AppKit SDK, and **complete the upgrade in less than 30 minutes**. We’ll walk you through the new features and benefits you can expect, along with clear, step-by-step instructions to help you seamlessly update your app to the latest version of AppKit.
**Already good to go?Upgrade to the latest version of AppKit here.**
## Why hundreds of apps are already upgrading:​
  * **Improved onboarding** for millions of users with social sign-ins
  * **Quick and easy swaps** across hundreds of chains
  * **Smooth on-ramping** for fiat to crypto conversions


## Upgrade Platform list​
![Web](https://docs.reown.com/appkit/upgrade/from-w3m-to-reown)
#### Web
Migrate to AppKit in Web.
![React Native](https://docs.reown.com/appkit/upgrade/from-w3m-to-reown)
#### React Native
Migrate to AppKit in React Native.
![Flutter](https://docs.reown.com/appkit/upgrade/from-w3m-to-reown)
#### Flutter
Migrate to AppKit in Flutter.
![Android](https://docs.reown.com/appkit/upgrade/from-w3m-to-reown)
#### Android
Migrate to AppKit in Android.
![iOS](https://docs.reown.com/appkit/upgrade/from-w3m-to-reown)
#### iOS
Migrate to AppKit in iOS.
![Unity](https://docs.reown.com/appkit/upgrade/from-w3m-to-reown)
#### Unity
Migrate to AppKit in Unity.
## What’s New with the latest Reown AppKit​
**Reown AppKit** is a powerful solution for developers looking to integrate wallet connections and other Web3 functionalities into their apps on any EVM chain. In just a few simple steps, you can provide your users with seamless wallet access, one-click authentication, social logins, and notifications—streamlining their experience while enabling advanced features like on-ramp functionality and smart accounts. By following this guide, you'll quickly get up and running with Reown’s AppKit, enhancing your app’s user experience and interaction with blockchain technology.
Now here is the exciting part, the new features, so let’s dive in!
### AppKit is now multi-chain​
Built from the ground up, AppKit has been reimagined to deliver an entirely new level of performance and flexibility. This isn’t just an upgrade, it’s a powerful transformation designed to supercharge your experience with enhanced speed, reliability, and seamless integrations. Onchain UX just got even better!
Appkit’s core architecture is now chain agnostic, allowing one instance to support multiple networks at once. Each network has it’s own adaptor which sits on top of the core SDK. Builders can simply create the required adaptors and and pass them in the `createAppkit()` function.
```
// 1. Create the Wagmi adapterexportconst wagmiAdapter =newWagmiAdapter({ssr:true, projectId, networks})// 2. Create Solana adapterconst solanaWeb3JsAdapter =newSolanaAdapter({wallets:[newPhantomWalletAdapter(),newSolflareWalletAdapter()]})
```

Currently, AppKit supports over 300 EVM chains and Solana, with more non-EVM chains coming soon Learn more here.
## Universal Accounts​
AppKit’s Universal Accounts are advanced, powerful smart accounts that are automatically set up for your users, unlocking seamless access to powerful features immediately.
### Key features​
With Universal Accounts, users enjoy the benefits of gas abstraction through paymasters, allowing them to cover transaction fees with any ERC-20 token instead of being tied to native network tokens. This simplifies the user experience by eliminating the need for users to manage multiple tokens across different networks.
### Use cases and benefits​
  * **Instant access** : Users can start interacting with your application immediately without worrying about funding their accounts with network-specific tokens.
  * **Streamlined transactions** : By using ERC-20 tokens for fees, transactions become more intuitive, reducing friction and enhancing overall engagement.
  * **Enhanced user onboarding** : New users can dive into your app without needing to navigate complex token management, making their first experience smooth and welcoming.


### Getting started​
Setting up Universal Accounts is easy. Simply integrate with AppKit or upgrade your existing AppKit, and your users will automatically receive these smart accounts, enabling a powerful, user-friendly experience from day one.
## Gas Abstraction, made simple​
With AppKit, your users can enjoy a frictionless experience without the hassle of network fees. Reown gas abstraction feature leverages paymasters, dedicated modules that allow users to cover transaction fees with any ERC-20 token instead of native network tokens. This means no more managing tokens across networks just to interact with your app.
### Use cases and benefits​
  * **Enhanced UX** : Remove barriers to entry by allowing users to transact without worrying about specific network gas tokens.
  * **Flexible payments** : Users can pay fees with popular ERC-20 tokens, making transactions more intuitive and accessible.
  * **Streamlined onboarding** : Create a seamless start for new users, who can interact with your app immediately, no token-swapping required.


### Get started in minutes​
Integrating gas abstraction with AppKit is as easy as updating your AppKit SDK. With just a few lines of code, your app can support token paymasters, offering your users an optimized, fee-friendly experience from day one.
## Create a Reown.id​
Forget long, confusing 0x addresses. With Reown IDs, your users can easily share their account details in a user-friendly format that enhances both security and convenience.
### How It works​
Reown IDs act as unique identifiers for your users, allowing them to interact with dapps and wallets without the hassle of remembering complex addresses. This approach not only simplifies transactions but also reduces the risk of errors when sharing account information.
### Use cases and benefits​
  * **Simplified sharing** : Users can easily provide their Reown ID to friends, services, or dapps, making it straightforward to engage in transactions or collaborations.
  * **Enhanced security** : By using Reown IDs instead of lengthy addresses, users reduce the chances of sharing incorrect information and falling victim to phishing attacks.
  * **Improved UX** : A clean and concise ID boosts user confidence, making it easier for new users to onboard into Web3.


### Getting started​
Integrating Reown IDs into your application is seamless. Simply update your AppKit SDK, and your users will automatically receive their unique Reown IDs, making account sharing and interaction smoother than ever!"
  * Introduction
  * Why hundreds of apps are already upgrading:
  * Upgrade Platform list
  * What’s New with the latest Reown AppKit
    * AppKit is now multi-chain
  * Universal Accounts
    * Key features
    * Use cases and benefits
    * Getting started
  * Gas Abstraction, made simple
    * Use cases and benefits
    * Get started in minutes
  * Create a Reown.id
    * How It works
    * Use cases and benefits
    * Getting started


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=341cb35f-5f40-4ca4-9700-1f72dd4a0849&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=04bfe025-e0a5-4e2c-9af9-07d748000550&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Fupgrade%2Ffrom-w3m-to-reown&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=341cb35f-5f40-4ca4-9700-1f72dd4a0849&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=04bfe025-e0a5-4e2c-9af9-07d748000550&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Fupgrade%2Ffrom-w3m-to-reown&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
