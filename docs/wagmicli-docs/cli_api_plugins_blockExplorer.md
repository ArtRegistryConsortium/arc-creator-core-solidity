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
# blockExplorer ​
Plugin for fetching ABIs from block explorers that supports the `?module=contract&action=getabi` API format.
## Import ​
ts```
import { blockExplorer } from '@wagmi/cli/plugins'
```

## Usage ​
ts```
import { defineConfig } from '@wagmi/cli'
import { blockExplorer } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  blockExplorer({
   baseUrl: 'https://api.etherscan.io/v2/api',
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
  }),
 ],
})
```

## Configuration ​
ts```
import { type BlockExplorerConfig } from '@wagmi/cli/plugins'
```

### apiKey ​
`string | undefined`
API key for block explorer. Appended to the request URL as query param `&apikey=${apiKey}`.
ts```
import { defineConfig } from '@wagmi/cli'
import { blockExplorer } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  blockExplorer({
   apiKey: process.env.ETHERSCAN_API_KEY, 
   baseUrl: 'https://api.etherscan.io/v2/api',
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
  }),
 ],
})
```

### baseUrl ​
`string`
Base URL for block explorer.
ts```
import { defineConfig } from '@wagmi/cli'
import { blockExplorer } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  blockExplorer({
   baseUrl: 'https://api.etherscan.io/v2/api', 
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
  }),
 ],
})
```

### cacheDuration ​
`number | undefined`
Duration in milliseconds to cache ABIs. Defaults to `1_800_000` (30 minutes).
ts```
import { defineConfig } from '@wagmi/cli'
import { blockExplorer } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  blockExplorer({
   baseUrl: 'https://api.etherscan.io/v2/api',
   cacheDuration: 300_000, 
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
  }),
 ],
})
```

### chainId ​
`number | undefined`
Chain ID for block explorer. Appended to the request URL as query param `&chainId=${chainId}`.
ts```
import { defineConfig } from '@wagmi/cli'
import { blockExplorer } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  blockExplorer({
   apiKey: process.env.ETHERSCAN_API_KEY,
   baseUrl: 'https://api.etherscan.io/v2/api',
   chainId: 1, 
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
  }),
 ],
})
```

### contracts ​
`{ name: string; address?: Address | Record<number, Address> | undefined }[]`
Contracts to fetch ABIs for.
ts```
import { defineConfig } from '@wagmi/cli'
import { blockExplorer } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  blockExplorer({
   baseUrl: 'https://api.etherscan.io/v2/api',
   contracts: [ 
    { 
     name: 'Wagmigotchi', 
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1', 
    }, 
   ], 
  }),
 ],
})
```

### getAddress ​
`((config: { address: Address | Record<number, Address> }) => Address) | undefined`
  * Function to get address from contract config.
  * Defaults to `({ address }) => typeof address === 'string' ? address : Object.values(address)[0]`.


ts```
import { defineConfig } from '@wagmi/cli'
import { blockExplorer } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  blockExplorer({
   baseUrl: 'https://api.etherscan.io/v2/api',
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
   getAddress({ address }) { 
    if (typeof address === 'string') return address
    return Object.values(address)[0] 
   }, 
  }),
 ],
})
```

### name ​
`string`
  * Name of source.
  * Defaults to `'Block Explorer'`.


ts```
import { defineConfig } from '@wagmi/cli'
import { blockExplorer } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  blockExplorer({
   baseUrl: 'https://api.etherscan.io/v2/api',
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
   name: 'Etherscan', 
  }),
 ],
})
```

