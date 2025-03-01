Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jstypedRoutes
# typedRoutes
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
Experimental support for statically typed links. This feature requires using the App Router as well as TypeScript in your project.
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
 experimental: {
  typedRoutes:true,
 },
}
module.exports= nextConfig
```

Was this helpful?
supported.
Send
