Docs
Resizable
# Resizable
Accessible resizable panel groups and layouts with keyboard support.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
One
Two
Three
## About
The `Resizable` component is built on top of react-resizable-panels by bvaughn.
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add resizable

```

Copy
## Usage
```
import {
 ResizableHandle,
 ResizablePanel,
 ResizablePanelGroup,
} from "@/components/ui/resizable"
```
Copy
```
<ResizablePanelGroup direction="horizontal">
 <ResizablePanel>One</ResizablePanel>
 <ResizableHandle />
 <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
```
Copy
## Examples
### Vertical
Use the `direction` prop to set the direction of the resizable panels.
PreviewCode
Style: 
Open in Copy
Header
Content
```
import {
 ResizableHandle,
 ResizablePanel,
 ResizablePanelGroup,
} from "@/components/ui/resizable"
export default function Example() {
 return (
  <ResizablePanelGroup direction="vertical">
   <ResizablePanel>One</ResizablePanel>
   <ResizableHandle />
   <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
 )
}
```
Copy
### Handle
You can set or hide the handle by using the `withHandle` prop on the `ResizableHandle` component.
PreviewCode
Style: 
Open in Copy
Sidebar
Content
```
import {
 ResizableHandle,
 ResizablePanel,
 ResizablePanelGroup,
} from "@/components/ui/resizable"
export default function Example() {
 return (
  <ResizablePanelGroup direction="horizontal">
   <ResizablePanel>One</ResizablePanel>
   <ResizableHandle withHandle />
   <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>
 )
}
```
Copy
Radio GroupScroll Area
On This Page
  * About
  * Installation
  * Usage
  * Examples
    * Vertical
    * Handle


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
