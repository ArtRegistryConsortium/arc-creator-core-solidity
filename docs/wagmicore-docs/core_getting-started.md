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
# Getting Started ​
## Overview ​
Wagmi Core is a VanillaJS library for Ethereum. You can learn more about the rationale behind the project in the Why Wagmi section.
## Manual Installation ​
To manually add Wagmi to your project, install the required packages.
pnpmnpmyarnbun
bash```
pnpm add @wagmi/core @wagmi/connectors viem@2.x
```

bash```
npm install @wagmi/core @wagmi/connectors viem@2.x
```

bash```
yarn add @wagmi/core @wagmi/connectors viem@2.x
```

bash```
bun add @wagmi/core @wagmi/connectors viem@2.x
```

  * Wagmi Connectors is a collection of interfaces for linking accounts/wallets to Wagmi.
  * Viem is a TypeScript interface for Ethereum that performs blockchain operations.
  * TypeScript is optional, but highly recommended. Learn more about TypeScript support.


### Create Config ​
Create and export a new Wagmi config using `createConfig`.
config.ts
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

In this example, Wagmi is configured to use the Mainnet and Sepolia chains. Check out the `createConfig` docs for more configuration options.
### Use Wagmi ​
Now that everything is set up, you can pass the `config` to use actions.
index.tsconfig.ts
tsx```
import { getAccount, getEnsName } from '@wagmi/core'
import { config } from './config'
const { address } = getAccount(config)
const ensName = await getEnsName(config, { address })
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

## Next Steps ​
For more information on what to do next, check out the following topics.
  * **TypeScript** Learn how to get the most out of Wagmi's type-safety and inference for an enlightened developer experience.
  * **Actions** Browse the collection of actions and learn how to use them.
  * **Framework Adapters** Learn how to create a Wagmi-like adapter for your favorite framework.
  * **Viem docs** Wagmi Core is a wrapper around Viem that manages account and client reactivity. Learn more about Viem and how to use it.


