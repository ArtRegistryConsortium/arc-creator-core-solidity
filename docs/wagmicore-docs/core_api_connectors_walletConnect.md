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
# walletConnect ​
Connector for WalletConnect.
## Import ​
ts```
import { walletConnect } from '@wagmi/connectors'
```

## Usage ​
ts```
import { createConfig, http } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { walletConnect } from '@wagmi/connectors'
export const config = createConfig({
 chains: [mainnet, sepolia],
 connectors: [
  walletConnect({
   projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
  }),
 ],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Parameters ​
ts```
import { type WalletConnectParameters } from '@wagmi/connectors'
```

Check out the WalletConnect docs for more info. A few options are omitted that Wagmi manages internally.
### customStoragePrefix @wagmi/connectors@>=5.1.8 ​
`string | undefined`
Custom storage prefix for persisting provider state.
ts```
import { walletConnect } from '@wagmi/connectors'
const connector = walletConnect({
 customStoragePrefix: 'wagmi', 
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

### disableProviderPing ​
`boolean | undefined`
ts```
import { walletConnect } from '@wagmi/connectors'
const connector = walletConnect({
 disableProviderPing: false, 
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

### isNewChainsStale ​
`boolean | undefined`
  * If a new chain is added to a previously existing configured connector `chains`, this flag will determine if that chain should be considered as stale. A stale chain is a chain that WalletConnect has yet to establish a relationship with (e.g. the user has not approved or rejected the chain).
  * Defaults to `true`.


ts```
import { walletConnect } from '@wagmi/connectors'
const connector = walletConnect({
 isNewChainsStale: true, 
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

More info
Preface: Whereas WalletConnect v1 supported dynamic chain switching, WalletConnect v2 requires the user to pre-approve a set of chains up-front. This comes with consequent UX nuances (see below) when a user tries to switch to a chain that they have not approved.
This flag mainly affects the behavior when a wallet does not support dynamic chain authorization with WalletConnect v2.
If `true` (default), the new chain will be treated as a stale chain. If the user has yet to establish a relationship (approved/rejected) with this chain in their WalletConnect session, the connector will disconnect upon the dapp auto-connecting, and the user will have to reconnect to the dapp (revalidate the chain) in order to approve the newly added chain. This is the default behavior to avoid an unexpected error upon switching chains which may be a confusing user experience (e.g. the user will not know they have to reconnect unless the dapp handles these types of errors).
If `false`, the new chain will be treated as a validated chain. This means that if the user has yet to establish a relationship with the chain in their WalletConnect session, wagmi will successfully auto-connect the user. This comes with the trade-off that the connector will throw an error when attempting to switch to the unapproved chain. This may be useful in cases where a dapp constantly modifies their configured chains, and they do not want to disconnect the user upon auto-connecting. If the user decides to switch to the unapproved chain, it is important that the dapp handles this error and prompts the user to reconnect to the dapp in order to approve the newly added chain.
### metadata ​
`CoreTypes.Metadata | undefined`
Metadata related to the app requesting the connection.
ts```
import { walletConnect } from '@wagmi/connectors'
const connector = walletConnect({
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
 metadata: { 
  name: 'Example', 
  description: 'Example website', 
  url: 'https://example.com', 
 }, 
})
```

### projectId ​
`string`
WalletConnect Cloud project identifier. You can find your `projectId` on your WalletConnect dashboard.
ts```
import { walletConnect } from '@wagmi/connectors'
const connector = walletConnect({
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68', 
})
```

### qrModalOptions ​
`QrModalOptions | undefined`
Options for rendering QR modal.
ts```
import { walletConnect } from '@wagmi/connectors'
const connector = walletConnect({
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
 qrModalOptions: { 
  themeMode: 'dark', 
 }, 
})
```

### relayUrl ​
`string | undefined`
  * WalletConnect relay URL to use.
  * Defaults to `'wss://relay.walletconnect.com'`.


ts```
import { walletConnect } from '@wagmi/connectors'
const connector = walletConnect({
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
 relayUrl: 'wss://relay.walletconnect.org', 
})
```

### storageOptions ​
`KeyValueStorageOptions | undefined`
ts```
import { walletConnect } from '@wagmi/connectors'
const connector = walletConnect({
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
 storageOptions: {}, 
})
```

### showQrModal ​
`boolean | undefined`
  * Whether to show the QR code modal upon calling `connector.connect()`.
  * Defaults to `true`.


ts```
import { walletConnect } from '@wagmi/connectors'
const connector = walletConnect({
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
 showQrModal: true, 
})
```

TIP
This can be disabled and you can listen for a `'message'` event with payload `{ type: 'display_uri'; data: string }` if you want to render your own QR code.
