Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationData FetchingIncremental Static Regeneration (ISR)
# Incremental Static Regeneration (ISR)
Examples
  * Next.js Commerce
  * On-Demand ISR
  * Next.js Forms


Incremental Static Regeneration (ISR) enables you to:
  * Update static content without rebuilding the entire site
  * Reduce server load by serving prerendered, static pages for most requests
  * Ensure proper `cache-control` headers are automatically added to pages
  * Handle large amounts of content pages without long `next build` times


Here's a minimal example:
pages/blog/[id].tsx
TypeScript
JavaScriptTypeScript
```
importtype { GetStaticPaths, GetStaticProps } from'next'
interfacePost {
 id:string
 title:string
 content:string
}
interfaceProps {
 post:Post
}
exportconstgetStaticPaths:GetStaticPaths=async () => {
constposts=awaitfetch('https://api.vercel.app/blog').then((res) =>
res.json()
 )
constpaths=posts.map((post:Post) => ({
  params: { id:String(post.id) },
 }))
// We'll prerender only these paths at build time.
// { fallback: 'blocking' } will server-render pages
// on-demand if the path doesn't exist.
return { paths, fallback:false }
}
exportconstgetStaticProps:GetStaticProps<Props> =async ({
 params,
}: {
 params: { id:string }
}) => {
constpost=awaitfetch(`https://api.vercel.app/blog/${params.id}`).then(
  (res) =>res.json()
 )
return {
  props: { post },
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
  revalidate:60,
 }
}
exportdefaultfunctionPage({ post }:Props) {
return (
  <main>
   <h1>{post.title}</h1>
   <p>{post.content}</p>
  </main>
 )
}
```

Here's how this example works:
  1. During `next build`, all known blog posts are generated (there are 25 in this example)
  2. All requests made to these pages (e.g. `/blog/1`) are cached and instantaneous
  3. After 60 seconds has passed, the next request will still show the cached (stale) page
  4. The cache is invalidated and a new version of the page begins generating in the background
  5. Once generated successfully, Next.js will display and cache the updated page
  6. If `/blog/26` is requested, Next.js will generate and cache this page on-demand


## Reference
### Functions
  * `getStaticProps`
  * `res.revalidate`


## Examples
### On-demand validation with `res.revalidate()`
For a more precise method of revalidation, use `res.revalidate` to generate a new page on-demand from an API Router.
For example, this API Route can be called at `/api/revalidate?secret=<token>` to revalidate a given blog post. Create a secret token only known by your Next.js app. This secret will be used to prevent unauthorized access to the revalidation API Route.
pages/api/revalidate.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
// Check for secret to confirm this is a valid request
if (req.query.secret !==process.env.MY_SECRET_TOKEN) {
returnres.status(401).json({ message:'Invalid token' })
 }
try {
// This should be the actual path not a rewritten path
// e.g. for "/posts/[id]" this should be "/posts/1"
awaitres.revalidate('/posts/1')
returnres.json({ revalidated:true })
 } catch (err) {
// If there was an error, Next.js will continue
// to show the last successfully generated page
returnres.status(500).send('Error revalidating')
 }
}
```

If you are using on-demand revalidation, you do not need to specify a `revalidate` time inside of `getStaticProps`. Next.js will use the default value of `false` (no revalidation) and only revalidate the page on-demand when `res.revalidate()` is called.
### Handling uncaught exceptions
If there is an error inside `getStaticProps` when handling background regeneration, or you manually throw an error, the last successfully generated page will continue to show. On the next subsequent request, Next.js will retry calling `getStaticProps`.
pages/blog/[id].tsx
TypeScript
JavaScriptTypeScript
```
importtype { GetStaticProps } from'next'
interfacePost {
 id:string
 title:string
 content:string
}
interfaceProps {
 post:Post
}
exportconstgetStaticProps:GetStaticProps<Props> =async ({
 params,
}: {
 params: { id:string }
}) => {
// If this request throws an uncaught error, Next.js will
// not invalidate the currently shown page and
// retry getStaticProps on the next request.
constres=awaitfetch(`https://api.vercel.app/blog/${params.id}`)
constpost:Post=awaitres.json()
if (!res.ok) {
// If there is a server error, you might want to
// throw an error instead of returning so that the cache is not updated
// until the next successful request.
thrownewError(`Failed to fetch posts, received status ${res.status}`)
 }
return {
  props: { post },
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
  revalidate:60,
 }
}
```

### Customizing the cache location
Caching and revalidating pages (with Incremental Static Regeneration) use the same shared cache. When deploying to Vercel, the ISR cache is automatically persisted to durable storage.
When self-hosting, the ISR cache is stored to the filesystem (on disk) on your Next.js server. This works automatically when self-hosting using both the Pages and App Router.
You can configure the Next.js cache location if you want to persist cached pages and data to durable storage, or share the cache across multiple containers or instances of your Next.js application. Learn more.
## Troubleshooting
### Debugging cached data in local development
If you are using the `fetch` API, you can add additional logging to understand which requests are cached or uncached. Learn more about the `logging` option.
next.config.js
```
module.exports= {
 logging: {
  fetches: {
   fullUrl:true,
  },
 },
}
```

### Verifying correct production behavior
To verify your pages are cached and revalidated correctly in production, you can test locally by running `next build` and then `next start` to run the production Next.js server.
This will allow you to test ISR behavior as it would work in a production environment. For further debugging, add the following environment variable to your `.env` file:
.env
```
NEXT_PRIVATE_DEBUG_CACHE=1
```

This will make the Next.js server console log ISR cache hits and misses. You can inspect the output to see which pages are generated during `next build`, as well as how pages are updated as paths are accessed on-demand.
## Caveats
  * ISR is only supported when using the Node.js runtime (default).
  * ISR is not supported when creating a Static Export.
  * Middleware won't be executed for on-demand ISR requests, meaning any path rewrites or logic in Middleware will not be applied. Ensure you are revalidating the exact path. For example, `/post/1` instead of a rewritten `/post-1`.


## Version history
Version| Changes  
---|---  
`v14.1.0`| Custom `cacheHandler` is stable.  
`v13.0.0`| App Router is introduced.  
`v12.2.0`| Pages Router: On-Demand ISR is stable  
`v12.0.0`| Pages Router: Bot-aware ISR fallback added.  
`v9.5.0`| Pages Router: Stable ISR introduced.  
Was this helpful?
supported.
Send
