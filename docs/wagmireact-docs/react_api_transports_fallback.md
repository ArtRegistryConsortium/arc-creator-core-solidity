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
# fallback ​
The `fallback` Transport consumes **multiple** Transports. If a Transport request fails, it will fall back to the next one in the list. Wraps Viem's `fallback` Transport.
## Import ​
ts```
import { fallback } from 'wagmi'
```

## Usage ​
ts```
import {
 createConfig,
 fallback,
 http,
} from 'wagmi'
import { mainnet } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet],
 connectors: [injected()],
 transports: {
  [mainnet.id]: fallback([ 
   http('https://foo-bar-baz.quiknode.pro/...'), 
   http('https://mainnet.infura.io/v3/...'), 
  ]) 
 },
})
```

