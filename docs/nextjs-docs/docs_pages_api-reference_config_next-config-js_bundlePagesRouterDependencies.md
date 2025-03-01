Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Configurationnext.config.js OptionsbundlePagesRouterDependencies
# bundlePagesRouterDependencies
Enable automatic server-side dependency bundling for Pages Router applications. Matches the automatic dependency bundling in App Router.
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
 bundlePagesRouterDependencies:true,
}
module.exports= nextConfig
```

Explicitly opt-out certain packages from being bundled using the `serverExternalPackages` option.
## Version History
Version| Changes  
---|---  
`v15.0.0`| Moved from experimental to stable. Renamed from `bundlePagesExternals` to `bundlePagesRouterDependencies`  
Was this helpful?
supported.
Send
