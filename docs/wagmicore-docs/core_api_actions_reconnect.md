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
# reconnect ​
Action for reconnecting connectors.
## Import ​
ts```
import { reconnect } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { reconnect } from '@wagmi/core'
import { injected } from '@wagmi/connectors'
import { config } from './config'
const result = await reconnect(config, { connectors: [injected()] })
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
import { type ReconnectParameters } from '@wagmi/core'
```

### connectors ​
`(CreateConnectorFn | Connector)[] | undefined`
  * Connectors to reconnect to.
  * Defaults to `Config['connectors']`.


index.tsconfig.ts
ts```
import { reconnect } from '@wagmi/core'
import { injected } from '@wagmi/connectors'
import { config } from './config'
const result = await reconnect(config, {
  connectors: [injected()], 
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
import { type ReconnectReturnType } from '@wagmi/core'
```

`Connection[]`
Connections that were successfully reconnected.
## Error ​
ts```
import { type ReconnectErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type ReconnectData,
 type ReconnectVariables,
 type ReconnectMutate,
 type ReconnectMutateAsync,
 reconnectMutationOptions,
} from '@wagmi/core/query'
```

