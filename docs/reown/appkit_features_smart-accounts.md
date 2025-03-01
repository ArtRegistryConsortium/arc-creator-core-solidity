Skip to main content
On this page
# Smart Accounts
AppKit now supports Smart Accounts, offering users enhanced security and convenience with features like multi-signature authorization and automated transaction workflows. This update ensures a seamless and efficient experience for managing digital assets within decentralized applications.
Try Demo
### Deployment​
Smart Accounts are deployed alongside the first transaction. Until deployment, a precalculated address, known as the counterfactual address, is displayed. Despite not being deployed, the account can still sign using 6492 signatures.
### Supported Networks​
**Smart Accounts are available on several EVM networks. You can view the complete list of supported networkshere.**
### User Eligibility​
Smart Accounts are exclusively available for embedded wallet users (email and social login)
## FAQ​
### What is a Smart Account?​
A Smart Account improves the traditional account experience by replacing Externally Owned Accounts (EOAs) with a Smart Contract that follows the ERC-4337 standard. This opens up many use cases that were previously unavailable.
Smart Accounts do no require Private Keys or Seed Phrases, instead they rely on a key or multiple keys from designated signers to access the smart account and perform actions on chain. The keys can take multiple forms including passkeys and EOA signatures.
### What can I do with a Smart Account?​
Smart accounts unlock a host of use cases that were previously unavailable with EOAs. Essentially anything that can be programmed into a smart contract can be used by Smart Accounts.
  * **Automated Transactions:** Set up recurring payments or conditional transfers.
  * **Multi-Signature Authorization:** Require multiple approvals for a transaction to increase security.
  * **Delegated Transactions:** Allow a third party to execute transactions on your behalf under specific conditions.
  * **Enhanced Security:** Implement complex security mechanisms such as time-locked transactions and withdrawal limits.
  * **Interoperability:** Interact seamlessly with decentralized applications (dApps) and decentralized finance (DeFi) protocols.
  * **Custom Logic:** Create custom transaction rules and workflows that align with personal or business requirements.


### How do I get a Smart Account?​
Existing AppKit Universal Wallet Users will be given the option to upgrade their account to a smart account. Once you upgrade you will still be able to access your EOA and self-custody your account.
New AppKit Universal Wallet Users will be given smart accounts by default when they login for the first time.
### Does it cost anything?​
There is a small additional cost for activating your smart account. The activation fee is added to the first transaction and covers the network fees required for deploying the new smart contract onchain.
### Can I export my Smart Account?​
No, you cannot export your Smart Account. The Smart Account (SA) is deployed by the EOA and is owned by the EOA. Your EOA account will always be exportable. Also is good to know that SA don't have seedphrases.
### Can I withdraw all my funds from my Smart Account?​
Yes, you can withdraw all your funds from your Smart Account.
### What are account names?​
Smart account addresses start with ’0x’ followed by 42 characters, this is the unique address of your smart account on the network. ‘0x’ addresses like this are long, unwieldy and unmemorable. AppKit allows you to assign a more memorable name for your smart account using ENS Resolvers.
You can assign a name to your account and this will act as an alias for your account that can be shared publicly and provide a better user experience. AppKit account names are followed by the "reown.id" domain.
### What can I do with my account name?​
As AppKit smart account addresses are the same across the supported networks by Pimlico, you only need one account name which can then be used across the networks.
For example if you want someone to send you USDC on Polygon they can send it to “johnsmith.reown.id”. If you want someone wants to send you USDC on Optimism they can also use “johnsmith.reown.id”.
  * Deployment
  * Supported Networks
  * User Eligibility
  * FAQ
    * What is a Smart Account?
    * What can I do with a Smart Account?
    * How do I get a Smart Account?
    * Does it cost anything?
    * Can I export my Smart Account?
    * Can I withdraw all my funds from my Smart Account?
    * What are account names?
    * What can I do with my account name?


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=2a40b8ae-38e8-448c-8284-bb5198323352&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=84e6ea8d-9d01-4501-9662-f5ab8e5b3f36&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Ffeatures%2Fsmart-accounts&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=2a40b8ae-38e8-448c-8284-bb5198323352&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=84e6ea8d-9d01-4501-9662-f5ab8e5b3f36&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Ffeatures%2Fsmart-accounts&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
