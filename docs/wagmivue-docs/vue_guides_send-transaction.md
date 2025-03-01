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
The following guide teaches you how to send transactions in Wagmi. The example below builds on the Connect Wallet guide and uses the useSendTransaction & useWaitForTransaction composables.
## Example ​
Feel free to check out the example before moving on:
## Steps ​
### 1. Connect Wallet ​
Follow the Connect Wallet guide guide to get this set up.
### 2. Create a new component ​
Create your `SendTransaction` component that will contain the send transaction logic.
SendTransaction.vue
tsx```
<script setup lang="ts">
</script>
<template>
 <form>
  <input name="address" placeholder="0xA0Cf…251e" required />
  <input name="value" placeholder="0.05" required />
  <button type="submit">Send</button>
 </form>
</template>
```

### 3. Add a form handler ​
Next, we will need to add a handler to the form that will send the transaction when the user hits "Send". This will be a basic handler in this step.
SendTransaction.vue
vue```
<script setup lang="ts">
 function submit(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
</script>
<template>
 <form>
 <form @submit.prevent="submit">
  <input name="address" placeholder="0xA0Cf…251e" required />
  <input name="value" placeholder="0.05" required />
  <button type="submit">Send</button>
 </form>
</template>
```

### 4. Hook up the `useSendTransaction` Composable ​
Now that we have the form handler, we can hook up the `useSendTransaction` Composable to send the transaction.
SendTransaction.vue
vue```
<script setup lang="ts">
 import { useSendTransaction } from 'wagmi'
 import { parseEther } from 'viem'
 const { data: hash, sendTransaction } = useSendTransaction()
 function submit(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
</script>
<template>
 <form @submit.prevent="submit">
  <input name="address" placeholder="0xA0Cf…251e" required />
  <input name="value" placeholder="0.05" required />
  <button type="submit">Send</button>
  <div v-if="hash">Transaction Hash: {{ hash }}</div>
 </form>
</template>
```

### 5. Add loading state (optional) ​
We can optionally add a loading state to the "Send" button while we are waiting confirmation from the user's wallet.
SendTransaction.vue
vue```
<script setup lang="ts">
 import { useSendTransaction } from 'wagmi'
 import { parseEther } from 'viem'
 const {
  data: hash,
  isPending,
  sendTransaction
 } = useSendTransaction()
 function submit(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
</script>
<template>
 <form @submit.prevent="submit">
  <input name="address" placeholder="0xA0Cf…251e" required />
  <input name="value" placeholder="0.05" required />
  <button :disabled="isPending" type="submit">
   <span v-if="isPending">Sending...</span>
   <span v-else>Send</span>
  </button>
  <div v-if="hash">Transaction Hash: {{ hash }}</div>
 </form>
</template>
```

### 6. Wait for transaction receipt (optional) ​
We can also display the transaction confirmation status to the user by using the `useWaitForTransactionReceipt` Composable.
SendTransaction.vue
vue```
<script setup lang="ts">
 import {
  useSendTransaction,
  useWaitForTransactionReceipt,
 } from 'wagmi'
 import { parseEther } from 'viem'
 const {
  data: hash,
  isPending,
  sendTransaction
 } = useSendTransaction()
 function submit(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
 const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({ 
   hash, 
  })
</script>
<template>
 <form @submit.prevent="submit">
  <input name="address" placeholder="0xA0Cf…251e" required />
  <input name="value" placeholder="0.05" required />
  <button :disabled="isPending" type="submit">
   <span v-if="isPending">Sending...</span>
   <span v-else>Send</span>
  </button>
  <div v-if="hash">Transaction Hash: {{ hash }}</div>
  <div v-if="isConfirming">Waiting for confirmation...</div>
  <div v-if="isConfirmed">Transaction Confirmed!</div>
 </form>
</template>
```

### 7. Handle errors (optional) ​
If the user rejects the transaction, or the user does not have enough funds to cover the transaction, we can display an error message to the user.
SendTransaction.vue
vue```
<script setup lang="ts">
 import {
  useSendTransaction,
  useWaitForTransactionReceipt,
 } from 'wagmi'
 import { parseEther } from 'viem'
 const {
  data: hash,
  error,
  isPending,
  sendTransaction
 } = useSendTransaction()
 function submit(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
 const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({ 
   hash, 
  })
</script>
<template>
 <form @submit.prevent="submit">
  <input name="address" placeholder="0xA0Cf…251e" required />
  <input name="value" placeholder="0.05" required />
  <button :disabled="isPending" type="submit">
   <span v-if="isPending">Sending...</span>
   <span v-else>Send</span>
  </button>
  <div v-if="hash">Transaction Hash: {{ hash }}</div>
  <div v-if="isConfirming">Waiting for confirmation...</div>
  <div v-if="isConfirmed">Transaction Confirmed!</div>
  <div v-if="error">
   Error: {{ (error as BaseError).shortMessage || error.message }}
  </div>
 </form>
</template>
```

### 8. Wire it up! ​
Finally, we can wire up our Send Transaction component to our application's entrypoint.
App.vueSendTransaction.vue
vue```
<script setup lang="ts">
import { useAccount } from '@wagmi/vue';
import Account from './Account.vue';
import Connect from './Connect.vue';
import SendTransaction from './SendTransaction.vue';
const { isConnected } = useAccount();
</script>
<template>
 <Account v-if="isConnected" />
 <Connect v-else />
 <SendTransaction v-if="isConnected" />
</template>
```

vue```
<script setup lang="ts">
 import {
  useSendTransaction,
  useWaitForTransactionReceipt,
 } from 'wagmi'
 import { parseEther } from 'viem'
 const {
  data: hash,
  error,
  isPending,
  sendTransaction
 } = useSendTransaction()
 function submit(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement)
  const to = formData.get('address') as `0x${string}`
  const value = formData.get('value') as string
  sendTransaction({ to, value: parseEther(value) })
 }
 const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({ 
   hash, 
  })
</script>
<template>
 <form @submit.prevent="submit">
  <input name="address" placeholder="0xA0Cf…251e" required />
  <input name="value" placeholder="0.05" required />
  <button :disabled="isPending" type="submit">
   <span v-if="isPending">Sending...</span>
   <span v-else>Send</span>
  </button>
  <div v-if="hash">Transaction Hash: {{ hash }}</div>
  <div v-if="isConfirming">Waiting for confirmation...</div>
  <div v-if="isConfirmed">Transaction Confirmed!</div>
  <div v-if="error">
   Error: {{ (error as BaseError).shortMessage || error.message }}
  </div>
 </form>
</template>
```

See the Example.
