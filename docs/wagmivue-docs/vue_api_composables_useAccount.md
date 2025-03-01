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
# useAccount ​
Composable for getting current account.
## Import ​
ts```
import { useAccount } from '@wagmi/vue'
```

## Usage ​
index.vueconfig.ts
vue```
<script setup lang="ts">
import {
useAccount
 } from '@wagmi/vue'
const 
account
 =
useAccount
()
</script>
<template>
 Address: {{
account
.
address
 }}
</template>
```

ts```
import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Parameters ​
ts```
import { type
UseAccountParameters
 } from '@wagmi/vue'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiPlugin`.
index.vueconfig.ts
vue```
<script setup lang="ts">
import { useAccount } from '@wagmi/vue'
import { config } from './config'
const account = useAccount({
 config, 
})
</script>
```

ts```
import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
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
import { type
UseAccountReturnType
 } from '@wagmi/vue'
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

## Action ​
  * `getAccount`


