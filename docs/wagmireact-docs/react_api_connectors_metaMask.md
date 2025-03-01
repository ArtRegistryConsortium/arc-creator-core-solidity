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
# metaMask ​
Connector for MetaMask SDK.
Check out the MetaMask SDK docs for more information.
## Import ​
ts```
import { metaMask } from 'wagmi/connectors'
```

## Usage ​
ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'
export const config = createConfig({
 chains: [mainnet, sepolia],
 connectors: [metaMask()],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Parameters ​
ts```
import { type MetaMaskParameters } from 'wagmi/connectors'
```

Check out the MetaMask SDK docs for more info. A few options are omitted that Wagmi manages internally.
### dappMetadata ​
`DappMetadata | undefined`
Metadata is used to fill details for the UX on confirmation screens in MetaMask, including the following fields:
  * `name`: `string` - The name of the dapp.
  * `url`: `string` - URL of the dapp (defaults to `window.location.origin`).
  * `iconUrl`: `string` - URL to the dapp's favicon or icon.


ts```
import { metaMask } from 'wagmi/connectors'
const connector = metaMask({
 dappMetadata: { 
  name: 'My Wagmi App', 
  url: 'https://example.com', 
  iconUrl: 'https://example.com/favicon.ico', 
 }
})
```

### logging ​
`SDKLoggingOptions | undefined`
Enables SDK-side logging to provide visibility into:
  * RPC methods being called.
  * Events received for syncing the chain or active account.
  * Raw RPC responses.


In this context, this is especially useful to observe what calls are made through Wagmi hooks.
Relevant options:
ts```
{
 developerMode: boolean, // Enables developer mode logs
 sdk: boolean      // Enables SDK-specific logs
}
```

ts```
import { metaMask } from '{{connectorsPackageName}}'
const connector = metaMask({
 logging: { developerMode: true, sdk: true } 
})
```

### headless ​
`boolean | undefined`
  * Enables headless mode, disabling MetaMask's built-in modal.
  * Allows developers to create their own modal, such as for displaying a QR code.


This is particularly relevant for web-only setups using Wagmi, where developers want complete control over the UI.
To get the deeplink to display in the QR code, listen to the `display_uri` event.
The default is `false`.
ts```
import { metaMask } from 'wagmi/connectors'
const connector = metaMask({
 headless: true
})
```

## Advanced ​
By default, if the EIP-6963 MetaMask injected provider is detected, this connector will replace it.
EIP-6963 defines a standard way for dapps to interact with multiple wallets simultaneously by injecting providers into the browser. Wallets that implement this standard can make their presence known to dapps in a consistent and predictable manner.
When MetaMask SDK detects an EIP-6963-compliant provider (such as MetaMask itself), the connector will automatically replace the default injected provider (like `window.ethereum`) with the one provided by MetaMask SDK.
See the `rdns` property for more information.
