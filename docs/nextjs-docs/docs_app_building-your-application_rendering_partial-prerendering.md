Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationRenderingPartial Prerendering
# Partial Prerendering
> **Note:** Partial Prerendering is an **experimental** feature only available on canary and is subject to change. It is not ready for production use.
Partial Prerendering (PPR) enables you to combine static and dynamic components together in the same route.
During the build, Next.js prerenders as much of the route as possible. If dynamic code is detected, like reading from the incoming request, you can wrap the relevant component with a React Suspense boundary. The Suspense boundary fallback will then be included in the prerendered HTML.
![Partially Prerendered Product Page showing static nav and product information, and dynamic cart and recommended products](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fthinking-in-ppr.png&w=3840&q=75)![Partially Prerendered Product Page showing static nav and product information, and dynamic cart and recommended products](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fthinking-in-ppr.png&w=3840&q=75)
> **🎥 Watch:** Why PPR and how it works → YouTube (10 minutes).
## Background
PPR enables your Next.js server to immediately send prerendered content.
To prevent client to server waterfalls, dynamic components begin streaming from the server in parallel while serving the initial prerender. This ensures dynamic components can begin rendering before client JavaScript has been loaded in the browser.
To prevent creating many HTTP requests for each dynamic component, PPR is able to combine the static prerender and dynamic components together into a single HTTP request. This ensures there are not multiple network roundtrips needed for each dynamic component.
## Using Partial Prerendering
### Incremental Adoption (Version 15 Canary Versions)
In Next.js 15 canary versions, PPR is available as an experimental feature. It's not available in the stable versions yet. To install:
```
npm installnext@canary
```

You can incrementally adopt Partial Prerendering in layouts and pages by setting the `ppr` option in `next.config.js` to `incremental`, and exporting the `experimental_ppr` route config option at the top of the file:
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 experimental: {
  ppr:'incremental',
 },
}
exportdefault nextConfig
```

app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { Suspense } from'react'
import { StaticComponent, DynamicComponent, Fallback } from'@/app/ui'
exportconstexperimental_ppr=true
exportdefaultfunctionPage() {
return (
  <>
   <StaticComponent />
   <Suspensefallback={<Fallback />}>
    <DynamicComponent />
   </Suspense>
  </>
 )
}
```

> **Good to know** :
>   * Routes that don't have `experimental_ppr` will default to `false` and will not be prerendered using PPR. You need to explicitly opt-in to PPR for each route.
>   * `experimental_ppr` will apply to all children of the route segment, including nested layouts and pages. You don't have to add it to every file, only the top segment of a route.
>   * To disable PPR for children segments, you can set `experimental_ppr` to `false` in the child segment.
> 

## Dynamic Components
When creating the prerender for your route during `next build`, Next.js requires that Dynamic APIs are wrapped with React Suspense. The `fallback` is then included in the prerender.
For example, using functions like `cookies` or `headers`:
app/user.tsx
TypeScript
JavaScriptTypeScript
```
import { cookies } from'next/headers'
exportasyncfunctionUser() {
constsession= (awaitcookies()).get('session')?.value
return'...'
}
```

This component requires looking at the incoming request to read cookies. To use this with PPR, you should wrap the component with Suspense:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { Suspense } from'react'
import { User, AvatarSkeleton } from'./user'
exportconstexperimental_ppr=true
exportdefaultfunctionPage() {
return (
  <section>
   <h1>This will be prerendered</h1>
   <Suspensefallback={<AvatarSkeleton />}>
    <User />
   </Suspense>
  </section>
 )
}
```

Components only opt into dynamic rendering when the value is accessed.
For example, if you are reading `searchParams` from a `page`, you can forward this value to another component as a prop:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { Table } from'./table'
exportdefaultfunctionPage({
 searchParams,
}: {
 searchParams:Promise<{ sort:string }>
}) {
return (
  <section>
   <h1>This will be prerendered</h1>
   <TablesearchParams={searchParams} />
  </section>
 )
}
```

Inside of the table component, accessing the value from `searchParams` will make the component run dynamically:
app/table.tsx
TypeScript
JavaScriptTypeScript
```
exportasyncfunctionTable({
 searchParams,
}: {
 searchParams:Promise<{ sort:string }>
}) {
constsort= (await searchParams).sort ==='true'
return'...'
}
```

Was this helpful?
supported.
Send
