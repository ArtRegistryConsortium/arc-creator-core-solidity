Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Configurationnext.config.js OptionstranspilePackages
# transpilePackages
Next.js can automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (`node_modules`). This replaces the `next-transpile-modules` package.
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
 transpilePackages: ['package-name'],
}
module.exports= nextConfig
```

## Version History
Version| Changes  
---|---  
`v13.0.0`| `transpilePackages` added.  
Was this helpful?
supported.
Send
