Docs
Card
# Card
Displays a card with header, content, and footer.
PreviewCode
Style: 
Open in Copy
Create project
Deploy your new project in one-click.
Name
FrameworkSelect
CancelDeploy
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add card

```

Copy
## Usage
```
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card"
```
Copy
```
<Card>
 <CardHeader>
  <CardTitle>Card Title</CardTitle>
  <CardDescription>Card Description</CardDescription>
 </CardHeader>
 <CardContent>
  <p>Card Content</p>
 </CardContent>
 <CardFooter>
  <p>Card Footer</p>
 </CardFooter>
</Card>
```
Copy
## Examples
PreviewCode
Style: 
Open in Copy
Notifications
You have 3 unread messages.
Push Notifications
Send notifications to device.
Your call has been confirmed.
1 hour ago
You have a new message!
1 hour ago
Your subscription is expiring soon!
2 hours ago
Mark all as read
## Changelog
### 11-03-2024 a11y for title and description
  * Changed the `CardTitle` and `CardDescription` components to use `div` instead of `h3` and `p` to improve accessibility.


card.tsx
```
const CardTitle = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
 <div
  ref={ref}
  className={cn("font-semibold leading-none tracking-tight", className)}
  {...props}
 />
))
CardTitle.displayName = "CardTitle"
const CardDescription = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
 <div
  ref={ref}
  className={cn("text-sm text-muted-foreground", className)}
  {...props}
 />
))
CardDescription.displayName = "CardDescription"
```
Copy
CalendarCarousel
On This Page
  * Installation
  * Usage
  * Examples
  * Changelog
    * 11-03-2024 a11y for title and description


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
