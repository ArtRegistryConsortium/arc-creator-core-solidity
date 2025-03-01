Docs
Accordion
# Accordion
A vertically stacked set of interactive headings that each reveal a section of content.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
### Is it accessible?
### Is it styled?
### Is it animated?
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add accordion

```

Copy
## Usage
```
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion"
```
Copy
```
<Accordion type="single" collapsible>
 <AccordionItem value="item-1">
  <AccordionTrigger>Is it accessible?</AccordionTrigger>
  <AccordionContent>
   Yes. It adheres to the WAI-ARIA design pattern.
  </AccordionContent>
 </AccordionItem>
</Accordion>
```
Copy
ManualAlert
On This Page
  * Installation
  * Usage


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
