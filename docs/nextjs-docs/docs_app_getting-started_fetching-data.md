Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
App RouterGetting StartedFetching Data
# How to fetch data and stream
This page will walk you through how you can fetch data in Server Components and Client Components. As well as how to stream content that depends on data.
## Fetching data
### Server Components
You can fetch data in Server Components using:
  1. The `fetch` API
  2. An ORM or database


#### With the `fetch` API
To fetch data with the `fetch` API, turn your component into an asynchronous function, and await the `fetch` call. For example:
app/blog/page.tsx
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

#### With an ORM or database
You can fetch data with an ORM or database by turning your component into an asynchronous function, and awaiting the call:
app/blog/page.tsx
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

### Client Components
There are two ways to fetch data in Client Components, using:
  1. React's `use` hook
  2. A community library like SWR or React Query


#### With the `use` hook
You can use React's `use` hook to stream data from the server to client. Start by fetching data in your Server component, and pass the promise to your Client Component as prop:
app/blog/page.tsx
TypeScript
JavaScriptTypeScript
```
import Posts from'@/app/ui/posts
import { Suspense } from'react'
exportdefaultfunctionPage() {
// Don't await the data fetching function
constposts=getPosts()
return (
  <Suspensefallback={<div>Loading...</div>}>
   <Postsposts={posts} />
  </Suspense>
 )
}
```

Then, in your Client Component, use the `use` hook read the promise:
app/ui/posts.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { use } from'react'
exportdefaultfunctionPosts({
 posts,
}: {
 posts:Promise<{ id:string; title:string }[]>
}) {
constallPosts=use(posts)
return (
  <ul>
   {allPosts.map((post) => (
    <likey={post.id}>{post.title}</li>
   ))}
  </ul>
 )
}
```

In the example above, you need to wrap the `<Posts />` component in a `<Suspense>` boundary. This means the fallback will be shown while the promise is being resolved. Learn more about streaming.
#### Community libraries
You can use a community library like SWR or React Query to fetch data in Client Components. These libraries have their own semantics for caching, streaming, and other features. For example, with SWR:
app/blog/page.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import useSWR from'swr'
constfetcher= (url) =>fetch(url).then((r) =>r.json())
exportdefaultfunctionBlogPage() {
const { data,error,isLoading } =useSWR(
'https://api.vercel.app/blog',
  fetcher
 )
if (isLoading) return <div>Loading...</div>
if (error) return <div>Error: {error.message}</div>
return (
  <ul>
   {data.map((post: { id:string; title:string }) => (
    <likey={post.id}>{post.title}</li>
   ))}
  </ul>
 )
}
```

## Streaming
> **Warning:** The content below assumes the `dynamicIO` config option is enabled in your application. The flag was introduced in Next.js 15 canary.
When using `async/await` in Server Components, Next.js will opt into **dynamic rendering**. This means the data will be fetched and rendered on the server for every user request. If there are any slow data requests, the whole route will be blocked from rendering.
To improve the initial load time and user experience, you can use streaming to break up the page's HTML into smaller chunks and progressively send those chunks from the server to the client.
![How Server Rendering with Streaming Works](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fserver-rendering-with-streaming.png&w=3840&q=75)![How Server Rendering with Streaming Works](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-with-streaming.png&w=3840&q=75)
There are two ways you can implement streaming in your application:
  1. With the `loading.js` file
  2. With React's `<Suspense>` component


### With `loading.js`
You can create a `loading.js` file in the same folder as your page to stream the **entire page** while the data is being fetched. For example, to stream `app/blog/page.js`, add the file inside the `app/blog` folder.
![Blog folder structure with loading.js file](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Floading-file.png&w=3840&q=75)![Blog folder structure with loading.js file](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-file.png&w=3840&q=75)
app/blog/loading.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionLoading() {
// Define the Loading UI here
return <div>Loading...</div>
}
```

On navigation, the user will immediately see the layout and a loading state while the page is being rendered. The new content will then be automatically swapped in once rendering is complete.
![Loading UI](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Floading-ui.png&w=3840&q=75)![Loading UI](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-ui.png&w=3840&q=75)
Behind-the-scenes, `loading.js` will be nested inside `layout.js`, and will automatically wrap the `page.js` file and any children below in a `<Suspense>` boundary.
![loading.js overview](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Floading-overview.png&w=3840&q=75)![loading.js overview](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-overview.png&w=3840&q=75)
This approach works well for route segments (layouts and pages), but for more granular streaming, you can use `<Suspense>`.
### With `<Suspense>`
`<Suspense>` allows you to be more granular about what parts of the page to stream. For example, you can immediately show any page content that falls outside of the `<Suspense>` boundary, and stream in the list of blog posts inside the boundary.
app/blog/page.tsx
TypeScript
JavaScriptTypeScript
```
import { Suspense } from'react'
import BlogList from'@/components/BlogList'
import BlogListSkeleton from'@/components/BlogListSkeleton'
exportdefaultfunctionBlogPage() {
return (
  <div>
   {/* This content will be sent to the client immediately */}
   <header>
    <h1>Welcome to the Blog</h1>
    <p>Read the latest posts below.</p>
   </header>
   <main>
    {/* Any content wrapped in a <Suspense> boundary will be streamed */}
    <Suspensefallback={<BlogListSkeleton />}>
     <BlogList />
    </Suspense>
   </main>
  </div>
 )
}
```

### Creating meaningful loading states
An instant loading state is fallback UI that is shown immediately to the user after navigation. For the best user experience, we recommend designing loading states that are meaningful and help users understand the app is responding. For example, you can use skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc.
In development, you can preview and inspect the loading state of your components using the React Devtools.
## API Reference
Learn more about the features mentioned in this page by reading the API Reference.
### fetch
API reference for the extended fetch function.
### loading.js
API reference for the loading.js file.
Was this helpful?
supported.
Send
