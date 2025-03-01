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
# unstable_connector ​
The `unstable_connector` Transport connects to a JSON-RPC API via the provided Connector.
For example, if the provided Connector is `injected` and the end-user uses MetaMask, then outgoing JSON-RPC requests will be sent via the MetaMask EIP-1193 Provider (`window.ethereum`).
## Import ​
ts```
import { unstable_connector } from '@wagmi/vue'
```

## Usage ​
ts```
import {
 createConfig,
 fallback,
 unstable_connector,
} from '@wagmi/vue'
import { mainnet } from '@wagmi/vue/chains'
export const config = createConfig({
 chains: [mainnet],
 connectors: [injected()],
 transports: {
  [mainnet.id]: fallback([
   unstable_connector(injected), 
   http('https://foo-bar-baz.quiknode.pro/...')
  ])
 },
})
```

WARNING
It is **highly recommended** to use the `unstable_connector` Transport inside of a `fallback` Transport. This ensures that if the Connector request fails, the Transport will fall back to a different Transport in the fallback set.
Some common cases for a Connector request to fail are:
  * Chain ID mismatches,
  * Connector RPC not supporting the requested method and/or only supporting a subset of methods for connected accounts,
  * Rate-limiting of Connector RPC.


## Parameters ​
### connector ​
`Connector`
The Connector to use for the Transport.
ts```
import { unstable_connector } from 'wagmi'
import { safe } from 'wagmi/connectors'
const transport = unstable_connector(safe)
```

### key (optional) ​
`string`
A key for the Transport. Defaults to `"connector"`.
ts```
import { unstable_connector } from 'wagmi'
import { injected } from 'wagmi/connectors'
const transport = unstable_connector(injected, { 
 key: 'injected', 
})
```

### name (optional) ​
`string`
A name for the Transport. Defaults to `"Connector"`.
ts```
import { unstable_connector } from 'wagmi'
import { injected } from 'wagmi/connectors'
const transport = unstable_connector(injected, { 
 name: 'Injected', 
})
```

### retryCount (optional) ​
`number`
The max number of times to retry when a request fails. Defaults to `3`.
ts```
import { unstable_connector } from 'wagmi'
import { injected } from 'wagmi/connectors'
const transport = unstable_connector(injected, {
 retryCount: 5, 
})
```

### retryDelay (optional) ​
`number`
The base delay (in ms) between retries. By default, the Transport will use exponential backoff (`~~(1 << count) * retryDelay`), which means the time between retries is not constant.
ts```
import { unstable_connector } from 'wagmi'
import { injected } from 'wagmi/connectors'
const transport = unstable_connector(injected, {
 retryDelay: 100, 
})
```

