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
# getTransactionReceipt ​
Action for return the Transaction Receipt given a Transaction hash.
## Import ​
ts```
import { getTransactionReceipt } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getTransactionReceipt } from '@wagmi/core'
import { config } from './config'
await getTransactionReceipt(config, {
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
import { type GetTransactionReceiptParameters } from '@wagmi/core'
```

### hash ​
``0x${string}``
A transaction hash.
index.tsconfig.ts
ts```
import { getTransactionReceipt } from '@wagmi/core'
import { config } from './config'
await getTransactionReceipt(config, {
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

### chainId ​
`config['chains'][number]['id'] | undefined`
The ID of chain to return the transaction receipt from.
index.tsconfig.ts
ts```
import { getTransactionReceipt } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
await getTransactionReceipt(config, {
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

## Return Type ​
ts```
import { type GetTransactionReceiptReturnType } from '@wagmi/core'
```

`TransactionReceipt`
The transaction receipt.
## Error ​
ts```
import { type GetTransactionReceiptErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type getTransactionReceiptData,
 type getTransactionReceiptOptions,
 type getTransactionReceiptQueryFnData,
 type getTransactionReceiptQueryKey,
 getTransactionReceiptQueryKey,
 getTransactionReceiptQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getTransactionReceipt`


