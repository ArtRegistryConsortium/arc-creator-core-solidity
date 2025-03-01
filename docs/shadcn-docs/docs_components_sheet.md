Docs
Sheet
# Sheet
Extends the Dialog component to display content that complements the main content of the screen.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
Open
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add sheet

```

Copy
### Usage
```
import {
 Sheet,
 SheetContent,
 SheetDescription,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from "@/components/ui/sheet"
```
Copy
```
<Sheet>
 <SheetTrigger>Open</SheetTrigger>
 <SheetContent>
  <SheetHeader>
   <SheetTitle>Are you absolutely sure?</SheetTitle>
   <SheetDescription>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
   </SheetDescription>
  </SheetHeader>
 </SheetContent>
</Sheet>
```
Copy
## Examples
### Side
Use the `side` property to `<SheetContent />` to indicate the edge of the screen where the component will appear. The values can be `top`, `right`, `bottom` or `left`.
PreviewCode
Style: 
Copy
toprightbottomleft
### Size
You can adjust the size of the sheet using CSS classes:
```
<Sheet>
 <SheetTrigger>Open</SheetTrigger>
 <SheetContent className="w-[400px] sm:w-[540px]">
  <SheetHeader>
   <SheetTitle>Are you absolutely sure?</SheetTitle>
   <SheetDescription>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
   </SheetDescription>
  </SheetHeader>
 </SheetContent>
</Sheet>
```
Copy
SeparatorSidebar
On This Page
  * Installation
    * Usage
  * Examples
    * Side
    * Size


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
