Docs
Aspect Ratio
# Aspect Ratio
Displays content within a desired ratio.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
![Photo by Drew Beamer](https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1588345921523-c2dcdb7f1dcd%3Fw%3D800%26dpr%3D2%26q%3D80&w=3840&q=75)
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add aspect-ratio

```

Copy
## Usage
```
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
```
Copy
```
<div className="w-[450px]">
 <AspectRatio ratio={16 / 9}>
  <Image src="..." alt="Image" className="rounded-md object-cover" />
 </AspectRatio>
</div>
```
Copy
Alert DialogAvatar
On This Page
  * Installation
  * Usage


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
