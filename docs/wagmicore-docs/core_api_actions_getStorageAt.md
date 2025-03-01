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
# getStorageAt ​
Action for returning the value from a storage slot at a given address.
## Import ​
ts```
import { getStorageAt } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getStorageAt } from '@wagmi/core'
import { config } from './config'
await getStorageAt(config, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 slot: '0x0',
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
import { type GetStorageAtParameters } from '@wagmi/core'
```

### address ​
`Address`
The contract address.
index.tsconfig.ts
ts```
import { getStorageAt } from '@wagmi/core'
import { config } from './config'
await getStorageAt(config, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', 
 slot: '0x0',
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

### slot ​
`Hex`
The storage position (as a hex encoded value).
index.tsconfig.ts
ts```
import { getStorageAt } from '@wagmi/core'
import { config } from './config'
await getStorageAt(config, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 slot: '0x0', 
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

### blockNumber ​
`bigint | undefined`
The block number to check the storage at.
index.tsconfig.ts
ts```
import { getStorageAt } from '@wagmi/core'
import { config } from './config'
await getStorageAt(config, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 blockNumber: 16280770n, 
 slot: '0x0',
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

### blockTag ​
`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`
The block tag to check the storage at.
index.tsconfig.ts
ts```
import { getStorageAt } from '@wagmi/core'
import { config } from './config'
await getStorageAt(config, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 blockTag: 'safe', 
 slot: '0x0',
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
The chain ID to check the storage at.
index.tsconfig.ts
ts```
import { getStorageAt } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
await getStorageAt(config, {
 chainId: mainnet.id, 
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 slot: '0x0',
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
import { type GetStorageAtReturnType } from '@wagmi/core'
```

`Hex`
The value of the storage slot.
## Error ​
ts```
import { type GetStorageAtErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type getStorageAtData,
 type getStorageAtOptions,
 type getStorageAtQueryFnData,
 type getStorageAtQueryKey,
 getStorageAtQueryKey,
 getStorageAtQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getStorageAt`


