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
# getTransactionConfirmations ​
Action for fetching the number of blocks passed (confirmations) since the transaction was processed on a block. If confirmations is 0, then the Transaction has not been confirmed & processed yet.
## Import ​
ts```
import { getTransactionConfirmations } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getTransactionConfirmations } from '@wagmi/core'
import { config } from './config'
const transaction = getTransactionConfirmations(config, {
 hash: '0x0fa64daeae54e207aa98613e308c2ba8abfe274f75507e741508cc4db82c8cb5',
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
import { type GetTransactionConfirmationsParameters } from '@wagmi/core'
```

### hash ​
``0x${string}` | undefined`
The hash of the transaction.
index.tsconfig.ts
ts```
import { getTransactionConfirmations } from '@wagmi/core'
import { config } from './config'
const transaction = getTransactionConfirmations(config, {
 hash: '0x0fa64daeae54e207aa98613e308c2ba8abfe274f75507e741508cc4db82c8cb5', 
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

### transactionReceipt ​
`TransactionReceipt | undefined`
The transaction receipt.
index.tsconfig.ts
ts```
import { getTransactionConfirmations } from '@wagmi/core'
import { config } from './config'
const transaction = getTransactionConfirmations(config, {
 transactionReceipt: { ... }, 
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
import { getTransactionConfirmations } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const transaction = await getTransactionConfirmations(config, {
 chainId: mainnet.id, 
 hash: '0x0fa64daeae54e207aa98613e308c2ba8abfe274f75507e741508cc4db82c8cb5',
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
import { type GetTransactionConfirmationsReturnType } from '@wagmi/core'
```

`bigint`
The number of blocks passed since the transaction was processed. If confirmations is 0, then the Transaction has not been confirmed & processed yet.
## Error ​
ts```
import { type GetTransactionConfirmationsErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetTransactionConfirmationsData,
 type GetTransactionConfirmationsOptions,
 type GetTransactionConfirmationsQueryFnData,
 type GetTransactionConfirmationsQueryKey,
 getTransactionConfirmationsQueryKey,
 getTransactionConfirmationsQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getTransactionConfirmations`


