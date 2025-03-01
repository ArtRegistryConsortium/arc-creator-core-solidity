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
# getChainId ​
Action for getting current chain ID.
## Import ​
ts```
import { getChainId } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getChainId } from '@wagmi/core'
import { config } from './config'
const chainId = getChainId(config)
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

`number`
Current chain ID from `config.state.chainId`.
INFO
Only returns chain IDs for chains configured via `createConfig`'s `chains` parameter.
If the active connection `chainId` is not from a chain included in your Wagmi `Config`, `getChainId` will return the last configured chain ID.
