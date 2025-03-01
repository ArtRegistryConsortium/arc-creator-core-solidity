Docs
Button
# Button
Displays a button or a component that looks like a button.
PreviewCode
Style: 
Open in Copy
Button
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add button

```

Copy
## Usage
```
import { Button } from "@/components/ui/button"
```
Copy
```
<Button variant="outline">Button</Button>
```
Copy
## Link
You can use the `buttonVariants` helper to create a link that looks like a button.
```
import { buttonVariants } from "@/components/ui/button"
```
Copy
```
<Link className={buttonVariants({ variant: "outline" })}>Click here</Link>
```
Copy
Alternatively, you can set the `asChild` parameter and nest the link component.
```
<Button asChild>
 <Link href="/login">Login</Link>
</Button>
```
Copy
## Examples
### Primary
PreviewCode
Style: 
Open in Copy
Button
### Secondary
PreviewCode
Style: 
Open in Copy
Secondary
### Destructive
PreviewCode
Style: 
Open in Copy
Destructive
### Outline
PreviewCode
Style: 
Open in Copy
Outline
### Ghost
PreviewCode
Style: 
Open in Copy
Ghost
### Link
PreviewCode
Style: 
Open in Copy
Link
### Icon
PreviewCode
Style: 
Open in Copy
### With Icon
PreviewCode
Style: 
Open in Copy
Login with Email
### Loading
PreviewCode
Style: 
Open in Copy
Please wait
### As Child
PreviewCode
Style: 
Open in Copy
Login
## Changelog
### 2024-10-16 Classes for icons
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the button to automatically style icon inside the button.
Add the following classes to the `cva` call in your `button.tsx` file.
button.tsx
```
const buttonVariants = cva(
 "inline-flex ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
)
```
Copy
BreadcrumbCalendar
On This Page
  * Installation
  * Usage
  * Link
  * Examples
    * Primary
    * Secondary
    * Destructive
    * Outline
    * Ghost
    * Link
    * Icon
    * With Icon
    * Loading
    * As Child
  * Changelog
    * 2024-10-16 Classes for icons


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
