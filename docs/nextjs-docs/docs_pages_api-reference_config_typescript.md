# Your Privacy
This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
DenyAccept all
Consent Settings
Privacy Policy
Your Privacy
This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
Marketing
Off
Marketing cookies and services are used to deliver personalized advertisements, promotions, and offers. These technologies enable targeted advertising and marketing campaigns by collecting information about users' interests, preferences, and online activities. 
Analytics
Off
Analytics cookies and services are used for collecting statistical information about how visitors interact with a website. These technologies provide insights into website usage, visitor behavior, and site performance to understand and improve the site and enhance user experience.
Functional
Off
Functional cookies and services are used to offer enhanced and personalized functionalities. These technologies provide additional features and improved user experiences, such as remembering your language preferences, font sizes, region selections, and customized layouts. Opting out of these cookies may render certain services or functionality of the website unavailable.
Essential
On
Essential cookies and services are used to enable core website features, such as ensuring the security of the website. 
SaveDenyAccept all
Privacy Policy
Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
API ReferenceConfigurationTypeScript
# TypeScript
Next.js comes with built-in TypeScript, automatically installing the necessary packages and configuring the proper settings when you create a new project with `create-next-app`.
To add TypeScript to an existing project, rename a file to `.ts` / `.tsx`. Run `next dev` and `next build` to automatically install the necessary dependencies and add a `tsconfig.json` file with the recommended config options.
> **Good to know** : If you already have a `jsconfig.json` file, copy the `paths` compiler option from the old `jsconfig.json` into the new `tsconfig.json` file, and delete the old `jsconfig.json` file.
## Examples
### Type checking `next.config.ts`
You can use TypeScript and import types in your Next.js configuration by using `next.config.ts`.
next.config.ts
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
/* config options here */
}
exportdefault nextConfig
```

> **Good to know** : Module resolution in `next.config.ts` is currently limited to `CommonJS`. This may cause incompatibilities with ESM only packages being loaded in `next.config.ts`.
When using the `next.config.js` file, you can add some type checking in your IDE using JSDoc as below:
next.config.js
```
// @ts-check
/** @type{import('next').NextConfig} */
constnextConfig= {
/* config options here */
}
module.exports= nextConfig
```

### Static Generation and Server-side Rendering
For `getStaticProps`, `getStaticPaths`, and `getServerSideProps`, you can use the `GetStaticProps`, `GetStaticPaths`, and `GetServerSideProps` types respectively:
pages/blog/[slug].tsx
```
importtype { GetStaticProps, GetStaticPaths, GetServerSideProps } from'next'
exportconstgetStaticProps= (async (context) => {
// ...
}) satisfiesGetStaticProps
exportconstgetStaticPaths= (async () => {
// ...
}) satisfiesGetStaticPaths
exportconstgetServerSideProps= (async (context) => {
// ...
}) satisfiesGetServerSideProps
```

> **Good to know:** `satisfies` was added to TypeScript in 4.9. We recommend upgrading to the latest version of TypeScript.
### With API Routes
The following is an example of how to use the built-in types for API routes:
pages/api/hello.ts
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultfunctionhandler(req:NextApiRequest, res:NextApiResponse) {
res.status(200).json({ name:'John Doe' })
}
```

You can also type the response data:
pages/api/hello.ts
```
importtype { NextApiRequest, NextApiResponse } from'next'
typeData= {
 name:string
}
exportdefaultfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse<Data>
) {
res.status(200).json({ name:'John Doe' })
}
```

### With custom `App`
If you have a custom `App`, you can use the built-in type `AppProps` and change file name to `./pages/_app.tsx` like so:
```
importtype { AppProps } from'next/app'
exportdefaultfunctionMyApp({ Component, pageProps }:AppProps) {
return <Component {...pageProps} />
}
```

### Incremental type checking
Since `v10.2.1` Next.js supports incremental type checking when enabled in your `tsconfig.json`, this can help speed up type checking in larger applications.
### Disabling TypeScript errors in production
Next.js fails your **production build** (`next build`) when TypeScript errors are present in your project.
If you'd like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step.
If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous.
Open `next.config.ts` and enable the `ignoreBuildErrors` option in the `typescript` config:
next.config.ts
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 typescript: {
// !! WARN !!
// Dangerously allow production builds to successfully complete even if
// your project has type errors.
// !! WARN !!
  ignoreBuildErrors:true,
 },
}
exportdefault nextConfig
```

> **Good to know** : You can run `tsc --noEmit` to check for TypeScript errors yourself before building. This is useful for CI/CD pipelines where you'd like to check for TypeScript errors before deploying.
### Custom type declarations
When you need to declare custom types, you might be tempted to modify `next-env.d.ts`. However, this file is automatically generated, so any changes you make will be overwritten. Instead, you should create a new file, let's call it `new-types.d.ts`, and reference it in your `tsconfig.json`:
tsconfig.json
```
{
"compilerOptions": {
"skipLibCheck":true
//...truncated...
 },
"include": [
"new-types.d.ts",
"next-env.d.ts",
".next/types/**/*.ts",
"**/*.ts",
"**/*.tsx"
 ],
"exclude": ["node_modules"]
}
```

## Version Changes
Version| Changes  
---|---  
`v15.0.0`| `next.config.ts` support added for TypeScript projects.  
`v13.2.0`| Statically typed links are available in beta.  
`v12.0.0`| SWC is now used by default to compile TypeScript and TSX for faster builds.  
`v10.2.1`| Incremental type checking support added when enabled in your `tsconfig.json`.  
Was this helpful?
supported.
Send
