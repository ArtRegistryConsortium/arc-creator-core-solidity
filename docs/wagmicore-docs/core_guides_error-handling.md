Skip to content 
Menu
Return to top
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
# Error Handling ​
Every module in Wagmi Core exports an accompanying error type which you can use to strongly type your `catch` statements.
These types come in the form of `<Module>ErrorType`. For example, the `getBlockNumber` action exports a `GetBlockNumberErrorType` type.
Unfortunately, TypeScript doesn't have an abstraction for typed exceptions, so the most pragmatic & vanilla approach would be to explicitly cast error types in the `catch` statement.
index.tsxconfig.ts
tsx```
import { type GetBlockNumberErrorType, getBlockNumber } from '@wagmi/core'
import { config } from './config'
try {
 const blockNumber = await getBlockNumber(config)
} catch (e) {
 const error = e as GetBlockNumberErrorType
 error.name
 //  ^? (property) name: "Error" | "ChainDisconnectedError" | "HttpRequestError" | "InternalRpcError" | "InvalidInputRpcError" | "InvalidParamsRpcError" | "InvalidRequestRpcError" | "JsonRpcVersionUnsupportedError" | ... 16 more ... | "WebSocketRequestError"
 if (error.name === 'InternalRpcError')
  error.code
  //  ^? (property) code: -32603
 if (error.name === 'HttpRequestError')
  error.headers
  //  ^? (property) headers: Headers
  error.status
  //  ^? (property) status: number
}
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
If you are using Wagmi Hooks, errors are already strongly typed via the `error` property.
![](https://cdn.usefathom.com/?h=https%3A%2F%2Fwagmi.sh&p=%2Fcore%2Fguides%2Ferror-handling&r=&sid=QWAXSUPT&qs=%7B%7D&cid=2914383)
