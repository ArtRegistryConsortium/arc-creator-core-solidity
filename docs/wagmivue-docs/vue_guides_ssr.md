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
# SSR ​
Wagmi uses client-only external stores (such as `localStorage` and `mipd`) to show the user the most relevant data as quickly as possible on first render.
However, the caveat of using these external client stores is that frameworks which incorporate SSR (such as Next.js) will throw hydration warnings on the client when it identifies mismatches between the server-rendered HTML and the client-rendered HTML.
To stop this from happening, you can toggle on the `ssr` property in the Wagmi Config.
tsx```
import { createConfig, http } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 ssr: true,
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

Turning on the `ssr` property means that content from the external stores will be hydrated on the client after the initial mount.
## Persistence using Cookies ​
As a result of turning on the `ssr` property, external persistent stores like `localStorage` will be hydrated on the client **after the initial mount**.
This means that you will still see a flash of "empty" data on the client (e.g. a `"disconnected"` account instead of a `"reconnecting"` account, or an empty address instead of the last connected address) until after the first mount, when the store hydrates.
In order to persist data between the server and the client, you can use cookies.
### 1. Set up cookie storage ​
First, we will set up cookie storage in the Wagmi Config.
tsx```
import {
 createConfig,
 http,
 cookieStorage,
 createStorage
} from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 ssr: true,
 storage: createStorage({
  storage: cookieStorage,
 }),
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### 2. Hydrate the cookie ​
Next, we will need to add some mechanisms to hydrate the stored cookie in Wagmi.
#### Nuxt.js ​
Would you like to contribute this content? Feel free to open a Pull Request!
#### Vanilla SSR ​
Would you like to contribute this content? Feel free to open a Pull Request!
