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
# Why Wagmi CLI ​
## The Problem ​
The most common way to interact with smart contracts is through Application Binary Interfaces. ABIs describe smart contracts' public functionality (e.g. functions, events, errors) as well as how to encode and decode related data (e.g. arguments and results).
While ABIs are extremely powerful, there isn't a uniform way developers manage them in their apps. Developers do a bunch of different things, like:
  * Publish packages on npm containing ABIs
  * Write custom scripts to fetch ABIs from external sources
  * Compile contracts into application project
  * Copy and paste ABIs from local projects or block explorers


All these approaches take time that you could spend doing more important things, like interacting with your smart contracts!
## The Solution ​
The Wagmi CLI is an attempt to automate manual work so you can build faster. In short, the CLI manages ABIs and generates code. It takes ABIs as inputs and outputs ABIs and generated code. For example, the Etherscan plugin allows you to fetch ABIs across multiple chains and deployments and immediately start importing them into your project.
Code generation is another big advantage of the CLI. Using the React plugin, you can generate Wagmi Hooks for ABIs. When you combine this with the CLI's different ABI sources, like Etherscan, Foundry/Hardhat, and more, you reduce a lot of boilerplate code.
DiffBeforeAfter
ts```
import { useReadContract, useWriteContract } from 'wagmi'
import { froggyFriendsAbi, froggyFriendsAddress } from './generated'
import { useReadFroggyFriends, useWriteFroggyFriends } from './generated'
function App() {
 const { data } = useReadContract({ 
 const { data } = useReadFroggyFriends({ 
  abi: froggyFriendsAbi, 
  address: froggyFriendsAddress, 
  functionName: 'tokenURI',
  args: [123n],
 })
 const { write } = useWriteContract() 
 const { write } = useWriteFroggyFriends() 
 const onClick = React.useCallback(() => {
  write({
   abi: froggyFriendsAbi, 
   address: froggyFriendsAddress, 
   functionName: 'mint',
   args: ['foo', 123n],
  })
 }, [write])
}
```

ts```
import { useReadContract, useWriteContract } from 'wagmi'
import { froggyFriendsAbi, froggyFriendsAddress } from './generated'
function App() {
 const { data } = useReadContract({
  abi: froggyFriendsAbi,
  address: froggyFriendsAddress,
  functionName: 'tokenURI',
  args: [123n],
 })
 const { write } = useWriteContract()
 const onClick = React.useCallback(() => {
  write({
   abi: froggyFriendsAbi,
   address: froggyFriendsAddress,
   functionName: 'mint',
   args: ['foo', 123n],
  })
 }, [write])
}
```

ts```
import { useReadFroggyFriends, useWriteFroggyFriends } from './generated'
function App() {
 const { data } = useReadFroggyFriends({
  functionName: 'tokenURI',
  args: [123n],
 })
 const { write } = useWriteFroggyFriends()
 const onClick = React.useCallback(() => {
  write({
   functionName: 'mint',
   args: ['foo', 123n],
  })
 }, [write])
}
```

Finally, the Wagmi CLI supports popular smart contract development tools, Foundry and Hardhat. You can run the CLI in watch mode, make changes to your contracts, and the CLI will automatically pick up ABI changes and run plugins over those changes. A major boon to working a monorepo and shortening the feedback loop across your stack.
