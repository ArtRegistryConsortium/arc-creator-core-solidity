Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jsmdxRs
# mdxRs
For experimental use with `@next/mdx`. Compiles MDX files using the new Rust compiler.
next.config.js
```
constwithMDX=require('@next/mdx')()
/** @type{import('next').NextConfig} */
constnextConfig= {
 pageExtensions: ['ts','tsx','mdx'],
 experimental: {
  mdxRs:true,
 },
}
module.exports=withMDX(nextConfig)
```

Was this helpful?
supported.
Send
