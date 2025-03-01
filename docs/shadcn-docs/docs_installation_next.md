Docs
Next.js
# Next.js
Install and configure Next.js.
**Update:** We have added full support for React 19 and Tailwind v4 in the `canary` release. See the docs for Tailwind v4 for more information.
### Create project
Run the `init` command to create a new Next.js project or to setup an existing one:
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest init

```

Copy
You can use the `-d` flag for defaults i.e `new-york`, `zinc` and `yes` for the css variables.
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest init -d

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
ChangelogVite
On This Page
  * Create project
  * Configure components.json
  * That's it


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
