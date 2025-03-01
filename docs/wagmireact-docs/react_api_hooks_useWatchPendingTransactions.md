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
# useWatchPendingTransactions ​
Hook that watches and returns pending transaction hashes.
## Import ​
ts```
import { useWatchPendingTransactions } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useWatchPendingTransactions } from 'wagmi'
function App() {
 useWatchPendingTransactions({
  onTransactions(transactions) {
   console.log('New transactions!', transactions)
  },
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
import { type UseWatchPendingTransactionsParameters } from 'wagmi'
```

### batch ​
`boolean | undefined`
  * Whether or not the transactions should be batched on each invocation.
  * Defaults to `true`.


index.tsxconfig.ts
tsx```
import { useWatchPendingTransactions } from 'wagmi'
function App() {
 useWatchPendingTransactions({
  batch: true
  onTransactions(transactions) {
   console.log('New transactions!', transactions)
  },
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
index.tsxconfig.ts
tsx```
import { useWatchPendingTransactions } from 'wagmi'
function App() {
 useWatchPendingTransactions({
  chainId: 1
  onTransactions(transactions) {
   console.log('New transactions!', transactions)
  },
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxconfig.ts
tsx```
import { useWatchPendingTransactions } from 'wagmi'
import { config } from './config'
function App() {
 useWatchPendingTransactions({
  config
  onTransactions(transactions) {
   console.log('New transactions!', transactions)
  },
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
index.tsxconfig.ts
tsx```
import { useWatchPendingTransactions } from 'wagmi'
function App() {
 useWatchPendingTransactions({
  onError(error) {
   console.log('Error', error)
  },
  onTransactions(transactions) {
   console.log('New transactions!', transactions)
  },
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
index.tsxconfig.ts
tsx```
import { useWatchPendingTransactions } from 'wagmi'
function App() {
 useWatchPendingTransactions({
  onTransactions(transactions) {
   console.log('New transactions!', transactions)
  },
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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


index.tsxconfig.ts
tsx```
import { useWatchPendingTransactions } from 'wagmi'
function App() {
 useWatchPendingTransactions({
  onTransactions(transactions) {
   console.log('New transactions!', transactions)
  },
  poll: true,
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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


index.tsxconfig.ts
tsx```
import { useWatchPendingTransactions } from 'wagmi'
function App() {
 useWatchPendingTransactions({
  onTransactions(transactions) {
   console.log('New transactions!', transactions)
  },
  pollingInterval: 1_000,
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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


index.tsxconfig.ts
tsx```
import { useWatchPendingTransactions } from 'wagmi'
function App() {
 useWatchPendingTransactions({
  onTransactions(transactions) {
   console.log('New transactions!', transactions)
  },
  syncConnectedChain: false,
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
import { type UseWatchPendingTransactionsReturnType } from 'wagmi'
```

## Action ​
  * `watchPendingTransactions`


