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
# useWatchBlockNumber ​
Hook that watches for block number changes.
## Import ​
ts```
import { useWatchBlockNumber } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  onBlockNumber(blockNumber) {
   console.log('Block number changed!', blockNumber)
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
import { type UseWatchBlockNumberParameters } from 'wagmi'
```

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to watch blocks at.
index.tsconfig.ts
ts```
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  chainId: 1, 
  onBlockNumber(blockNumber) {
   console.log('New block number', blockNumber)
  },
 })
}
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

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsconfig.ts
ts```
import { useWatchBlockNumber } from 'wagmi'
import { config } from './config'
function App() {
 useWatchBlockNumber({
  config, 
  onBlockNumber(blockNumber) {
   console.log('New block number', blockNumber)
  },
 })
}
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

### emitMissed ​
`boolean`
Whether or not to emit missed blocks to the callback. Defaults to `false`.
Missed blocks may occur in instances where internet connection is lost, or the block time is lesser than the polling interval of the client.
index.tsconfig.ts
ts```
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  emitMissed: true, 
  onBlockNumber(blockNumber) {
   console.log('New block number', blockNumber)
  },
 })
}
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

### emitOnBegin ​
`boolean`
Whether or not to emit the block to the callback when the subscription opens. Defaults to `false`.
index.tsconfig.ts
ts```
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  emitOnBegin: true, 
  onBlockNumber(blockNumber) {
   console.log('New block number', blockNumber)
  },
 })
}
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

### enabled ​
`boolean`
Whether or not to watch for blocks. Defaults to `true`.
index.tsconfig.ts
ts```
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  enabled: false, 
  onBlockNumber(blockNumber) {
   console.log('New block number', blockNumber)
  },
 })
}
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

### onBlockNumber ​
`(block: Block, prevblock: Block | undefined) => void`
Callback for when block changes.
index.tsconfig.ts
ts```
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  onBlockNumber(blockNumber) { 
   console.log('New block number', blockNumber) 
  }, 
 })
}
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
Error thrown from getting the block.
index.tsconfig.ts
ts```
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  onBlockNumber(blockNumber) { 
   console.log('New block number', blockNumber) 
  }, 
  onError(error) { 
   console.error('Block error', error) 
  }, 
 })
}
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


index.tsconfig.ts
ts```
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  onBlockNumber(blockNumber) { 
   console.log('New block number', blockNumber) 
  }
  poll: true, 
 })
}
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
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  onBlockNumber(blockNumber) { 
   console.log('New block number', blockNumber) 
  }
  pollingInterval: 1_000, 
 })
}
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
import { useWatchBlockNumber } from 'wagmi'
function App() {
 useWatchBlockNumber({
  onBlockNumber(blockNumber) { 
   console.log('New block number', blockNumber) 
  }
  syncConnectedChain: false, 
 })
}
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
import { type UseWatchBlockNumberReturnType } from 'wagmi'
```

Function for cleaning up watcher.
## Action ​
  * `watchBlockNumber`


