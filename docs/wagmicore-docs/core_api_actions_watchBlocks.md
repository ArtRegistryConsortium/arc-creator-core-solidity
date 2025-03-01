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
# watchBlocks ​
Action that watches for block changes.
## Import ​
ts```
import { watchBlocks } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { watchBlocks } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlocks(config, {
 onBlock(block) {
  console.log('Block changed!', block)
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
import { type WatchBlocksParameters } from '@wagmi/core'
```

### blockTag ​
`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized'`
Watch for new blocks on a given tag. Defaults to `'latest'`.
index.tsconfig.ts
ts```
import { watchBlocks } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlocks(config, {
 blockTag: 'pending', 
 onBlock(block) {
  console.log('Block changed!', block)
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

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
index.tsconfig.ts
ts```
import { watchBlocks } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const unwatch = watchBlocks(config, {
 chainId: mainnet.id, 
 onBlock(block) {
  console.log('Block changed!', block)
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
`boolean`
Whether or not to emit missed blocks to the callback. Defaults to `false`.
Missed blocks may occur in instances where internet connection is lost, or the block time is lesser than the polling interval of the client.
index.tsconfig.ts
ts```
import { watchBlocks } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlocks(config, {
 emitMissed: true, 
 onBlock(block) {
  console.log('Block changed!', block)
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
`boolean`
Whether or not to emit the block to the callback when the subscription opens. Defaults to `false`.
index.tsconfig.ts
ts```
import { watchBlocks } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlocks(config, {
 emitOnBegin: true, 
 onBlock(block) {
  console.log('Block changed!', block)
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

### onBlock ​
`(block: Block, prevblock: Block | undefined) => void`
Callback for when block changes.
index.tsconfig.ts
ts```
import { watchBlocks } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlocks(config, {
 onBlock(block) { 
  console.log('Block changed!', block) 
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
Error thrown from getting the block.
index.tsconfig.ts
ts```
import { watchBlocks } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlocks(config, {
 onBlock(block) { 
  console.log('Block changed!', block) 
 }, 
 onError(error) { 
  console.error('Block error', error) 
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
import { watchBlocks } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlocks(config, {
 poll: true, 
 onBlock(block) {
  console.log('Block changed!', block)
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

### pollingInterval ​
`number | undefined`
  * Polling frequency (in milliseconds).
  * Defaults to the Config's `pollingInterval` config.


index.tsconfig.ts
ts```
import { watchBlocks } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlocks(config, {
 pollingInterval: 1_000, 
 onBlock(block) {
  console.log('Block changed!', block)
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

### syncConnectedChain ​
`boolean | undefined`
  * Set up subscriber for connected chain changes.
  * Defaults to `Config['syncConnectedChain']`.


index.tsconfig.ts
ts```
import { watchBlocks } from '@wagmi/core'
import { config } from './config'
const unwatch = watchBlocks(config, {
 onBlock(block) {
  console.log('Block changed!', block)
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
import { type WatchBlocksReturnType } from '@wagmi/core'
```

Function for cleaning up watcher.
## Viem ​
  * `watchBlocks`


![](https://cdn.usefathom.com/?h=https%3A%2F%2Fwagmi.sh&p=%2Fcore%2Fapi%2Factions%2FwatchBlocks&r=&sid=QWAXSUPT&qs=%7B%7D&cid=11464740)
