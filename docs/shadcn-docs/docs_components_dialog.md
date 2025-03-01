Docs
Dialog
# Dialog
A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
Edit Profile
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add dialog

```

Copy
## Usage
```
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog"
```
Copy
```
<Dialog>
 <DialogTrigger>Open</DialogTrigger>
 <DialogContent>
  <DialogHeader>
   <DialogTitle>Are you absolutely sure?</DialogTitle>
   <DialogDescription>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
   </DialogDescription>
  </DialogHeader>
 </DialogContent>
</Dialog>
```
Copy
## Examples
### Custom close button
PreviewCode
Style: 
Copy
Share
## Notes
To activate the `Dialog` component from within a `Context Menu` or `Dropdown Menu`, you must encase the `Context Menu` or `Dropdown Menu` component in the `Dialog` component. For more information, refer to the linked issue here.
```
<Dialog>
 <ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
   <ContextMenuItem>Open</ContextMenuItem>
   <ContextMenuItem>Download</ContextMenuItem>
   <DialogTrigger asChild>
    <ContextMenuItem>
     <span>Delete</span>
    </ContextMenuItem>
   </DialogTrigger>
  </ContextMenuContent>
 </ContextMenu>
 <DialogContent>
  <DialogHeader>
   <DialogTitle>Are you absolutely sure?</DialogTitle>
   <DialogDescription>
    This action cannot be undone. Are you sure you want to permanently
    delete this file from our servers?
   </DialogDescription>
  </DialogHeader>
  <DialogFooter>
   <Button type="submit">Confirm</Button>
  </DialogFooter>
 </DialogContent>
</Dialog>
```
Copy
Date PickerDrawer
On This Page
  * Installation
  * Usage
  * Examples
    * Custom close button
  * Notes


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
