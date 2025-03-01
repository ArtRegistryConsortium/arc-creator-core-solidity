Docs
Radio Group
# Radio Group
A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
Default
Comfortable
Compact
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add radio-group

```

Copy
## Usage
```
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
```
Copy
```
<RadioGroup defaultValue="option-one">
 <div className="flex items-center space-x-2">
  <RadioGroupItem value="option-one" id="option-one" />
  <Label htmlFor="option-one">Option One</Label>
 </div>
 <div className="flex items-center space-x-2">
  <RadioGroupItem value="option-two" id="option-two" />
  <Label htmlFor="option-two">Option Two</Label>
 </div>
</RadioGroup>
```
Copy
## Examples
### Form
PreviewCode
Style: 
Copy
Notify me about...
All new messages
Direct messages and mentions
Nothing
Submit
ProgressResizable
On This Page
  * Installation
  * Usage
  * Examples
    * Form


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
