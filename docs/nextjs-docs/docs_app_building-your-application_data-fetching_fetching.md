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
Building Your ApplicationData FetchingData Fetching and Caching
# Data Fetching and Caching
Examples
  * Next.js Commerce
  * On-Demand ISR
  * Next.js Forms


This guide will walk you through the basics of data fetching and caching in Next.js, providing practical examples and best practices.
Here's a minimal example of data fetching in Next.js:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionPage() {
constdata=awaitfetch('https://api.vercel.app/blog')
constposts=awaitdata.json()
return (
  <ul>
   {posts.map((post) => (
    <likey={post.id}>{post.title}</li>
   ))}
  </ul>
 )
}
```

This example demonstrates a basic server-side data fetch using the `fetch` API in an asynchronous React Server Component.
## Reference
  * `fetch`
  * React `cache`
  * Next.js `unstable_cache`


## Examples
### Fetching data on the server with the `fetch` API
This component will fetch and display a list of blog posts. The response from `fetch` is not cached by default.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionPage() {
constdata=awaitfetch('https://api.vercel.app/blog')
constposts=awaitdata.json()
return (
  <ul>
   {posts.map((post) => (
    <likey={post.id}>{post.title}</li>
   ))}
  </ul>
 )
}
```

If you are not using any Dynamic APIs anywhere else in this route, it will be prerendered during `next build` to a static page. The data can then be updated using Incremental Static Regeneration.
To prevent the page from prerendering, you can add the following to your file:
```
exportconstdynamic='force-dynamic'
```

However, you will commonly use functions like `cookies`, `headers`, or reading the incoming `searchParams` from the page props, which will automatically make the page render dynamically. In this case, you do _not_ need to explicitly use `force-dynamic`.
### Fetching data on the server with an ORM or database
This component will fetch and display a list of blog posts. The response from the database is not cached by default but could be with additional configuration.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { db, posts } from'@/lib/db'
exportdefaultasyncfunctionPage() {
constallPosts=awaitdb.select().from(posts)
return (
  <ul>
   {allPosts.map((post) => (
    <likey={post.id}>{post.title}</li>
   ))}
  </ul>
 )
}
```

If you are not using any Dynamic APIs anywhere else in this route, it will be prerendered during `next build` to a static page. The data can then be updated using Incremental Static Regeneration.
To prevent the page from prerendering, you can add the following to your file:
```
exportconstdynamic='force-dynamic'
```

However, you will commonly use functions like `cookies`, `headers`, or reading the incoming `searchParams` from the page props, which will automatically make the page render dynamically. In this case, you do _not_ need to explicitly use `force-dynamic`.
### Fetching data on the client
We recommend first attempting to fetch data on the server-side.
However, there are still cases where client-side data fetching makes sense. In these scenarios, you can manually call `fetch` in a `useEffect` (not recommended), or lean on popular React libraries in the community (such as SWR or React Query) for client fetching.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useState, useEffect } from'react'
exportfunctionPosts() {
const [posts,setPosts] =useState(null)
useEffect(() => {
asyncfunctionfetchPosts() {
constres=awaitfetch('https://api.vercel.app/blog')
constdata=awaitres.json()
setPosts(data)
  }
fetchPosts()
 }, [])
if (!posts) return <div>Loading...</div>
return (
  <ul>
   {posts.map((post) => (
    <likey={post.id}>{post.title}</li>
   ))}
  </ul>
 )
}
```

### Caching data with an ORM or Database
You can use the `unstable_cache` API to cache the response to allow pages to be prerendered when running `next build`.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { unstable_cache } from'next/cache'
import { db, posts } from'@/lib/db'
constgetPosts=unstable_cache(
async () => {
returnawaitdb.select().from(posts)
 },
 ['posts'],
 { revalidate:3600, tags: ['posts'] }
)
exportdefaultasyncfunctionPage() {
constallPosts=awaitgetPosts()
return (
  <ul>
   {allPosts.map((post) => (
    <likey={post.id}>{post.title}</li>
   ))}
  </ul>
 )
}
```

This example caches the result of the database query for 1 hour (3600 seconds). It also adds the cache tag `posts` which can then be invalidated with Incremental Static Regeneration.
### Reusing data across multiple functions
Next.js uses APIs like `generateMetadata` and `generateStaticParams` where you will need to use the same data fetched in the `page`.
If you are using `fetch`, requests can be memoized by adding `cache: 'force-cache'`. This means you can safely call the same URL with the same options, and only one request will be made.
> **Good to know:**
>   * In previous versions of Next.js, using `fetch` would have a default `cache` value of `force-cache`. This changed in version 15, to a default of `cache: no-store`.
> 

app/blog/[id]/page.tsx
TypeScript
JavaScriptTypeScript
```
import { notFound } from'next/navigation'
interfacePost {
 id:string
 title:string
 content:string
}
asyncfunctiongetPost(id:string) {
constres=awaitfetch(`https://api.vercel.app/blog/${id}`, {
  cache:'force-cache',
 })
constpost:Post=awaitres.json()
if (!post) notFound()
return post
}
exportasyncfunctiongenerateStaticParams() {
constposts=awaitfetch('https://api.vercel.app/blog', {
  cache:'force-cache',
 }).then((res) =>res.json())
returnposts.map((post:Post) => ({
  id:String(post.id),
 }))
}
exportasyncfunctiongenerateMetadata({
 params,
}: {
 params:Promise<{ id:string }>
}) {
const { id } =await params
constpost=awaitgetPost(id)
return {
  title:post.title,
 }
}
exportdefaultasyncfunctionPage({
 params,
}: {
 params:Promise<{ id:string }>
}) {
const { id } =await params
constpost=awaitgetPost(id)
return (
  <article>
   <h1>{post.title}</h1>
   <p>{post.content}</p>
  </article>
 )
}
```

If you are _not_ using `fetch`, and instead using an ORM or database directly, you can wrap your data fetch with the React `cache` function. This will de-duplicate and only make one query.
```
import { cache } from'react'
import { db, posts, eq } from'@/lib/db'// Example with Drizzle ORM
import { notFound } from'next/navigation'
exportconstgetPost=cache(async (id) => {
constpost=awaitdb.query.posts.findFirst({
  where:eq(posts.id,parseInt(id)),
 })
if (!post) notFound()
return post
})
```

### Revalidating cached data
Learn more about revalidating cached data with Incremental Static Regeneration.
## Patterns
### Parallel and sequential data fetching
When fetching data inside components, you need to be aware of two data fetching patterns: Parallel and Sequential.
![Sequential and Parallel Data Fetching](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fsequential-parallel-data-fetching.png&w=3840&q=75)![Sequential and Parallel Data Fetching](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fsequential-parallel-data-fetching.png&w=3840&q=75)
  * **Sequential** : requests in a component tree are dependent on each other. This can lead to longer loading times.
  * **Parallel** : requests in a route are eagerly initiated and will load data at the same time. This reduces the total time it takes to load data.


#### Sequential data fetching
If you have nested components, and each component fetches its own data, then data fetching will happen sequentially if those data requests are not memoized.
There may be cases where you want this pattern because one fetch depends on the result of the other. For example, the `Playlists` component will only start fetching data once the `Artist` component has finished fetching data because `Playlists` depends on the `artistID` prop:
app/artist/[username]/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionPage({
 params,
}: {
 params:Promise<{ username:string }>
}) {
const { username } =await params
// Get artist information
constartist=awaitgetArtist(username)
return (
  <>
   <h1>{artist.name}</h1>
   {/* Show fallback UI while the Playlists component is loading */}
   <Suspensefallback={<div>Loading...</div>}>
    {/* Pass the artist ID to the Playlists component */}
    <PlaylistsartistID={artist.id} />
   </Suspense>
  </>
 )
}
asyncfunctionPlaylists({ artistID }: { artistID:string }) {
// Use the artist ID to fetch playlists
constplaylists=awaitgetArtistPlaylists(artistID)
return (
  <ul>
   {playlists.map((playlist) => (
    <likey={playlist.id}>{playlist.name}</li>
   ))}
  </ul>
 )
}
```

You can use `loading.js` (for route segments) or React `<Suspense>` (for nested components) to show an instant loading state while React streams in the result.
This will prevent the whole route from being blocked by data requests, and the user will be able to interact with the parts of the page that are ready.
#### Parallel Data Fetching
By default, layout and page segments are rendered in parallel. This means requests will be initiated in parallel.
However, due to the nature of `async`/`await`, an awaited request inside the same segment or component will block any requests below it.
To fetch data in parallel, you can eagerly initiate requests by defining them outside the components that use the data. This saves time by initiating both requests in parallel, however, the user won't see the rendered result until both promises are resolved.
In the example below, the `getArtist` and `getAlbums` functions are defined outside the `Page` component and initiated inside the component using `Promise.all`:
app/artist/[username]/page.tsx
TypeScript
JavaScriptTypeScript
```
import Albums from'./albums'
asyncfunctiongetArtist(username:string) {
constres=awaitfetch(`https://api.example.com/artist/${username}`)
returnres.json()
}
asyncfunctiongetAlbums(username:string) {
constres=awaitfetch(`https://api.example.com/artist/${username}/albums`)
returnres.json()
}
exportdefaultasyncfunctionPage({
 params,
}: {
 params:Promise<{ username:string }>
}) {
const { username } =await params
constartistData=getArtist(username)
constalbumsData=getAlbums(username)
// Initiate both requests in parallel
const [artist,albums] =awaitPromise.all([artistData, albumsData])
return (
  <>
   <h1>{artist.name}</h1>
   <Albumslist={albums} />
  </>
 )
}
```

In addition, you can add a Suspense Boundary to break up the rendering work and show part of the result as soon as possible.
### Preloading Data
Another way to prevent waterfalls is to use the _preload_ pattern by creating an utility function that you eagerly call above blocking requests. For example, `checkIsAvailable()` blocks `<Item/>` from rendering, so you can call `preload()` before it to eagerly initiate `<Item/>` data dependencies. By the time `<Item/>` is rendered, its data has already been fetched.
Note that `preload` function doesn't block `checkIsAvailable()` from running.
components/Item.tsx
TypeScript
JavaScriptTypeScript
```
import { getItem } from'@/utils/get-item'
exportconstpreload= (id:string) => {
// void evaluates the given expression and returns undefined
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
voidgetItem(id)
}
exportdefaultasyncfunctionItem({ id }: { id:string }) {
constresult=awaitgetItem(id)
// ...
}
```

app/item/[id]/page.tsx
TypeScript
JavaScriptTypeScript
```
import Item, { preload, checkIsAvailable } from'@/components/Item'
exportdefaultasyncfunctionPage({
 params,
}: {
 params:Promise<{ id:string }>
}) {
const { id } =await params
// starting loading item data
preload(id)
// perform another asynchronous task
constisAvailable=awaitcheckIsAvailable()
return isAvailable ? <Itemid={id} /> :null
}
```

> **Good to know:** The "preload" function can also have any name as it's a pattern, not an API.
#### Using React `cache` and `server-only` with the Preload Pattern
You can combine the `cache` function, the `preload` pattern, and the `server-only` package to create a data fetching utility that can be used throughout your app.
utils/get-item.ts
TypeScript
JavaScriptTypeScript
```
import { cache } from'react'
import'server-only'
exportconstpreload= (id:string) => {
voidgetItem(id)
}
exportconstgetItem=cache(async (id:string) => {
// ...
})
```

With this approach, you can eagerly fetch data, cache responses, and guarantee that this data fetching only happens on the server.
The `utils/get-item` exports can be used by Layouts, Pages, or other components to give them control over when an item's data is fetched.
> **Good to know:**
>   * We recommend using the `server-only` package to make sure server data fetching functions are never used on the client.
> 

### Preventing sensitive data from being exposed to the client
We recommend using React's taint APIs, `taintObjectReference` and `taintUniqueValue`, to prevent whole object instances or sensitive values from being passed to the client.
To enable tainting in your application, set the Next.js Config `experimental.taint` option to `true`:
next.config.js
```
module.exports= {
 experimental: {
  taint:true,
 },
}
```

Then pass the object or value you want to taint to the `experimental_taintObjectReference` or `experimental_taintUniqueValue` functions:
app/utils.ts
TypeScript
JavaScriptTypeScript
```
import { queryDataFromDB } from'./api'
import {
 experimental_taintObjectReference,
 experimental_taintUniqueValue,
} from'react'
exportasyncfunctiongetUserData() {
constdata=awaitqueryDataFromDB()
experimental_taintObjectReference(
'Do not pass the whole user object to the client',
  data
 )
experimental_taintUniqueValue(
"Do not pass the user's address to the client",
  data,
data.address
 )
return data
}
```

app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { getUserData } from'./data'
exportasyncfunctionPage() {
constuserData=getUserData()
return (
  <ClientComponent
user={userData} // this will cause an error because of taintObjectReference
address={userData.address} // this will cause an error because of taintUniqueValue
  />
 )
}
```

Was this helpful?
supported.
Send
