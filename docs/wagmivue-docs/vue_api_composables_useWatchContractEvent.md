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
# useWatchContractEvent ​
Composable that watches and returns emitted contract event logs.
## Import ​
ts```
import { useWatchContractEvent } from '@wagmi/vue'
```

## Usage ​
index.vueabi.tsconfig.ts
ts```
<script setup lang="ts">
import { useWatchContractEvent } from '@wagmi/vue'
import { abi } from './abi'
useWatchContractEvent({
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 abi,
 eventName: 'Transfer',
 onLogs(logs) {
  console.log('New logs!', logs)
 },
})
</script>
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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
import { type UseWatchContractEventParameters } from '@wagmi/vue'
```

### abi ​
`Abi`
The contract's ABI. Check out the TypeScript docs for how to set up ABIs for maximum type inference and safety.
### address ​
`Address | undefined`
The contract's address.
### args ​
`object | readonly unknown[] | undefined`
  * Arguments to pass when calling the contract.
  * Inferred from `abi` and `eventName`.


### batch ​
`boolean | undefined`
  * Whether or not the events should be batched on each invocation.
  * Defaults to `true`.


### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
### eventName ​
`string`
  * Event to listen for the contract.
  * Inferred from `abi`.


### onError ​
`((error: Error) => void) | undefined`
Error thrown from getting the block number.
### onLogs ​
`(logs: Log[], prevLogs: Log[] | undefined) => void`
Callback for when logs changes.
### poll ​
`boolean | undefined`
  * Whether or not to use a polling mechanism to check for new blocks instead of a WebSocket subscription.
  * Defaults to `false` for WebSocket Clients, and `true` for non-WebSocket Clients.


### pollingInterval ​
`number | undefined`
  * Polling frequency (in milliseconds).
  * Defaults to the Config's `pollingInterval` config.


### strict ​
`boolean | undefined`
  * Defaults to `false`.


### syncConnectedChain ​
`boolean | undefined`
  * Set up subscriber for connected chain changes.
  * Defaults to `Config['syncConnectedChain']`.


## Return Type ​
ts```
import { type UseWatchContractEventReturnType } from '@wagmi/vue'
```

Hook returns `void`
## Action ​
  * `watchContractEvent`


