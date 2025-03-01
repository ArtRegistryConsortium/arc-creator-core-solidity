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
# Transports ​
`createConfig` can be instantiated with a set of Transports for each chain. A Transport is the intermediary layer that is responsible for executing outgoing JSON-RPC requests to the RPC Provider (e.g. Alchemy, Infura, etc).
## Import ​
ts```
import { http } from '@wagmi/vue'
```

## Built-In Transports ​
Available via the `'@wagmi/vue'` entrypoint.
  * custom (EIP-1193)
  * fallback
  * http
  * unstable_connector
  * webSocket


