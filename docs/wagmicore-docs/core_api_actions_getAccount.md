Skip to content 
Menu
On this page
#### Paradigm
![Paradigm](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/paradigm-light.svg)
#### Ithaca
![Ithaca](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/ithaca-light.svg)
#### Stripe
![Stripe](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/stripe-light.svg)
#### zkSync
![zkSync](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/zksync-light.svg)
#### Linea
![Linea](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/linea-light.svg)
#### Routescan
![Routescan](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/routescan-light.svg)
# getAccount ​
Action for getting current account.
## Import ​
ts```
import { getAccount } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getAccount } from '@wagmi/core'
import { config } from './config'
const account = getAccount(config)
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Return Type ​
ts```
import { type GetAccountReturnType } from '@wagmi/core'
```

### address ​
`Address | undefined`
  * Connected address from connector.
  * Defaults to first address in `addresses`.


### addresses ​
`readonly Address[] | undefined`
Connected addresses from connector.
### chain ​
`Chain | undefined`
Connected chain from connector. If chain is not configured by config, it will be `undefined`.
### chainId ​
`number | undefined`
Connected chain id from connector.
### connector ​
`Connector | undefined`
Connected connector.
### isConnecting / isReconnecting / isConnected / isDisconnected ​
`boolean`
Boolean variables derived from `status`.
### status ​
`'connecting' | 'reconnecting' | 'connected' | 'disconnected'`
  * `'connecting'` attempting to establish connection.
  * `'reconnecting'` attempting to re-establish connection to one or more connectors.
  * `'connected'` at least one connector is connected.
  * `'disconnected'` no connection to any connector.


You can use `status` to narrow the return type.
For example, when `status` is `'connected'` properties like `address` are guaranteed to be defined.
ts```
if (
account
.
status
 === 'connected') {

account








}
```

Or when status is `'disconnected'` properties like `address` are guaranteed to be `undefined`:
ts```
if (
account
.
status
 === 'disconnected') {

account








}
```

