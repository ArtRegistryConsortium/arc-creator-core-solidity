Skip to main content
On this page
# FAQs
## What chains does WalletConnect support?​
WalletConnect operates as a chain-agnostic protocol, adhering to the CAIP-25 standard. While the WalletConnect protocol supports various chains, you can refer to the list for the known compatible blockchains. However, please note that our SDKs have certain limitations on the chains they support.
If you intend to extend support for non-EVM chains in your wallet or dapp, it is recommended to review the cross-chain primitives supported by the WalletConnect protocol through the Chain Agnostic Standards Alliance's Namespaces project. Additionally, feel free to reach out to our community team for further guidance. In the event that the desired chain lacks documentation in the Namespaces project, you can collaborate with an expert in the respective chain's tooling and submit a namespaces PR.
## Will the relay server `bridge.walletconnect.org` still work in v2?​
No, the bridge servers are v1 only.
## How can I reconnect to the same pairing if my browser was restarted?​
The `signClient` will restore & reconnect its pairings automatically after the page is reloaded. All pairings are stored on the page's `localStorage`.
For more context, feel free to check our web examples.
## The default relay endpoint is blocked. How can I get around this?​
When initializing `signClient`, you can set `relayUrl` to `wss://relay.walletconnect.org`.
```
const signClient =awaitSignClient.init({projectId:'<YOUR PROJECT ID>',relayUrl:'wss://relay.walletconnect.org',metadata:{}})
```

## How can we use a custom relay for our bridge without a WC URI parameter as the host?​
You are more than welcome to utilize a custom URI parameter during testing. However, it is currently not recommended for use in a production environment.
## Why is self-hosting not an option at this time? Are there plans to make this possible in the future?​
We understand the desire for developers to self-host their own relay. We share this vision, and have embarked on a decentralization roadmap in order to achieve this. By the end of this summer, we will launch a permissioned network and invite a select group of partners to participate in this crucial first phase. Our objective is to make self-hosting relay a reality with the creation of the decentralized WalletConnect Network, and we appreciate your patience as we progress in this enormous mission.
## How do I report a security issue?​
Please consult our security.txt
  * What chains does WalletConnect support?
  * Will the relay server `bridge.walletconnect.org` still work in v2?
  * How can I reconnect to the same pairing if my browser was restarted?
  * The default relay endpoint is blocked. How can I get around this?
  * How can we use a custom relay for our bridge without a WC URI parameter as the host?
  * Why is self-hosting not an option at this time? Are there plans to make this possible in the future?
  * How do I report a security issue?


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=77fa8252-c02a-4a4c-94cb-eeb1550a5d36&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=966d181b-fc91-4bd3-9fad-d0bc951d0caa&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fadvanced%2Ffaq&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=77fa8252-c02a-4a4c-94cb-eeb1550a5d36&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=966d181b-fc91-4bd3-9fad-d0bc951d0caa&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fadvanced%2Ffaq&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
