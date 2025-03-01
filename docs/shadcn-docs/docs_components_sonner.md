Docs
Sonner
# Sonner
An opinionated toast component for React.
Docs
PreviewCode
Style: 
Copy
Show Toast
## About
Sonner is built and maintained by emilkowalski_.
## Installation
CLIManual
### Run the following command:
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add sonner

```

Copy
### Add the Toaster component
app/layout.tsx
```
import { Toaster } from "@/components/ui/sonner"
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
```
import { toast } from "sonner"
```
Copy
```
toast("Event has been created.")
```
Copy
SliderSwitch
On This Page
  * About
  * Installation
  * Usage


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
