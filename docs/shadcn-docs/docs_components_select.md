Docs
Select
# Select
Displays a list of options for the user to pick from—triggered by a button.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
Select a fruit
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add select

```

Copy
## Usage
```
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"
```
Copy
```
<Select>
 <SelectTrigger className="w-[180px]">
  <SelectValue placeholder="Theme" />
 </SelectTrigger>
 <SelectContent>
  <SelectItem value="light">Light</SelectItem>
  <SelectItem value="dark">Dark</SelectItem>
  <SelectItem value="system">System</SelectItem>
 </SelectContent>
</Select>
```
Copy
## Examples
### Scrollable
PreviewCode
Style: 
Open in Copy
Select a timezone
### Form
PreviewCode
Style: 
Copy
EmailSelect a verified email to display
You can manage email addresses in your email settings.
Submit
Scroll AreaSeparator
On This Page
  * Installation
  * Usage
  * Examples
    * Scrollable
    * Form


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
