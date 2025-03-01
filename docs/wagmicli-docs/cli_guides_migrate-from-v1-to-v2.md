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
# Migrate from v1 to v2 ​
To get started, install the latest version of the Wagmi CLI.
pnpmnpmyarnbun
bash```
pnpm add @wagmi/cli
```

bash```
npm install @wagmi/cli
```

bash```
yarn add @wagmi/cli
```

bash```
bun add @wagmi/cli
```

Not ready to migrate yet?
The Wagmi CLI v1 docs are still available at 1.x.wagmi.sh/cli.
## Changed generated action and hook names ​
Generated action and hook names now align with Wagmi v2 naming conventions. If you want hooks to still follow Wagmi v1 naming conventions, set `getActionName` and `getHookName` to `'legacy'`.
ts```
import { defineConfig } from '@wagmi/cli'
import { actions, react } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  actions({
   getActionName: 'legacy', 
  }),
  react({
   getHookName: 'legacy', 
  }),
 ],
})
```

