Docs
Laravel
# Laravel
Install and configure Laravel with Inertia
**Update:** We have added full support for React 19 and Tailwind v4 in the `canary` release. See the docs for Tailwind v4 for more information.
### Create project
Start by creating a new Laravel project with Inertia and React using the laravel installer `laravel new my-app`:
```
laravel new my-app --typescript --breeze --stack=react --git --no-interaction
```
Copy
### Run the CLI
Run the `shadcn` init command to setup your project:
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest init

```

Copy
### Configure components.json
You will be asked a few questions to configure `components.json`:
```
Which style would you like to use?
Which color would you like to use as base color?
Do you want to use CSS variables for colors? › yes
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
import { Button } from "@/Components/ui/button"
export default function Home() {
 return (
  <div>
   <Button>Click me</Button>
  </div>
 )
}
```
Copy
AstroTanstack Start
On This Page
  * Create project
  * Run the CLI
  * Configure components.json
  * That's it


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
