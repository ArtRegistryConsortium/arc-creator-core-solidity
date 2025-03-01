Docs
Navigation Menu
# Navigation Menu
A collection of links for navigating websites.
DocsAPI Reference
PreviewCode
Style: 
Copy
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add navigation-menu

```

Copy
## Usage
```
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuIndicator,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
```
Copy
```
<NavigationMenu>
 <NavigationMenuList>
  <NavigationMenuItem>
   <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
   <NavigationMenuContent>
    <NavigationMenuLink>Link</NavigationMenuLink>
   </NavigationMenuContent>
  </NavigationMenuItem>
 </NavigationMenuList>
</NavigationMenu>
```
Copy
## Examples
### Link Component
When using the Next.js `<Link />` component, you can use `navigationMenuTriggerStyle()` to apply the correct styles to the trigger.
```
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
```
Copy
```
<NavigationMenuItem>
 <Link href="/docs" legacyBehavior passHref>
  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
   Documentation
  </NavigationMenuLink>
 </Link>
</NavigationMenuItem>
```
Copy
See also the Radix UI documentation for handling client side routing.
MenubarPagination
On This Page
  * Installation
  * Usage
  * Examples
    * Link Component


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
