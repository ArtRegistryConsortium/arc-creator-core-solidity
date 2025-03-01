Docs
Alert
# Alert
Displays a callout for user attention.
PreviewCode
Style: 
Open in Copy
##### Heads up!
You can add components to your app using the cli.
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add alert

```

Copy
## Usage
```
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
```
Copy
```
<Alert>
 <Terminal className="h-4 w-4" />
 <AlertTitle>Heads up!</AlertTitle>
 <AlertDescription>
  You can add components and dependencies to your app using the cli.
 </AlertDescription>
</Alert>
```
Copy
## Examples
### Default
PreviewCode
Style: 
Open in Copy
##### Heads up!
You can add components to your app using the cli.
### Destructive
PreviewCode
Style: 
Open in Copy
##### Error
Your session has expired. Please log in again.
AccordionAlert Dialog
On This Page
  * Installation
  * Usage
  * Examples
    * Default
    * Destructive


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
