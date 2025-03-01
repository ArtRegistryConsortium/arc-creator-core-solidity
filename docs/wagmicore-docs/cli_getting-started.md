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
Wagmi CLI is a command line interface for managing ABIs (from Etherscan/block explorers, Foundry/Hardhat projects, etc.), generating code (e.g. React Hooks), and much more. It makes working with Ethereum easier by automating manual work so you can build faster. You can learn more about the rationale behind the project in the Why Wagmi CLI section.
## Manual Installation ​
To manually add Wagmi CLI to your project, install the required packages.
pnpmnpmyarnbun
bash```
pnpm add -D @wagmi/cli
```

bash```
npm install --save-dev @wagmi/cli
```

bash```
yarn add -D @wagmi/cli
```

bash```
bun add -D @wagmi/cli
```

## Create Config File ​
Run the `init` command to generate a configuration file: either `wagmi.config.ts` if TypeScript is detected, otherwise `wagmi.config.js`. You can also create the configuration file manually. See Configuring CLI for more info.
pnpmnpmyarnbun
bash```
pnpm wagmi init
```

bash```
npx wagmi init
```

bash```
yarn wagmi init
```

bash```
bun wagmi init
```

The generated configuration file will look something like this:
wagmi.config.ts
ts```
import { defineConfig } from '@wagmi/cli'
export default defineConfig({
 out: 'src/generated.ts',
 contracts: [],
 plugins: [],
})
```

## Add Contracts And Plugins ​
Once the configuration file is set up, you can add contracts and plugins to it. These contracts and plugins are used to manage ABIs (fetch from block explorers, resolve from the file system, etc.), generate code (React hooks, etc.), and much more!
For example, we can add the ERC-20 contract from Viem, and the `etherscan` and `react` plugins.
wagmi.config.ts
ts```
import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { erc20Abi } from 'viem'
import { mainnet, sepolia } from 'wagmi/chains'
export default defineConfig({
 out: 'src/generated.ts',
 contracts: [
  {
   name: 'erc20',
   abi: erc20Abi,
  },
 ],
 plugins: [
  etherscan({
   apiKey: process.env.ETHERSCAN_API_KEY!,
   chainId: mainnet.id,
   contracts: [
    {
     name: 'EnsRegistry',
     address: {
      [mainnet.id]: '0x314159265dd8dbb310642f98f50c066173c1259b',
      [sepolia.id]: '0x112234455c3a32fd11230c42e7bccd4a84e02010',
     },
    },
   ],
  }),
  react(),
 ],
})
```

## Run Code Generation ​
Now that we added a few contracts and plugins to the configuration file, we can run the `generate` command to resolve ABIs and generate code to the `out` file.
pnpmnpmyarnbun
bash```
pnpm wagmi generate
```

bash```
npx wagmi generate
```

bash```
yarn wagmi generate
```

bash```
bun wagmi generate
```

In this example, the `generate` command will do the following:
  * Validate the `etherscan` and `react` plugins
  * Fetch and cache the ENS Registry ABI from the Mainnet Etherscan API
  * Pull in the `erc20Abi` using the name `'ERC20'`
  * Generate React Hooks for both ABIs
  * Save ABIs, ENS Registry deployment addresses, and React Hooks to the `out` file


## Use Generated Code ​
Once `out` is created, you can start using the generated code in your project.
ts```
import { useReadErc20, useReadErc20BalanceOf } from './generated'
// Use the generated ERC-20 read hook
const { data } = useReadErc20({
 address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 functionName: 'balanceOf',
 args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})
// Use the generated ERC-20 "balanceOf" hook
const { data } = useReadErc20BalanceOf({
 address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})
```

TIP
Instead of committing the `out` file, you likely want to add `out` to your `.gitignore` and run `generate` during the build process or before you start your dev server in a `"predev"` script.
## Next Steps ​
For more information on what to do next, check out the following topics.
  * **Configuring CLI** Learn how to configure the CLI to work best for your project.
  * **Commands** Learn more about the CLI commands and how to use them.
  * **Plugins** Browse the collection of plugins and set them up with your config.


