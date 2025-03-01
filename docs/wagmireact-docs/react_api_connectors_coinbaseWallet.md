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
# coinbaseWallet ​
Connector for the Coinbase Wallet SDK.
## Import ​
ts```
import { coinbaseWallet } from 'wagmi/connectors'
```

## Usage ​
ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet } from 'wagmi/connectors'
export const config = createConfig({
 chains: [mainnet, sepolia],
 connectors: [coinbaseWallet()], 
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

WARNING
Before going to production, it is highly recommended to set an `appName` and `appLogoUrl` for your application that can be displayed upon connection to the wallet.
## Parameters ​
ts```
import { type CoinbaseWalletParameters } from 'wagmi/connectors'
```

Check out the Coinbase Wallet SDK docs for more info.
### appName ​
`string`
Application name.
ts```
import { coinbaseWallet } from 'wagmi/connectors'
const connector = coinbaseWallet({
 appName: 'My Wagmi App', 
})
```

### appLogoUrl ​
`string | null | undefined`
Application logo image URL; favicon is used if unspecified.
ts```
import { coinbaseWallet } from 'wagmi/connectors'
const connector = coinbaseWallet({
 appName: 'My Wagmi App',
 appLogoUrl: 'https://example.com/myLogoUrl.png', 
})
```

### headlessMode deprecated ​
`boolean | undefined`
  * Whether or not onboarding overlay popup should be displayed.
  * `headlessMode` will be removed in the next major version. Upgrade to `version: '4'`.


ts```
import { coinbaseWallet } from 'wagmi/connectors'
const connector = coinbaseWallet({
 appName: 'My Wagmi App',
 headlessMode: false, 
})
```

### preference >=2.9.0 ​
`"all" | "eoaOnly" | "smartWalletOnly"`
Preference for the type of wallet to display.
  * `'eoaOnly'`: Uses EOA Browser Extension or Mobile Coinbase Wallet.
  * `'smartWalletOnly'`: Displays Smart Wallet popup.
  * `'all'` (default): Supports both `'eoaOnly'` and `'smartWalletOnly'` based on context.


ts```
import { coinbaseWallet } from 'wagmi/connectors'
const connector = coinbaseWallet({
 appName: 'My Wagmi App',
 preference: 'smartWalletOnly', 
})
```

WARNING
Passing `preference` as a string is deprecated and will be removed in the next major version. Instead you should use `preference#options`.
ts```
import { coinbaseWallet } from 'wagmi/connectors'
const connector = coinbaseWallet({
 appName: 'My Wagmi App',
 preference: { 
  options: 'smartWalletOnly'
 }, 
})
```

#### attribution >=2.12.33 ​
`{ auto?: boolean | undefined; dataSuffix?: `0x${string}` | undefined }`
This option only applies to Coinbase Smart Wallet. When a valid data suffix is supplied, it is appended to the `initCode` and `executeBatch` calldata. Coinbase Smart Wallet expects a 16 byte hex string. If the data suffix is not a 16 byte hex string, the Smart Wallet will ignore the property. If auto is true, the Smart Wallet will generate a 16 byte hex string from the apps origin.
#### keysUrl >=2.12.33 ​
`string`
  * The URL for the keys popup.
  * By default, `https://keys.coinbase.com/connect` is used for production. Use `https://keys-dev.coinbase.com/connect` for development environments.


#### options >=2.12.33 ​
`"all" | "eoaOnly" | "smartWalletOnly"`
Preference for the type of wallet to display.
  * `'eoaOnly'`: Uses EOA Browser Extension or Mobile Coinbase Wallet.
  * `'smartWalletOnly'`: Displays Smart Wallet popup.
  * `'all'` (default): Supports both `'eoaOnly'` and `'smartWalletOnly'` based on context.


### version >=2.13.0 ​
  * Coinbase Wallet SDK version
  * Defaults to `'4'`. If `headlessMode: true`, defaults to `'3'`.


ts```
import { coinbaseWallet } from 'wagmi/connectors'
const connector = coinbaseWallet({
 appName: 'My Wagmi App',
 version: '4', 
})
```

