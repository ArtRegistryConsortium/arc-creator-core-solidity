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
# getWalletClient ​
Action for getting a Viem `WalletClient` object for the current or provided connector.
## Import ​
ts```
import { getWalletClient } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getWalletClient } from '@wagmi/core'
import { config } from './config'
const client = getWalletClient(config)
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

WARNING
If you want to optimize bundle size, you should use `getConnectorClient` along with Viem's tree-shakable actions instead. Since Wallet Client has all wallet actions attached directly to it.
## Parameters ​
ts```
import { type GetWalletClientParameters } from '@wagmi/core'
```

### account ​
`Address | Account | undefined`
Account to use with client. Throws if account is not found on `connector`.
index.tsconfig.ts
ts```
import { getWalletClient } from '@wagmi/core'
import { config } from './config'
const client = getWalletClient(config, {
 account: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
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
ID of chain to use with client.
index.tsconfig.ts
ts```
import { getWalletClient } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const client = getWalletClient(config, {
 chainId: mainnet.id, 
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
  * Connector to get client for.
  * Defaults to current connector.


index.tsconfig.ts
ts```
import { getConnections, getWalletClient } from '@wagmi/core'
import { config } from './config'
const connections = getConnections(config)
const client = getWalletClient(config, {
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
import { type GetChainIdReturnType } from '@wagmi/core'
```

`WalletClient`
Viem `WalletClient` object for the current or provided connector.
## Error ​
ts```
import { type GetWalletClientErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetWalletClientData,
 type GetWalletClientOptions,
 type GetWalletClientQueryFnData,
 type GetWalletClientQueryKey,
 getWalletClientQueryKey,
 getWalletClientQueryOptions,
} from '@wagmi/core/query'
```

