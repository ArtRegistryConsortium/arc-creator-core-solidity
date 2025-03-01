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
# useChainId ​
Composable for getting current chain ID.
## Import ​
ts```
import { useChainId } from '@wagmi/vue'
```

## Usage ​
index.vueconfig.ts
vue```
<script setup lang="ts">
import { useChainId } from '@wagmi/vue'
const chainId = useChainId()
</script>
```

ts```
import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
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
import { type UseChainIdParameters } from '@wagmi/vue'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the `WagmiPlugin`.
index.vueconfig.ts
vue```
<script setup lang="ts">
import { useChainId } from '@wagmi/vue'
import { config } from './config'
const chainId = useChainId({
 config, 
})
</script>
```

ts```
import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
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
import { type UseChainIdReturnType } from '@wagmi/vue'
```

`number`
Current chain ID from `config.state.chainId`.
INFO
Only returns chain IDs for chains configured via `createConfig`'s `chains` parameter.
If the active connection `chainId` is not from a chain included in your Wagmi `Config`, `useChainId` will return the last configured chain ID.
## Action ​
  * `getChainId`
  * `watchChainId`


