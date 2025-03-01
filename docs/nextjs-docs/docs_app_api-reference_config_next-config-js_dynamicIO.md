Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jsdynamicIO
# dynamicIO
This feature is currently available in the canary channel and subject to change. Try it out by upgrading Next.js, and share your feedback on GitHub.
The `dynamicIO` flag is an experimental feature in Next.js that causes data fetching operations in the App Router to be excluded from pre-renders unless they are explicitly cached. This can be useful for optimizing the performance of dynamic data fetching in server components.
It is useful if your application requires fresh data fetching during runtime rather than serving from a pre-rendered cache.
It is expected to be used in conjunction with `use cache` so that your data fetching happens at runtime by default unless you define specific parts of your application to be cached with `use cache` at the page, function, or component level.
## Usage
To enable the `dynamicIO` flag, set it to `true` in the `experimental` section of your `next.config.ts` file:
next.config.ts
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 experimental: {
  dynamicIO:true,
 },
}
exportdefault nextConfig
```

When `dynamicIO` is enabled, you can use the following cache functions and configurations:
  * The `use cache` directive
  * The `cacheLife` function with `use cache`
  * The `cacheTag` function


## Notes
  * While `dynamicIO` can optimize performance by ensuring fresh data fetching during runtime, it may also introduce additional latency compared to serving pre-rendered content.


Was this helpful?
supported.
Send
