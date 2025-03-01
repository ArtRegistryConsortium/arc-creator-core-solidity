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
# http ​
The `http` Transport connects to a JSON-RPC API via HTTP. Wraps Viem's `http` Transport.
## Import ​
ts```
import { http } from '@wagmi/core'
```

## Usage ​
ts```
import {
 createConfig,
 http
} from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 connectors: [injected()],
 transports: {
  [mainnet.id]: http('https://foo-bar-baz.quiknode.pro/...'), 
  [sepolia.id]: http('https://foo-bar-sep.quiknode.pro/...'), 
 },
})
```

WARNING
If no URL is provided, then the transport will fall back to a public RPC URL on the chain. It is highly recommended to provide an authenticated RPC URL to prevent rate-limiting.
### Batch JSON-RPC ​
The `http` Transport supports Batch JSON-RPC. This means that multiple JSON-RPC requests can be sent in a single HTTP request.
The Transport will batch up Actions over a given period and execute them in a single Batch JSON-RPC HTTP request. By default, this period is a zero delay meaning that the batch request will be executed at the end of the current JavaScript message queue. Consumers can specify a custom time period `wait` (in ms).
You can enable Batch JSON-RPC by setting the `batch` flag to `true`:
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 batch: true
})
```

## Parameters ​
### url ​
`string`
URL of the JSON-RPC API. Defaults to `chain.rpcUrls.default.http[0]`.
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...')
```

### batch ​
`boolean | BatchOptions`
Toggle to enable Batch JSON-RPC. Defaults to `false`
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 batch: true
})
```

### batch.batchSize ​
`number`
The maximum number of JSON-RPC requests to send in a batch. Defaults to `1_000`.
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 batch: {
  batchSize: 2_000
 }
})
```

### batch.wait ​
`number`
The maximum number of milliseconds to wait before sending a batch. Defaults to `0` (zero delay).
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 batch: {
  wait: 16
 }
})
```

### fetchOptions ​
`RequestInit`
Fetch options to pass to the internal `fetch` function. Useful for passing auth headers or cache options.
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 fetchOptions: { 
  headers: {
   'Authorization': 'Bearer ...'
  }
 }
})
```

### key ​
`string`
A key for the Transport. Defaults to `"http"`.
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 key: 'alchemy', 
})
```

### name ​
`string`
A name for the Transport. Defaults to `"HTTP JSON-RPC"`.
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 name: 'Alchemy HTTP Provider', 
})
```

### retryCount ​
`number`
The max number of times to retry when a request fails. Defaults to `3`.
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 retryCount: 5, 
})
```

### retryDelay ​
`number`
The base delay (in ms) between retries. By default, the Transport will use exponential backoff (`~~(1 << count) * retryDelay`), which means the time between retries is not constant.
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 retryDelay: 100, 
})
```

### timeout ​
`number`
The timeout for requests. Defaults to `10_000`.
ts```
const transport = http('https://foo-bar-baz.quiknode.pro/...', {
 timeout: 60_000, 
})
```

