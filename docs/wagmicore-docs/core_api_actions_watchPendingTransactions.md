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
# watchPendingTransactions ​
Action that watches and returns pending transaction hashes.
## Import ​
ts```
import { watchPendingTransactions } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { watchPendingTransactions } from '@wagmi/core'
import { config } from './config'
const unwatch = watchPendingTransactions(config, {
 onTransactions(transactions) {
  console.log('New transactions!', transactions)
 },
})
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
import { type WatchPendingTransactionsParameters } from '@wagmi/core'
```

### batch ​
`boolean | undefined`
  * Whether or not the transactions should be batched on each invocation.
  * Defaults to `true`.


index.tsconfig.ts
ts```
import { watchPendingTransactions } from '@wagmi/core'
const unwatch = watchPendingTransactions(config, {
 batch: false, 
 onTransactions(transactions) {
  console.log('New transactions!', transactions)
 },
})
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
index.tsconfig.ts
ts```
import { watchPendingTransactions } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const unwatch = watchPendingTransactions(config, {
 chainId: mainnet.id, 
 onTransactions(transactions) {
  console.log('New transactions!', transactions)
 },
})
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
Error thrown from watching pending transactions.
index.tsconfig.ts
ts```
import { watchPendingTransactions } from '@wagmi/core'
import { config } from './config'
const unwatch = watchPendingTransactions(config, {
 onError(error) { 
  console.log('Error', error) 
 }, 
 onTransactions(transactions) {
  console.log('New transactions!', transactions)
 },
})
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

### onTransactions ​
`(transactions: Hash[], prevTransactions: Hash[] | undefined) => void`
Callback when new incoming pending transactions are detected.
index.tsconfig.ts
ts```
import { watchPendingTransactions } from '@wagmi/core'
import { config } from './config'
const unwatch = watchPendingTransactions(config, {
 onTransactions(transactions) { 
  console.log('New transactions!', transactions) 
 }, 
})
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
  * Whether or not to use a polling mechanism to check for new pending transactions instead of a WebSocket subscription.
  * Defaults to `false` for WebSocket Clients, and `true` for non-WebSocket Clients.


index.tsconfig.ts
ts```
import { watchPendingTransactions } from '@wagmi/core'
import { config } from './config'
const unwatch = watchPendingTransactions(config, {
 onTransactions(transactions) {
  console.log('New transactions!', transactions)
 },
 poll: false, 
})
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


index.tsconfig.ts
ts```
import { watchPendingTransactions } from '@wagmi/core'
import { config } from './config'
const unwatch = watchPendingTransactions(config, {
 onTransactions(transactions) {
  console.log('New transactions!', transactions)
 },
 pollingInterval: 1_000, 
})
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


index.tsconfig.ts
ts```
import { watchPendingTransactions } from '@wagmi/core'
import { config } from './config'
const unwatch = watchPendingTransactions(config, {
 onTransactions(transactions) {
  console.log('New transactions!', transactions)
 },
 syncConnectedChain: false, 
})
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
import { type WatchPendingTransactionsReturnType } from '@wagmi/core'
```

Function to unsubscribe from pending transaction listener.
## Error ​
ts```
import { type WatchPendingTransactionsError } from '@wagmi/core'
```

## Viem ​
  * `watchPendingTransactions`


