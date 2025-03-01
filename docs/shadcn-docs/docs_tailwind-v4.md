Docs
An update on Tailwind v4
# An update on Tailwind v4
How to use shadcn/ui with Tailwind v4.
It’s here! Tailwind v4 and React 19. Ready for you to try out. It's available in the `canary` release of the CLI. You can start using it today.
## TLDR
If you're starting a new project with Tailwind v4 and React 19, use the `canary` version of the command-line:
pnpmnpmyarnbun
```
pnpm dlx shadcn@canary init

```

Copy
## What's New
  * The CLI (`canary`) can now initialize projects with Tailwind v4.
  * Full support for the new `@theme` directive and `@theme inline` option.
  * All components are updated for Tailwind v4 and React 19.
  * We’ve removed the forwardRefs and adjusted the types.
  * Every primitive now has a `data-slot` attribute for styling.
  * We've fixed and cleaned up the style of the components.
  * We're deprecating the `toast` component in favor of `sonner`.
  * Buttons now use the default cursor.
  * We're deprecating the `default` style. New projects will use `new-york`.


**Note: this is non-breaking. Your existing apps with Tailwind v3 and React 18 will still work. When you add new components, they'll still be in v3 and React 18 until you upgrade. Only new projects start with Tailwind v4 and React 19.**
## What's Coming Next
The following is still being worked on. I'll post updates soon.
  * Migrating colors to OKLCH.
  * Fix and improve animations.


## See it Live
I put together a demo with all the updated components here: https://v4.shadcn.com
Take a look and test the components. If you find any bugs, leave a comment on the GitHub issue.
  * The code for the app is here: https://github.com/shadcn-ui/ui/tree/main/apps/v4
  * The v4 components can be found here: https://github.com/shadcn-ui/ui/tree/main/apps/v4/registry/new-york-v4/ui


## Try It Out
You can test Tailwind v4 + React 19 today using the `canary` release of the CLI.
```
pnpm dlx shadcn@canary init
```
Copy
I'm still working on the docs, but here's a quick guide to testing new projects:
### Next.js
  1. Start a new project with Tailwind v4 and React 19:


```
pnpm create next-app@canary --tailwind --eslint --typescript --app --no-src-dir
```
Copy
  1. Init shadcn/ui. This will create your `components.json` and set up your CSS variables:


```
pnpm dlx shadcn@canary init
```
Copy
  1. You should now be able to add components:


```
pnpm dlx shadcn@canary add button
```
Copy
### Vite
  1. Create a new project with React 19:


```
pnpm create vite --template=react-ts
```
Copy
  1. Follow the official guide to add Tailwind CSS: https://tailwindcss.com/docs/installation/using-vite
  2. Add path aliases to `tsconfig.json`:


tsconfig.json
```
{
 "files": [],
 "references": [
  { "path": "./tsconfig.app.json" },
  { "path": "./tsconfig.node.json" }
 ],
 "compilerOptions": {
  "baseUrl": ".",
  "paths": {
   "@/*": ["./src/*"]
  }
 }
}
```
Copy
  1. Add path aliases to `tsconfig.app.json`:


tsconfig.app.json
```
{
 "compilerOptions": {
  "baseUrl": ".",
  "paths": {
   "@/*": ["./src/*"]
  }
 }
}
```
Copy
  1. Install `@types/node`:


```
pnpm add -D @types/node
```
Copy
  1. Add resolve alias config to `vite.config.ts`:


vite.config.ts
```
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
export default defineConfig({
 plugins: [react(), tailwindcss()],
 resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
  },
 },
})
```
Copy
  1. Init `shadcn/ui`. This will create your `components.json` and set up your CSS variables:


```
pnpm dlx shadcn@canary init
```
Copy
  1. You should now be able to add components:


```
pnpm dlx shadcn@canary add button
```
Copy
(Note: If you need help with other frameworks, drop a comment below. I'll update the guide)
## Upgrade Your Project
One of the major advantages of using `shadcn/ui` is that the code you end up with is exactly what you'd write yourself. There are no hidden abstractions.
This means when a dependency has a new release, you can just follow the official upgrade paths.
Here's how to upgrade your existing projects (full docs are on the way):
### 1. Follow the Tailwind v4 Upgrade Guide
  * Upgrade to Tailwind v4 by following the official upgrade guide: https://tailwindcss.com/docs/upgrade-guide
  * Use the `@tailwindcss/upgrade@next` codemod to remove deprecated utility classes and update tailwind config.


### 2. Update your CSS variables
The codemod will migrate your CSS variables as references under the `@theme` directive.
```
@layer base {
 :root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
 }
}
@theme {
 --color-background: hsl(var(--background));
 --color-foreground: hsl(var(--foreground));
}
```
Copy
This works. But to make it easier to work with colors and other variables, we'll need to move the `hsl` wrappers and use `@theme inline`.
Here's how you do it:
  1. Move `:root` and `.dark` out of the `@layer` base.
  2. Wrap the color values in `hsl()`
  3. Add the `inline` option to `@theme` i.e `@theme inline {`
  4. Remove the `hsl()` wrappers from `@theme`


```
:root {
 --background: hsl(0 0% 100%); // <-- Wrap in hsl
 --foreground: hsl(0 0% 3.9%);
}
dark {
 --background: hsl(0 0% 3.9%); // <-- Wrap in hsl
 --foreground: hsl(0 0% 98%);
}
@theme inline {
 --color-background: var(--background); // <-- Remove hsl
 --color-foreground: var(--foreground);
}
```
Copy
This change makes it much simpler to access your theme variables in both utility classes and outside of CSS for eg. using color values in JavaScript.
### 3. Update colors for charts
Now that the theme colors come with `hsl()`, you can remove the wrapper in your `chartConfig`:
```
const chartConfig = {
 desktop: {
  label: "Desktop",
-  color: "hsl(var(--chart-1))",
+  color: "var(--chart-1)",
 },
 mobile: {
  label: "Mobile",
-  color: "hsl(var(--chart-2))",
+  color: "var(--chart-2)",
 },
} satisfies ChartConfig
```
Copy
### 4. Use new `size-*` utility
The new `size-*` utility (added in Tailwind v3.4), is now fully supported by `tailwind-merge`. You can replace `w-* h-*` with the new `size-*` utility:
```
- w-4 h-4
+ size-4
```
Copy
### 5. Update your dependencies
```
pnpm up "@radix-ui/*" cmdk lucide-react recharts tailwind-merge clsx --latest
```
Copy
### 6. Remove forwardRef
You can use the `preset-19` codemod to migrate your `forwardRef` to props or manually update the primitives.
For the codemod, see https://react.dev/blog/2024/04/25/react-19-upgrade-guide#typescript-changes.
If you want to do it manually, here's how to do it step by step:
  1. Replace `React.forwardRef<...>` with `React.ComponentProps<...>`
  2. Remove `ref={ref}` from the component.
  3. Add a `data-slot` attribute. This will come in handy for styling with Tailwind.
  4. You can optionally convert to a named function and remove the `displayName`.


#### Before
```
const AccordionItem = React.forwardRef<
 React.ElementRef<typeof AccordionPrimitive.Item>,
 React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
 <AccordionPrimitive.Item
  ref={ref}
  className={cn("border-b last:border-b-0", className)}
  {...props}
 />
))
AccordionItem.displayName = "AccordionItem"
```
Copy
#### After
```
function AccordionItem({
 className,
 ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
 return (
  <AccordionPrimitive.Item
   data-slot="accordion-item"
   className={cn("border-b last:border-b-0", className)}
   {...props}
  />
 )
}
```
Copy
## Share Your Feedback
We’d love for you to test these updates and share your feedback! If you run into anything weird or have suggestions, add a comment below.
MonorepoNext.js 15 + React 19
On This Page
  * TLDR
  * What's New
  * What's Coming Next
  * See it Live
  * Try It Out
    * Next.js
    * Vite
  * Upgrade Your Project
    * 1. Follow the Tailwind v4 Upgrade Guide
    * 2. Update your CSS variables
    * 3. Update colors for charts
    * 4. Use new size-* utility
    * 5. Update your dependencies
    * 6. Remove forwardRef
  * Share Your Feedback


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
