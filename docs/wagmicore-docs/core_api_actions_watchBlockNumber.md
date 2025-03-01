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
# watchBlockNumber ​
Action that watches for block number changes.
## Import ​
ts```
import { watchBlockNumber } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { watchBlockNumber } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlockNumber(config, {
 onBlockNumber(blockNumber) {
  console.log('Block number changed!', blockNumber)
 },
})
unwatch()
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
import { type WatchBlockNumberParameters } from '@wagmi/core'
```

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
index.tsconfig.ts
ts```
import { watchBlockNumber } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const unwatch = watchBlockNumber(config, {
 chainId: mainnet.id, 
 onBlockNumber(blockNumber) {
  console.log('Block number changed!', blockNumber)
 },
})
unwatch()
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
`boolean | undefined`
Whether or not to emit the latest block number to the callback when the subscription opens.
index.tsconfig.ts
ts```
import { watchBlockNumber } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlockNumber(config, {
 emitOnBegin: true, 
 onBlockNumber(blockNumber) {
  console.log('Block number changed!', blockNumber)
 },
})
unwatch()
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
`boolean | undefined`
Whether or not to emit the missed block numbers to the callback.
index.tsconfig.ts
ts```
import { watchBlockNumber } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlockNumber(config, {
 emitMissed: true, 
 onBlockNumber(blockNumber) {
  console.log('Block number changed!', blockNumber)
 },
})
unwatch()
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
`(blockNumber: bigint, prevBlockNumber: bigint | undefined) => void`
Callback for when block number changes.
index.tsconfig.ts
ts```
import { watchBlockNumber } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlockNumber(config, {
 onBlockNumber(blockNumber) { 
  console.log('Block number changed!', blockNumber) 
 }, 
})
unwatch()
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
index.tsconfig.ts
ts```
import { watchBlockNumber } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlockNumber(config, {
 onBlockNumber(blockNumber) { 
  console.log('Block number changed!', blockNumber) 
 }, 
 onError(error) { 
  console.error('Block number error', error) 
 }, 
})
unwatch()
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
import { watchBlockNumber } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlockNumber(config, {
 onBlockNumber(blockNumber) { 
  console.log('Block number changed!', blockNumber) 
 }, 
 poll: true, 
})
unwatch()
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
import { watchBlockNumber } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlockNumber(config, {
 onBlockNumber(blockNumber) { 
  console.log('Block number changed!', blockNumber) 
 }, 
 pollingInterval: 1_000, 
})
unwatch()
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
import { watchBlockNumber } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlockNumber(config, {
 onBlockNumber(blockNumber) {
  console.log('Block number changed!', blockNumber)
 },
 syncConnectedChain: false, 
})
unwatch()
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
import { type WatchBlockNumberReturnType } from '@wagmi/core'
```

Function for cleaning up watcher.
## Viem ​
  * `watchBlockNumber`


