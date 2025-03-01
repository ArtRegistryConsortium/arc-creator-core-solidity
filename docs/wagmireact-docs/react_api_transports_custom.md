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
# custom ​
The `custom` Transport connects to a JSON-RPC API via custom. Wraps Viem's `custom` Transport.
## Import ​
ts```
import { custom } from 'wagmi'
```

## Usage ​
ts```
import {
 createConfig,
 custom
} from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { customRpc } from './rpc'
export const config = createConfig({
 chains: [mainnet],
 connectors: [injected()],
 transports: {
  [mainnet.id]: custom({ 
   async request({ method, params }) { 
    const response = await customRpc.request(method, params)
    return response
   } 
  }) 
 },
})
```

## Parameters ​
### provider ​
`{ request({ method: string, params: unknown[] }): Promise<unknown> }`
An EIP-1193 `request` function function.
ts```
import { customRpc } from './rpc'
const transport = custom({
 async request({ method, params }) { 
  const response = await customRpc.request(method, params)
  return response
 }
})
```

### key (optional) ​
`string`
A key for the Transport. Defaults to `"custom"`.
ts```
const transport = custom(
 provider,
 { 
  key: 'windowProvider', 
 }
)
```

### name (optional) ​
`string`
A name for the Transport. Defaults to `"Ethereum Provider"`.
ts```
const transport = custom(
 provider,
 { 
  name: 'Window Ethereum Provider', 
 }
)
```

### retryCount (optional) ​
`number`
The max number of times to retry when a request fails. Defaults to `3`.
ts```
const transport = custom(provider, {
 retryCount: 5, 
})
```

### retryDelay (optional) ​
`number`
The base delay (in ms) between retries. By default, the Transport will use exponential backoff (`~~(1 << count) * retryDelay`), which means the time between retries is not constant.
ts```
const transport = custom(provider, {
 retryDelay: 100, 
})
```

