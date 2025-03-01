Docs
Monorepo
# Monorepo
Using shadcn/ui components and CLI in a monorepo.
**Note:** We're releasing monorepo support in the CLI as **experimental**. Help us improve it by testing it out and sending feedback. If you have any questions, please reach out to us.
Until now, using shadcn/ui in a monorepo was a bit of a pain. You could add components using the CLI, but you had to manage where the components were installed and manually fix import paths.
With the new monorepo support in the CLI, we've made it a lot easier to use shadcn/ui in a monorepo.
The CLI now understands the monorepo structure and will install the components, dependencies and registry dependencies to the correct paths and handle imports for you.
## Getting started
### Create a new monorepo project
To create a new monorepo project, run the `init` command. You will be prompted to select the type of project you are creating.
pnpmnpmyarnbun
```
pnpm dlx shadcn@canary init

```

Copy
Select the `Next.js (Monorepo)` option.
```
? Would you like to start a new project?
  Next.js
❯  Next.js (Monorepo)
```
Copy
This will create a new monorepo project with two workspaces: `web` and `ui`, and Turborepo as the build system.
Everything is set up for you, so you can start adding components to your project.
### Add components to your project
To add components to your project, run the `add` command **in the path of your app**.
```
cd apps/web
```
Copy
pnpmnpmyarnbun
```
pnpm dlx shadcn@canary add [COMPONENT]

```

Copy
The CLI will figure out what type of component you are adding and install the correct files to the correct path.
For example, if you run `npx shadcn@canary add button`, the CLI will install the button component under `packages/ui` and update the import path for components in `apps/web`.
If you run `npx shadcn@canary add login-01`, the CLI will install the `button`, `label`, `input` and `card` components under `packages/ui` and the `login-form` component under `apps/web/components`.
### Importing components
You can import components from the `@workspace/ui` package as follows:
```
import { Button } from "@workspace/ui/components/button"
```
Copy
You can also import hooks and utilities from the `@workspace/ui` package.
```
import { useTheme } from "@workspace/ui/hooks/use-theme"
import { cn } from "@workspace/ui/lib/utils"
```
Copy
## File Structure
When you create a new monorepo project, the CLI will create the following file structure:
```
apps
└── web     # Your app goes here.
  ├── app
  │  └── page.tsx
  ├── components
  │  └── login-form.tsx
  ├── components.json
  └── package.json
packages
└── ui     # Your components and dependencies are installed here.
  ├── src
  │  ├── components
  │  │  └── button.tsx
  │  ├── hooks
  │  ├── lib
  │  │  └── utils.ts
  │  └── styles
  │    └── globals.css
  ├── components.json
  └── package.json
package.json
turbo.json
```
Copy
## Requirements
  1. Every workspace must have a `components.json` file. A `package.json` file tells npm how to install the dependencies. A `components.json` file tells the CLI how and where to install components.
  2. The `components.json` file must properly define aliases for the workspace. This tells the CLI how to import components, hooks, utilities, etc.


apps/web/components.json
```
{
 "$schema": "https://ui.shadcn.com/schema.json",
 "style": "new-york",
 "rsc": true,
 "tsx": true,
 "tailwind": {
  "config": "../../packages/ui/tailwind.config.ts",
  "css": "../../packages/ui/src/styles/globals.css",
  "baseColor": "zinc",
  "cssVariables": true
 },
 "iconLibrary": "lucide",
 "aliases": {
  "components": "@/components",
  "hooks": "@/hooks",
  "lib": "@/lib",
  "utils": "@workspace/ui/lib/utils",
  "ui": "@workspace/ui/components"
 }
}
```
Copy
packages/ui/components.json
```
{
 "$schema": "https://ui.shadcn.com/schema.json",
 "style": "new-york",
 "rsc": true,
 "tsx": true,
 "tailwind": {
  "config": "tailwind.config.ts",
  "css": "src/styles/globals.css",
  "baseColor": "zinc",
  "cssVariables": true
 },
 "iconLibrary": "lucide",
 "aliases": {
  "components": "@workspace/ui/components",
  "utils": "@workspace/ui/lib/utils",
  "hooks": "@workspace/ui/hooks",
  "lib": "@workspace/ui/lib",
  "ui": "@workspace/ui/components"
 }
}
```
Copy
  1. Ensure you have the same `style`, `iconLibrary` and `baseColor` in both `components.json` files.


By following these requirements, the CLI will be able to install ui components, blocks, libs and hooks to the correct paths and handle imports for you.
## Help us improve monorepo support
We're releasing monorepo support in the CLI as **experimental**. Help us improve it by testing it out and sending feedback.
If you have any questions, please reach out to us on GitHub Discussions.
CLITailwind v4
On This Page
  * Getting started
    * Create a new monorepo project
    * Add components to your project
    * Importing components
  * File Structure
  * Requirements
  * Help us improve monorepo support


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
