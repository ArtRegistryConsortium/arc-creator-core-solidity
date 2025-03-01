Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jsuseLightningcss
# useLightningcss
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
Experimental support for using Lightning CSS, a fast CSS bundler and minifier, written in Rust.
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 experimental: {
  useLightningcss:true,
 },
}
exportdefault nextConfig
```

Was this helpful?
supported.
Send
