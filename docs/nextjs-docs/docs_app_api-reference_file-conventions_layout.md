Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
API ReferenceFile Conventionslayout.js
# layout.js
The `layout` file is used to define a layout in your Next.js application.
app/dashboard/layout.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionDashboardLayout({
 children,
}: {
 children:React.ReactNode
}) {
return <section>{children}</section>
}
```

A **root layout** is the top-most layout in the root `app` directory. It is used to define the `<html>` and `<body>` tags and other globally shared UI.
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionRootLayout({
 children,
}: {
 children:React.ReactNode
}) {
return (
  <htmllang="en">
   <body>{children}</body>
  </html>
 )
}
```

## Reference
### Props
#### `children` (required)
Layout components should accept and use a `children` prop. During rendering, `children` will be populated with the route segments the layout is wrapping. These will primarily be the component of a child Layout (if it exists) or Page, but could also be other special files like Loading or Error when applicable.
#### `params` (optional)
A promise that resolves to an object containing the dynamic route parameters object from the root segment down to that layout.
app/dashboard/[team]/layout.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionLayout({
 params,
}: {
 params:Promise<{ team:string }>
}) {
constteam= (await params).team
}
```

Example Route| URL| `params`  
---|---|---  
`app/dashboard/[team]/layout.js`| `/dashboard/1`| `Promise<{ team: '1' }>`  
`app/shop/[tag]/[item]/layout.js`| `/shop/1/2`| `Promise<{ tag: '1', item: '2' }>`  
`app/blog/[...slug]/layout.js`| `/blog/1/2`| `Promise<{ slug: ['1', '2'] }>`  
  * Since the `params` prop is a promise. You must use `async/await` or React's `use` function to access the values. 
    * In version 14 and earlier, `params` was a synchronous prop. To help with backwards compatibility, you can still access it synchronously in Next.js 15, but this behavior will be deprecated in the future.


### Root Layouts
The `app` directory **must** include a root `app/layout.js`.
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionRootLayout({
 children,
}: {
 children:React.ReactNode
}) {
return (
  <html>
   <body>{children}</body>
  </html>
 )
}
```

  * The root layout **must** define `<html>` and `<body>` tags. 
    * You should **not** manually add `<head>` tags such as `<title>` and `<meta>` to root layouts. Instead, you should use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating `<head>` elements.
  * You can use route groups to create multiple root layouts. 
    * Navigating **across multiple root layouts** will cause a **full page load** (as opposed to a client-side navigation). For example, navigating from `/cart` that uses `app/(shop)/layout.js` to `/blog` that uses `app/(marketing)/layout.js` will cause a full page load. This **only** applies to multiple root layouts.


## Caveats
### Layouts do not receive `searchParams`
Unlike Pages, Layout components **do not** receive the `searchParams` prop. This is because a shared layout is not re-rendered during navigation which could lead to stale `searchParams` between navigations.
When using client-side navigation, Next.js automatically only renders the part of the page below the common layout between two routes.
For example, in the following directory structure, `dashboard/layout.tsx` is the common layout for both `/dashboard/settings` and `/dashboard/analytics`:
![File structure showing a dashboard folder nesting a layout.tsx file, and settings and analytics folders with their own pages](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fshared-dashboard-layout.png&w=3840&q=75)![File structure showing a dashboard folder nesting a layout.tsx file, and settings and analytics folders with their own pages](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fshared-dashboard-layout.png&w=3840&q=75)
When navigating from `/dashboard/settings` to `/dashboard/analytics`, `page.tsx` in `/dashboard/analytics` will rerender on the server, while `dashboard/layout.tsx` will **not** rerender because it's a common UI shared between the two routes.
This performance optimization allows navigation between pages that share a layout to be quicker as only the data fetching and rendering for the page has to run, instead of the entire route that could include shared layouts that fetch their own data.
Because `dashboard/layout.tsx` doesn't re-render, the `searchParams` prop in the layout Server Component might become **stale** after navigation.
Instead, use the Page `searchParams` prop or the `useSearchParams` hook in a Client Component within the layout, which is rerendered on the client with the latest `searchParams`.
### Layouts cannot access `pathname`
Layouts cannot access `pathname`. This is because layouts are Server Components by default, and don't rerender during client-side navigation, which could lead to `pathname` becoming stale between navigations. To prevent staleness, Next.js would need to refetch all segments of a route, losing the benefits of caching and increasing the RSC payload size on navigation.
Instead, you can extract the logic that depends on pathname into a Client Component and import it into your layouts. Since Client Components rerender (but are not refetched) during navigation, you can use Next.js hooks such as `usePathname` to access the current pathname and prevent staleness.
app/dashboard/layout.tsx
TypeScript
JavaScriptTypeScript
```
import { ClientComponent } from'@/app/ui/ClientComponent'
exportdefaultfunctionLayout({ children }: { children:React.ReactNode }) {
return (
  <>
   <ClientComponent />
   {/* Other Layout UI */}
   <main>{children}</main>
  </>
 )
}
```

Common `pathname` patterns can also be implemented with `params` prop.
See the examples section for more information.
## Examples
### Displaying content based on `params`
Using dynamic route segments, you can display or fetch specific content based on the `params` prop.
app/dashboard/layout.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionDashboardLayout({
 children,
 params,
}: {
 children:React.ReactNode
 params:Promise<{ team:string }>
}) {
const { team } =await params
return (
  <section>
   <header>
    <h1>Welcome to {team}'s Dashboard</h1>
   </header>
   <main>{children}</main>
  </section>
 )
}
```

### Reading `params` in Client Components
To use `params` in a Client Component (which cannot be `async`), you can use React's `use` function to read the promise:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { use } from'react'
exportdefaultfunctionPage({
 params,
}: {
 params:Promise<{ slug:string }>
}) {
const { slug } =use(params)
}
```

## Version History
Version| Changes  
---|---  
`v15.0.0-RC`| `params` is now a promise. A codemod is available.  
`v13.0.0`| `layout` introduced.  
Was this helpful?
supported.
Send
