Docs
CLI
# CLI
Use the CLI to add components to your project.
**Note:** We just released a new `shadcn` CLI. See the changelog for more information.
## init
Use the `init` command to initialize configuration and dependencies for a new project.
The `init` command installs dependencies, adds the `cn` util, configures `tailwind.config.js`, and CSS variables for the project.
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest init

```

Copy
You will be asked a few questions to configure `components.json`:
```
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes
```
Copy
### Options
```
Usage: shadcn init [options] [components...]
initialize your project and install dependencies
Arguments:
 components     the components to add or a url to the component.
Options:
 -d, --defaults  use default values i.e new-york, zinc and css variables. (default: false)
 -f, --force    force overwrite of existing components.json. (default: false)
 -y, --yes     skip confirmation prompt. (default: false)
 -c, --cwd <cwd>  the working directory. defaults to the current directory.
 -h, --help    display help for command
```
Copy
## add
Use the `add` command to add components and dependencies to your project.
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add [component]

```

Copy
You will be presented with a list of components to choose from:
```
Which components would you like to add? › Space to select. A to toggle all.
Enter to submit.
◯ accordion
◯ alert
◯ alert-dialog
◯ aspect-ratio
◯ avatar
◯ badge
◯ button
◯ calendar
◯ card
◯ checkbox
```
Copy
### Options
```
Usage: shadcn add [options] [components...]
add a component to your project
Arguments:
 components     the components to add or a url to the component.
Options:
 -y, --yes     skip confirmation prompt. (default: false)
 -o, --overwrite  overwrite existing files. (default: false)
 -c, --cwd <cwd>  the working directory. defaults to the current directory.
 -a, --all     add all available components. (default: false)
 -p, --path <path> the path to add the component to.
 -h, --help     display help for command
```
Copy
## build
Use the `build` command to generate the registry JSON files.
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest build

```

Copy
This command reads the `registry.json` file and generates the registry JSON files in the `public/r` directory.
```
Usage: shadcn build [options] [registry]
build components for a shadcn registry
Arguments:
 registry       path to registry.json file (default: "./registry.json")
Options:
 -o, --output <path> destination directory for json files (default: "./public/r")
 -c, --cwd <cwd>   the working directory. defaults to the current directory. (default:
            "/Users/shadcn/Code/shadcn/ui/packages/shadcn")
 -h, --help      display help for command
```
Copy
To customize the output directory, use the `--output` option.
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest build --output ./public/registry

```

Copy
Dark modeMonorepo
On This Page
  * init
    * Options
  * add
    * Options
  * build


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
