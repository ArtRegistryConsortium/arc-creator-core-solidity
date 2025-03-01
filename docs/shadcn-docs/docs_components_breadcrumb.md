Docs
Breadcrumb
# Breadcrumb
Displays the path to the current resource using a hierarchy of links.
PreviewCode
Style: 
Open in Copy
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add breadcrumb

```

Copy
## Usage
```
import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
```
Copy
```
<Breadcrumb>
 <BreadcrumbList>
  <BreadcrumbItem>
   <BreadcrumbLink href="/">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
   <BreadcrumbLink href="/components">Components</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
   <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
  </BreadcrumbItem>
 </BreadcrumbList>
</Breadcrumb>
```
Copy
## Examples
### Custom separator
Use a custom component as `children` for `<BreadcrumbSeparator />` to create a custom separator.
PreviewCode
Style: 
Open in Copy
```
import { Slash } from "lucide-react"
...
<Breadcrumb>
 <BreadcrumbList>
  <BreadcrumbItem>
   <BreadcrumbLink href="/">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator>
   <Slash />
  </BreadcrumbSeparator>
  <BreadcrumbItem>
   <BreadcrumbLink href="/components">Components</BreadcrumbLink>
  </BreadcrumbItem>
 </BreadcrumbList>
</Breadcrumb>
```
Copy
### Dropdown
You can compose `<BreadcrumbItem />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb.
PreviewCode
Style: 
Open in Copy
```
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
...
<BreadcrumbItem>
 <DropdownMenu>
  <DropdownMenuTrigger className="flex items-center gap-1">
   Components
   <ChevronDownIcon />
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
   <DropdownMenuItem>Documentation</DropdownMenuItem>
   <DropdownMenuItem>Themes</DropdownMenuItem>
   <DropdownMenuItem>GitHub</DropdownMenuItem>
  </DropdownMenuContent>
 </DropdownMenu>
</BreadcrumbItem>
```
Copy
### Collapsed
We provide a `<BreadcrumbEllipsis />` component to show a collapsed state when the breadcrumb is too long.
PreviewCode
Style: 
Open in Copy
```
import { BreadcrumbEllipsis } from "@/components/ui/breadcrumb"
...
<Breadcrumb>
 <BreadcrumbList>
  {/* ... */}
  <BreadcrumbItem>
   <BreadcrumbEllipsis />
  </BreadcrumbItem>
  {/* ... */}
 </BreadcrumbList>
</Breadcrumb>
```
Copy
### Link component
To use a custom link component from your routing library, you can use the `asChild` prop on `<BreadcrumbLink />`.
PreviewCode
Style: 
Open in Copy
```
import { Link } from "next/link"
...
<Breadcrumb>
 <BreadcrumbList>
  <BreadcrumbItem>
   <BreadcrumbLink asChild>
    <Link href="/">Home</Link>
   </BreadcrumbLink>
  </BreadcrumbItem>
  {/* ... */}
 </BreadcrumbList>
</Breadcrumb>
```
Copy
### Responsive
Here's an example of a responsive breadcrumb that composes `<BreadcrumbItem />` with `<BreadcrumbEllipsis />`, `<DropdownMenu />`, and `<Drawer />`.
It displays a dropdown on desktop and a drawer on mobile.
PreviewCode
Style: 
Open in Copy
BadgeButton
On This Page
  * Installation
  * Usage
  * Examples
    * Custom separator
    * Dropdown
    * Collapsed
    * Link component
    * Responsive


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
