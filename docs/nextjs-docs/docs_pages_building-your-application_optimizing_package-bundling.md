Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationOptimizingBundling
# Optimizing Bundling
Bundling external packages can significantly improve the performance of your application. By default, packages imported into your application are not bundled. This can impact performance or might not work if external packages are not pre-bundled, for example, if imported from a monorepo or `node_modules`. This page will guide you through how to analyze and configure package bundling.
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
## Bundling specific packages
To bundle specific packages, you can use the `transpilePackages` option in your `next.config.js`. This option is useful for bundling external packages that are not pre-bundled, for example, in a monorepo or imported from `node_modules`.
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
 transpilePackages: ['package-name'],
}
module.exports= nextConfig
```

## Bundling all packages
To automatically bundle all packages (default behavior in the App Router), you can use the `bundlePagesRouterDependencies` option in your `next.config.js`.
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
 bundlePagesRouterDependencies:true,
}
module.exports= nextConfig
```

## Opting specific packages out of bundling
If you have the `bundlePagesRouterDependencies` option enabled, you can opt specific packages out of automatic bundling using the `serverExternalPackages` option in your `next.config.js`:
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
// Automatically bundle external packages in the Pages Router:
 bundlePagesRouterDependencies:true,
// Opt specific packages out of bundling for both App and Pages Router:
 serverExternalPackages: ['package-name'],
}
module.exports= nextConfig
```

## Next Steps
Learn more about optimizing your application for production.
### Production Checklist
Recommendations to ensure the best performance and user experience before taking your Next.js application to production.
Was this helpful?
supported.
Send
