Docs
Changelog
# Changelog
Latest updates and announcements.
## August 2024 - npx shadcn init
The new CLI is now available. It's a complete rewrite with a lot of new features and improvements. You can now install components, themes, hooks, utils and more using `npx shadcn add`.
This is a major step towards distributing code that you and your LLMs can access and use.
  1. First up, the cli now has support for all major React framework out of the box. Next.js, Remix, Vite and Laravel. And when you init into a new app, we update your existing Tailwind files instead of overriding.
  2. A component now ship its own dependencies. Take the accordion for example, it can define its Tailwind keyframes. When you add it to your project, we’ll update your tailwind.config.ts file accordingly.
  3. You can also install remote components using url. `npx shadcn add https://acme.com/registry/navbar.json`.
  4. We have also improve the init command. It does framework detection and can even init a brand new Next.js app in one command. `npx shadcn init`.
  5. We have created a new schema that you can use to ship your own component registry. And since it has support for urls, you can even use it to distribute private components.
  6. And a few more updates like better error handling and monorepo support.


You can try the new cli today.
pnpmnpmyarnbun
```
pnpm dlx shadcn init sidebar-01 login-01

```

Copy
### Update Your Project
To update an existing project to use the new CLI, update your `components.json` file to include import aliases for your **components** , **utils** , **ui** , **lib** and **hooks**.
components.json
```
{
 "$schema": "https://ui.shadcn.com/schema.json",
 "style": "new-york",
 "tailwind": {
  // ...
 },
 "aliases": {
  "components": "@/components",
  "utils": "@/lib/utils",
  "ui": "@/components/ui",
  "lib": "@/lib",
  "hooks": "@/hooks"
 }
}
```
Copy
If you're using a different import alias prefix eg `~`, replace `@` with your prefix.
## April 2024 - Introducing Lift Mode
We're introducing a new mode for Blocks called **Lift Mode**.
Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.
![Lift Mode](https://ui.shadcn.com/_next/image?url=%2Fimages%2Flift-mode-light.png&w=3840&q=75)![Lift Mode](https://ui.shadcn.com/_next/image?url=%2Fimages%2Flift-mode-dark.png&w=3840&q=75)View the blocks library
With Lift Mode, you'll be able to copy the smaller components that make up a block template, like cards, buttons, and forms, and paste them directly into your project.
Visit the Blocks page to try it out.
## March 2024 - Introducing Blocks
One of the most requested features since launch has been layouts: admin dashboards with sidebar, marketing page sections, cards and more.
**Today, we're launching**Blocks****.
![Admin dashboard](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fdashboard-1.jpg&w=1920&q=75)![Admin dashboard](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fdashboard-1-dark.jpg&w=1920&q=75)View the blocks library
Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.
We're starting with dashboard layouts and authentication pages, with plans to add more blocks in the coming weeks.
### Open Source
Blocks are open source. You can find the source on GitHub. Use them in your projects, customize them and contribute back.
![AI Playground](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fdashboard-2.jpg&w=1920&q=75)![AI Playground](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fdashboard-2-dark.jpg&w=1920&q=75)View the blocks library
### Request a Block
We're also introducing a "Request a Block" feature. If there's a specific block you'd like to see, simply create a request on GitHub and the community can upvote and build it.
![Settings Page](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fdashboard-3.jpg&w=1920&q=75)![Settings Page](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fdashboard-3-dark.jpg&w=1920&q=75)View the blocks library
### v0
If you have a v0 account, you can use the **Edit in v0** feature to open the code on v0 for prompting and further generation.
That's it. _Looking forward to seeing what you build with Blocks_.
## March 2024 - Breadcrumb and Input OTP
We've added a new Breadcrumb component and an Input OTP component.
### Breadcrumb
An accessible and flexible breadcrumb component. It has support for collapsed items, custom separators, bring-your-own routing `<Link />` and composable with other shadcn/ui components.
PreviewCode
Style: 
Copy
See more examples
### Input OTP
A fully featured input OTP component. It has support for numeric and alphanumeric codes, custom length, copy-paste and accessible. Input OTP is built on top of input-otp by @guilherme_rodz.
PreviewCode
Style: 
Copy
Read the docs
If you have a v0, the new components are available for generation.
## December 2023 - New components, CLI and more
We've added new components to shadcn/ui and made a lot of improvements to the CLI.
Here's a quick overview of what's new:
  * **Carousel** - A carousel component with motion, swipe gestures and keyboard support.
  * **Drawer** - A drawer component that looks amazing on mobile.
  * **Pagination** - A pagination component with page navigation, previous and next buttons.
  * **Resizable** - A resizable component for building resizable panel groups and layouts.
  * **Sonner** - The last toast component you'll ever need.
  * **CLI updates** - Support for custom **Tailwind prefix** and `tailwind.config.ts`.


### Carousel
We've added a fully featured carousel component with motion, swipe gestures and keyboard support. Built on top of Embla Carousel.
It has support for infinite looping, autoplay, vertical orientation, and more.
PreviewCode
Style: 
Copy
1
2
3
4
5
Previous slideNext slide
### Drawer
Oh the drawer component 😍. Built on top of Vaul by emilkowalski_.
Try opening the following drawer on mobile. It looks amazing!
PreviewCode
Style: 
Copy
Open Drawer
### Pagination
We've added a pagination component with page navigation, previous and next buttons. Simple, flexible and works with your framework's `<Link />` component.
PreviewCode
Style: 
Copy
### Resizable
Build resizable panel groups and layouts with this `<Resizable />` component.
PreviewCode
Style: 
Copy
One
Two
Three
`<Resizable />` is built using react-resizable-panels by bvaughn. It has support for mouse, touch and keyboard.
### Sonner
Another one by emilkowalski_. The last toast component you'll ever need. Sonner is now availabe in shadcn/ui.
PreviewCode
Style: 
Copy
Show Toast
### CLI updates
This has been one of the most requested features. You can now configure a custom Tailwind prefix and the cli will automatically prefix your utility classes when adding components.
This means you can now easily add shadcn/ui components to existing projects like Docusaurus, Nextra...etc. A drop-in for your existing design system with no conflict. 🔥
```
<AlertDialog className="tw-grid tw-gap-4 tw-border tw-bg-background tw-shadow-lg" />
```
Copy
It works with `cn`, `cva` and CSS variables.
The cli can now also detect `tailwind.config.ts` and add the TypeScript version of the config for you.
That's it. Happy Holidays.
## July 2023 - JavaScript
This project and the components are written in TypeScript. **We recommend using TypeScript for your project as well**.
However we provide a JavaScript version of the components, available via the cli.
```
Would you like to use TypeScript (recommended)? no
```
Copy
To opt-out of TypeScript, you can use the `tsx` flag in your `components.json` file.
components.json
```
{
 "style": "default",
 "tailwind": {
  "config": "tailwind.config.js",
  "css": "src/app/globals.css",
  "baseColor": "zinc",
  "cssVariables": true
 },
 "rsc": false,
 "tsx": false,
 "aliases": {
  "utils": "~/lib/utils",
  "components": "~/components"
 }
}
```
Copy
To configure import aliases, you can use the following `jsconfig.json`:
jsconfig.json
```
{
 "compilerOptions": {
  "paths": {
   "@/*": ["./*"]
  }
 }
}
```
Copy
## June 2023 - New CLI, Styles and more
I have a lot of updates to share with you today:
  * **New CLI** - Rewrote the CLI from scratch. You can now add components, dependencies and configure import paths.
  * **Theming** - Choose between using CSS variables or Tailwind CSS utility classes for theming.
  * **Base color** - Configure the base color for your project. This will be used to generate the default color palette for your components.
  * **React Server Components** - Opt out of using React Server Components. The CLI will automatically append or remove the `use client` directive.
  * **Styles** - Introducing a new concept called _Style_. A style comes with its own set of components, animations, icons and more.
  * **Exit animations** - Added exit animations to all components.
  * **Other updates** - New `icon` button size, updated `sheet` component and more.
  * **Updating your project** - How to update your project to get the latest changes.


### New CLI
I've been working on a new CLI for the past few weeks. It's a complete rewrite. It comes with a lot of new features and improvements.
### `init`
pnpmnpmyarnbun
```
pnpm dlx shadcn-ui@latest init

```

Copy
When you run the `init` command, you will be asked a few questions to configure `components.json`:
```
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes
```
Copy
This file contains all the information about your components: where to install them, the import paths, how they are styled...etc.
You can use this file to change the import path of a component, set a baseColor or change the styling method.
components.json
```
{
 "style": "default",
 "tailwind": {
  "config": "tailwind.config.ts",
  "css": "src/app/globals.css",
  "baseColor": "zinc",
  "cssVariables": true
 },
 "rsc": false,
 "aliases": {
  "utils": "~/lib/utils",
  "components": "~/components"
 }
}
```
Copy
This means you can now use the CLI with any directory structure including `src` and `app` directories.
### `add`
pnpmnpmyarnbun
```
pnpm dlx shadcn-ui@latest add

```

Copy
The `add` command is now much more capable. You can now add UI components but also import more complex components (coming soon).
The CLI will automatically resolve all components and dependencies, format them based on your custom config and add them to your project.
### `diff` (experimental)
pnpmnpmyarnbun
```
pnpm dlx shadcn-ui diff

```

Copy
We're also introducing a new `diff` command to help you keep track of upstream updates.
You can use this command to see what has changed in the upstream repository and update your project accordingly.
Run the `diff` command to get a list of components that have updates available:
pnpmnpmyarnbun
```
pnpm dlx shadcn-ui diff

```

Copy
```
The following components have updates available:
- button
 - /path/to/my-app/components/ui/button.tsx
- toast
 - /path/to/my-app/components/ui/use-toast.ts
 - /path/to/my-app/components/ui/toaster.tsx
```
Copy
Then run `diff [component]` to see the changes:
pnpmnpmyarnbun
```
pnpm dlx shadcn-ui diff alert

```

Copy
```
const alertVariants = cva(
- "relative w-full rounded-lg border",
+ "relative w-full pl-12 rounded-lg border"
)
```
Copy
### Theming with CSS Variables or Tailwind Colors
You can choose between using CSS variables or Tailwind CSS utility classes for theming.
When you add new components, the CLI will automatically use the correct theming methods based on your `components.json` configuration.
#### Utility classes
```
<div className="bg-zinc-950dark:bg-white" />
```
Copy
To use utility classes for theming set `tailwind.cssVariables` to `false` in your `components.json` file.
components.json
```
{
 "tailwind": {
  "config": "tailwind.config.js",
  "css": "app/globals.css",
  "baseColor": "slate",
  "cssVariables": false
 }
}
```
Copy
#### CSS Variables
```
<div className="bg-backgroundtext-foreground" />
```
Copy
To use CSS variables classes for theming set `tailwind.cssVariables` to `true` in your `components.json` file.
components.json
```
{
 "tailwind": {
  "config": "tailwind.config.js",
  "css": "app/globals.css",
  "baseColor": "slate",
  "cssVariables": true
 }
}
```
Copy
### Base color
You can now configure the base color for your project. This will be used to generate the default color palette for your components.
components.json
```
{
 "tailwind": {
  "config": "tailwind.config.js",
  "css": "app/globals.css",
  "baseColor": "zinc",
  "cssVariables": false
 }
}
```
Copy
Choose between `gray`, `neutral`, `slate`, `stone` or `zinc`.
If you have `cssVariables` set to `true`, we will set the base colors as CSS variables in your `globals.css` file. If you have `cssVariables` set to `false`, we will inline the Tailwind CSS utility classes in your components.
### React Server Components
If you're using a framework that does not support React Server Components, you can now opt out by setting `rsc` to `false`. We will automatically append or remove the `use client` directive when adding components.
components.json
```
{
 "rsc": false
}
```
Copy
### Styles
We are introducing a new concept called _Style_.
_You can think of style as the visual foundation: shapes, icons, animations & typography._ A style comes with its own set of components, animations, icons and more.
We are shipping two styles: `default` and `new-york` (with more coming soon).
![Default vs New York style](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fstyle.jpg&w=1920&q=75)
The `default` style is the one you are used to. It's the one we've been using since the beginning of this project. It uses `lucide-react` for icons and `tailwindcss-animate` for animations.
The `new-york` style is a new style. It ships with smaller buttons, cards with shadows and a new set of icons from Radix Icons.
When you run the `init` command, you will be asked which style you would like to use. This is saved in your `components.json` file.
components.json
```
{
 "style": "new-york"
}
```
Copy
### Theming
Start with a style as the base then theme using CSS variables or Tailwind CSS utility classes to completely change the look of your components.
![Style with theming](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fstyle-with-theming.jpg&w=1920&q=75)
### Exit animations
I added exit animations to all components. Click on the combobox below to see the subtle exit animation.
PreviewCode
Style: 
Copy
Select framework...
The animations can be customized using utility classes.
### Other updates
### Button
  * Added a new button size `icon`:


PreviewCode
Style: 
Copy
### Sheet
  * Renamed `position` to `side` to match the other elements.


PreviewCode
Style: 
Copy
toprightbottomleft
  * Removed the `size` props. Use `className="w-[200px] md:w-[450px]"` for responsive sizing.


### Updating your project
Since we follow a copy and paste approach, you will need to manually update your project to get the latest changes.
Note: we are working on a `diff` command to help you keep track of upstream updates.
### Add `components.json`
Creating a `components.json` file at the root:
components.json
```
{
 "style": "default",
 "rsc": true,
 "tailwind": {
  "config": "tailwind.config.js",
  "css": "app/globals.css",
  "baseColor": "slate",
  "cssVariables": true
 },
 "aliases": {
  "components": "@/components",
  "utils": "@/lib/utils"
 }
}
```
Copy
Update the values for `tailwind.css` and `aliases` to match your project structure.
### Button
Add the `icon` size to the `buttonVariants`:
components/ui/button.tsx
```
const buttonVariants = cva({
 variants: {
  size: {
   default: "h-10 px-4 py-2",
   sm: "h-9 rounded-md px-3",
   lg: "h-11 rounded-md px-8",
   icon: "h-10 w-10",
  },
 },
})
```
Copy
### Sheet
  1. Replace the content of `sheet.tsx` with the following:


components/ui/sheet.tsx
```
"use client"
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = ({
 className,
 ...props
}: SheetPrimitive.DialogPortalProps) => (
 <SheetPrimitive.Portal className={cn(className)} {...props} />
)
SheetPortal.displayName = SheetPrimitive.Portal.displayName
const SheetOverlay = React.forwardRef<
 React.ElementRef<typeof SheetPrimitive.Overlay>,
 React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
 <SheetPrimitive.Overlay
  className={cn(
   "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
   className
  )}
  {...props}
  ref={ref}
 />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
const sheetVariants = cva(
 "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
 {
  variants: {
   side: {
    top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
    bottom:
     "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
    left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
    right:
     "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
   },
  },
  defaultVariants: {
   side: "right",
  },
 }
)
interface SheetContentProps
 extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> {}
const SheetContent = React.forwardRef<
 React.ElementRef<typeof SheetPrimitive.Content>,
 SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
 <SheetPortal>
  <SheetOverlay />
  <SheetPrimitive.Content
   ref={ref}
   className={cn(sheetVariants({ side }), className)}
   {...props}
  >
   {children}
   <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
   </SheetPrimitive.Close>
  </SheetPrimitive.Content>
 </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName
const SheetHeader = ({
 className,
 ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
 <div
  className={cn(
   "flex flex-col space-y-2 text-center sm:text-left",
   className
  )}
  {...props}
 />
)
SheetHeader.displayName = "SheetHeader"
const SheetFooter = ({
 className,
 ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
 <div
  className={cn(
   "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
   className
  )}
  {...props}
 />
)
SheetFooter.displayName = "SheetFooter"
const SheetTitle = React.forwardRef<
 React.ElementRef<typeof SheetPrimitive.Title>,
 React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
 <SheetPrimitive.Title
  ref={ref}
  className={cn("text-lg font-semibold text-foreground", className)}
  {...props}
 />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName
const SheetDescription = React.forwardRef<
 React.ElementRef<typeof SheetPrimitive.Description>,
 React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
 <SheetPrimitive.Description
  ref={ref}
  className={cn("text-sm text-muted-foreground", className)}
  {...props}
 />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName
export {
 Sheet,
 SheetTrigger,
 SheetClose,
 SheetContent,
 SheetHeader,
 SheetFooter,
 SheetTitle,
 SheetDescription,
}
```
Copy
  1. Rename `position` to `side`


```
- <Sheet position="right" />
+ <Sheet side="right" />
```
Copy
### Thank you
I'd like to thank everyone who has been using this project, providing feedback and contributing to it. I really appreciate it. Thank you 🙏
FigmaNext.js
Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
