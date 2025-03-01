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
# Plugins ​
Plugins for managing ABIs, generating code, and more.
## Import ​
Import via the `'@wagmi/cli/plugins'` entrypoint.
ts```
import { etherscan } from '@wagmi/cli/plugins'
```

## Available Plugins ​
  * `actions` Generate type-safe VanillaJS actions from configuration `contracts`.
  * `blockExplorer` Fetch ABIs from Block Explorers that support `?module=contract&action=getabi`.
  * `etherscan` Fetch ABIs from Etherscan and add into configuration.
  * `fetch` Fetch and parse ABIs from network resource with `fetch`.
  * `foundry` Generate ABIs and watch for Foundry project changes.
  * `hardhat` Generate ABIs and watch for Hardhat projects changes.
  * `react` Generate type-safe React Hooks from configuration `contracts`.
  * `sourcify` Fetch ABIs from Sourcify from configuration `contracts`.


## Create Plugin ​
Creating plugins to hook into the CLI is quite simple. Plugins most commonly inject contracts into `contracts` config, e.g. `etherscan`, and/or generate code using the `run` option, e.g. `react`. All you need to do is write a function that returns the `Plugin` type.
ts```
import { type Plugin, defineConfig } from '@wagmi/cli'
function myPlugin(): Plugin {
 // `name` is the only required property.
 name: 'MyPlugin',
 // You likely want to at least include `contracts` or `run`.
 // ...
}
export default defineConfig({
 out: 'src/generated.ts',
 plugins: [myPlugin()],
})
```

