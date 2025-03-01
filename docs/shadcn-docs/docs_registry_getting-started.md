Docs
Getting Started
# Getting Started
Learn how to get setup and run your own component registry.
This guide will walk you through the process of setting up your own component registry.
It assumes you already have a project with components and would like to turn it into a registry.
If you're starting a new registry project, you can use the registry template as a starting point. We have already configured it for you.
## registry.json
The `registry.json` file is only required if you're using the `shadcn` CLI to build your registry.
If you're using a different build system, you can skip this step as long as your build system produces valid JSON files that conform to the registry-item schema specification.
### Add a registry.json file
Create a `registry.json` file in the root of your project. Your project can be a Next.js, Remix, Vite, or any other project that supports React.
registry.json
```
{
 "$schema": "https://ui.shadcn.com/schema/registry.json",
 "name": "acme",
 "homepage": "https://acme.com",
 "items": [
  // ...
 ]
}
```
Copy
This `registry.json` file must conform to the registry schema specification.
## Add a registry item
### Create your component
Add your first component. Here's an example of a simple `<HelloWorld />` component:
registry/hello-world/hello-world.tsx
```
import { Button } from "@/components/ui/button"
export function HelloWorld() {
 return <Button>Hello World</Button>
}
```
Copy
**Note:** This example places the component in the `registry` directory. You can place it anywhere in your project as long as you set the correct path in the `registry.json` file.
```
registry
└── hello-world
  └── hello-world.tsx
```
Copy
**Important:** If you're placing your component in a custom directory, make sure it is configured in your `tailwind.config.ts` file.
```
// tailwind.config.ts
export default {
 content: ["./registry/**/*.{js,ts,jsx,tsx}"],
}
```
Copy
### Add your component to the registry
To add your component to the registry, you need to add your component definition to `registry.json`.
registry.json
```
{
 "$schema": "https://ui.shadcn.com/schema/registry.json",
 "name": "acme",
 "homepage": "https://acme.com",
 "items": [
  {
   "name": "hello-world",
   "type": "registry:block",
   "title": "Hello World",
   "description": "A simple hello world component.",
   "files": [
    {
     "path": "registry/hello-world/hello-world.tsx",
     "type": "registry:component"
    }
   ]
  }
 ]
}
```
Copy
You define your registry item by adding a `name`, `type`, `title`, `description` and `files`.
For every file you add, you must specify the `path` and `type` of the file. The `path` is the relative path to the file from the root of your project. The `type` is the type of the file.
You can read more about the registry item schema and file types in the registry item schema docs.
## Build your registry
### Install the shadcn CLI
Note: the `build` command is currently only available in the `shadcn@canary` version of the CLI.
pnpmnpmyarnbun
```
pnpm add shadcn@canary

```

Copy
### Add a build script
Add a `registry:build` script to your `package.json` file.
package.json
```
{
 "scripts": {
  "registry:build": "shadcn build"
 }
}
```
Copy
### Run the build script
Run the build script to generate the registry JSON files.
pnpmnpmyarnbun
```
pnpm registry:build

```

Copy
**Note:** By default, the build script will generate the registry JSON files in `public/r` e.g `public/r/hello-world.json`.
You can change the output directory by passing the `--output` option. See the shadcn build command for more information.
## Serve your registry
If you're running your registry on Next.js, you can now serve your registry by running the `next` server. The command might differ for other frameworks.
pnpmnpmyarnbun
```
pnpm dev

```

Copy
Your files will now be served at `http://localhost:3000/r/[NAME].json` eg. `http://localhost:3000/r/hello-world.json`.
## Publish your registry
To make your registry available to other developers, you can publish it by deploying your project to a public URL.
## Guidelines
Here are some guidelines to follow when building components for a registry.
  * The following properties are required for the block definition: `name`, `description`, `type` and `files`.
  * Make sure to list all registry dependencies in `registryDependencies`. A registry dependency is the name of the component in the registry eg. `input`, `button`, `card`, etc or a URL to a registry item eg. `http://localhost:3000/r/editor.json`.
  * Make sure to list all dependencies in `dependencies`. A dependency is the name of the package in the registry eg. `zod`, `sonner`, etc. To set a version, you can use the `name@version` format eg. `zod@^3.20.0`.
  * **Imports should always use the`@/registry` path.** eg. `import { HelloWorld } from "@/registry/hello-world/hello-world"`
  * Ideally, place your files within a registry item in `components`, `hooks`, `lib` directories.


## Install using the CLI
To install a registry item using the `shadcn` CLI, use the `add` command followed by the URL of the registry item.
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add http://localhost:3000/r/hello-world.json

```

Copy
IntroductionOpen in v0
On This Page
  * registry.json
    * Add a registry.json file
  * Add a registry item
    * Create your component
    * Add your component to the registry
  * Build your registry
    * Install the shadcn CLI
    * Add a build script
    * Run the build script
  * Serve your registry
  * Publish your registry
  * Guidelines
  * Install using the CLI


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
