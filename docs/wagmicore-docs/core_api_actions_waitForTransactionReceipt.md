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
# waitForTransactionReceipt ​
Action that waits for the transaction to be included on a block, and then returns the transaction receipt. If the transaction reverts, then the action will throw an error. Replacement detection (e.g. sped up transactions) is also supported.
## Import ​
ts```
import { waitForTransactionReceipt } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { waitForTransactionReceipt } from '@wagmi/core'
import { config } from './config'
const transactionReceipt = waitForTransactionReceipt(config, {
 hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
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
import { type WaitForTransactionReceiptParameters } from '@wagmi/core'
```

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
index.tsconfig.ts
ts```
import { waitForTransactionReceipt } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const transactionReceipt = await waitForTransactionReceipt(config, {
 chainId: mainnet.id, 
 hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
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

### confirmations ​
`number | undefined`
The number of confirmations (blocks that have passed) to wait before resolving.
index.tsconfig.ts
ts```
import { waitForTransactionReceipt } from '@wagmi/core'
import { config } from './config'
const transactionReceipt = await waitForTransactionReceipt(config, {
 confirmations: 2, 
 hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
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

### onReplaced ​
`(({ reason: 'replaced' | 'repriced' | 'cancelled'; replacedTransaction: Transaction; transaction: Transaction; transactionReceipt: TransactionReceipt }) => void) | undefined`
Optional callback to emit if the transaction has been replaced.
index.tsconfig.ts
ts```
import { waitForTransactionReceipt } from '@wagmi/core'
import { config } from './config'
const transactionReceipt = await waitForTransactionReceipt(config, {
 hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 onReplaced: replacement => console.log(replacement), 
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

### hash ​
``0x${string}``
The transaction hash to wait for.
index.tsconfig.ts
ts```
import { waitForTransactionReceipt } from '@wagmi/core'
import { config } from './config'
const transactionReceipt = await waitForTransactionReceipt(config, {
 hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d', 
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
import { waitForTransactionReceipt } from '@wagmi/core'
import { config } from './config'
const transactionReceipt = await waitForTransactionReceipt(config, {
 hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
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

## Return Type ​
ts```
import { type WaitForTransactionReceiptReturnType } from '@wagmi/core'
```

`TransactionReceipt`
The transaction receipt.
## Error ​
ts```
import { type WaitForTransactionReceiptErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type WaitForTransactionReceiptData,
 type WaitForTransactionReceiptOptions,
 type WaitForTransactionReceiptQueryFnData,
 type WaitForTransactionReceiptQueryKey,
 waitForTransactionReceiptQueryKey,
 waitForTransactionReceiptQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `waitForTransactionReceipt`


