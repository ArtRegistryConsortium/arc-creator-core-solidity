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
# getBytecode ​
Action for retrieving the bytecode at an address.
## Import ​
ts```
import { getBytecode } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getBytecode } from '@wagmi/core'
import { config } from './config'
await getBytecode(config, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
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
import { type GetBytecodeParameters } from '@wagmi/core'
```

### address ​
`Address`
The contract address.
index.tsconfig.ts
ts```
import { getBytecode } from '@wagmi/core'
import { config } from './config'
await getBytecode(config, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', 
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
The block number to check the bytecode at.
index.tsconfig.ts
ts```
import { getBytecode } from '@wagmi/core'
import { config } from './config'
await getBytecode(config, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 blockNumber: 16280770n, 
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
The block tag to check the bytecode at.
index.tsconfig.ts
ts```
import { getBytecode } from '@wagmi/core'
import { config } from './config'
await getBytecode(config, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 blockTag: 'safe', 
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
The chain ID to check the bytecode at.
index.tsconfig.ts
ts```
import { getBytecode } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
await getBytecode(config, {
 chainId: mainnet.id, 
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
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
import { type GetBytecodeReturnType } from '@wagmi/core'
```

`Hex`
The contract's bytecode.
## Error ​
ts```
import { type GetBytecodeErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type getBytecodeData,
 type getBytecodeOptions,
 type getBytecodeQueryFnData,
 type getBytecodeQueryKey,
 getBytecodeQueryKey,
 getBytecodeQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getBytecode`


