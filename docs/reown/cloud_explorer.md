Skip to main content
On this page
The Cloud Explorer API currently offers the following functionality:
  * Listings - Allows for fetching of wallets and dApps listed in the WalletGuide.
  * Logos - Provides logo assets in different sizes for a given Cloud explorer entry.


### Listings​
By default listings endpoints return all data for provided type. You can use following query params to return paginated data or search for a specific listing by its name:
Param| Required?| Description  
---|---|---  
projectId| Required| Your Reown Cloud Project ID (from cloud.reown.com)  
entries| Specifies how many entries will be returned (must be used together with page param)  
page| Specifies current page (must be used with entries param)  
search| Returns listings whose name matches provided search query  
ids| Returns listings whose id matches provided ids (e.g. `&ids=LISTING_ID1,LISTING_ID2`)  
chains| Returns listings that support at least one of the provided chains(e.g. `?chains=eip155:1,eip155:137`)  
platforms| Returns listings that support at least one of the provided platforms(e.g. `?platforms=ios,android,mac,injected`)  
sdks| Returns listings that support at least one of the provided Reown SDKs(e.g. `?sdks=sign_v1,sign_v2,auth_v1`)  
standards| Returns listings that support at least one of the provided standards(e.g. `?standards=eip-712,eip-3085`)  
~~version~~|  Deprecated - replaced by `sdks` param. Specifies supported Sign version (1 or 2)  
#### `GET /v3/wallets`​
Returns a JSON object containing all wallets listed in the cloud explorer.
Examples:
  * `GET https://explorer-api.walletconnect.com/v3/wallets?projectId=YOUR_PROJECT_ID&entries=5&page=1` (will return the first 5 wallets from the first page)
  * `GET https://explorer-api.walletconnect.com/v3/wallets?projectId=YOUR_PROJECT_ID&platforms=injected` (will only return injected wallets)


#### `GET /v3/dapps`​
Returns a JSON object containing all dApps listed in the public cloud explorer.
Examples:
  * `GET https://explorer-api.walletconnect.com/v3/dapps?projectId=YOUR_PROJECT_ID&entries=5&page=1`


#### `GET /v3/hybrid`​
Returns a JSON object containing all hybrids listed in the public cloud explorer.
Examples:
  * `GET https://explorer-api.walletconnect.com/v3/hybrid?projectId=YOUR_PROJECT_ID&entries=5&page=1`


#### `GET /v3/all`​
Returns a JSON object containing all entries listed in the public cloud explorer.
Examples:
  * `GET https://explorer-api.walletconnect.com/v3/all?projectId=YOUR_PROJECT_ID&entries=5&page=1`


#### `GET /v3/all?projectId=YOUR_PROJECT_ID&ids=LISTING_ID1,LISTING_ID2`​
Returns a JSON object containing the entry listings by ID, which can be useful for allowlisting purposes. You can find and copy listing ids from our WalletGuide
Examples:
  * `GET https://explorer-api.walletconnect.com/v3/all?projectId=YOUR_PROJECT_ID&ids=be49f0a78d6ea1beed3804c3a6b62ea71f568d58d9df8097f3d61c7c9baf273d,4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0`


### Chains​
By default chains endpoint returns all chains registered under CASA Namespace and that were approved by following our Add Chain issue template
#### Query Parameters​
You can use following query params to query chains by its namespace and exclude testnets:
Param| Description  
---|---  
testnets| Determines if testnets should be included in the response (e.g. `?testnets=false`, defaults to `true` if not provided)  
namespaces| Returns chains that belong to one of the provided namespaces(e.g. `?namespaces=eip155,cosmos,solana`)  
#### `GET /v3/chains`​
Returns all chains registered under CASA Namespace and that were approved by following our Add Chain issue template
Examples:
  * `GET https://explorer-api.walletconnect.com/v3/chains?projectId=YOUR_PROJECT_ID`
  * `GET https://explorer-api.walletconnect.com/v3/chains?projectId=YOUR_PROJECT_ID&testnets=false`
  * `GET https://explorer-api.walletconnect.com/v3/chains?projectId=YOUR_PROJECT_ID&namespaces=eip155,cosmos`


### Logos​
#### Path Parameters​
Param| Description  
---|---  
size| Determines resolution of returned image can be one of: `sm`, `md` or `lg`  
id| Corresponds to a Cloud Explorer entry's `image_id` field as returned by the Listings API  
#### Query Parameters​
Param| Required?| Description  
---|---|---  
projectId| Required| Your Reown Cloud Project ID (from cloud.reown.com)  
#### `GET /v3/logo/:size/:image_id`​
Returns the image source of the logo for `image_id` sized according `size`.
Examples:
  * `GET https://explorer-api.walletconnect.com/v3/logo/md/32a77b79-ffe8-42c3-61a7-3e02e019ca00?projectId=YOUR_PROJECT_ID`


  * Listings
  * Chains
  * Logos


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=3d0f4156-089e-4c4e-9ff7-c79cb4dce48f&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=797e5cff-a534-4ab0-9748-03f2b32cc1d5&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fcloud%2Fexplorer&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=3d0f4156-089e-4c4e-9ff7-c79cb4dce48f&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=797e5cff-a534-4ab0-9748-03f2b32cc1d5&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fcloud%2Fexplorer&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
