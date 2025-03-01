Docs
Installation
# Installation
How to install dependencies and structure your app.
## Frameworks
Next.js
Next.js
Vite
Vite
Remix
Remix
Astro
Astro
Laravel
TanStack Start
Gatsby
Gatsby
React
Manual
## TypeScript
This project and the components are written in TypeScript. We recommend using TypeScript for your project as well.
However we provide a JavaScript version of the components as well. The JavaScript version is available via the cli.
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
Introductioncomponents.json
On This Page
  * Frameworks
  * TypeScript


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
