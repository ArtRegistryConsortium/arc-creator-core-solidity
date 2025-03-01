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
# watchContractEvent ​
Action that watches and returns emitted contract event logs.
## Import ​
ts```
import { watchContractEvent } from '@wagmi/core'
```

## Usage ​
index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 abi,
 eventName: 'Transfer',
 onLogs(logs) {
  console.log('New logs!', logs)
 },
})
unwatch()
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

## Parameters ​
ts```
import { type WatchContractEventParameters } from '@wagmi/core'
```

### abi ​
`Abi`
The contract's ABI. Check out the TypeScript docs for how to set up ABIs for maximum type inference and safety.
index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi, 
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
})
unwatch()
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

### address ​
`Address | undefined`
The contract's address.
index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 address: '0x6b175474e89094c44da98b954eedeac495271d0f', 
 abi,
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
})
unwatch()
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

### args ​
`object | readonly unknown[] | undefined`
  * Arguments to pass when calling the contract.
  * Inferred from `abi` and `eventName`.


index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 args: { 
  to: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
 }, 
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
})
unwatch()
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

### batch ​
`boolean | undefined`
  * Whether or not the events should be batched on each invocation.
  * Defaults to `true`.


index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 batch: false, 
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
})
unwatch()
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

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 chainId: mainnet.id, 
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
})
unwatch()
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

### eventName ​
`string`
  * Event to listen for the contract.
  * Inferred from `abi`.


index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 eventName: 'Approval', 
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
})
unwatch()
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

### onError ​
`((error: Error) => void) | undefined`
Error thrown from getting the block number.
index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 onLogs(logs) { 
  console.log('Logs changed!', logs) 
 }, 
 onError(error) { 
  console.error('Logs error', error) 
 }, 
})
unwatch()
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

### onLogs ​
`(logs: Log[], prevLogs: Log[] | undefined) => void`
Callback for when logs changes.
index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 onLogs(logs) { 
  console.log('Logs changed!', logs) 
 }, 
})
unwatch()
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

### poll ​
`boolean | undefined`
  * Whether or not to use a polling mechanism to check for new blocks instead of a WebSocket subscription.
  * Defaults to `false` for WebSocket Clients, and `true` for non-WebSocket Clients.


index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
 poll: true, 
})
unwatch()
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

### pollingInterval ​
`number | undefined`
  * Polling frequency (in milliseconds).
  * Defaults to the Config's `pollingInterval` config.


index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
 pollingInterval: 1_000, 
})
unwatch()
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

### strict ​
`boolean | undefined`
  * Defaults to `false`.


index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
 strict: true, 
})
unwatch()
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

### syncConnectedChain ​
`boolean | undefined`
  * Set up subscriber for connected chain changes.
  * Defaults to `Config['syncConnectedChain']`.


index.tsabi.tsconfig.ts
ts```
import { watchContractEvent } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const unwatch = watchContractEvent(config, {
 abi,
 onLogs(logs) {
  console.log('Logs changed!', logs)
 },
 syncConnectedChain: false, 
})
unwatch()
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
import { type WatchContractEventReturnType } from '@wagmi/core'
```

Function for cleaning up watcher.
## Type Inference ​
With `abi` setup correctly, TypeScript will infer the correct types for `eventName`, `args`, and `onLogs` parameters. See the Wagmi TypeScript docs for more information.
## Error ​
ts```
import { type WatchContractEventError } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type WatchContractEventData,
 type WatchContractEventOptions,
 type WatchContractEventQueryFnData,
 type WatchContractEventQueryKey,
 watchContractEventQueryKey,
 watchContractEventQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `watchContractEvent`


