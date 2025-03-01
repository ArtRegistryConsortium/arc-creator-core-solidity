Skip to main content
On this page
# Deprecated WalletConnect SDKs
WalletConnect Inc is now Reown. As part of this transition, we are deprecating a number of repositories/packages across our supported platforms, and the transition to their equivalents published under the Reown organization. This page outlines the deprecation schedule and provides important information for users of affected repositories/packages.
## Deprecation Schedule​
### 1. Limited Support Phase (September 17, 2024 - February 17, 2025)​
  * Only critical bug fixes and security updates will be provided for the deprecated packages/repositories.
  * No new features or non-critical bug fixes will be implemented.


### 2. End-of-Life Phase (February 18, 2025 onwards)​
  * All updates and support for the deprecated packages/repositories packages will cease.
  * Users are strongly encouraged to complete migration to packages published under Reown before this date.


## Affected Packages and Repositories​
The following packages and repositories are affected by this deprecation notice:
### Web​
**Packages**
  * `@walletconnect/web3wallet` deprecated in favor of `@reown/walletkit`
    * For guidance on how to update your existing `@walletconnect/web3wallet` implementation, please see the WalletKit migration guide.
  * `@web3modal/*` packages deprecated in favor of `@reown/appkit-*` packages 
    * For guidance on how to update your existing `@web3modal/*` implementation, please see the AppKit migration guide.


### React Native​
**Packages**
  * `@web3modal/*-react-native` packages deprecated in favor of `@reown/appkit-*-react-native` packages


For guidance on how to update your implementation, please see React Native AppKit migration guide
### Swift​
  * **Packages**
    * `Web3Wallet` deprecated in favor of `ReownWalletKit`
    * `Web3Modal` deprecated in favor of `ReownAppKit`
    * `WalletConnectRouter` deprecated in favor of`ReownRouter`


**Repositories**
  * https://github.com/WalletConnect/WalletConnectSwiftV2 in favor of https://github.com/reown-com/reown-swift


For guidance on how to update your Swift implementation, please see:
  * Swift Migration from Web3Modal to AppKit
  * Swift Migration from Web3Wallet to WalletKit


### Kotlin​
**Packages**
  * `com.walletconnect:android-bom` in favor of `com.reown:android-bom`
  * `com.walletconnect:android-core` in favor of `com.reown:android-core`
  * `com.walletconnect:web3wallet` in favor of `com.reown:walletkit`
  * `com.walletconnect:web3modal` in favor of `com.reown:appkit`
  * `com.walletconnect:sign` in favor of `com.reown:sign`
  * `com.walletconnect:notify` in favor of `com.reown:notify`


**Repositories**
  * https://github.com/WalletConnect/WalletConnectKotlinV2 in favor of https://github.com/reown-com/reown-kotlin


For guidance on how to update your Kotlin packages, please see:
  * Migration from Web3Modal to AppKit
  * Migration from Web3Wallet to WalletKit


### Unity​
**Packages**
  * `com.walletconnect.web3modal` in favor of `com.reown.appkit.unity`
  * `com.walletconnect.nethereum` in favor of `com.reown.nethereum.unity`
  * `com.walletconnect.core` in favor of `com.reown.sign.unity` and `com.reown.appkit.unity`
  * `com.walletconnect.modal` deprecated, migrate to `com.reown.appkit.unity`


**Repositories**
  * https://github.com/walletconnect/web3modalunity in favor of https://github.com/reown-com/reown-dotnet
  * https://github.com/walletconnect/walletconnectunity in favor of https://github.com/reown-com/reown-dotnet


For guidance on how to update your Unity packages, please see the Web3Modal to AppKit migration guide
### .NET​
**Packages**
  * `WalletConnect.Sign` in favor of `Reown.Sign`
  * `WalletConnect.Web3Wallet` in favor of `Reown.WalletKit`


**Repositories**
  * https://github.com/WalletConnect/WalletConnectSharp in favor of https://github.com/reown-com/reown-dotnet


For guidance on how to update your NuGet packages, please see the Web3Wallet to WalletKit migration guide
### Flutter​
**Packages**
  * walletconnect_flutter_v2 in favor of reown_walletkit
  * web3modal_flutter in favor of reown_appkit


**Repositories**
  * https://github.com/WalletConnect/WalletConnectFlutterV2 in favor of https://github.com/reown-com/reown_flutter
  * https://github.com/WalletConnect/Web3ModalFlutter in favor of https://github.com/reown-com/reown_flutter


For guidance on how to update your Flutter packages, please see:
  * Migration from Web3Modal to AppKit
  * Migration from Web3Wallet to WalletKit


## Action Required​
  1. Identify the platforms and packages you are currently using from the list above.
  2. Review the corresponding migration guide for your platform(s) using the links provided.
  3. Plan your migration to packages published under Reown as soon as possible.
  4. Complete the migration before February 17th 2025, to ensure continued support and access to the latest features and security updates.


## Support and Resources​
  * If you encounter any issues during migration, please open an issue in the respective Reown Github repository.


  * Deprecation Schedule
    * 1. Limited Support Phase (September 17, 2024 - February 17, 2025)
    * 2. End-of-Life Phase (February 18, 2025 onwards)
  * Affected Packages and Repositories
    * Web
    * React Native
    * Swift
    * Kotlin
    * Unity
    * .NET
    * Flutter
  * Action Required
  * Support and Resources


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=45a5bd76-6dab-4010-8ac1-da396e7bd150&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=177f1082-843a-43fc-86cc-7eb53f41022b&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fadvanced%2Fwalletconnect-deprecations&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=45a5bd76-6dab-4010-8ac1-da396e7bd150&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=177f1082-843a-43fc-86cc-7eb53f41022b&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fadvanced%2Fwalletconnect-deprecations&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
