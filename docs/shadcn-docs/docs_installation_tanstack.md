Docs
TanStack Start
# TanStack Start
Install and configure TanStack Start.
**Note:** This guide is for TanStack Start and Tailwind v4. If you are using Tailwind v3, consider the Basic Starter template. **TanStack Start** works with the **canary** version of `shadcn`.
## TanStack Start + Tailwind v4
### Create project
Start by creating a new TanStack Start project by following the Build a Project from Scratch guide on the TanStack Start website.
### Add Tailwind
Install `tailwindcss` and its dependencies.
pnpmnpmyarnbun
```
pnpm add tailwindcss @tailwindcss/postcss postcss

```

Copy
### Create postcss.config.ts
Create a `postcss.config.ts` file at the root of your project.
postcss.config.ts
```
export default {
 plugins: {
  "@tailwindcss/postcss": {},
 },
}
```
Copy
### Create `app/styles/app.css`
Create an `app.css` file in the `app/styles` directory and import `tailwindcss`
app/styles/app.css
```
@import "tailwindcss" source("../");
```
Copy
### Import `app.css`
app/routes/__root.tsx
```
import type { ReactNode } from "react"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import { Meta, Scripts } from "@tanstack/start"
import appCss from "@/styles/app.css?url"
export const Route = createRootRoute({
 head: () => ({
  meta: [
   {
    charSet: "utf-8",
   },
   {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
   },
   {
    title: "TanStack Start Starter",
   },
  ],
  links: [
   {
    rel: "stylesheet",
    href: appCss,
   },
  ],
 }),
 component: RootComponent,
})
```
Copy
### Edit tsconfig.json file
Add the following code to the `tsconfig.json` file to resolve paths.
tsconfig.json
```
{
 "compilerOptions": {
  "jsx": "react-jsx",
  "moduleResolution": "Bundler",
  "module": "ESNext",
  "target": "ES2022",
  "skipLibCheck": true,
  "strictNullChecks": true,
  "baseUrl": ".",
  "paths": {
   "@/*": ["./app/*"]
  }
 }
}
```
Copy
### Run the CLI
Run the `shadcn` init command to setup your project:
pnpmnpmyarnbun
```
pnpm dlx shadcn@canary init -d

```

Copy
This will create a `components.json` file in the root of your project and configure CSS variables inside `app/styles/app.css`.
### That's it
You can now start adding components to your project.
pnpmnpmyarnbun
```
pnpm dlx shadcn@canary add button

```

Copy
The command above will add the `Button` component to your project. You can then import it like this:
app/routes/index.tsx
```
import { Button } from "@/components/ui/button"
function Home() {
 const router = useRouter()
 const state = Route.useLoaderData()
 return (
  <div>
   <Button>Click me</Button>
  </div>
 )
}
```
Copy
## Basic Starter
The Basic Starter template has Tailwind v3 already configured.
### Run the CLI
Run the `shadcn` init command to setup your project:
pnpmnpmyarnbun
```
pnpm dlx shadcn@canary init -d

```

Copy
This will create a `components.json` file in the root of your project and configure CSS variables inside `app/styles/app.css`.
### That's it
You can now start adding components to your project.
pnpmnpmyarnbun
```
pnpm dlx shadcn@canary add button

```

Copy
The command above will add the `Button` component to your project. You can then import it like this:
app/routes/index.tsx
```
import { Button } from "@/components/ui/button"
function Home() {
 const router = useRouter()
 const state = Route.useLoaderData()
 return (
  <div>
   <Button>Click me</Button>
  </div>
 )
}
```
Copy
LaravelGatsby
On This Page
  * TanStack Start + Tailwind v4
    * Create project
    * Add Tailwind
    * Create postcss.config.ts
    * Create app/styles/app.css
    * Import app.css
    * Edit tsconfig.json file
    * Run the CLI
    * That's it
  * Basic Starter
    * Run the CLI
    * That's it


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
