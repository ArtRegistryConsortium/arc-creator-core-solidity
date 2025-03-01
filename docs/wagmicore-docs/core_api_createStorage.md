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
# createStorage ​
Creates new `Storage` object.
## Import ​
ts```
import { createStorage } from '@wagmi/core'
```

## Usage ​
ts```
import { createStorage } from '@wagmi/core'
const storage = createStorage({ storage: localStorage })
```

## Parameters ​
ts```
import { type CreateStorageParameters } from '@wagmi/core'
```

### deserialize ​
`(<T>(value: string) => T) | undefined`
  * Function to deserialize data from storage.
  * Defaults to `deserialize`.


ts```
import { createStorage, deserialize } from '@wagmi/core'
const storage = createStorage({
 deserialize, 
 storage: localStorage,
})
```

WARNING
If you use a custom `deserialize` function, make sure it can handle `bigint` and `Map` values.
### key ​
`string | undefined`
  * Key prefix to use when persisting data.
  * Defaults to `'wagmi'`.


ts```
import { createStorage } from '@wagmi/core'
const storage = createStorage({
 key: 'my-app', 
 storage: localStorage,
})
```

### serialize ​
`(<T>(value: T) => string) | undefined`
  * Function to serialize data for storage.
  * Defaults to `serialize`.


ts```
import { createStorage, serialize } from '@wagmi/core'
const storage = createStorage({
 serialize, 
 storage: localStorage,
})
```

WARNING
If you use a custom `serialize` function, make sure it can handle `bigint` and `Map` values.
### storage ​
`{ getItem(key: string): string | null | undefined | Promise<string | null | undefined>; setItem(key: string, value: string): void | Promise<void>; removeItem(key: string): void | Promise<void>; }`
  * Storage interface to use for persisting data.
  * Defaults to `localStorage`.
  * Supports synchronous and asynchronous storage methods.


ts```
import { createStorage } from '@wagmi/core'
// Using IndexedDB via https://github.com/jakearchibald/idb-keyval
import { del, get, set } from 'idb-keyval'
const storage = createStorage({
 storage: { 
  async getItem(name) { 
   return get(name)
  }, 
  async setItem(name, value) { 
   await set(name, value) 
  }, 
  async removeItem(name) { 
   await del(name) 
  }, 
 }, 
})
```

## Return Type ​
ts```
import { type Storage } from '@wagmi/core'
```

## Storage ​
Object responsible for persisting Wagmi `State` and other data.
ts```
import { type Storage } from '@wagmi/core'
```

### getItem ​
`getItem(key: string, defaultValue?: value | null | undefined): value | null | Promise<value | null>`
ts```
import { createStorage } from '@wagmi/core'
const storage = createStorage({ storage: localStorage })
const recentConnectorId = storage.getItem('recentConnectorId')
```

### setItem ​
`setItem(key: string, value: any): void | Promise<void>`
ts```
import { createStorage } from '@wagmi/core'
const storage = createStorage({ storage: localStorage })
storage.setItem('recentConnectorId', 'foo')
```

### removeItem ​
`removeItem(key: string): void | Promise<void>`
ts```
import { createStorage } from '@wagmi/core'
const storage = createStorage({ storage: localStorage })
storage.removeItem('recentConnectorId')
```

