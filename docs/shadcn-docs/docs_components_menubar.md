Docs
Menubar
# Menubar
A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
FileEditViewProfiles
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add menubar

```

Copy
## Usage
```
import {
 Menubar,
 MenubarContent,
 MenubarItem,
 MenubarMenu,
 MenubarSeparator,
 MenubarShortcut,
 MenubarTrigger,
} from "@/components/ui/menubar"
```
Copy
```
<Menubar>
 <MenubarMenu>
  <MenubarTrigger>File</MenubarTrigger>
  <MenubarContent>
   <MenubarItem>
    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
   </MenubarItem>
   <MenubarItem>New Window</MenubarItem>
   <MenubarSeparator />
   <MenubarItem>Share</MenubarItem>
   <MenubarSeparator />
   <MenubarItem>Print</MenubarItem>
  </MenubarContent>
 </MenubarMenu>
</Menubar>
```
Copy
LabelNavigation Menu
On This Page
  * Installation
  * Usage


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
