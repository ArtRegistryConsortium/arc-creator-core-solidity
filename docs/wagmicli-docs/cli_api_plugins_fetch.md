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
# fetch ​
Plugin for fetching and parsing ABIs from network resource with `fetch`.
## Import ​
ts```
import { fetch } from '@wagmi/cli/plugins'
```

## Usage ​
ts```
import { defineConfig } from '@wagmi/cli'
import { fetch } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  fetch({
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
   request(contract) {
    if (!contract.address) throw new Error('address is required')
    const address =
     typeof contract.address === 'string'
      ? contract.address
      : Object.values(contract.address)[0]
    return {
     url: `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}`,
    }
   },
  }),
 ],
})
```

## Configuration ​
ts```
import { type FetchConfig } from '@wagmi/cli/plugins'
```

### cacheDuration ​
`number | undefined`
  * Duration in milliseconds to cache ABIs.
  * Defaults to `1_800_000` (30 minutes).


ts```
import { defineConfig } from '@wagmi/cli'
import { fetch } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  fetch({
   cacheDuration: 300_000, 
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
   request(contract) {
    if (!contract.address) throw new Error('address is required')
    const address =
     typeof contract.address === 'string'
      ? contract.address
      : Object.values(contract.address)[0]
    return {
     url: `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}`,
    }
   },
  }),
 ],
})
```

### contracts ​
`{ name: string; address?: Address | Record<number, Address> | undefined }[]`
Contracts to fetch ABIs for.
ts```
import { defineConfig } from '@wagmi/cli'
import { fetch } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  fetch({
   contracts: [ 
    { 
     name: 'Wagmigotchi', 
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1', 
    }, 
   ], 
   request(contract) {
    if (!contract.address) throw new Error('address is required')
    const address =
     typeof contract.address === 'string'
      ? contract.address
      : Object.values(contract.address)[0]
    return {
     url: `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}`,
    }
   },
  }),
 ],
})
```

### getCacheKey ​
`((config: { contract: { address: Address | Record<chainId, Address> | undefined; name: string } }) => string) | undefined`
  * Function for creating a cache key for contract. Contract data is cached at `~/.wagmi-cli/plugins/fetch/cache/`.
  * Defaults to `({ contract }) => JSON.stringify(contract)`.


ts```
import { defineConfig } from '@wagmi/cli'
import { fetch } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  fetch({
   contracts: [
    {
     name: 'wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
   getCacheKey({ contract }) { 
    if (typeof contract.address === 'string') 
     return `${name}:${contract.address}`
    return `${name}:${JSON.stringify(contract.address)}`
   }, 
   request(contract) {
    if (!contract.address) throw new Error('address is required')
    const address =
     typeof contract.address === 'string'
      ? contract.address
      : Object.values(contract.address)[0]
    return {
     url: `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}`,
    }
   },
  }),
 ],
})
```

### name ​
`string`
  * Name of source.
  * Defaults to `'Fetch'`.


ts```
import { defineConfig } from '@wagmi/cli'
import { fetch } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  fetch({
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
   name: 'Etherscan', 
   request(contract) {
    if (!contract.address) throw new Error('address is required')
    const address =
     typeof contract.address === 'string'
      ? contract.address
      : Object.values(contract.address)[0]
    return {
     url: `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}`,
    }
   },
  }),
 ],
})
```

### parse ​
`((config: { response: Response }) => Abi | Promise<Abi>) | undefined`
  * Function for parsing ABI from fetch response.
  * Defaults to `({ response }) => response.json()`


ts```
import { defineConfig } from '@wagmi/cli'
import { fetch } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  fetch({
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
   async parse({ response }) { 
    const json = await response.json()
    if (json.status === '0') throw new Error(json.message) 
    return json.result
   }, 
   request(contract) {
    if (!contract.address) throw new Error('address is required')
    const address =
     typeof contract.address === 'string'
      ? contract.address
      : Object.values(contract.address)[0]
    return {
     url: `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}`,
    }
   },
  }),
 ],
})
```

### request ​
`(config: { address?: Address | Record<chainId, Address> | undefined }) => { url: RequestInfo; init?: RequestInit | undefined } | Promise<{ url: RequestInfo; init?: RequestInit | undefined }>`
Function for returning a request to fetch ABI from.
ts```
import { defineConfig } from '@wagmi/cli'
import { fetch } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  fetch({
   contracts: [
    {
     name: 'Wagmigotchi',
     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    },
   ],
   request(contract) { 
    if (!contract.address) throw new Error('address is required') 
    const address =
     typeof contract.address === 'string'
      ? contract.address
      : Object.values(contract.address)[0] 
    return { 
     url: `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}`, 
    } 
   }, 
  }),
 ],
})
```

