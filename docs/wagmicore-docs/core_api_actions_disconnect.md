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
# disconnect ​
Action for disconnecting connections.
## Import ​
ts```
import { disconnect } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { disconnect } from '@wagmi/core'
import { config } from './config'
await disconnect(config)
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
import { type DisconnectParameters } from '@wagmi/core'
```

### connector ​
`Connector | undefined`
Connector to disconnect with.
index.tsconfig.ts
ts```
import { disconnect, getAccount } from '@wagmi/core'
import { config } from './config'
const { connector } = getAccount(config)
const result = await disconnect(config, {
 connector, 
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

## Error ​
ts```
import { type DisconnectErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type DisconnectData,
 type DisconnectVariables,
 type DisconnectMutate,
 type DisconnectMutateAsync,
 disconnectMutationOptions,
} from '@wagmi/core/query'
```

