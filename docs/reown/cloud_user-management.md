Skip to main content
On this page
# User Management
Easily view and manage all authenticated users through AppKit Cloud Auth SIWX, a drop-in hosted SIWX server that provides key insights into your user base.
## Usage​
Refer to Cloud Auth SIWX for instructions on enabling this feature with AppKit.
## Dashboard​
The dashboard provides a list of all accounts (chain + address) connected to your dapp, including the country they connected from, the last connection time, and the authentication method (wallet or social login).
![User Management](https://docs.reown.com/assets/images/user-management-1ebcce79a793d33ffa828b810c717f9e.png)
## Insights​
We plan to add more insights over time. Currently, it includes:
  * **Connections** : Authenticated users over time
  * **Geographic Distribution** : User distribution by country
  * **Wallet Analytics** : Which wallets are most commonly used
  * **30-Day History** : Historical data for the past 30 days


![User Management](https://docs.reown.com/assets/images/insights-dfa90b04cde07e9e0c299ced90011d7e.png)
# SIWX API
The Cloud Auth SIWX API is a hosted server implementing Sign In With X/Anything (SIWX). SIWX is a chain-agnostic variant of Sign In With Ethereum (SIWE). To connect to your dapp, users must sign a message. The message signature is forwarded to our server, which verifies it and issues a JWT upon successful authentication.
## Why Use Our API Instead of Building Your Own?​
Our solution abstracts the complexity and maintenance costs of running a SIWX server. Another benefit is immediate access to key user insights in your dashboard, as shown above. The API leverages Cloudflare Workers for global distribution and has built-in rate limiting.
## Limitations​
caution
The feature is currently in beta.
Currently, this feature and its API are only available for AppKit projects and only supports EVM networks. We plan to make it available for all Reown projects and will add more networks in upcoming versions. Get in touch via Discord if you are interested.
# Programmatic Access & Webhooks
We are planning on enabling your backend to interact with our hosted backend via OIDC. This allows you to confirm whether a user is logged in and qualify their scopes.
We are also planning on exposing the list of users programmatically and webhooks such that you can subscribe to signup, login, and other events.
  * Usage
  * Dashboard
  * Insights
  * Why Use Our API Instead of Building Your Own?
  * Limitations


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=2d8edd52-cf03-48cf-b225-8b0054182f13&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=8499509b-c7d7-43f7-84f7-40b8dcd81d34&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fcloud%2Fuser-management&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=2d8edd52-cf03-48cf-b225-8b0054182f13&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=8499509b-c7d7-43f7-84f7-40b8dcd81d34&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fcloud%2Fuser-management&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
