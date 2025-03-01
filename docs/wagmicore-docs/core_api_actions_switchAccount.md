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
# switchAccount ​
Action for switching the current account.
## Import ​
ts```
import { switchAccount } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getConnections, switchAccount } from '@wagmi/core'
import { config } from './config'
const connections = getConnections(config)
const result = await switchAccount(config, {
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

## Parameters ​
ts```
import { type SwitchAccountParameters } from '@wagmi/core'
```

### connector ​
`Connector`
Connector to switch to.
index.tsconfig.ts
ts```
import { getConnections, switchAccount } from '@wagmi/core'
import { config } from './config'
const connections = getConnections(config)
const result = await switchAccount(config, {
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
import { type SwitchAccountReturnType } from '@wagmi/core'
```

### accounts ​
`readonly [Address, ...Address[]]`
Connected accounts from connector.
### chainId ​
`number`
Connected chain ID from connector.
## Error ​
ts```
import { type SwitchAccountErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type SwitchAccountData,
 type SwitchAccountVariables,
 type SwitchAccountMutate,
 type SwitchAccountMutateAsync,
 switchAccountMutationOptions,
} from '@wagmi/core/query'
```

