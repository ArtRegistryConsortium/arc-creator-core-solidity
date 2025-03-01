Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Pages RouterGetting StartedInstallation
# Create a new Next.js application
## System requirements
  * Node.js 18.18 or later.
  * macOS, Windows (including WSL), and Linux are supported.


## Automatic installation
We recommend starting a new Next.js app using `create-next-app`, which sets up everything automatically for you. To create a project, run:
Terminal
```
npx create-next-app@latest
```

On installation, you'll see the following prompts:
Terminal
```
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`? No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*
```

After the prompts, `create-next-app` will create a folder with your project name and install the required dependencies.
## Manual installation
To manually create a new Next.js app, install the required packages:
Terminal
```
npm installnext@latestreact@latestreact-dom@latest
```

Open your `package.json` file and add the following `scripts`:
package.json
```
{
"scripts": {
"dev":"next dev",
"build":"next build",
"start":"next start",
"lint":"next lint"
 }
}
```

These scripts refer to the different stages of developing an application:
  * `dev`: runs `next dev` to start Next.js in development mode.
  * `build`: runs `next build` to build the application for production usage.
  * `start`: runs `next start` to start a Next.js production server.
  * `lint`: runs `next lint` to set up Next.js' built-in ESLint configuration.


### Create the `pages` directory
Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.
Create a `pages` directory at the root of your project. Then, add an `index.tsx` file inside your `pages` folder. This will be your home page (`/`):
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionPage() {
return <h1>Hello, Next.js!</h1>
}
```

Next, add an `_app.tsx` file inside `pages/` to define the global layout. Learn more about the custom App file.
pages/_app.tsx
TypeScript
JavaScriptTypeScript
```
importtype { AppProps } from'next/app'
exportdefaultfunctionApp({ Component, pageProps }:AppProps) {
return <Component {...pageProps} />
}
```

Finally, add a `_document.tsx` file inside `pages/` to control the initial response from the server. Learn more about the custom Document file.
pages/_document.tsx
TypeScript
JavaScriptTypeScript
```
import { Html, Head, Main, NextScript } from'next/document'
exportdefaultfunctionDocument() {
return (
  <Html>
   <Head />
   <body>
    <Main />
    <NextScript />
   </body>
  </Html>
 )
}
```

### Create the `public` folder (optional)
You can optionally create a `public` folder at the root of your project to store static assets such as images, fonts, etc. Files inside `public` can then be referenced by your code starting from the base URL (`/`).
## Run the development server
  1. Run `npm run dev` to start the development server.
  2. Visit `http://localhost:3000` to view your application.
  3. Edit the `pages/index.tsx` file and save it to see the updated result in your browser.


## Set up TypeScript
> Minimum TypeScript version: `v4.5.2`
Next.js comes with built-in TypeScript support. To add TypeScript to your project, rename a file to `.ts` / `.tsx`. Run `next dev`, Next.js will automatically install the necessary dependencies and add a `tsconfig.json` file with the recommended config options.
See the TypeScript configuration page for more information on how to use TypeScript in your project.
## Set up ESLint
Next.js comes with built-in ESLint, automatically installing the necessary packages and configuring the proper settings when you create a new project with `create-next-app`.
To add ESLint to an existing project, add `next lint` as a script to `package.json`:
package.json
```
{
"scripts": {
"lint":"next lint"
 }
}
```

Then, run `npm run lint` and you will be guided through the installation and configuration process.
Terminal
```
npm runlint
```

You'll see a prompt like this:
> ? How would you like to configure ESLint?
> ❯ Strict (recommended) Base Cancel
  * **Strict** : Includes Next.js' base ESLint configuration along with a stricter Core Web Vitals rule-set. This is the recommended configuration for developers setting up ESLint for the first time.
  * **Base** : Includes Next.js' base ESLint configuration.
  * **Cancel** : Does not include any ESLint configuration. Only select this option if you plan on setting up your own custom ESLint configuration.


If either of the two configuration options are selected, Next.js will automatically install `eslint` and `eslint-config-next` as dependencies in your application and create an `.eslintrc.json` file in the root of your project that includes your selected configuration.
You can now run `next lint` every time you want to run ESLint to catch errors. Once ESLint has been set up, it will also automatically run during every build (`next build`). Errors will fail the build, while warnings will not.
See the ESLint Plugin page for more information on how to configure ESLint in your project.
## Set up Absolute Imports and Module Path Aliases
Next.js has in-built support for the `"paths"` and `"baseUrl"` options of `tsconfig.json` and `jsconfig.json` files. These options allow you to alias project directories to absolute paths, making it easier to import modules. For example:
```
// Before
import { Button } from'../../../components/button'
// After
import { Button } from'@/components/button'
```

To configure absolute imports, add the `baseUrl` configuration option to your `tsconfig.json` or `jsconfig.json` file. For example:
tsconfig.json or jsconfig.json
```
{
"compilerOptions": {
"baseUrl":"src/"
 }
}
```

In addition to configuring the `baseUrl` path, you can use the `"paths"` option to `"alias"` module paths.
For example, the following configuration maps `@/components/*` to `components/*`:
tsconfig.json or jsconfig.json
```
{
"compilerOptions": {
"baseUrl":"src/",
"paths": {
"@/styles/*": ["styles/*"],
"@/components/*": ["components/*"]
  }
 }
}
```

Each of the `"paths"` are relative to the `baseUrl` location. For example:
src/app/page.tsx
TypeScript
JavaScriptTypeScript
```
import Button from'@/components/button'
import'@/styles/styles.css'
exportdefaultfunctionHomePage() {
return (
  <div>
   <h1>Hello World</h1>
   <Button />
  </div>
 )
}
```

Was this helpful?
supported.
Send
