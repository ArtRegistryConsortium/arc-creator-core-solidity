Docs
Tabs
# Tabs
A set of layered sections of content—known as tab panels—that are displayed one at a time.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
AccountPassword
Account
Make changes to your account here. Click save when you're done.
Name
Username
Save changes
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add tabs

```

Copy
## Usage
```
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```
Copy
```
<Tabs defaultValue="account" className="w-[400px]">
 <TabsList>
  <TabsTrigger value="account">Account</TabsTrigger>
  <TabsTrigger value="password">Password</TabsTrigger>
 </TabsList>
 <TabsContent value="account">Make changes to your account here.</TabsContent>
 <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```
Copy
TableTextarea
On This Page
  * Installation
  * Usage


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
