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
# switchChain ​
Action for switching the target chain for a connector or the Wagmi `Config`.
## Import ​
ts```
import { switchChain } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { switchChain } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
await switchChain(config, { chainId: mainnet.id })
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

TIP
When connected, `switchChain` will switch the target chain for the connector. When not connected, `switchChain` will switch the target chain for the Wagmi `Config`.
## Parameters ​
ts```
import { type SwitchChainParameters } from '@wagmi/core'
```

### addEthereumChainParameter ​
`{ chainName: string; nativeCurrency?: { name: string; symbol: string; decimals: number } | undefined; rpcUrls: readonly string[]; blockExplorerUrls?: string[] | undefined; iconUrls?: string[] | undefined } | undefined`
EIP-3085 parameters to use when adding chain to connector (when supported).
index.tsconfig.ts
ts```
import { switchChain } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const result = await switchChain(config, {
 addEthereumChainParameter: { 
  iconUrls: ['https://example.com/icon.png'], 
 }, 
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

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to switch to.
index.tsconfig.ts
ts```
import { switchChain } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const result = await switchChain(config, {
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
`Connector`
Connector to switch chain with.
index.tsconfig.ts
ts```
import { getConnections, switchAccount } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const connections = getConnections(config)
const result = await switchChain(config, {
 chainId: mainnet.id,
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
import { type SwitchChainReturnType } from '@wagmi/core'
```

`Chain`
Chain that was switched to.
## Error ​
ts```
import { type SwitchChainErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type SwitchChainData,
 type SwitchChainVariables,
 type SwitchChainMutate,
 type SwitchChainMutateAsync,
 switchChainMutationOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `switchChain` when connected.


