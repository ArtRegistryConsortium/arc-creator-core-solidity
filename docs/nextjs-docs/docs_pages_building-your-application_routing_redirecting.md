Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationRoutingRedirecting
# Redirecting
There are a few ways you can handle redirects in Next.js. This page will go through each available option, use cases, and how to manage large numbers of redirects.
API| Purpose| Where| Status Code  
---|---|---|---  
`useRouter`| Perform a client-side navigation| Components| N/A  
`redirects` in `next.config.js`| Redirect an incoming request based on a path| `next.config.js` file| 307 (Temporary) or 308 (Permanent)  
`NextResponse.redirect`| Redirect an incoming request based on a condition| Middleware| Any  
## `useRouter()` hook
If you need to redirect inside a component, you can use the `push` method from the `useRouter` hook. For example:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { useRouter } from'next/router'
exportdefaultfunctionPage() {
constrouter=useRouter()
return (
  <buttontype="button"onClick={() =>router.push('/dashboard')}>
   Dashboard
  </button>
 )
}
```

> **Good to know** :
>   * If you don't need to programmatically navigate a user, you should use a `<Link>` component.
> 

See the `useRouter` API reference for more information.
## `redirects` in `next.config.js`
The `redirects` option in the `next.config.js` file allows you to redirect an incoming request path to a different destination path. This is useful when you change the URL structure of pages or have a list of redirects that are known ahead of time.
`redirects` supports path, header, cookie, and query matching, giving you the flexibility to redirect users based on an incoming request.
To use `redirects`, add the option to your `next.config.js` file:
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
asyncredirects() {
return [
// Basic redirect
   {
    source:'/about',
    destination:'/',
    permanent:true,
   },
// Wildcard path matching
   {
    source:'/blog/:slug',
    destination:'/news/:slug',
    permanent:true,
   },
  ]
 },
}
exportdefault nextConfig
```

See the `redirects` API reference for more information.
> **Good to know** :
>   * `redirects` can return a 307 (Temporary Redirect) or 308 (Permanent Redirect) status code with the `permanent` option.
>   * `redirects` may have a limit on platforms. For example, on Vercel, there's a limit of 1,024 redirects. To manage a large number of redirects (1000+), consider creating a custom solution using Middleware. See managing redirects at scale for more.
>   * `redirects` runs **before** Middleware.
> 

## `NextResponse.redirect` in Middleware
Middleware allows you to run code before a request is completed. Then, based on the incoming request, redirect to a different URL using `NextResponse.redirect`. This is useful if you want to redirect users based on a condition (e.g. authentication, session management, etc) or have a large number of redirects.
For example, to redirect the user to a `/login` page if they are not authenticated:
middleware.ts
TypeScript
JavaScriptTypeScript
```
import { NextResponse, NextRequest } from'next/server'
import { authenticate } from'auth-provider'
exportfunctionmiddleware(request:NextRequest) {
constisAuthenticated=authenticate(request)
// If the user is authenticated, continue as normal
if (isAuthenticated) {
returnNextResponse.next()
 }
// Redirect to login page if not authenticated
returnNextResponse.redirect(newURL('/login',request.url))
}
exportconstconfig= {
 matcher:'/dashboard/:path*',
}
```

> **Good to know** :
>   * Middleware runs **after** `redirects` in `next.config.js` and **before** rendering.
> 

See the Middleware documentation for more information.
## Managing redirects at scale (advanced)
To manage a large number of redirects (1000+), you may consider creating a custom solution using Middleware. This allows you to handle redirects programmatically without having to redeploy your application.
To do this, you'll need to consider:
  1. Creating and storing a redirect map.
  2. Optimizing data lookup performance.


> **Next.js Example** : See our Middleware with Bloom filter example for an implementation of the recommendations below.
### 1. Creating and storing a redirect map
A redirect map is a list of redirects that you can store in a database (usually a key-value store) or JSON file.
Consider the following data structure:
```
{
"/old": {
"destination":"/new",
"permanent":true
 },
"/blog/post-old": {
"destination":"/blog/post-new",
"permanent":true
 }
}
```

In Middleware, you can read from a database such as Vercel's Edge Config or Redis, and redirect the user based on the incoming request:
middleware.ts
TypeScript
JavaScriptTypeScript
```
import { NextResponse, NextRequest } from'next/server'
import { get } from'@vercel/edge-config'
typeRedirectEntry= {
 destination:string
 permanent:boolean
}
exportasyncfunctionmiddleware(request:NextRequest) {
constpathname=request.nextUrl.pathname
constredirectData=awaitget(pathname)
if (redirectData &&typeof redirectData ==='string') {
constredirectEntry:RedirectEntry=JSON.parse(redirectData)
conststatusCode=redirectEntry.permanent ?308:307
returnNextResponse.redirect(redirectEntry.destination, statusCode)
 }
// No redirect found, continue without redirecting
returnNextResponse.next()
}
```

### 2. Optimizing data lookup performance
Reading a large dataset for every incoming request can be slow and expensive. There are two ways you can optimize data lookup performance:
  * Use a database that is optimized for fast reads, such as Vercel Edge Config or Redis.
  * Use a data lookup strategy such as a Bloom filter to efficiently check if a redirect exists **before** reading the larger redirects file or database.


Considering the previous example, you can import a generated bloom filter file into Middleware, then, check if the incoming request pathname exists in the bloom filter.
If it does, forward the request to a API Routes which will check the actual file and redirect the user to the appropriate URL. This avoids importing a large redirects file into Middleware, which can slow down every incoming request.
middleware.ts
TypeScript
JavaScriptTypeScript
```
import { NextResponse, NextRequest } from'next/server'
import { ScalableBloomFilter } from'bloom-filters'
import GeneratedBloomFilter from'./redirects/bloom-filter.json'
typeRedirectEntry= {
 destination:string
 permanent:boolean
}
// Initialize bloom filter from a generated JSON file
constbloomFilter=ScalableBloomFilter.fromJSON(GeneratedBloomFilter asany)
exportasyncfunctionmiddleware(request:NextRequest) {
// Get the path for the incoming request
constpathname=request.nextUrl.pathname
// Check if the path is in the bloom filter
if (bloomFilter.has(pathname)) {
// Forward the pathname to the Route Handler
constapi=newURL(
`/api/redirects?pathname=${encodeURIComponent(request.nextUrl.pathname)}`,
request.nextUrl.origin
  )
try {
// Fetch redirect data from the Route Handler
constredirectData=awaitfetch(api)
if (redirectData.ok) {
constredirectEntry:RedirectEntry|undefined=
awaitredirectData.json()
if (redirectEntry) {
// Determine the status code
conststatusCode=redirectEntry.permanent ?308:307
// Redirect to the destination
returnNextResponse.redirect(redirectEntry.destination, statusCode)
    }
   }
  } catch (error) {
console.error(error)
  }
 }
// No redirect found, continue the request without redirecting
returnNextResponse.next()
}
```

Then, in the API Route:
pages/api/redirects.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
import redirects from'@/app/redirects/redirects.json'
typeRedirectEntry= {
 destination:string
 permanent:boolean
}
exportdefaultfunctionhandler(req:NextApiRequest, res:NextApiResponse) {
constpathname=req.query.pathname
if (!pathname) {
returnres.status(400).json({ message:'Bad Request' })
 }
// Get the redirect entry from the redirects.json file
constredirect= (redirects asRecord<string,RedirectEntry>)[pathname]
// Account for bloom filter false positives
if (!redirect) {
returnres.status(400).json({ message:'No redirect' })
 }
// Return the redirect entry
returnres.json(redirect)
}
```

> **Good to know:**
>   * To generate a bloom filter, you can use a library like `bloom-filters`.
>   * You should validate requests made to your Route Handler to prevent malicious requests.
> 

Was this helpful?
supported.
Send
