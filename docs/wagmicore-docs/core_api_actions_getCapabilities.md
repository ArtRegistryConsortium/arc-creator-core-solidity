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
# getCapabilities ​
Action to extract capabilities (grouped by chain ID) that a connected wallet supports (e.g. paymasters, session keys, etc).
Read more.
WARNING
This is an experimental action that is not supported in most wallets. It is recommended to have a fallback mechanism if using this in production.
## Import ​
ts```
import { getCapabilities } from '@wagmi/core/experimental'
```

## Usage ​
index.tsconfig.ts
ts```
import { getCapabilities } from '@wagmi/core/experimental'
import { config } from './config'
const capabilities = await getCapabilities(config)
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
import { type GetCapabilitiesParameters } from '@wagmi/core/experimental'
```

### account ​
`Account | Address | undefined`
Fetch capabilities for the provided account.
index.tsconfig.ts
ts```
import { getCapabilities } from '@wagmi/core/experimental'
import { config } from './config'
const capabilities = await getCapabilities(config, {
 account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', 
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

### connector ​
`Connector | undefined`
Connector to get capabilities from.
index.tsconfig.ts
ts```
import { getConnections, getCapabilities } from '@wagmi/core/experimental'
import { config } from './config'
const connections = getConnections(config)
const capabilities = await getCapabilities(config, {
 connector: connections[0]?.connector, 
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
import { type GetCapabilitiesReturnType } from '@wagmi/core/experimental'
```

`bigint`
Most recent block number seen.
## Error ​
ts```
import { type GetCapabilitiesErrorType } from '@wagmi/core/experimental'
```

## TanStack Query ​
ts```
import {
 type GetCapabilitiesData,
 type GetCapabilitiesOptions,
 type GetCapabilitiesQueryFnData,
 type GetCapabilitiesQueryKey,
 getCapabilitiesQueryKey,
 getCapabilitiesQueryOptions,
} from '@wagmi/core/experimental/query'
```

## Viem ​
  * `getCapabilities`


