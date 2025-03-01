Skip to main content
On this page
# Best Practices for Wallets
To ensure the smoothest and most seamless experience for our users, Reown is committed to working closely with wallet providers to encourage the adoption of our recommended best practices.
By implementing these guidelines, we aim to optimize performance and minimize potential challenges, even in suboptimal network conditions.
We are actively partnering with wallet developers to optimize performance in scenarios such as:
  1. **Success and Error Messages** - Users need to know what’s going on, at all times. Too much communication is better than too little. The less users need to figure out themselves or assume what’s going on, the better.
  2. **(Perceived) Latency** - A lot of factors can influence latency (or perceived latency), e.g. network conditions, position in the boot chain, waiting on the wallet to connect or complete a transaction and not knowing if or when it has done it.
  3. **Old SDK Versions** - Older versions can have known and already fixed bugs, leading to unnecessary issues to users, which can be simply and quickly solved by updating to the latest SDK.


To take all of the above into account and to make experience better for users, we've put together some key guidelines for wallet providers. These best practices focus on the most important areas for improving user experience.
Please follow these best practices and make the experience for your users and yourself a delightful and quick one.
## Checklist Before Going Live​
To make sure your wallet adheres to the best practices, we recommend implementing the following checklist before going live. You can find more detailed information on each point below.
  1. **Success and Error Messages**
     * ✅ Display clear and concise messages for all user interactions
     * ✅ Provide feedback for all user actions 
       * ✅ Connection success
       * ✅ Connection error
       * ✅ Loading indicators for waiting on connection, transaction, etc.
     * ✅ Ensure that users are informed of the status of their connection and transactions
     * ✅ Implement status indicators internet availability
     * ✅ Make sure to provide feedback not only to users but also back to the dapp (e.g., if there's an error or a user has not enough funds to pay for gas, don't just display the info message to the user, but also send the error back to the dapp so that it can change the state accordingly)
  2. **Mobile Linking**
     * ✅ Implement mobile linking to allow for automatic redirection between the wallet and the dapp
     * ✅ Use deep linking over universal linking for a better user experience
     * ✅ Ensure that the user is redirected back to the dapp after completing a transaction
  3. **Latency**
     * ✅ Optimize performance to minimize latency
     * ✅ Latency for connection in normal conditions: under 5 seconds
     * ✅ Latency for connection in poor network (3G) conditions: under 15 seconds
     * ✅ Latency for signing in normal conditions: under 5 seconds
     * ✅ Latency for signing in poor network (3G) conditions: under 10 seconds
  4. **Verify API**
     * ✅ Present users with four key states that can help them determine whether the domain they’re about to connect to might be malicious (Domain match, Unverified, Mismatch, Threat)
  5. **Latest SDK Version**
     * ✅ Ensure that you are using the latest SDK version
     * ✅ Update your SDK regularly to benefit from the latest features and bug fixes
     * ✅ Subscribe to SDK updates to stay informed about new releases


## 1. Success and Error Messages​
Users often face ambiguity in determining whether their connection or transactions were successful. They are also not guided to switching back into the dapp or automatically switched back when possible, causing unnecessary user anxiety. Additionally, wallets typically lack status indicators for connection and internet availability, leaving users in the dark.
![](https://docs.reown.com/assets/images/connection-successful-b5ff93f2ae793d59d2a32dca6047d0df.png)
_An example of a successful connection message in a Rainbow wallet_
### Pairing​
A pairing is a connection between a wallet and a dapp that has fixed permissions to only allow a dapp to propose a session through it. Dapp can propose infinite number of sessions on one pairing. Wallet must use a pair method from WalletKit client to pair with dapp.
  * Web
  * iOS
  * Android
  * React Native


```
const uri ='xxx';// pairing uritry{await walletKit.pair({ uri });}catch(error){// some error happens while pairing - check Expected errors section}
```

```
const uri ='xxx';// pairing uritry{await walletKit.pair({ uri });}catch(error){// some error happens while pairing - check Expected errors section}
```

```
let uri =WalletConnectURI(string: urlString)iflet uri {Task{tryawaitWalletKit.instance.pair(uri: uri)}}
```

```
val pairingParams = Wallet.Params.Pair(pairingUri)WalletKit.pair(pairingParams,  onSuccess ={//Subscribed on the pairing topic successfully. Wallet should await for a session proposal},  onError ={ error ->//Some error happens while pairing - check Expected errors section}}
```

#### Pairing Expiry​
A pairing expiry event is triggered whenever a pairing is expired. The expiry for inactive pairing is 5 mins, whereas for active pairing is 30 days. A pairing becomes active when a session proposal is received and user successfully approves it. This event helps to know when given pairing expires and update UI accordingly.
  * Web
  * iOS
  * Android
  * React Native


```
core.pairing.events.on("pairing_expire",(event)=>{// pairing expired before user approved/rejected a session proposalconst{ topic }= topic;});
```

```
core.pairing.events.on("pairing_expire",(event)=>{// pairing expired before user approved/rejected a session proposalconst{ topic }= topic;});
```

```
WalletKit.instance.pairingExpirationPublisher.receive(on:DispatchQueue.main).sink { pairing inguard!pairing.active else{return}// let user know that pairing has expired}.store(in:&publishers)
```

```
val coreDelegate =object: CoreClient.CoreDelegate{overridefunonPairingExpired(expiredPairing: Core.Model.ExpiredPairing){// Here a pairing expiry is triggered}// ...other callbacks}CoreClient.setDelegate(coreDelegate)
```

#### Pairing messages​
  1. Consider displaying a successful pairing message when pairing is successful. Before that happens, wallet should show a loading indicator.
  2. Display an error message when a pairing fails.


#### Expected Errors​
While pairing, the following errors might occur:
  * **No Internet connection error or pairing timeout when scanning QR with no Internet connection**
    * User should pair again with Internet connection
  * **Pairing expired error when scanning a QR code with expired pairing**
    * User should refresh a QR code and scan again
  * **Pairing with existing pairing is not allowed**
    * User should refresh a QR code and scan again. It usually happens when user scans an already paired QR code.


### Session Proposal​
A session proposal is a handshake sent by a dapp and its purpose is to define session rules. Whenever a user wants to establish a connection between a wallet and a dapp, one should approve a session proposal.
Whenever user approves or rejects a session proposal, a wallet should show a loading indicator the moment the button is pressed, until Relay acknowledgement is received for any of these actions.
#### Approving session​
  * Web
  * iOS
  * Android
  * React Native


```
try{await walletKit.approveSession(params);// update UI -> remove the loader}catch(error){// present error to the user}
```

```
try{await walletKit.approveSession(params);// update UI -> remove the loader}catch(error){// present error to the user}
```

```
do{tryawaitWalletKit.instance.approve(proposalId: proposal.id, namespaces: sessionNamespaces, sessionProperties: proposal.sessionProperties)// Update UI, remove loader}catch{// present error}
```

```
WalletKit.approveSession(approveProposal, onSuccess ={//Session approval response was sent successfully - update your UI}  onError ={ error ->//Error while sending session approval - update your UI})
```

#### Rejecting session​
  * Web
  * iOS
  * Android
  * React Native


```
try{await walletKit.rejectSession(params);// update UI -> remove the loader}catch(error){// present error to the user}
```

```
try{await walletKit.rejectSession(params);// update UI -> remove the loader}catch(error){// present error to the user}
```

```
do{tryawaitWalletKit.instance.reject(proposalId: proposal.id, reason:.userRejected)// Update UI, remove loader}catch{// present error}
```

```
WalletKit.rejectSession(reject, onSuccess ={//Session rejection response was sent successfully - update your UI}, onError ={ error ->//Error while sending session rejection - update your UI})
```

#### Session proposal expiry​
A session proposal expiry is 5 minutes. It means a given proposal is stored for 5 minutes in the SDK storage and user has 5 minutes for the approval or rejection decision. After that time, the below event is emitted and proposal modal should be removed from the app's UI.
  * Web
  * iOS
  * Android
  * React Native


```
walletKit.on("proposal_expire",(event)=>{// proposal expired and any modal displaying it should be removedconst{ id }= event;});
```

```
walletKit.on("proposal_expire",(event)=>{// proposal expired and any modal displaying it should be removedconst{ id }= event;});
```

```
WalletKit.instance.sessionProposalExpirationPublisher.sink {_in// let user know that session proposal has expired, update UI}.store(in:&publishers)
```

```
val walletDelegate =object: WalletKit.WalletDelegate{overridefunonProposalExpired(proposal: Wallet.Model.ExpiredProposal){// Here this event is triggered when a proposal expires - update your UI}// ...other callbacks}WalletKit.setWalletDelegate(walletDelegate)
```

#### Session Proposal messages​
  1. Consider displaying a successful session proposal message before redirecting back to the dapp. Before the success message is displayed, wallet should show a loading indicator.
  2. Display an error message when session proposal fails.


#### Expected errors​
While approving or rejecting a session proposal, the following errors might occur:
  * **No Internet connection**
    * It happens when a user tries to approve or reject a session proposal with no Internet connection
  * **Session proposal expired**
    * It happens when a user tries to approve or reject an expired session proposal
  * **Invalidnamespaces**
    * It happens when a validation of session namespaces fails
  * **Timeout**
    * It happens when Relay doesn't acknowledge session settle publish within 10s


### Session Request​
A session request represents the request sent by a dapp to a wallet.
Whenever user approves or rejects a session request, a wallet should show a loading indicator the moment the button is pressed, until Relay acknowledgement is received for any of these actions.
  * Web
  * iOS
  * Android
  * React Native


```
try{await walletKit.respondSessionRequest(params);// update UI -> remove the loader}catch(error){// present error to the user}
```

```
try{await walletKit.respondSessionRequest(params);// update UI -> remove the loader}catch(error){// present error to the user}
```

```
do{tryawaitWalletKit.instance.respond(requestId: request.id, signature: signature, from: account)// update UI -> remove the loader}catch{// present error to the user}
```

```
WalletKit.respondSessionRequest(Wallet.Params.SessionRequestResponse, onSuccess ={//Session request response was sent successfully - update your UI}, onError ={ error ->//Error while sending session response - update your UI})
```

#### Session request expiry​
A session request expiry is defined by a dapp. Its value must be between `now() + 5mins` and `now() + 7 days`. After the session request expires, the below event is emitted and session request modal should be removed from the app's UI.
  * Web
  * iOS
  * Android
  * React Native


```
walletKit.on("session_request_expire",(event)=>{// request expired and any modal displaying it should be removedconst{ id }= event;});
```

```
walletKit.on("session_request_expire",(event)=>{// request expired and any modal displaying it should be removedconst{ id }= event;});
```

```
WalletKit.instance.requestExpirationPublisher.sink {_in// let user know that request has expired}.store(in:&publishers)
```

```
val walletDelegate =object: WalletKit.WalletDelegate{overridefunonRequestExpired(request: Wallet.Model.ExpiredRequest){// Here this event is triggered when a session request expires - update your UI}// ...other callbacks}WalletKit.setWalletDelegate(walletDelegate)
```

#### Expected errors​
While approving or rejecting a session request, the following errors might occur:
  * **Invalid session**
    * This error might happen when a user approves or rejects a session request on an expired session
  * **Session request expired**
    * This error might happen when a user approves or rejects a session request that already expired
  * **Timeout**
    * It happens when Relay doesn't acknowledge session settle publish within 10 seconds


### Connection state​
The Web Socket connection state tracks the connection with the Relay server. An event is emitted whenever a connection state changes.
  * Web
  * iOS
  * Android
  * React Native


```
core.relayer.on("relayer_connect",()=>{// connection to the relay server is established})core.relayer.on("relayer_disconnect",()=>{// connection to the relay server is lost})
```

```
core.relayer.on("relayer_connect",()=>{// connection to the relay server is established})core.relayer.on("relayer_disconnect",()=>{// connection to the relay server is lost})
```

```
WalletKit.instance.socketConnectionStatusPublisher.receive(on:DispatchQueue.main).sink { status inswitch status {case.connected:// ...case.disconnected:// ...}}.store(in:&publishers)
```

```
val walletDelegate =object: WalletKit.WalletDelegate{overridefunonConnectionStateChange(state: Wallet.Model.ConnectionState){// Here this event is triggered when a connection state has changed}// ...other callbacks}WalletKit.setWalletDelegate(walletDelegate)
```

#### Connection state messages​
When the connection state changes, show a message in the UI. For example, display a message when the connection is lost or re-established.
## 2. Mobile Linking​
### Why use Mobile Linking?​
Mobile Linking uses the mobile device’s native OS to automatically redirect between the native wallet app and a native app. This results in few user actions a better UX.
#### Establishing Communication Between Mobile Wallets and Apps​
When integrating a wallet with a mobile application, it's essential to understand how they communicate. The process involves two main steps:
  1. **QR Code Handshake:** The mobile app (Dapp) generates a unique URI (Uniform Resource Identifier) and displays it as a QR code. This URI acts like a secret handshake. When the user scans the QR code or copy/pastes the URI using their wallet app, they establish a connection. It's like saying, "Hey, let's chat!"
  2. **Deep Links and Universal Links:** The URI from the QR code allows the wallet app to create a deep link or universal link. These links work on both Android and iOS. They enable seamless communication between the wallet and the app.


tip
**Developers should prefer Deep Linking over Universal Linking.**
Universal Linking may redirect the user to a browser, which might not provide the intended user experience. Deep Linking ensures the user is taken directly to the app.
### Key Behavior to Address​
In some scenarios, wallets use redirect metadata provided in session proposals to open applications. This can cause unintended behavior, such as:
Redirecting to the wrong app when multiple apps share the same redirect metadata (e.g., a desktop and mobile version of the same Dapp). Opening an unrelated application if a QR code is scanned on a different device than where the wallet is installed.
#### Recommended Approach​
To avoid this behavior, wallets should:
  * **Restrict Redirect Metadata to Deep Link Use Cases** : Redirect metadata should only be used when the session proposal is initiated through a deep link. QR code scans should not trigger app redirects using session proposal metadata.


### Connection Flow​
  1. **Dapp prompts user:** The Dapp asks the user to connect.
  2. **User chooses wallet:** The user selects a wallet from a list of compatible wallets.
  3. **Redirect to wallet:** The user is redirected to their chosen wallet.
  4. **Wallet approval:** The wallet prompts the user to approve or reject the session (similar to granting permission).
  5. **Return to dapp:**
     * **Manual return:** The wallet asks the user to manually return to the Dapp.
     * **Automatic return:** Alternatively, the wallet automatically takes the user back to the Dapp.
  6. **User reunites with dapp:** After all the interactions, the user ends up back in the Dapp.

![Mobile Linking Connect Flow](https://docs.reown.com/img/w3w/mobileLinking-light.png)![Mobile Linking Connect Flow](https://docs.reown.com/img/w3w/mobileLinking-dark.png)
### Sign Request Flow​
When the Dapp needs the user to sign something (like a transaction), a similar pattern occurs:
  1. **Automatic redirect:** The Dapp automatically sends the user to their previously chosen wallet.
  2. **Approval prompt:** The wallet asks the user to approve or reject the request.
  3. **Return to dapp:**
     * **Manual return:** The wallet asks the user to manually return to the Dapp.
     * **Automatic return:** Alternatively, the wallet automatically takes the user back to the Dapp.
  4. **User reconnects:** Eventually, the user returns to the Dapp.

![Mobile Linking Sign Flow](https://docs.reown.com/img/w3w/mobileLinking_sign-light.png)![Mobile Linking Sign Flow](https://docs.reown.com/img/w3w/mobileLinking_sign-dark.png)
### Platform Specific Preparation​
  * iOS
  * Android
  * Flutter
  * React Native


Read the specific steps for iOS here: Platform preparations
Read the specific steps for Android here: Platform preparations
Read the specific steps for Flutter here: Platform preparations
Read the specific steps for React Native here: Platform preparations
### How to Test​
To experience the desired behavior, try our Sample Wallet and Dapps which use our Mobile linking best practices. These are available on all platforms.
Once you have completed your integration, you can test it against our sample apps to see if it is working as expected. Download the app and and try your mobile linking integration on your device.
  * iOS
  * Android
  * Flutter
  * React Native


  * Sample Wallet - on TestFlight
  * Sample DApp - on TestFlight


  * Sample Wallet - on Firebase
  * Sample DApp - on Firebase


  * Sample Wallet: 
    * Sample Wallet for iOS
    * Sample Wallet for Android
  * AppKit DApp: 
    * AppKit Dapp for iOS
    * AppKit Dapp for Android


  * Sample Wallet: 
    * Sample Wallet for Android
  * Sample DApp: 
    * Sample App for iOS
    * Sample App for Android


## 3. Latency​
Our SDK’s position in the boot chain can lead to up to 15 seconds in throttled network conditions. Lack of loading indicators exacerbates the perceived latency issues, impacting user experience negatively. Additionally, users often do not receive error messages or codes when issues occur or timeouts happen.
### Target latency​
For **connecting** , the target latency is:
  * **Under 5 seconds** in normal conditions
  * **Under 15 seconds** when throttled (3G network speed)


For **signing** , the target latency is:
  * **Under 5 seconds** in normal conditions
  * **Under 10 seconds** when throttled (3G network speed)


### How to test​
To test latency under suboptimal network conditions, you can enable throttling on your mobile phone. You can simulate different network conditions to see how your app behaves in various scenarios.
For example, on iOS you need to enable Developer Mode and then go to **Settings > Developer > Network Link Conditioner**. You can then select the network condition you want to simulate. For 3G, you can select **3G** from the list, for no network or timeout simulations, choose **100% Loss**.
Check this article for how to simulate slow internet connection on iOS & Android, with multiple options for both platforms: How to simulate slow internet connection on iOS & Android.
## 4. Verify API​
Verify API is a security-focused feature that allows wallets to notify end-users when they may be connecting to a suspicious or malicious domain, helping to prevent phishing attacks across the industry. Once a wallet knows whether an end-user is on uniswap.com or eviluniswap.com, it can help them to detect potentially harmful connections through Verify's combined offering of Reown's domain registry.
When a user initiates a connection with an application, Verify API enables wallets to present their users with four key states that can help them determine whether the domain they’re about to connect to might be malicious.
Possible states:
  * Domain match
  * Unverified
  * Mismatch
  * Threat


![Verify States](https://docs.reown.com/assets/images/verify-states-1-93090ecaccc79e3ee17f7ec5e95ea1c0.png) ![Verify States](https://docs.reown.com/assets/images/verify-states-2-9be251f136a0fe8a2c010c3215594d43.png)
Note
Verify API is not designed to be bulletproof but to make the impersonation attack harder and require a somewhat sophisticated attacker. We are working on a new standard with various partners to close those gaps and make it bulletproof.
### Domain risk detection​
The Verify security system will discriminate session proposals & session requests with distinct validations that can be either `VALID`, `INVALID` or `UNKNOWN`.
  * **Domain match:** The domain linked to this request has been verified as this application's domain. 
    * This interface appears when the domain a user is attempting to connect to has been ‘verified’ in our domain registry as the registered domain of the application the user is trying to connect to, and the domain has not returned as suspicious from either of the security tools we work with. The `verifyContext` included in the request will have a validation of `VALID`.
  * **Unverified:** The domain sending the request cannot be verified. 
    * This interface appears when the domain a user is attempting to connect to has not been verified in our domain registry, but the domain has not returned as suspicious from either of the security tools we work with. The `verifyContext` included in the request will have a validation of `UNKNOWN`.
  * **Mismatch:** The application's domain doesn't match the sender of this request. 
    * This interface appears when the domain a user is attempting to connect to has been flagged as a different domain to the one this application has verified in our domain registry, but the domain has not returned as suspicious from either of the security tools we work with. The `verifyContext` included in the request will have a validation of `INVALID`
  * **Threat:** This domain is flagged as malicious and potentially harmful. 
    * This interface appears when the domain a user is attempting to connect to has been flagged as malicious on one or more of the security tools we work with. The `verifyContext` included in the request will contain parameter `isScam` with value `true`.


### Verify API Implementation​
To see how to implement Verify API for your framework, see Verify API page and select your platform to see code examples.
### How to test​
To test Verify API with a malicious domain, you can check out the Malicious React dapp, created specifically for testing. This app is flagged as malicious and will have the `isScam` parameter set to `true` in the `verifyContext` of the request. You can use this app to test how your wallet behaves when connecting to a malicious domain.
### Error messages​
![Verify API flagged domain](https://docs.reown.com/assets/images/verify-api-flagged-domain-719e6a19f89ec9a6d7ee6cecd915c4d3.png)
_A sample error warning when trying to connect to a malicious domain_
## 5. Latest SDK​
Numerous features have been introduced, bugs have been identified and fixed over time, stability has improved, but many dapps and wallets continue to use older SDK versions with known issues, affecting overall reliability.
Make sure you are using the latest version of the SDK for your platform
  * iOS
  * Android
  * Flutter
  * React Native


  * **WalletConnectSwiftV2** : Latest release


  * **WalletConnectKotlinV2** : Latest release


  * **WalletConnectFlutterV2** : Latest release


  * **AppKit for React Native** : Latest release


### Subscribe to updates​
To stay up to date with the latest SDK releases, you can use GitHub's native feature to subscribe to releases. This way, you will be notified whenever a new release is published. You can find the "Watch" button on the top right of the repository page. Click on it, then select "Custom" and "Releases only". You'll get a helpful ping whenever a new release is out.
![Subscribe to releases](https://docs.reown.com/assets/images/subsribe-to-release-updates-79951a0c1437f87d8b510c8347cf0c0b.png)
## Resources​
  * React Wallet - for testing dapps, features, Verify API messages, etc.
  * React dapp - for testing wallets
  * Malicious React dapp - for testing Verify API with malicious domain


  * Checklist Before Going Live
  * 1. Success and Error Messages
    * Pairing
    * Session Proposal
    * Session Request
    * Connection state
  * 2. Mobile Linking
    * Why use Mobile Linking?
    * Key Behavior to Address
    * Connection Flow
    * Sign Request Flow
    * Platform Specific Preparation
    * How to Test
  * 3. Latency
    * Target latency
    * How to test
  * 4. Verify API
    * Domain risk detection
    * Verify API Implementation
    * How to test
    * Error messages
  * 5. Latest SDK
    * Subscribe to updates
  * Resources


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=ec6cc2a9-0e23-4565-8a38-23e3babf8d17&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=1a46a56f-b5bb-400c-9fbd-401430893ed3&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fwalletkit%2Fbest-practices&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=ec6cc2a9-0e23-4565-8a38-23e3babf8d17&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=1a46a56f-b5bb-400c-9fbd-401430893ed3&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fwalletkit%2Fbest-practices&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
