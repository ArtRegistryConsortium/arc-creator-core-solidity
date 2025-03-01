Docs
Dropdown Menu
# Dropdown Menu
Displays a menu to the user — such as a set of actions or functions — triggered by a button.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
Open
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add dropdown-menu

```

Copy
## Usage
```
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
```
Copy
```
<DropdownMenu>
 <DropdownMenuTrigger>Open</DropdownMenuTrigger>
 <DropdownMenuContent>
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
  <DropdownMenuSeparator />
  <DropdownMenuItem>Profile</DropdownMenuItem>
  <DropdownMenuItem>Billing</DropdownMenuItem>
  <DropdownMenuItem>Team</DropdownMenuItem>
  <DropdownMenuItem>Subscription</DropdownMenuItem>
 </DropdownMenuContent>
</DropdownMenu>
```
Copy
## Examples
### Checkboxes
PreviewCode
Style: 
Open in Copy
Open
### Radio Group
PreviewCode
Style: 
Open in Copy
Open
## Changelog
### 2024-10-16 Classes for icons
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `DropdownMenuItem` to automatically style icon inside the dropdown menu item.
Add the following classes to the `DropdownMenuItem` in your `dropdown-menu.tsx` file.
dropdown-menu.tsx
```
const DropdownMenuItem = React.forwardRef<
 React.ElementRef<typeof DropdownMenuPrimitive.Item>,
 React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
 }
>(({ className, inset, ...props }, ref) => (
 <DropdownMenuPrimitive.Item
  ref={ref}
  className={cn(
   "relative ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
   inset && "pl-8",
   className
  )}
  {...props}
 />
))
```
Copy
### 2024-10-25 Classes for `<DropdownMenuSubTrigger />`
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `<DropdownMenuSubTrigger />` to automatically style icon inside.
Add the following classes to the `cva` call in your `dropdown-menu.tsx` file.
dropdown-menu.tsx
```
<DropdownMenuPrimitive.SubTrigger
 ref={ref}
 className={cn(
  "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  inset && "pl-8",
  className
 )}
 {...props}
>
 {/* ... */}
</DropdownMenuPrimitive.SubTrigger>
```
Copy
DrawerForm
On This Page
  * Installation
  * Usage
  * Examples
    * Checkboxes
    * Radio Group
  * Changelog
    * 2024-10-16 Classes for icons
    * 2024-10-25 Classes for <DropdownMenuSubTrigger />


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
