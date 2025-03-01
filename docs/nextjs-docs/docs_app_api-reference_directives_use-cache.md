Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
API ReferenceDirectivesuse cache
# use cache
This feature is currently available in the canary channel and subject to change. Try it out by upgrading Next.js, and share your feedback on GitHub.
The `use cache` directive designates a component and/or a function to be cached. It can be used at the top of a file to indicate that all exports in the file are cacheable, or inline at the top of a function or component to inform Next.js the return value should be cached and reused for subsequent requests. This is an experimental Next.js feature, and not a native React feature like `use client` or `use server`.
## Usage
Enable support for the `use cache` directive with the `useCache` flag in your `next.config.ts` file:
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 experimental: {
  useCache:true,
 },
}
exportdefault nextConfig
```

Additionally, `use cache` directives are also enabled when the `dynamicIO` flag is set.
Then, you can use the `use cache` directive at the file, component, or function level:
```
// File level
'use cache'
exportdefaultasyncfunctionPage() {
// ...
}
// Component level
exportasyncfunctionMyComponent() {
'use cache'
return <></>
}
// Function level
exportasyncfunctiongetData() {
'use cache'
constdata=awaitfetch('/api/data')
return data
}
```

## Good to know
  * `use cache` is an experimental Next.js feature, and not a native React feature like `use client` or `use server`.
  * Any serializable arguments (or props) passed to the cached function, as well as any serializable values it reads from the parent scope, will be converted to a format like JSON and automatically become a part of the cache key.
  * Any non-serializable arguments, props, or closed-over values will turn into opaque references inside the cached function, and can be only passed through and not inspected nor modified. These non-serializable values will be filled in at the request time and won't become a part of the cache key. 
    * For example, a cached function can take in JSX as a `children` prop and return `<div>{children}</div>`, but it won't be able to introspect the actual `children` object.
  * The return value of the cacheable function must also be serializable. This ensures that the cached data can be stored and retrieved correctly.
  * Functions that use the `use cache` directive must not have any side-effects, such as modifying state, directly manipulating the DOM, or setting timers to execute code at intervals.
  * If used alongside Partial Prerendering, segments that have `use cache` will be prerendered as part of the static HTML shell.
  * Unlike `unstable_cache` which only supports JSON data, `use cache` can cache any serializable data React can render, including the render output of components.


## Examples
### Caching entire routes with `use cache`
To prerender an entire route, add `use cache` to the top of **both** the `layout` and `page` files. Each of these segments are treated as separate entry points in your application, and will be cached independently.
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
'use cache'
exportdefaultfunctionLayout({ children }: { children:ReactNode }) {
return <div>{children}</div>
}
```

Any components imported and nested in `page` file will inherit the cache behavior of `page`.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
'use cache'
asyncfunctionUsers() {
constusers=awaitfetch('/api/users')
// loop through users
}
exportdefaultfunctionPage() {
return (
  <main>
   <Users />
  </main>
 )
}
```

> This is recommended for applications that previously used the `export const dynamic = "force-static"` option, and will ensure the entire route is prerendered.
### Caching component output with `use cache`
You can use `use cache` at the component level to cache any fetches or computations performed within that component. When you reuse the component throughout your application it can share the same cache entry as long as the props maintain the same structure.
The props are serialized and form part of the cache key, and the cache entry will be reused as long as the serialized props produce the same value in each instance.
app/components/bookings.tsx
TypeScript
JavaScriptTypeScript
```
exportasyncfunctionBookings({ type ='haircut' }:BookingsProps) {
'use cache'
asyncfunctiongetBookingsData() {
constdata=awaitfetch(`/api/bookings?type=${encodeURIComponent(type)}`)
return data
 }
return//...
}
interfaceBookingsProps {
 type:string
}
```

### Caching function output with `use cache`
Since you can add `use cache` to any asynchronous function, you aren't limited to caching components or routes only. You might want to cache a network request or database query or compute something that is very slow. By adding `use cache` to a function containing this type of work it becomes cacheable, and when reused, will share the same cache entry.
app/actions.ts
TypeScript
JavaScriptTypeScript
```
exportasyncfunctiongetData() {
'use cache'
constdata=awaitfetch('/api/data')
return data
}
```

### Revalidating
By default, Next.js sets a **revalidation period of 15 minutes** when you use the `use cache` directive. Next.js sets a near-infinite expiration duration, meaning it's suitable for content that doesn't need frequent updates.
While this revalidation period may be useful for content you don't expect to change often, you can use the `cacheLife` and `cacheTag` APIs to configure the cache behavior:
  * `cacheLife`: For time-based revalidation periods.
  * `cacheTag`: For on-demand revalidation.


Both of these APIs integrate across the client and server caching layers, meaning you can configure your caching semantics in one place and have them apply everywhere.
See the `cacheLife` and `cacheTag` docs for more information.
### Interleaving
If you need to pass non-serializable arguments to a cacheable function, you can pass them as `children`. This means the `children` reference can change without affecting the cache entry.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionPage() {
constuncachedData=awaitgetData()
return (
  <CacheComponent>
   <DynamicComponentdata={uncachedData} />
  </CacheComponent>
 )
}
asyncfunctionCacheComponent({ children }: { children:ReactNode }) {
'use cache'
constcachedData=awaitfetch('/api/cached-data')
return (
  <div>
   <PrerenderedComponentdata={cachedData} />
   {children}
  </div>
 )
}
```

You can also pass Server Actions through cached components to Client Components without invoking them inside the cacheable function.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import ClientComponent from'./ClientComponent'
exportdefaultasyncfunctionPage() {
constperformUpdate=async () => {
'use server'
// Perform some server-side update
awaitdb.update(...)
 }
return <CacheComponentperformUpdate={performUpdate} />
}
asyncfunctionCachedComponent({
 performUpdate,
}: {
performUpdate: () =>Promise<void>
}) {
'use cache'
// Do not call performUpdate here
return <ClientComponentaction={performUpdate} />
}
```

app/ClientComponent.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
exportdefaultfunctionClientComponent({
 action,
}: {
action: () =>Promise<void>
}) {
return <buttononClick={action}>Update</button>
}
```

## Related
View related API references.
### useCache
Learn how to enable the useCache flag in Next.js.
### dynamicIO
Learn how to enable the dynamicIO flag in Next.js.
### cacheLife
Learn how to set up cacheLife configurations in Next.js.
### cacheTag
Learn how to use the cacheTag function to manage cache invalidation in your Next.js application.
### cacheLife
Learn how to use the cacheLife function to set the cache expiration time for a cached function or component.
### revalidateTag
API Reference for the revalidateTag function.
Was this helpful?
supported.
Send
