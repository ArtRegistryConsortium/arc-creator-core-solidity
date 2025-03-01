Docs
Drawer
# Drawer
A drawer component for React.
Docs
PreviewCode
Style: 
Open in Copy
Open Drawer
## About
Drawer is built on top of Vaul by emilkowalski_.
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add drawer

```

Copy
## Usage
```
import {
 Drawer,
 DrawerClose,
 DrawerContent,
 DrawerDescription,
 DrawerFooter,
 DrawerHeader,
 DrawerTitle,
 DrawerTrigger,
} from "@/components/ui/drawer"
```
Copy
```
<Drawer>
 <DrawerTrigger>Open</DrawerTrigger>
 <DrawerContent>
  <DrawerHeader>
   <DrawerTitle>Are you absolutely sure?</DrawerTitle>
   <DrawerDescription>This action cannot be undone.</DrawerDescription>
  </DrawerHeader>
  <DrawerFooter>
   <Button>Submit</Button>
   <DrawerClose>
    <Button variant="outline">Cancel</Button>
   </DrawerClose>
  </DrawerFooter>
 </DrawerContent>
</Drawer>
```
Copy
## Examples
### Responsive Dialog
You can combine the `Dialog` and `Drawer` components to create a responsive dialog. This renders a `Dialog` component on desktop and a `Drawer` on mobile.
PreviewCode
Style: 
Copy
Edit Profile
DialogDropdown Menu
On This Page
  * About
  * Installation
  * Usage
  * Examples
    * Responsive Dialog


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
