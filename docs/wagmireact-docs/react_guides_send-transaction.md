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
# Send Transaction ​
The following guide teaches you how to send transactions in Wagmi. The example below builds on the Connect Wallet guide and uses the useSendTransaction & useWaitForTransaction hooks.
## Example ​
Feel free to check out the example before moving on:
## Steps ​
### 1. Connect Wallet ​
Follow the Connect Wallet guide guide to get this set up.
### 2. Create a new component ​
Create your `SendTransaction` component that will contain the send transaction logic.
send-transaction.tsx
tsx```
import * as React from 'react'
export function SendTransaction() {
 return (
  <form>
   <input name="address" placeholder="0xA0Cf…251e" required />
   <input name="value" placeholder="0.05" required />
   <button type="submit">Send</button>
  </form>
 )
}
```

### 3. Add a form handler ​
Next, we will need to add a handler to the form that will send the transaction when the user hits "Send". This will be a basic handler in this step.
send-transaction.tsx
tsx```
import * as React from 'react'
export function SendTransaction() {
 async function submit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
 }
 return (
  <form>
  <form onSubmit={submit}>
   <input name="address" placeholder="0xA0Cf…251e" required />
   <input name="value" placeholder="0.05" required />
   <button type="submit">Send</button>
  </form>
 )
}
```

### 4. Hook up the `useSendTransaction` Hook ​
Now that we have the form handler, we can hook up the `useSendTransaction` Hook to send the transaction.
send-transaction.tsx
tsx```
import * as React from 'react'
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
export function SendTransaction() {
 const { data: hash, sendTransaction } = useSendTransaction()
 async function submit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
 return (
  <form onSubmit={submit}>
   <input name="address" placeholder="0xA0Cf…251e" required />
   <input name="value" placeholder="0.05" required />
   <button type="submit">Send</button>
   {hash && <div>Transaction Hash: {hash}</div>}
  </form>
 )
}
```

### 5. Add loading state (optional) ​
We can optionally add a loading state to the "Send" button while we are waiting confirmation from the user's wallet.
send-transaction.tsx
tsx```
import * as React from 'react'
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
export function SendTransaction() {
 const {
  data: hash,
  isPending,
  sendTransaction
 } = useSendTransaction()
 async function submit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
 return (
  <form onSubmit={submit}>
   <input name="address" placeholder="0xA0Cf…251e" required />
   <input name="value" placeholder="0.05" required />
   <button
    disabled={isPending}
    type="submit"
   >
    Send
    {isPending ? 'Confirming...' : 'Send'}
   </button>
   {hash && <div>Transaction Hash: {hash}</div>}
  </form>
 )
}
```

### 6. Wait for transaction receipt (optional) ​
We can also display the transaction confirmation status to the user by using the `useWaitForTransactionReceipt` Hook.
send-transaction.tsx
tsx```
import * as React from 'react'
import {
 useSendTransaction,
 useWaitForTransactionReceipt
} from 'wagmi'
import { parseEther } from 'viem'
export function SendTransaction() {
 const {
  data: hash,
  isPending,
  sendTransaction
 } = useSendTransaction()
 async function submit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
 const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({
   hash,
  })
 return (
  <form onSubmit={submit}>
   <input name="address" placeholder="0xA0Cf…251e" required />
   <input name="value" placeholder="0.05" required />
   <button
    disabled={isPending}
    type="submit"
   >
    {isPending ? 'Confirming...' : 'Send'}
   </button>
   {hash && <div>Transaction Hash: {hash}</div>}
   {isConfirming && <div>Waiting for confirmation...</div>}
   {isConfirmed && <div>Transaction confirmed.</div>}
  </form>
 )
}
```

### 7. Handle errors (optional) ​
If the user rejects the transaction, or the user does not have enough funds to cover the transaction, we can display an error message to the user.
send-transaction.tsx
tsx```
import * as React from 'react'
import {
 type BaseError,
 useSendTransaction,
 useWaitForTransactionReceipt
} from 'wagmi'
import { parseEther } from 'viem'
export function SendTransaction() {
 const {
  data: hash,
  error,
  isPending,
  sendTransaction
 } = useSendTransaction()
 async function submit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
 const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({
   hash,
  })
 return (
  <form onSubmit={submit}>
   <input name="address" placeholder="0xA0Cf…251e" required />
   <input name="value" placeholder="0.05" required />
   <button
    disabled={isPending}
    type="submit"
   >
    {isPending ? 'Confirming...' : 'Send'}
   </button>
   {hash && <div>Transaction Hash: {hash}</div>}
   {isConfirming && <div>Waiting for confirmation...</div>}
   {isConfirmed && <div>Transaction confirmed.</div>}
   {error && (
    <div>Error: {(error as BaseError).shortMessage || error.message}</div>
   )}
  </form>
 )
}
```

### 8. Wire it up! ​
Finally, we can wire up our Send Transaction component to our application's entrypoint.
app.tsxsend-transaction.tsxconfig.ts
tsx```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { SendTransaction } from './send-transaction'
const queryClient = new QueryClient()
function App() {
 return (
  <WagmiProvider config={config}>
   <QueryClientProvider client={queryClient}>
    <SendTransaction />
   </QueryClientProvider>
  </WagmiProvider>
 )
}
```

tsx```
import * as React from 'react'
import {
 type BaseError,
 useSendTransaction,
 useWaitForTransactionReceipt
} from 'wagmi'
import { parseEther } from 'viem'
export function SendTransaction() {
 const {
  data: hash,
  error,
  isPending,
  sendTransaction
 } = useSendTransaction()
 async function submit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
 const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({
   hash,
  })
 return (
  <form onSubmit={submit}>
   <input name="address" placeholder="0xA0Cf…251e" required />
   <input name="value" placeholder="0.05" required />
   <button
    disabled={isPending}
    type="submit"
   >
    {isPending ? 'Confirming...' : 'Send'}
   </button>
   {hash && <div>Transaction Hash: {hash}</div>}
   {isConfirming && <div>Waiting for confirmation...</div>}
   {isConfirmed && <div>Transaction confirmed.</div>}
   {error && (
    <div>Error: {(error as BaseError).shortMessage || error.message}</div>
   )}
  </form>
 )
}
```

tsx```
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
const projectId = '<WALLETCONNECT_PROJECT_ID>'
export const config = createConfig({
 chains: [mainnet, base],
 connectors: [
  injected(),
  walletConnect({ projectId }),
  metaMask(),
  safe(),
 ],
 transports: {
  [mainnet.id]: http(),
  [base.id]: http(),
 },
})
```

See the Example.
