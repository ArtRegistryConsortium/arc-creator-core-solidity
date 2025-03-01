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
# connect ​
Action for connecting accounts with connectors.
## Import ​
ts```
import { connect } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { connect } from '@wagmi/core'
import { injected } from '@wagmi/connectors'
import { config } from './config'
const result = await connect(config, { connector: injected() })
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
import { type ConnectParameters } from '@wagmi/core'
```

### chainId ​
`number | undefined`
Chain ID to connect to.
Not all connectors support connecting directly to a `chainId` (e.g. they don't support programmatic chain switching). In those cases, the connector will connect to whatever chain the connector's provider is connected to.
index.tsconfig.ts
ts```
import { connect } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { injected } from '@wagmi/connectors'
import { config } from './config'
const result = await connect(config, {
 chainId: mainnet.id, 
 connector: injected(),
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
`CreateConnectorFn | Connector`
Connector to connect with.
index.tsconfig.ts
ts```
import { connect } from '@wagmi/core'
import { injected } from '@wagmi/connectors'
import { config } from './config'
const result = await connect(config, {
 connector: injected(), 
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
import { type ConnectReturnType } from '@wagmi/core'
```

### accounts ​
`readonly [Address, ...Address[]]`
Connected accounts from connector.
### chainId ​
`number`
Connected chain ID from connector.
## Error ​
ts```
import { type ConnectErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type ConnectData,
 type ConnectVariables,
 type ConnectMutate,
 type ConnectMutateAsync,
 connectMutationOptions,
} from '@wagmi/core/query'
```

