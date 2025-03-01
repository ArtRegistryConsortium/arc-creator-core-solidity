Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationRoutingDynamic Routes
# Dynamic Routes
When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.
## Convention
A Dynamic Segment can be created by wrapping a folder's name in square brackets: `[folderName]`. For example, `[id]` or `[slug]`.
Dynamic Segments are passed as the `params` prop to `layout`, `page`, `route`, and `generateMetadata` functions.
## Example
For example, a blog could include the following route `app/blog/[slug]/page.js` where `[slug]` is the Dynamic Segment for blog posts.
app/blog/[slug]/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionPage({
 params,
}: {
 params:Promise<{ slug:string }>
}) {
constslug= (await params).slug
return <div>My Post: {slug}</div>
}
```

Route| Example URL| `params`  
---|---|---  
`app/blog/[slug]/page.js`| `/blog/a`| `{ slug: 'a' }`  
`app/blog/[slug]/page.js`| `/blog/b`| `{ slug: 'b' }`  
`app/blog/[slug]/page.js`| `/blog/c`| `{ slug: 'c' }`  
See the generateStaticParams() page to learn how to generate the params for the segment.
## Good to know
  * Since the `params` prop is a promise. You must use async/await or React's use function to access the values. 
    * In version 14 and earlier, `params` was a synchronous prop. To help with backwards compatibility, you can still access it synchronously in Next.js 15, but this behavior will be deprecated in the future.
  * Dynamic Segments are equivalent to Dynamic Routes in the `pages` directory.


## Generating Static Params
The `generateStaticParams` function can be used in combination with dynamic route segments to **statically generate** routes at build time instead of on-demand at request time.
app/blog/[slug]/page.tsx
TypeScript
JavaScriptTypeScript
```
exportasyncfunctiongenerateStaticParams() {
constposts=awaitfetch('https://.../posts').then((res) =>res.json())
returnposts.map((post) => ({
  slug:post.slug,
 }))
}
```

The primary benefit of the `generateStaticParams` function is its smart retrieval of data. If content is fetched within the `generateStaticParams` function using a `fetch` request, the requests are automatically memoized. This means a `fetch` request with the same arguments across multiple `generateStaticParams`, Layouts, and Pages will only be made once, which decreases build times.
Use the migration guide if you are migrating from the `pages` directory.
See `generateStaticParams` server function documentation for more information and advanced use cases.
## Catch-all Segments
Dynamic Segments can be extended to **catch-all** subsequent segments by adding an ellipsis inside the brackets `[...folderName]`.
For example, `app/shop/[...slug]/page.js` will match `/shop/clothes`, but also `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`, and so on.
Route| Example URL| `params`  
---|---|---  
`app/shop/[...slug]/page.js`| `/shop/a`| `{ slug: ['a'] }`  
`app/shop/[...slug]/page.js`| `/shop/a/b`| `{ slug: ['a', 'b'] }`  
`app/shop/[...slug]/page.js`| `/shop/a/b/c`| `{ slug: ['a', 'b', 'c'] }`  
## Optional Catch-all Segments
Catch-all Segments can be made **optional** by including the parameter in double square brackets: `[[...folderName]]`.
For example, `app/shop/[[...slug]]/page.js` will **also** match `/shop`, in addition to `/shop/clothes`, `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`.
The difference between **catch-all** and **optional catch-all** segments is that with optional, the route without the parameter is also matched (`/shop` in the example above).
Route| Example URL| `params`  
---|---|---  
`app/shop/[[...slug]]/page.js`| `/shop`| `{ slug: undefined }`  
`app/shop/[[...slug]]/page.js`| `/shop/a`| `{ slug: ['a'] }`  
`app/shop/[[...slug]]/page.js`| `/shop/a/b`| `{ slug: ['a', 'b'] }`  
`app/shop/[[...slug]]/page.js`| `/shop/a/b/c`| `{ slug: ['a', 'b', 'c'] }`  
## TypeScript
When using TypeScript, you can add types for `params` depending on your configured route segment.
app/blog/[slug]/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionPage({
 params,
}: {
 params:Promise<{ slug:string }>
}) {
return <h1>My Page</h1>
}
```

Route| `params` Type Definition  
---|---  
`app/blog/[slug]/page.js`| `{ slug: string }`  
`app/shop/[...slug]/page.js`| `{ slug: string[] }`  
`app/shop/[[...slug]]/page.js`| `{ slug?: string[] }`  
`app/[categoryId]/[itemId]/page.js`| `{ categoryId: string, itemId: string }`  
> **Good to know** : This may be done automatically by the TypeScript plugin in the future.
## Next Steps
For more information on what to do next, we recommend the following sections
### Linking and Navigating
Learn how navigation works in Next.js, and how to use the Link Component and `useRouter` hook.
### generateStaticParams
API reference for the generateStaticParams function.
Was this helpful?
supported.
Send
