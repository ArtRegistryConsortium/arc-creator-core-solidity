Docs
Context Menu
# Context Menu
Displays a menu to the user — such as a set of actions or functions — triggered by a button.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
Right click here
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add context-menu

```

Copy
## Usage
```
import {
 ContextMenu,
 ContextMenuContent,
 ContextMenuItem,
 ContextMenuTrigger,
} from "@/components/ui/context-menu"
```
Copy
```
<ContextMenu>
 <ContextMenuTrigger>Right click</ContextMenuTrigger>
 <ContextMenuContent>
  <ContextMenuItem>Profile</ContextMenuItem>
  <ContextMenuItem>Billing</ContextMenuItem>
  <ContextMenuItem>Team</ContextMenuItem>
  <ContextMenuItem>Subscription</ContextMenuItem>
 </ContextMenuContent>
</ContextMenu>
```
Copy
CommandData Table
On This Page
  * Installation
  * Usage


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
