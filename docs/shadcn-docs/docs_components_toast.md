Docs
Toast
# Toast
A succinct message that is displayed temporarily.
DocsAPI Reference
PreviewCode
Style: 
Copy
Add to calendar
## Installation
CLIManual
### Run the following command:
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add toast

```

Copy
### Add the Toaster component
app/layout.tsx
```
import { Toaster } from "@/components/ui/toaster"
export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <head />
   <body>
    <main>{children}</main>
    <Toaster />
   </body>
  </html>
 )
}
```
Copy
## Usage
The `useToast` hook returns a `toast` function that you can use to display a toast.
```
import { useToast } from "@/hooks/use-toast"
```
Copy
```
export const ToastDemo = () => {
 const { toast } = useToast()
 return (
  <Button
   onClick={() => {
    toast({
     title: "Scheduled: Catch up",
     description: "Friday, February 10, 2023 at 5:57 PM",
    })
   }}
  >
   Show Toast
  </Button>
 )
}
```
Copy
To display multiple toasts at the same time, you can update the `TOAST_LIMIT` in `use-toast.tsx`.
## Examples
### Simple
PreviewCode
Style: 
Copy
Show Toast
### With title
PreviewCode
Style: 
Copy
Show Toast
### With Action
PreviewCode
Style: 
Copy
Show Toast
### Destructive
Use `toast({ variant: "destructive" })` to display a destructive toast.
PreviewCode
Style: 
Copy
Show Toast
TextareaToggle
On This Page
  * Installation
  * Usage
  * Examples
    * Simple
    * With title
    * With Action
    * Destructive


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
