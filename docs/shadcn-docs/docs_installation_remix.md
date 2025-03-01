Docs
Remix
# Remix
Install and configure Remix.
### Create project
Start by creating a new Remix project using `create-remix`:
pnpmnpmyarnbun
```
pnpm create remix@latest my-app

```

Copy
### Run the CLI
Run the `shadcn-ui` init command to setup your project:
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest init

```

Copy
### Configure components.json
You will be asked a few questions to configure `components.json`:
```
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes
```
Copy
### App structure
**Note** : This app structure is only a suggestion. You can place the files wherever you want.
  * Place the UI components in the `app/components/ui` folder.
  * Your own components can be placed in the `app/components` folder.
  * The `app/lib` folder contains all the utility functions. We have a `utils.ts` where we define the `cn` helper.
  * The `app/tailwind.css` file contains the global CSS.


### Install Tailwind CSS
pnpmnpmyarnbun
```
pnpm add -D tailwindcss@latest autoprefixer@latest

```

Copy
Then we create a `postcss.config.js` file:
```
export default {
 plugins: {
  tailwindcss: {},
  autoprefixer: {},
 },
}
```
Copy
And finally we add the following to our `remix.config.js` file:
```
/** @type {import('@remix-run/dev').AppConfig} */
export default {
 ...
 tailwind: true,
 postcss: true,
 ...
};
```
Copy
### Add `tailwind.css` to your app
In your `app/root.tsx` file, import the `tailwind.css` file:
```
import styles from "./tailwind.css?url"
export const links: LinksFunction = () => [
 { rel: "stylesheet", href: styles },
 ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]
```
Copy
### That's it
You can now start adding components to your project.
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add button

```

Copy
The command above will add the `Button` component to your project. You can then import it like this:
```
import { Button } from "~/components/ui/button"
export default function Home() {
 return (
  <div>
   <Button>Click me</Button>
  </div>
 )
}
```
Copy
ViteAstro
On This Page
  * Create project
  * Run the CLI
  * Configure components.json
  * App structure
  * Install Tailwind CSS
  * Add tailwind.css to your app
  * That's it


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
