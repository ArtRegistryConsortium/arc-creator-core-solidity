Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jsstaticGeneration*
# staticGeneration*
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
The `staticGeneration*` options allow you to configure the Static Generation process for advanced use cases.
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 experimental: {
  staticGenerationRetryCount:1,
  staticGenerationMaxConcurrency:8,
  staticGenerationMinPagesPerWorker:25,
 },
}
exportdefault nextConfig
```

## Config Options
The following options are available:
  * `staticGenerationRetryCount`: The number of times to retry a failed page generation before failing the build.
  * `staticGenerationMaxConcurrency`: The maximum number of pages to be processed per worker.
  * `staticGenerationMinPagesPerWorker`: The minimum number of pages to be processed before starting a new worker.


Was this helpful?
supported.
Send
