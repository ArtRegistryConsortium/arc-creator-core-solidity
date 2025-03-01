Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jsauthInterrupts
# authInterrupts
This feature is currently available in the canary channel and subject to change. Try it out by upgrading Next.js, and share your feedback on GitHub.
The `authInterrupts` configuration option allows you to use `forbidden` and `unauthorized` APIs in your application. While these functions are experimental, you must enable the `authInterrupts` option in your `next.config.js` file to use them:
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 experimental: {
  authInterrupts:true,
 },
}
exportdefault nextConfig
```

## Next Steps
### forbidden
API Reference for the forbidden function.
### unauthorized
API Reference for the unauthorized function.
### forbidden.js
API reference for the forbidden.js special file.
### unauthorized.js
API reference for the unauthorized.js special file.
Was this helpful?
supported.
Send
