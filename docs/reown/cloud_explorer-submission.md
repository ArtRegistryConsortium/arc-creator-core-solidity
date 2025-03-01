Skip to main content
On this page
Note
Submitting a project to the Reown Cloud Explorer is recommended but optional. You can still use Reown services without submitting your project. However, doing so ensures that your project is listed under WalletGuide and Cloud Explorer API.
## Creating a New Project​
  * Head over to cloud.reown.com and create a new project by clicking the "New Project" button in top right corner of the dashboard.
  * Give a suitable name to your project, select whether its an App or Wallet and click the "Create" button. (You can change this later) ![](https://docs.reown.com/img/cloud/1.png)


## Project Details​
  * Go to the "Explorer" tab and fill in the details of your project. ![](https://docs.reown.com/img/cloud/2.png)

Field| Description| Required  
---|---|---  
Name| The name to display in the explorer| yes  
Description| A short description explaining your project (dapp/wallet)| yes  
Type| Whether your project is a dapp or a wallet| yes  
Category| Appropriate category for your project. This field is dependent on the type of your project| yes  
Homepage| The URL of your project| yes  
Web App| The URL of your web app. This field is only applicable for dapps| yes  
Chains| Chains supported by your project| yes  
Logo| The logo of your project. Further requirements are provided in the explorer submission form| yes  
Testing Instructions| Instructions on how to test your Reown Integration| yes  
Download Links| Links to download your project (if applicable)| no  
Mobile Linking| Required for mobile wallets targeting AppKit. Deep Link is recommended over Universal Link| no  
Desktop Linking| Required for desktop wallets targeting AppKit.| no  
Injected Wallet Identifiers| Required for injected wallets targeting AppKit. RDNS (from EIP-6963 metadata) is recommended over Provider Flags(Legacy)| no  
Metadata| User facing UI metadata for your project. Only Short Name is required.| no  
## Project Submission​
  * Once you've filled the applicable fields, click the "Submit" button to submit your project for review. Alternatively, you can save your changes and submit later. Additional information will be visible in the modal that appears after clicking the "Submit" button. ![](https://docs.reown.com/img/cloud/3.png)


## How do we test wallets?​
In order to offer a great user experience in our APIs and SDKs every Cloud submission goes through a QA process to make sure that the integration of the WalletConnect protocol is working correctly.
The following list details our QA flow and how to reproduce it:
Test Case| Steps| Expected Results  
---|---|---  
Set Up| 1. Download the wallet 2. Install the wallet app 3. Sign up for an account with the wallet app 4. Create one or more accounts| 1. N/A 2. The app is installed 3. I have an account 4. I have one or more accounts  
Connect to dapp via web browser| 1. Open the Reown connection page https://appkit-lab.reown.com/ from a PC 2. Press on the “Connect Wallet” button and select the Reown option. 3. Open the wallet app and use the scan QR option to connect. 4. Accept on the wallet the connection request| 1. The app has been correctly set-up 2. A modal with wallet options is opened 3. A QR code is shown on the website and the wallet is able to scan it. 4. The connection is successfully established. The wallet data is now shown in the website.  
Connect to dapp via mobile browser (Deep-link)| 1. Open https://appkit-lab.reown.com/ in your mobile device. 2. Select one of the default options (e.g. Wagmi for EVM chains). Press the "Custom Wallet" button from the navbar. Fill in the wallet’s name and it’s deeplink (Mobile Link) in the “Add a Custom Wallet” form. Press “Add Wallet”. After the website reloads press the “Connect Wallet” button and select the new created wallet. 3. Accept the connection request in the wallet application.| 1. N/A 2. A form should show up in the website to fill in the wallet’s data. After the changes are applied the modal should show the new created wallet on the main view. 3. The user should be redirected to the wallet application and a modal with a connection request should show up on the wallet application. The wallet should connect successfully. On an Android devices the user should be redirected back to the website after accepting the connection request.  
Switch chains - dapp side| 1. Once the wallet is connected press on the modal button on the top right of the website. 2. Press the first button of the modal to switch the chain. 3. Select any available chain, close the modal and press the “Send Transaction” button| 1. A modal with the account information should pop up on the website. 2. A new view with supported chains should show up. 3. The transaction request that pops up on the wallet should show in their information the correct chain that we previously selected.  
Switch Chains - wallet side (if supported)| 1. Check if the wallet supports chain switching. If so select a different chain to the connected one.| 1. The chain change should be reflected on the website. The first card shows the current chain ID.  
Accounts Switching - wallet side| 1. In the wallet app switch from one account to the other.| 1. The account switch event should be reflected in the modal’s account view on the website.  
Disconnect a wallet| 1. Select "Disconnect" button from the Wallet App (Ideally wallets should have a section where users could see all their existing dApp connections, and give the user the ability to manage connections / disconnect from dapps in one spot - this is not always true so if this is not possible just skip this) 2. Repeat above steps and press "Disconnect" button from the dApp (this should be always available)| 1. The related session should disappear from dApp and from the Wallet App 2. The related session should disappear from dApp and from the Wallet App  
Verify API| 1. Open https://malicious-app-verify-simulation.vercel.app/ 2. Select a supported chain by the wallet (some wallets don’t support testnets) and press the “Connect” button. 3. Scan with the wallet the generated QR code.| 1. N/A 2. A modal should show up with a QR code to scan. 3. The connection request in the wallet should flag the website as malicious.   
### Chain Specific​
The following test cases only apply for wallets supporting a particular set of chains.
  * EVM
  * Solana


Test Case| Steps| Expected Results  
---|---|---  
Supporting personal_sign| 1. Connect the wallet. 2. Press the “Sign Message” button. 3. Accept the signature request on the wallet.| 1. N/A 2. A modal should popup on the wallet app requesting for a signature. 3. Once accepted and signed the hash should show up on the website.  
Supporting eth_signTypedData_v4| 1. Connect the wallet. 2. Press the “Sign Typed Data” button. 3. Accept the signature request on the wallet.| 1. N/A 2. A modal should popup on the wallet app requesting for a signature. 3. Once accepted and signed the hash should show up on the website.  
Supporting eth_sendTransaction| 1. Connect the wallet. 2. Press the “Send Transaction” button.| 1. N/A 2. A modal should popup on the wallet app requesting for a signature.  
Test Case| Steps| Expected Results  
---|---|---  
Supporting solana_signMessage| 1. Connect the wallet to https://appkit-lab.reown.com/library/solana 2. Press the “Sign Message” button. 3. Accept the signature request on the wallet.| 1. N/A 2. A modal should popup on the wallet app requesting for a signature. 3. Once accepted and signed the hash should show up on the website.  
Supporting solana_signTransaction| 1. Connect the wallet to https://appkit-lab.reown.com/library/solana 2. Press the “Sign Transaction”. 3. Accept the signature request on the wallet.| 1. N/A 2. A modal should popup on the wallet app requesting for a signature. 3. Once accepted and signed the hash should show up on the website.  
Supporting v0 Transactions| 1. Connect the wallet to https://appkit-lab.reown.com/library/solana 2. Press the “Sign Versioned Transaction" button. 3. Accept the signature request on the wallet.| 1. N/A 2. A modal should popup on the wallet app requesting for a signature. 3. Once accepted and signed the hash should show up on the website.  
## What's Next?​
Now depending on whether or not your submission met all parameters, you will receive an email from the Reown team with the status of your submission. This change will also be reflected with more directions in the "Explorer" tab of your project. If your submission was not accepted, you can make the necessary changes and resubmit your project for review. The reason for rejection will be mentioned in the email and in the "Explorer" tab of your project.
In case of any questions, feel free to ask on Github Discussions
  * Creating a New Project
  * Project Details
  * Project Submission
  * How do we test wallets?
    * Chain Specific
  * What's Next?


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=b75152c3-8444-4379-a290-13afe9668ade&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=43413b6a-1478-43a4-9dc0-8fec21ebfbfe&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fcloud%2Fexplorer-submission&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=b75152c3-8444-4379-a290-13afe9668ade&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=43413b6a-1478-43a4-9dc0-8fec21ebfbfe&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fcloud%2Fexplorer-submission&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
