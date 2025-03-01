Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationOptimizingPackage Bundling
# Optimizing Package Bundling
Bundling external packages can significantly improve the performance of your application. By default, packages imported inside Server Components and Route Handlers are automatically bundled by Next.js. This page will guide you through how to analyze and further optimize package bundling. 
## Analyzing JavaScript bundles
`@next/bundle-analyzer` is a plugin for Next.js that helps you manage the size of your application bundles. It generates a visual report of the size of each package and their dependencies. You can use the information to remove large dependencies, split, or lazy-load your code.
### Installation
Install the plugin by running the following command:
```
npm i@next/bundle-analyzer
# or
yarn add@next/bundle-analyzer
# or
pnpm add@next/bundle-analyzer
```

Then, add the bundle analyzer's settings to your `next.config.js`.
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {}
constwithBundleAnalyzer=require('@next/bundle-analyzer')({
 enabled:process.env.ANALYZE==='true',
})
module.exports=withBundleAnalyzer(nextConfig)
```

### Generating a report
Run the following command to analyze your bundles:
```
ANALYZE=true npm run build
# or
ANALYZE=true yarn build
# or
ANALYZE=true pnpm build
```

The report will open three new tabs in your browser, which you can inspect. Periodically evaluating your application's bundles can help you maintain application performance over time.
## Optimizing package imports
Some packages, such as icon libraries, can export hundreds of modules, which can cause performance issues in development and production.
You can optimize how these packages are imported by adding the `optimizePackageImports` option to your `next.config.js`. This option will only load the modules you _actually_ use, while still giving you the convenience of writing import statements with many named exports.
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
 experimental: {
  optimizePackageImports: ['icon-library'],
 },
}
module.exports= nextConfig
```

Next.js also optimizes some libraries automatically, thus they do not need to be included in the optimizePackageImports list. See the full list.
## Opting specific packages out of bundling
Since packages imported inside Server Components and Route Handlers are automatically bundled by Next.js, you can opt specific packages out of bundling using the `serverExternalPackages` option in your `next.config.js`.
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
 serverExternalPackages: ['package-name'],
}
module.exports= nextConfig
```

Next.js includes a list of popular packages that currently are working on compatibility and automatically opt-ed out. See the full list.
## Next Steps
Learn more about optimizing your application for production.
### Production Checklist
Recommendations to ensure the best performance and user experience before taking your Next.js application to production.
Was this helpful?
supported.
Send
