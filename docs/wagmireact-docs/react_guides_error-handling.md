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
The `error` property in Wagmi Hooks is strongly typed with it's corresponding error type. This enables you to have granular precision with handling errors in your application.
You can discriminate the error type by using the `name` property on the error object.
index.tsxconfig.ts
tsx```
import {
useBlockNumber
 } from 'wagmi'
function
App
() {
 const {
data
,
error
 } =
useBlockNumber
()

error
?.
name




 if (
error
?.
name
 === 'HttpRequestError') {
  const {
status
 } =
error


  return <
div
>A HTTP error occurred. Status: {
status
}</
div
>
 }
 if (
error
?.
name
 === 'LimitExceededRpcError') {
  const {
code
 } =
error


  return <
div
>Rate limit exceeded. Code: {
code
}</
div
>
 }
 // ...
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

