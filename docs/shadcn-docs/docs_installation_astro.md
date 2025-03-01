Docs
Astro
# Astro
Install and configure Astro.
**Update:** We have added full support for React 19 and Tailwind v4 in the `canary` release. See the docs for Tailwind v4 for more information.
### Create project
Start by creating a new Astro project:
pnpmnpmyarnbun
```
pnpm create astro@latest

```

Copy
### Configure your Astro project
You will be asked a few questions to configure your project:
```
- Where should we create your new project? ./your-app-name
- How would you like to start your new project? Choose a template
- Do you plan to write TypeScript? Yes
- How strict should TypeScript be? Strict
- Install dependencies? Yes
- Initialize a new git repository? (optional) Yes/No
```
Copy
### Add React to your project
Install React using the Astro CLI:
pnpmnpmyarnbun
```
pnpm dlx astro add react

```

Copy
Answer `Yes` to all the question prompted by the CLI when installing React.
### Add Tailwind CSS to your project
pnpmnpmyarnbun
```
pnpm dlx astro add tailwind

```

Copy
### Create a `styles/globals.css` file in the `src` folder.
styles/globals.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Copy
### Import the `globals.css` file
Import the `styles/globals.css` file in the `src/pages/index.astro` file:
src/pages/index.astro
```
---
import '@/styles/globals.css'
---
```
Copy
### Update `astro.config.mjs` and set `applyBaseStyles` to `false`
To prevent serving the Tailwind base styles twice, we need to tell Astro not to apply the base styles, since we already include them in our own `globals.css` file. To do this, set the `applyBaseStyles` config option for the tailwind plugin in `astro.config.mjs` to `false`.
astro.config.mjs
```
export default defineConfig({
 integrations: [
  tailwind({
   applyBaseStyles: false,
  }),
 ],
})
```
Copy
### Edit tsconfig.json file
Add the following code to the `tsconfig.json` file to resolve paths:
tsconfig.json
```
{
 "compilerOptions": {
  // ...
  "baseUrl": ".",
  "paths": {
   "@/*": [
    "./src/*"
   ]
  }
  // ...
 }
}
```
Copy
### Run the CLI
Run the `shadcn` init command to setup your project:
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest init

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
---
import { Button } from "@/components/ui/button"
---
<html lang="en">
	<head>
		<title>Astro</title>
	</head>
	<body>
		<Button>Hello World</Button>
	</body>
</html>
```
Copy
RemixLaravel
On This Page
  * Create project
  * Configure your Astro project
  * Add React to your project
  * Add Tailwind CSS to your project
  * Edit tsconfig.json file
  * Run the CLI
  * That's it


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
