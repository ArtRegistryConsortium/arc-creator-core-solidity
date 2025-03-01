Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jsppr
# ppr
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
Partial Prerendering (PPR) enables you to combine static and dynamic components together in the same route. Learn more about PPR.
## Using Partial Prerendering
### Incremental Adoption (Version 15)
In Next.js 15, you can incrementally adopt Partial Prerendering in layouts and pages by setting the `ppr` option in `next.config.js` to `incremental`, and exporting the `experimental_ppr` route config option at the top of the file:
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
import { Suspense } from"react"
import { StaticComponent, DynamicComponent, Fallback } from"@/app/ui"
exportconstexperimental_ppr=true
exportdefaultfunctionPage() {
return {
   <>
   <StaticComponent />
   <Suspense fallback={<Fallback />}>
    <DynamicComponent />
   </Suspense>
   </>
 };
}
```

> **Good to know** :
>   * Routes that don't have `experimental_ppr` will default to `false` and will not be prerendered using PPR. You need to explicitly opt-in to PPR for each route.
>   * `experimental_ppr` will apply to all children of the route segment, including nested layouts and pages. You don't have to add it to every file, only the top segment of a route.
>   * To disable PPR for children segments, you can set `experimental_ppr` to `false` in the child segment.
> 

Version| Changes  
---|---  
`v15.0.0`| experimental `incremental` value introduced  
`v14.0.0`| experimental `ppr` introduced  
## Learn more about Partial Prerendering
### Partial Prerendering
Learn how to combine the benefits of static and dynamic rendering with Partial Prerendering.
Was this helpful?
supported.
Send
