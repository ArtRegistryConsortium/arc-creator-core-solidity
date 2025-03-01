Docs
Add a block
# Add a block
Contribute components to the blocks library.
We are inviting the community to contribute to the blocks library. Share your components and blocks with other developers and help build a library of high-quality, reusable components.
We'd love to see all types of blocks: applications, marketing, products, and more.
## Setup your workspace
### Fork the repository
```
git clone https://github.com/shadcn-ui/ui.git
```
Copy
### Create a new branch
```
git checkout -b username/my-new-block
```
Copy
### Install dependencies
```
pnpm install
```
Copy
### Start the dev server
```
pnpm www:dev
```
Copy
## Add a block
A block can be a single component (eg. a variation of a ui component) or a complex component (eg. a dashboard) with multiple components, hooks, and utils.
### Create a new block
Create a new folder in the `apps/www/registry/new-york/blocks` directory. Make sure the folder is named in kebab-case and under `new-york`.
```
apps
└── www
  └── registry
    └── new-york
      └── blocks
        └── dashboard-01
```
Copy
**Note:** The build script will take care of building the block for the `default` style.
### Add your block files
Add your files to the block folder. Here is an example of a block with a page, components, hooks, and utils.
```
dashboard-01
└── page.tsx
└── components
  └── hello-world.tsx
  └── example-card.tsx
└── hooks
  └── use-hello-world.ts
└── lib
  └── format-date.ts
```
Copy
**Note:** You can start with one file and add more files later.
## Add your block to the registry
### Add your block definition to `registry-blocks.tsx`
To add your block to the registry, you need to add your block definition to `registry-blocks.ts`.
This follows the registry schema at https://ui.shadcn.com/schema/registry-item.json.
apps/www/registry/registry-blocks.tsx
```
export const blocks = [
 // ...
 {
  name: "dashboard-01",
  author: "shadcn (https://ui.shadcn.com)",
  title: "Dashboard",
  description: "A simple dashboard with a hello world component.",
  type: "registry:block",
  registryDependencies: ["input", "button", "card"],
  dependencies: ["zod"],
  files: [
   {
    path: "blocks/dashboard-01/page.tsx",
    type: "registry:page",
    target: "app/dashboard/page.tsx",
   },
   {
    path: "blocks/dashboard-01/components/hello-world.tsx",
    type: "registry:component",
   },
   {
    path: "blocks/dashboard-01/components/example-card.tsx",
    type: "registry:component",
   },
   {
    path: "blocks/dashboard-01/hooks/use-hello-world.ts",
    type: "registry:hook",
   },
   {
    path: "blocks/dashboard-01/lib/format-date.ts",
    type: "registry:lib",
   },
  ],
  categories: ["dashboard"],
 },
]
```
Copy
Make sure you add a name, description, type, registryDependencies, dependencies, files, and categories. We'll go over each of these in more detail in the schema docs (coming soon).
### Run the build script
```
pnpm registry:build
```
Copy
**Note:** you do not need to run this script for every change. You only need to run it when you update the block definition.
### View your block
Once the build script is finished, you can view your block at `http://localhost:3333/blocks/[CATEGORY]` or a full screen preview at `http://localhost:3333/view/styles/new-york/dashboard-01`.
![Block preview](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fblock-preview-light.png&w=3840&q=75)![Block preview](https://ui.shadcn.com/_next/image?url=%2Fimages%2Fblock-preview-dark.png&w=3840&q=75)
### Build your block
You can now build your block by editing the files in the block folder and viewing the changes in the browser.
If you add more files, make sure to add them to the `files` array in the block definition.
## Publish your block
Once you're ready to publish your block, you can submit a pull request to the main repository.
### Run the build script
```
pnpm registry:build
```
Copy
### Capture a screenshot
```
pnpm registry:capture
```
Copy
**Note:** If you've run the capture script before, you might need to delete the existing screenshots (both light and dark) at `apps/www/public/r/styles/new-york` and run the script again.
### Submit a pull request
Commit your changes and submit a pull request to the main repository.
Your block will be reviewed and merged. Once merged it will be published to the website and available to be installed via the CLI.
## Categories
The `categories` property is used to organize your block in the registry.
### Add a category
If you need to add a new category, you can do so by adding it to the `registryCategories` array in `apps/www/registry/registry-categories.ts`.
apps/www/registry/registry-categories.ts
```
export const registryCategories = [
 // ...
 {
  name: "Input",
  slug: "input",
  hidden: false,
 },
]
```
Copy
## Guidelines
Here are some guidelines to follow when contributing to the blocks library.
  * The following properties are required for the block definition: `name`, `description`, `type`, `files`, and `categories`.
  * Make sure to list all registry dependencies in `registryDependencies`. A registry dependency is the name of the component in the registry eg. `input`, `button`, `card`, etc.
  * Make sure to list all dependencies in `dependencies`. A dependency is the name of the package in the registry eg. `zod`, `sonner`, etc.
  * If your block has a page (optional), it should be the first entry in the `files` array and it should have a `target` property. This helps the CLI place the page in the correct location for file-based routing.
  * **Imports should always use the`@/registry` path.** eg. `import { Input } from "@/registry/new-york/input"`


Open in v0Figma
On This Page
  * Setup your workspace
    * Fork the repository
    * Create a new branch
    * Install dependencies
    * Start the dev server
  * Add a block
    * Create a new block
    * Add your block files
  * Add your block to the registry
    * Add your block definition to registry-blocks.tsx
    * Run the build script
    * View your block
    * Build your block
  * Publish your block
    * Run the build script
    * Capture a screenshot
    * Submit a pull request
  * Categories
    * Add a category
  * Guidelines


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
