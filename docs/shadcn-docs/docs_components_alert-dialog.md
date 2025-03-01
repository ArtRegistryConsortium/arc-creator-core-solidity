Docs
Alert Dialog
# Alert Dialog
A modal dialog that interrupts the user with important content and expects a response.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
Show Dialog
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add alert-dialog

```

Copy
## Usage
```
import {
 AlertDialog,
 AlertDialogAction,
 AlertDialogCancel,
 AlertDialogContent,
 AlertDialogDescription,
 AlertDialogFooter,
 AlertDialogHeader,
 AlertDialogTitle,
 AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
```
Copy
```
<AlertDialog>
 <AlertDialogTrigger>Open</AlertDialogTrigger>
 <AlertDialogContent>
  <AlertDialogHeader>
   <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
   <AlertDialogDescription>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
   </AlertDialogDescription>
  </AlertDialogHeader>
  <AlertDialogFooter>
   <AlertDialogCancel>Cancel</AlertDialogCancel>
   <AlertDialogAction>Continue</AlertDialogAction>
  </AlertDialogFooter>
 </AlertDialogContent>
</AlertDialog>
```
Copy
AlertAspect Ratio
On This Page
  * Installation
  * Usage


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
