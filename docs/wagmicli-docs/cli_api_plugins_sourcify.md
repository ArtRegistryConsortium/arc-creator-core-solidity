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
# sourcify ​
Plugin for fetching ABIs from Sourcify. Sourcify is a decentralized, open-source, smart contract verification and metadata repository.
## Import ​
ts```
import { sourcify } from '@wagmi/cli/plugins'
```

## Usage ​
ts```
import { defineConfig } from '@wagmi/cli'
import { sourcify } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  sourcify({
   contracts: [
    {
     name: 'deposit',
     address: '0x00000000219ab540356cbb839cbe05303d7705fa',
    },
   ],
  }),
 ],
})
```

## Configuration ​
ts```
import { type SourcifyConfig } from '@wagmi/cli/plugins'
```

### cacheDuration ​
`number | undefined`
  * Duration in milliseconds to cache ABIs.
  * Defaults to `1_800_000` (30 minutes).


ts```
import { defineConfig } from '@wagmi/cli'
import { sourcify } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  sourcify({
   cacheDuration: 300_000, 
   chainId: 100,
   contracts: [
    {
     name: 'Deposit',
     address: '0x00000000219ab540356cbb839cbe05303d7705fa',
    },
   ],
  }),
 ],
})
```

### chainId ​
`number`
Chain ID to use for fetching ABI. If `address` is an object, `chainId` is used to select the address. See Sourcify docs for supported chains.
ts```
import { defineConfig } from '@wagmi/cli'
import { sourcify } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  sourcify({
   chainId: 100, 
   contracts: [
    {
     name: 'Community',
     address: {
      100: '0xC4c622862a8F548997699bE24EA4bc504e5cA865',
      137: '0xC4c622862a8F548997699bE24EA4bc504e5cA865',
     },
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
import { sourcify } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  sourcify({
   chainId: 100,
   contracts: [ 
    { 
     name: 'Deposit', 
     address: '0x00000000219ab540356cbb839cbe05303d7705fa', 
    }, 
   ], 
  }),
 ],
})
```

