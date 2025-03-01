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
# useWatchBlocks ​
Hook that watches for block changes.
## Import ​
ts```
import { useWatchBlocks } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  onBlock(block) {
   console.log('New block', block.number)
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
import { type UseWatchBlocksParameters } from 'wagmi'
```

### blockTag ​
`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`
Block tag to watch blocks at.
index.tsconfig.ts
ts```
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  blockTag: 'latest', 
  onBlock(block) {
   console.log('New block', block.number)
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

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to watch blocks at.
index.tsconfig.ts
ts```
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  chainId: 1, 
  onBlock(block) {
   console.log('New block', block.number)
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
import { useWatchBlocks } from 'wagmi'
import { config } from './config'
function App() {
 useWatchBlocks({
  config, 
  onBlock(block) {
   console.log('New block', block.number)
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
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  emitMissed: true, 
  onBlock(block) {
   console.log('New block', block.number)
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
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  emitOnBegin: true, 
  onBlock(block) {
   console.log('New block', block.number)
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
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  enabled: false, 
  onBlock(block) {
   console.log('New block', block.number)
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

### includeTransactions ​
`boolean`
Whether or not to unwrap transactions as objects (instead of hashes) in blocks. Defaults to `false`.
index.tsconfig.ts
ts```
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  includeTransactions: true, 
  onBlock(block) {
   console.log('New block', block.number)
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

### onBlock ​
`(block: Block, prevblock: Block | undefined) => void`
Callback for when block changes.
index.tsconfig.ts
ts```
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  onBlock(block) { 
   console.log('New block', block.number) 
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
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  onBlock(block) { 
   console.log('New block', block.number) 
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
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  onBlock(block) { 
   console.log('New block', block.number) 
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
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  onBlock(block) { 
   console.log('New block', block.number) 
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
import { useWatchBlocks } from 'wagmi'
function App() {
 useWatchBlocks({
  onBlock(block) { 
   console.log('New block', block.number) 
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
import { type UseWatchBlocksReturnType } from 'wagmi'
```

## Action ​
  * `watchBlocks`


