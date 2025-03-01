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
# injected ​
Connector for EIP-1193 Ethereum Providers.
## Import ​
ts```
import { injected } from '@wagmi/connectors'
```

## Usage ​
ts```
import { createConfig, http } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { injected } from '@wagmi/connectors'
export const config = createConfig({
 chains: [mainnet, sepolia],
 connectors: [injected()],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Parameters ​
ts```
import { type InjectedParameters } from '@wagmi/connectors'
```

### shimDisconnect ​
`boolean | undefined`
  * MetaMask and other injected providers do not support programmatic disconnect.
  * This flag simulates the disconnect behavior by keeping track of connection status in storage. See GitHub issue for more info.
  * Defaults to `true`.


ts```
import { injected } from '@wagmi/connectors'
const connector = injected({
 shimDisconnect: false, 
})
```

### target ​
`TargetId | (TargetMap[TargetId] & { id: string }) | (() => (TargetMap[TargetId] & { id: string }) | undefined) | undefined`
  * EIP-1193 Ethereum Provider to target.
  * EIP-6963 supported via `createConfig`'s `multiInjectedProviderDiscovery` property.


ts```
import { injected } from '@wagmi/connectors'
const connector = injected({
 target() { 
  return { 
   id: 'windowProvider', 
   name: 'Window Provider', 
   provider: window.ethereum, 
  } 
 }, 
})
```

### unstable_shimAsyncInject ​
`boolean | number | undefined`
Watches for async provider injection via the `ethereum#initialized` event. When `true`, defaults to `1_000` milliseconds. Otherwise, uses a provided value of milliseconds.
ts```
import { injected } from '@wagmi/connectors'
const connector = injected({
 unstable_shimAsyncInject: 2_000, 
})
```

