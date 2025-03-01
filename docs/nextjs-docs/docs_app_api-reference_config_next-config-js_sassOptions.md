Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jssassOptions
# sassOptions
`sassOptions` allow you to configure the Sass compiler.
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constsassOptions= {
 additionalData:`
  $var: red;
 `,
}
constnextConfig:NextConfig= {
 sassOptions: {
...sassOptions,
  implementation:'sass-embedded',
 },
}
exportdefault nextConfig
```

> **Good to know:** `sassOptions` are not typed outside of `implementation` because Next.js does not maintain the other possible properties.
Was this helpful?
supported.
Send
