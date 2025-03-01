Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Pages RouterGetting StartedProject Structure
# Project Structure and Organization
This page provides an overview of the folder and file conventions in Next.js, as well as tips for organizing your project.
## Folder and file conventions
### Top-level folders
Top-level folders are used to organize your application's code and static assets.
![Route segments to path segments](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ftop-level-folders.png&w=3840&q=75)![Route segments to path segments](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ftop-level-folders.png&w=3840&q=75)
`app`| App Router  
---|---  
`pages`| Pages Router  
`public`| Static assets to be served  
`src`| Optional application source folder  
### Top-level files
Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables.
**Next.js**  
---  
`next.config.js`|  Configuration file for Next.js  
`package.json`| Project dependencies and scripts  
`instrumentation.ts`| OpenTelemetry and Instrumentation file  
`middleware.ts`| Next.js request middleware  
`.env`| Environment variables  
`.env.local`| Local environment variables  
`.env.production`| Production environment variables  
`.env.development`| Development environment variables  
`.eslintrc.json`| Configuration file for ESLint  
`.gitignore`| Git files and folders to ignore  
`next-env.d.ts`| TypeScript declaration file for Next.js  
`tsconfig.json`| Configuration file for TypeScript  
`jsconfig.json`| Configuration file for JavaScript  
### Files conventions
`_app`| `.js` `.jsx` `.tsx`| Custom App  
---|---|---  
`_document`| `.js` `.jsx` `.tsx`| Custom Document  
`_error`| `.js` `.jsx` `.tsx`| Custom Error Page  
`404`| `.js` `.jsx` `.tsx`| 404 Error Page  
`500`| `.js` `.jsx` `.tsx`| 500 Error Page  
### Routes
**Folder convention**  
---  
`index`| `.js` `.jsx` `.tsx`| Home page  
`folder/index`| `.js` `.jsx` `.tsx`| Nested page  
**File convention**  
`index`| `.js` `.jsx` `.tsx`| Home page  
`file`| `.js` `.jsx` `.tsx`| Nested page  
### Dynamic routes
**Folder convention**  
---  
`[folder]/index`| `.js` `.jsx` `.tsx`| Dynamic route segment  
`[...folder]/index`| `.js` `.jsx` `.tsx`| Catch-all route segment  
`[[...folder]]/index`| `.js` `.jsx` `.tsx`| Optional catch-all route segment  
**File convention**  
`[file]`| `.js` `.jsx` `.tsx`| Dynamic route segment  
`[...file]`| `.js` `.jsx` `.tsx`| Catch-all route segment  
`[[...file]]`| `.js` `.jsx` `.tsx`| Optional catch-all route segment  
Was this helpful?
supported.
Send
