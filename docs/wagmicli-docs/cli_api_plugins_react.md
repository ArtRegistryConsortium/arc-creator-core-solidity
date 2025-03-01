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
# react ​
Plugin for generating type-safe Wagmi Hooks.
## Import ​
ts```
import { react } from '@wagmi/cli/plugins'
```

## Usage ​
ts```
import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  react(),
 ],
})
```

## Configuration ​
ts```
import { type ReactConfig } from '@wagmi/cli/plugins'
```

### getHookName ​
`'legacy' | ((options: { contractName: string; type: 'read' | 'simulate' | 'watch' | 'write' }) => `use${string}`)`
  * Function for setting custom hook names.
  * Defaults to ``use${type}${contractName}``. For example, `useReadErc20`, `useSimulateErc20`, `useWatchErc20Event`, `useWriteErc20`.
  * When `'legacy'` (deprecated), hook names are set to `@wagmi/cli@1` format.


ts```
import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  react({
   getHookName({ contractName, type }) { 
    return `use${contractName}__${type}`
   }, 
  }),
 ],
})
```

