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
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationRenderingStatic Site Generation (SSG)
# Static Site Generation (SSG)
Examples
  * Agility CMS Example (Demo)
  * Builder.io Example (Demo)
  * ButterCMS Example (Demo)
  * Contentful Example (Demo)
  * Cosmic Example (Demo)
  * DatoCMS Example (Demo)
  * DotCMS Example (Demo)
  * Drupal Example (Demo)
  * Enterspeed Example (Demo)
  * GraphCMS Example (Demo)
  * Keystone Example (Demo)
  * Kontent.ai Example (Demo)
  * Makeswift Example (Demo)
  * Plasmic Example (Demo)
  * Prepr Example (Demo)
  * Prismic Example (Demo)
  * Sanity Example (Demo)
  * Sitecore XM Cloud Example (Demo)
  * Storyblok Example (Demo)
  * Strapi Example (Demo)
  * TakeShape Example (Demo)
  * Tina Example (Demo)
  * Umbraco Example (Demo)
  * Umbraco Heartcore Example (Demo)
  * Webiny Example (Demo)
  * WordPress Example (Demo)
  * Blog Starter Example (Demo)
  * Static Tweet (Demo)


If a page uses **Static Generation** , the page HTML is generated at **build time**. That means in production, the page HTML is generated when you run `next build`. This HTML will then be reused on each request. It can be cached by a CDN.
In Next.js, you can statically generate pages **with or without data**. Let's take a look at each case.
### Static Generation without data
By default, Next.js pre-renders pages using Static Generation without fetching data. Here's an example:
```
functionAbout() {
return <div>About</div>
}
exportdefault About
```

Note that this page does not need to fetch any external data to be pre-rendered. In cases like this, Next.js generates a single HTML file per page during build time.
### Static Generation with data
Some pages require fetching external data for pre-rendering. There are two scenarios, and one or both might apply. In each case, you can use these functions that Next.js provides:
  1. Your page **content** depends on external data: Use `getStaticProps`.
  2. Your page **paths** depend on external data: Use `getStaticPaths` (usually in addition to `getStaticProps`).


#### Scenario 1: Your page content depends on external data
**Example** : Your blog page might need to fetch the list of blog posts from a CMS (content management system).
```
// TODO: Need to fetch `posts` (by calling some API endpoint)
//    before this page can be pre-rendered.
exportdefaultfunctionBlog({ posts }) {
return (
  <ul>
   {posts.map((post) => (
    <li>{post.title}</li>
   ))}
  </ul>
 )
}
```

To fetch this data on pre-render, Next.js allows you to `export` an `async` function called `getStaticProps` from the same file. This function gets called at build time and lets you pass fetched data to the page's `props` on pre-render.
```
exportdefaultfunctionBlog({ posts }) {
// Render posts...
}
// This function gets called at build time
exportasyncfunctiongetStaticProps() {
// Call an external API endpoint to get posts
constres=awaitfetch('https://.../posts')
constposts=awaitres.json()
// By returning { props: { posts } }, the Blog component
// will receive `posts` as a prop at build time
return {
  props: {
   posts,
  },
 }
}
```

To learn more about how `getStaticProps` works, check out the Data Fetching documentation.
#### Scenario 2: Your page paths depend on external data
Next.js allows you to create pages with **dynamic routes**. For example, you can create a file called `pages/posts/[id].js` to show a single blog post based on `id`. This will allow you to show a blog post with `id: 1` when you access `posts/1`.
> To learn more about dynamic routing, check the Dynamic Routing documentation.
However, which `id` you want to pre-render at build time might depend on external data.
**Example** : suppose that you've only added one blog post (with `id: 1`) to the database. In this case, you'd only want to pre-render `posts/1` at build time.
Later, you might add the second post with `id: 2`. Then you'd want to pre-render `posts/2` as well.
So your page **paths** that are pre-rendered depend on external data. To handle this, Next.js lets you `export` an `async` function called `getStaticPaths` from a dynamic page (`pages/posts/[id].js` in this case). This function gets called at build time and lets you specify which paths you want to pre-render.
```
// This function gets called at build time
exportasyncfunctiongetStaticPaths() {
// Call an external API endpoint to get posts
constres=awaitfetch('https://.../posts')
constposts=awaitres.json()
// Get the paths we want to pre-render based on posts
constpaths=posts.map((post) => ({
  params: { id:post.id },
 }))
// We'll pre-render only these paths at build time.
// { fallback: false } means other routes should 404.
return { paths, fallback:false }
}
```

Also in `pages/posts/[id].js`, you need to export `getStaticProps` so that you can fetch the data about the post with this `id` and use it to pre-render the page:
```
exportdefaultfunctionPost({ post }) {
// Render post...
}
exportasyncfunctiongetStaticPaths() {
// ...
}
// This also gets called at build time
exportasyncfunctiongetStaticProps({ params }) {
// params contains the post `id`.
// If the route is like /posts/1, then params.id is 1
constres=awaitfetch(`https://.../posts/${params.id}`)
constpost=awaitres.json()
// Pass post data to the page via props
return { props: { post } }
}
```

To learn more about how `getStaticPaths` works, check out the Data Fetching documentation.
### When should I use Static Generation?
We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.
You can use Static Generation for many types of pages, including:
  * Marketing pages
  * Blog posts and portfolios
  * E-commerce product listings
  * Help and documentation


You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.
On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.
In cases like this, you can do one of the following:
  * Use Static Generation with **Client-side data fetching:** You can skip pre-rendering some parts of a page and then use client-side JavaScript to populate them. To learn more about this approach, check out the Data Fetching documentation.
  * Use **Server-Side Rendering:** Next.js pre-renders a page on each request. It will be slower because the page cannot be cached by a CDN, but the pre-rendered page will always be up-to-date. We'll talk about this approach below.


Was this helpful?
supported.
Send
