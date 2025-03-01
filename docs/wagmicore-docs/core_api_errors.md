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
# Errors ​
Error classes used by Wagmi.
## BaseError ​
Error class extended by all errors.
ts```
import { BaseError } from '@wagmi/core'
```

## Config ​
### ConnectorAccountNotFoundError ​
When an account does not exist on the connector or is unable to be used.
ts```
import { ConnectorAccountNotFoundError } from '@wagmi/core'
```

### ConnectorAlreadyConnectedError ​
When a connector is already connected.
ts```
import { ConnectorAlreadyConnectedError } from '@wagmi/core'
```

### ConnectorChainMismatchError ​
When the Wagmi Config is out-of-sync with the connector's active chain ID. This is rare and likely an upstream wallet issue.
ts```
import { ConnectorChainMismatchError } from '@wagmi/core'
```

### ChainNotConfiguredError ​
When a chain is not configured. You likely need to add the chain to `Config['chains']`.
ts```
import { ChainNotConfiguredError } from '@wagmi/core'
```

### ConnectorNotConnectedError ​
When a connector is not connected.
ts```
import { ConnectorNotConnectedError } from '@wagmi/core'
```

### ConnectorNotFoundError ​
When a connector is not found or able to be used.
ts```
import { ConnectorNotFoundError } from '@wagmi/core'
```

### ConnectorUnavailableReconnectingError ​
During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uuid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.
ts```
import { ConnectorUnavailableReconnectingError } from '@wagmi/core'
```

## Connector ​
### ProviderNotFoundError ​
When a connector's provider is not found or able to be used.
ts```
import { ProviderNotFoundError } from '@wagmi/core'
```

### SwitchChainNotSupportedError ​
When switching chains is not supported by connectors.
ts```
import { SwitchChainNotSupportedError } from '@wagmi/core'
```

