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
# webSocket ​
The `webSocket` Transport connects to a JSON-RPC API via a WebSocket. Wraps Viem's `webSocket` Transport.
## Import ​
ts```
import { webSocket } from '@wagmi/vue'
```

## Usage ​
ts```
import {
 createConfig,
 webSocket
} from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 connectors: [injected()],
 transports: {
  [mainnet.id]: webSocket('wss://foo-bar-baz.quiknode.pro/...'), 
  [sepolia.id]: webSocket('wss://foo-bar-sep.quicknode.pro/...'), 
 },
})
```

WARNING
If no URL is provided, then the transport will fall back to a public RPC URL on the chain. It is highly recommended to provide an authenticated RPC URL to prevent rate-limiting.
## Parameters ​
### url ​
`string`
URL of the JSON-RPC API.
ts```
const transport = webSocket('wss://foo-bar-baz.quiknode.pro/...')
```

### key (optional) ​
`string`
A key for the Transport. Defaults to `"webSocket"`.
ts```
const transport = webSocket('wss://foo-bar-baz.quiknode.pro/...', { 
 key: 'alchemy', 
})
```

### name (optional) ​
`string`
A name for the Transport. Defaults to `"WebSocket JSON-RPC"`.
ts```
const transport = webSocket('wss://foo-bar-baz.quiknode.pro/...', { 
 name: 'Alchemy WebSocket Provider', 
})
```

### retryCount (optional) ​
`number`
The max number of times to retry when a request fails. Defaults to `3`.
ts```
const transport = webSocket('wss://foo-bar-baz.quiknode.pro/...', {
 retryCount: 5, 
})
```

### retryDelay (optional) ​
`number`
The base delay (in ms) between retries. By default, the Transport will use exponential backoff (`~~(1 << count) * retryDelay`), which means the time between retries is not constant.
ts```
const transport = webSocket('wss://foo-bar-baz.quiknode.pro/...', {
 retryDelay: 100, 
})
```

### timeout (optional) ​
`number`
The timeout for async WebSocket requests. Defaults to `10_000`.
ts```
const transport = webSocket('wss://foo-bar-baz.quiknode.pro/...', {
 timeout: 60_000, 
})
```

