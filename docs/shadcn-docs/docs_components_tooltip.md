Docs
Tooltip
# Tooltip
A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
Hover
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add tooltip

```

Copy
## Usage
```
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@/components/ui/tooltip"
```
Copy
```
<TooltipProvider>
 <Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>
   <p>Add to library</p>
  </TooltipContent>
 </Tooltip>
</TooltipProvider>
```
Copy
Toggle GroupIntroduction
On This Page
  * Installation
  * Usage


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
