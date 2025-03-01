Docs
Input OTP
# Input OTP
Accessible one-time password component with copy paste functionality.
Docs
PreviewCode
Style: 
Open in Copy
## About
Input OTP is built on top of input-otp by @guilherme_rodz.
## Installation
CLIManual
### Run the following command:
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add input-otp

```

Copy
### Update `tailwind.config.js`
Add the following animations to your `tailwind.config.js` file:
tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
 theme: {
  extend: {
   keyframes: {
    "caret-blink": {
     "0%,70%,100%": { opacity: "1" },
     "20%,50%": { opacity: "0" },
    },
   },
   animation: {
    "caret-blink": "caret-blink 1.25s ease-out infinite",
   },
  },
 },
}
```
Copy
## Usage
```
import {
 InputOTP,
 InputOTPGroup,
 InputOTPSeparator,
 InputOTPSlot,
} from "@/components/ui/input-otp"
```
Copy
```
<InputOTP maxLength={6}>
 <InputOTPGroup>
  <InputOTPSlot index={0} />
  <InputOTPSlot index={1} />
  <InputOTPSlot index={2} />
 </InputOTPGroup>
 <InputOTPSeparator />
 <InputOTPGroup>
  <InputOTPSlot index={3} />
  <InputOTPSlot index={4} />
  <InputOTPSlot index={5} />
 </InputOTPGroup>
</InputOTP>
```
Copy
## Examples
### Pattern
Use the `pattern` prop to define a custom pattern for the OTP input.
PreviewCode
Style: 
Open in Copy
```
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
...
<InputOTP
 maxLength={6}
 pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
>
 <InputOTPGroup>
  <InputOTPSlot index={0} />
  {/* ... */}
 </InputOTPGroup>
</InputOTP>
```
Copy
### Separator
You can use the `<InputOTPSeparator />` component to add a separator between the input groups.
PreviewCode
Style: 
Open in Copy
```
import {
 InputOTP,
 InputOTPGroup,
 InputOTPSeparator,
 InputOTPSlot,
} from "@/components/ui/input-otp"
...
<InputOTP maxLength={4}>
 <InputOTPGroup>
  <InputOTPSlot index={0} />
  <InputOTPSlot index={1} />
 </InputOTPGroup>
 <InputOTPSeparator />
 <InputOTPGroup>
  <InputOTPSlot index={2} />
  <InputOTPSlot index={3} />
 </InputOTPGroup>
</InputOTP>
```
Copy
### Controlled
You can use the `value` and `onChange` props to control the input value.
PreviewCode
Style: 
Copy
Enter your one-time password.
### Form
PreviewCode
Style: 
Copy
One-Time Password
Please enter the one-time password sent to your phone.
Submit
## Changelog
### 2024-03-19 Composition
We've made some updates and replaced the render props pattern with composition. Here's how to update your code if you prefer the composition pattern.
**Note:** You are not required to update your code if you are using the `render` prop. It is still supported.
### Update to the latest version of `input-otp`.
pnpmnpmyarnbun
```
pnpm add input-otp@latest

```

Copy
### Update `input-otp.tsx`
input-otp.tsx
```
- import { OTPInput, SlotProps } from "input-otp"
+ import { OTPInput, OTPInputContext } from "input-otp"
 const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
-  SlotProps & React.ComponentPropsWithoutRef<"div">
- >(({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
+  React.ComponentPropsWithoutRef<"div"> & { index: number }
+ >(({ index, className, ...props }, ref) => {
+  const inputOTPContext = React.useContext(OTPInputContext)
+  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
```
Copy
### Then replace the `render` prop in your code.
```
<InputOTP maxLength={6}>
 <InputOTPGroup>
  <InputOTPSlot index={0} />
  <InputOTPSlot index={1} />
  <InputOTPSlot index={2} />
 </InputOTPGroup>
 <InputOTPSeparator />
 <InputOTPGroup>
  <InputOTPSlot index={3} />
  <InputOTPSlot index={4} />
  <InputOTPSlot index={5} />
 </InputOTPGroup>
</InputOTP>
```
Copy
### 2024-03-19 Disabled
To add a disabled state to the input, update `<InputOTP />` as follows:
input-otp.tsx
```
const InputOTP = React.forwardRef<
 React.ElementRef<typeof OTPInput>,
 React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
 <OTPInput
  ref={ref}
  containerClassName={cn(
   "flex items-center gap-2 has-[:disabled]:opacity-50",
   containerClassName
  )}
  className={cn("disabled:cursor-not-allowed", className)}
  {...props}
 />
))
InputOTP.displayName = "InputOTP"
```
Copy
InputLabel
On This Page
  * About
  * Installation
  * Usage
  * Examples
    * Pattern
    * Separator
    * Controlled
    * Form
  * Changelog
    * 2024-03-19 Composition
    * 2024-03-19 Disabled


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
