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
# mock ​
Connector for mocking Wagmi functionality.
## Import ​
ts```
import { mock } from '@wagmi/connectors'
```

## Usage ​
ts```
import { createConfig, http } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { mock } from '@wagmi/connectors'
export const config = createConfig({
 chains: [mainnet, sepolia],
 connectors: [
  mock({
   accounts: [
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
   ],
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
import { type MockParameters } from '@wagmi/connectors'
```

### accounts ​
`readonly [Address, ...Address[]]`
Accounts to use with the connector.
ts```
import { mock } from '@wagmi/connectors'
const connector = mock({
 accounts: [ 
  '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 
  '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', 
  '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC', 
  '0x90F79bf6EB2c4f870365E785982E1f101E93b906', 
  '0x15d34aaf54267db7d7c367839aaf71a00a2c6a65', 
  '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc', 
  '0x976EA74026E726554dB657fA54763abd0C3a0aa9', 
  '0x14dC79964da2C08b23698B3D3cc7Ca32193d9955', 
  '0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f', 
  '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720', 
 ], 
})
```

### features ​
`{ connectError?: boolean | Error | undefined; reconnect?: boolean | undefined; signMessageError?: boolean | Error | undefined; signTypedDataError?: boolean | Error | undefined; switchChainError?: boolean | Error | undefined; } | undefined`
Feature flags that change behavior of Wagmi internals.
ts```
import { mock } from '@wagmi/connectors'
import { UserRejectedRequestError } from 'viem'
const connector = mock({
 accounts: [
  '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
 ],
 features: { 
  connectError: new UserRejectedRequestError(new Error('Failed to connect.')), 
  reconnect: false, 
 }, 
})
```

#### defaultConnected ​
`boolean | undefined`
Whether the connector is connected by default.
#### connectError ​
`boolean | Error | undefined`
Whether to throw an error when `connector.connect` is called.
#### reconnect ​
`boolean | undefined`
Enables reconnecting to connector.
#### signMessageError ​
`boolean | Error | undefined`
Whether to throw an error when `'personal_sign'` is called.
#### signTypedDataError ​
`boolean | Error | undefined`
Whether to throw an error when `'eth_signTypedData_v4'` is called.
#### switchChainError ​
`boolean | Error | undefined`
Whether to throw an error when `connector.switchChain` is called.
