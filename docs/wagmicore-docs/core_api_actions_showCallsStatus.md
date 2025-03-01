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
# showCallsStatus ​
Action to request for the wallet to show information about a call batch that was sent via `showCalls`.
Read more.
WARNING
This is an experimental action that is not supported in most wallets. It is recommended to have a fallback mechanism if using this in production.
## Import ​
ts```
import { showCallsStatus } from '@wagmi/core/experimental'
```

## Usage ​
index.tsconfig.ts
ts```
import { showCallsStatus } from '@wagmi/core/experimental'
import { config } from './config'
await showCallsStatus(config, {
 id: '0x1234567890abcdef',
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
import { type ShowCallsStatusParameters } from '@wagmi/core/experimental'
```

### connector ​
`Connector | undefined`
Connector to show call statuses with.
index.tsconfig.ts
ts```
import { getConnections, showCallsStatus } from '@wagmi/core/experimental'
import { config } from './config'
const connections = getConnections(config)
await showCallsStatus(config, {
 connector: connections[0]?.connector, 
 id: '0x1234567890abcdef',
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

### id ​
`string`
Identifier of the call batch.
index.tsconfig.ts
ts```
import { showCallsStatus } from '@wagmi/core/experimental'
import { config } from './config'
await showCallsStatus(config, {
 id: '0x1234567890abcdef', 
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
import { type ShowCallsStatusReturnType } from '@wagmi/core/experimental'
```

`bigint`
Most recent block number seen.
## Error ​
ts```
import { type ShowCallsStatusErrorType } from '@wagmi/core/experimental'
```

## TanStack Query ​
ts```
import {
 type ShowCallsStatusData,
 type ShowCallsStatusOptions,
 type ShowCallsStatusQueryFnData,
 type ShowCallsStatusQueryKey,
 showCallsStatusQueryKey,
 showCallsStatusQueryOptions,
} from '@wagmi/core/experimental/query'
```

## Viem ​
  * `showCallsStatus`


