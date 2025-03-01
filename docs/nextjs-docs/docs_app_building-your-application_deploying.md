# Your Privacy
This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
DenyAccept all
Consent Settings
Privacy Policy
Your Privacy
This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
Marketing
Off
Marketing cookies and services are used to deliver personalized advertisements, promotions, and offers. These technologies enable targeted advertising and marketing campaigns by collecting information about users' interests, preferences, and online activities. 
Analytics
Off
Analytics cookies and services are used for collecting statistical information about how visitors interact with a website. These technologies provide insights into website usage, visitor behavior, and site performance to understand and improve the site and enhance user experience.
Functional
Off
Functional cookies and services are used to offer enhanced and personalized functionalities. These technologies provide additional features and improved user experiences, such as remembering your language preferences, font sizes, region selections, and customized layouts. Opting out of these cookies may render certain services or functionality of the website unavailable.
Essential
On
Essential cookies and services are used to enable core website features, such as ensuring the security of the website. 
SaveDenyAccept all
Privacy Policy
Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
App RouterBuilding Your ApplicationDeploying
# Deploying
Congratulations, it's time to ship to production.
You can deploy managed Next.js with Vercel, or self-host on a Node.js server, Docker image, or even static HTML files. When deploying using `next start`, all Next.js features are supported.
## Production Builds
Running `next build` generates an optimized version of your application for production. HTML, CSS, and JavaScript files are created based on your pages. JavaScript is **compiled** and browser bundles are **minified** using the Next.js Compiler to help achieve the best performance and support all modern browsers.
Next.js produces a standard deployment output used by managed and self-hosted Next.js. This ensures all features are supported across both methods of deployment. In the next major version, we will be transforming this output into our Build Output API specification.
## Managed Next.js with Vercel
Vercel, the creators and maintainers of Next.js, provide managed infrastructure and a developer experience platform for your Next.js applications.
Deploying to Vercel is zero-configuration and provides additional enhancements for scalability, availability, and performance globally. However, all Next.js features are still supported when self-hosted.
Learn more about Next.js on Vercel or deploy a template for free to try it out.
## Self-Hosting
You can self-host Next.js in three different ways:
  * A Node.js server
  * A Docker container
  * A static export


> **🎥 Watch:** Learn more about self-hosting Next.js → YouTube (45 minutes).
We have community maintained deployment examples with the following providers:
  * Deno
  * DigitalOcean
  * Flightcontrol
  * Fly.io
  * GitHub Pages
  * Google Cloud Run
  * Railway
  * Render
  * SST


### Node.js Server
Next.js can be deployed to any hosting provider that supports Node.js. Ensure your `package.json` has the `"build"` and `"start"` scripts:
package.json
```
{
"scripts": {
"dev":"next dev",
"build":"next build",
"start":"next start"
 }
}
```

Then, run `npm run build` to build your application. Finally, run `npm run start` to start the Node.js server. This server supports all Next.js features.
### Docker Image
Next.js can be deployed to any hosting provider that supports Docker containers. You can use this approach when deploying to container orchestrators such as Kubernetes or when running inside a container in any cloud provider.
  1. Install Docker on your machine
  2. Clone our example (or the multi-environment example)
  3. Build your container: `docker build -t nextjs-docker .`
  4. Run your container: `docker run -p 3000:3000 nextjs-docker`


Next.js through Docker supports all Next.js features.
### Static HTML Export
Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server.
Since Next.js supports this static export, it can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets. This includes tools like AWS S3, Nginx, or Apache.
Running as a static export does not support Next.js features that require a server. Learn more.
> **Good to know:**
>   * Server Components are supported with static exports.
> 

## Features
### Image Optimization
Image Optimization through `next/image` works self-hosted with zero configuration when deploying using `next start`. If you would prefer to have a separate service to optimize images, you can configure an image loader.
Image Optimization can be used with a static export by defining a custom image loader in `next.config.js`. Note that images are optimized at runtime, not during the build.
> **Good to know:**
>   * On glibc-based Linux systems, Image Optimization may require additional configuration to prevent excessive memory usage.
>   * Learn more about the caching behavior of optimized images and how to configure the TTL.
>   * You can also disable Image Optimization and still retain other benefits of using `next/image` if you prefer. For example, if you are optimizing images yourself separately.
> 

### Middleware
Middleware works self-hosted with zero configuration when deploying using `next start`. Since it requires access to the incoming request, it is not supported when using a static export.
Middleware uses a runtime that is a subset of all available Node.js APIs to help ensure low latency, since it may run in front of every route or asset in your application. This runtime does not require running “at the edge” and works in a single-region server. Additional configuration and infrastructure are required to run Middleware in multiple regions.
If you are looking to add logic (or use an external package) that requires all Node.js APIs, you might be able to move this logic to a layout as a Server Component. For example, checking headers and redirecting. You can also use headers, cookies, or query parameters to redirect or rewrite through `next.config.js`. If that does not work, you can also use a custom server.
### Environment Variables
Next.js can support both build time and runtime environment variables.
**By default, environment variables are only available on the server**. To expose an environment variable to the browser, it must be prefixed with `NEXT_PUBLIC_`. However, these public environment variables will be inlined into the JavaScript bundle during `next build`.
You safely read environment variables on the server during dynamic rendering.
app/page.ts
TypeScript
JavaScriptTypeScript
```
import { connection } from'next/server'
exportdefaultasyncfunctionComponent() {
awaitconnection()
// cookies, headers, and other Dynamic APIs
// will also opt into dynamic rendering, meaning
// this env variable is evaluated at runtime
constvalue=process.env.MY_VALUE
// ...
}
```

This allows you to use a singular Docker image that can be promoted through multiple environments with different values.
> **Good to know:**
>   * You can run code on server startup using the `register` function.
>   * We do not recommend using the runtimeConfig option, as this does not work with the standalone output mode. Instead, we recommend incrementally adopting the App Router.
> 

### Caching and ISR
Next.js can cache responses, generated static pages, build outputs, and other static assets like images, fonts, and scripts.
Caching and revalidating pages (with Incremental Static Regeneration) use the **same shared cache**. By default, this cache is stored to the filesystem (on disk) on your Next.js server. **This works automatically when self-hosting** using both the Pages and App Router.
You can configure the Next.js cache location if you want to persist cached pages and data to durable storage, or share the cache across multiple containers or instances of your Next.js application.
#### Automatic Caching
  * Next.js sets the `Cache-Control` header of `public, max-age=31536000, immutable` to truly immutable assets. It cannot be overridden. These immutable files contain a SHA-hash in the file name, so they can be safely cached indefinitely. For example, Static Image Imports. You can configure the TTL for images.
  * Incremental Static Regeneration (ISR) sets the `Cache-Control` header of `s-maxage: <revalidate in getStaticProps>, stale-while-revalidate`. This revalidation time is defined in your `getStaticProps` function in seconds. If you set `revalidate: false`, it will default to a one-year cache duration.
  * Dynamically rendered pages set a `Cache-Control` header of `private, no-cache, no-store, max-age=0, must-revalidate` to prevent user-specific data from being cached. This applies to both the App Router and Pages Router. This also includes Draft Mode.


#### Static Assets
If you want to host static assets on a different domain or CDN, you can use the `assetPrefix` configuration in `next.config.js`. Next.js will use this asset prefix when retrieving JavaScript or CSS files. Separating your assets to a different domain does come with the downside of extra time spent on DNS and TLS resolution.
Learn more about `assetPrefix`.
#### Configuring Caching
By default, generated cache assets will be stored in memory (defaults to 50mb) and on disk. If you are hosting Next.js using a container orchestration platform like Kubernetes, each pod will have a copy of the cache. To prevent stale data from being shown since the cache is not shared between pods by default, you can configure the Next.js cache to provide a cache handler and disable in-memory caching.
To configure the ISR/Data Cache location when self-hosting, you can configure a custom handler in your `next.config.js` file:
next.config.js
```
module.exports= {
 cacheHandler:require.resolve('./cache-handler.js'),
 cacheMaxMemorySize:0,// disable default in-memory caching
}
```

Then, create `cache-handler.js` in the root of your project, for example:
cache-handler.js
```
constcache=newMap()
module.exports=classCacheHandler {
constructor(options) {
this.options = options
 }
asyncget(key) {
// This could be stored anywhere, like durable storage
returncache.get(key)
 }
asyncset(key, data, ctx) {
// This could be stored anywhere, like durable storage
cache.set(key, {
   value: data,
   lastModified:Date.now(),
   tags:ctx.tags,
  })
 }
asyncrevalidateTag(tags) {
// tags is either a string or an array of strings
  tags = [tags].flat()
// Iterate over all entries in the cache
for (let [key, value] of cache) {
// If the value's tags include the specified tag, delete this entry
if (value.tags.some((tag) =>tags.includes(tag))) {
cache.delete(key)
   }
  }
 }
// If you want to have temporary in memory cache for a single request that is reset
// before the next request you can leverage this method
resetRequestCache() {}
}
```

Using a custom cache handler will allow you to ensure consistency across all pods hosting your Next.js application. For instance, you can save the cached values anywhere, like Redis or AWS S3.
> **Good to know:**
>   * `revalidatePath` is a convenience layer on top of cache tags. Calling `revalidatePath` will call the `revalidateTag` function with a special default tag for the provided page.
> 

### Build Cache
Next.js generates an ID during `next build` to identify which version of your application is being served. The same build should be used and boot up multiple containers.
If you are rebuilding for each stage of your environment, you will need to generate a consistent build ID to use between containers. Use the `generateBuildId` command in `next.config.js`:
next.config.js
```
module.exports= {
generateBuildId:async () => {
// This could be anything, using the latest git hash
returnprocess.env.GIT_HASH
 },
}
```

### Version Skew
Next.js will automatically mitigate most instances of version skew and automatically reload the application to retrieve new assets when detected. For example, if there is a mismatch in the `deploymentId`, transitions between pages will perform a hard navigation versus using a prefetched value.
When the application is reloaded, there may be a loss of application state if it's not designed to persist between page navigations. For example, using URL state or local storage would persist state after a page refresh. However, component state like `useState` would be lost in such navigations.
Vercel provides additional skew protection for Next.js applications to ensure assets and functions from the previous version are still available to older clients, even after the new version is deployed.
You can manually configure the `deploymentId` property in your `next.config.js` file to ensure each request uses either `?dpl` query string or `x-deployment-id` header.
### Streaming and Suspense
The Next.js App Router supports streaming responses when self-hosting. If you are using Nginx or a similar proxy, you will need to configure it to disable buffering to enable streaming.
For example, you can disable buffering in Nginx by setting `X-Accel-Buffering` to `no`:
next.config.js
```
module.exports= {
asyncheaders() {
return [
   {
    source:'/:path*{/}?',
    headers: [
     {
      key:'X-Accel-Buffering',
      value:'no',
     },
    ],
   },
  ]
 },
}
```

### Partial Prerendering
Partial Prerendering (experimental) works by default with Next.js and is not a CDN feature. This includes deployment as a Node.js server (through `next start`) and when used with a Docker container.
### Usage with CDNs
When using a CDN in front on your Next.js application, the page will include `Cache-Control: private` response header when dynamic APIs are accessed. This ensures that the resulting HTML page is marked as non-cachable. If the page is fully prerendered to static, it will include `Cache-Control: public` to allow the page to be cached on the CDN.
If you don't need a mix of both static and dynamic components, you can make your entire route static and cache the output HTML on a CDN. This Automatic Static Optimization is the default behavior when running `next build` if dynamic APIs are not used.
### `after`
`after` is fully supported when self-hosting with `next start`.
When stopping the server, ensure a graceful shutdown by sending `SIGINT` or `SIGTERM` signals and waiting. This allows the Next.js server to wait until after pending callback functions or promises used inside `after` have finished.
If you want to use `after` on custom infrastructure, check your provider documentation to view support for `after`.
Reference: supporting `after` for serverless platforms Using `after` in a serverless context requires waiting for asynchronous tasks to finish after the response has been sent. In Next.js and Vercel, this is achieved using a primitive called `waitUntil(promise)`, which extends the lifetime of a serverless invocation until all promises passed to `waitUntil` have settled.
If you want your users to be able to run `after`, you will have to provide your implementation of `waitUntil` that behaves in an analogous way.
When `after` is called, Next.js will access `waitUntil` like this:
```
constRequestContext= globalThis[Symbol.for('@next/request-context')]
constcontextValue=RequestContext?.get()
constwaitUntil=contextValue?.waitUntil
```

Which means that `globalThis[Symbol.for('@next/request-context')]` is expected to contain an object like this:
```
typeNextRequestContext= {
get():NextRequestContextValue|undefined
}
typeNextRequestContextValue= {
waitUntil?: (promise:Promise<any>) =>void
}
```

Here is an example of the implementation.
```
import { AsyncLocalStorage } from'node:async_hooks'
constRequestContextStorage=newAsyncLocalStorage<NextRequestContextValue>()
// Define and inject the accessor that next.js will use
constRequestContext:NextRequestContext= {
get() {
returnRequestContextStorage.getStore()
 },
}
globalThis[Symbol.for('@next/request-context')] = RequestContext
consthandler= (req, res) => {
constcontextValue= { waitUntil:YOUR_WAITUNTIL }
// Provide the value
returnRequestContextStorage.run(contextValue, () =>nextJsHandler(req, res))
}
```

### Production Checklist
Recommendations to ensure the best performance and user experience before taking your Next.js application to production.
### Static Exports
Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server.
### Multi-Zones
Learn how to build micro-frontends using Next.js Multi-Zones to deploy multiple Next.js apps under a single domain.
Was this helpful?
supported.
Send
