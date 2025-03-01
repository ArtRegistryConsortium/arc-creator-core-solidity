Docs
Gatsby
# Gatsby
Install and configure Gatsby.
**Update:** We have added full support for React 19 and Tailwind v4 in the `canary` release. See the docs for Tailwind v4 for more information.
### Create project
Start by creating a new Gatsby project using `create-gatsby`:
```
npm init gatsby
```
Copy
### Configure your Gatsby project to use TypeScript and Tailwind CSS
You will be asked a few questions to configure your project:
```
✔ What would you like to call your site?
· your-app-name
✔ What would you like to name the folder where your site will be created?
· your-app-name
✔ Will you be using JavaScript or TypeScript?
· TypeScript
✔ Will you be using a CMS?
· Choose whatever you want
✔ Would you like to install a styling system?
· Tailwind CSS
✔ Would you like to install additional features with other plugins?
· Choose whatever you want
✔ Shall we do this? (Y/n) · Yes
```
Copy
### Edit tsconfig.json file
Add the following code to the `tsconfig.json` file to resolve paths:
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
### Create gatsby-node.ts file
Create a `gatsby-node.ts` file at the root of your project if it doesn’t already exist, and add the code below to the `gatsby-node` file so your app can resolve paths:
```
import * as path from "path"
export const onCreateWebpackConfig = ({ actions }) => {
 actions.setWebpackConfig({
  resolve: {
   alias: {
    "@/components": path.resolve(__dirname, "src/components"),
    "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
   },
  },
 })
}
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
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › ./src/styles/globals.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no
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
import { Button } from "@/components/ui/button"
export default function Home() {
 return (
  <div>
   <Button>Click me</Button>
  </div>
 )
}
```
Copy
Tanstack StartManual
On This Page
  * Create project
  * Configure your Gatsby project to use TypeScript and Tailwind CSS
  * Edit tsconfig.json file
  * Create gatsby-node.ts file
  * Run the CLI
  * Configure components.json
  * That's it


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
