Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationRoutingPages and Layouts
# Pages and Layouts
The Pages Router has a file-system based router built on the concept of pages.
When a file is added to the `pages` directory, it's automatically available as a route.
In Next.js, a **page** is a React Component exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the `pages` directory. Each page is associated with a route based on its file name.
**Example** : If you create `pages/about.js` that exports a React component like below, it will be accessible at `/about`.
```
exportdefaultfunctionAbout() {
return <div>About</div>
}
```

## Index routes
The router will automatically route files named `index` to the root of the directory.
  * `pages/index.js` → `/`
  * `pages/blog/index.js` → `/blog`


## Nested routes
The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.
  * `pages/blog/first-post.js` → `/blog/first-post`
  * `pages/dashboard/settings/username.js` → `/dashboard/settings/username`


## Pages with Dynamic Routes
Next.js supports pages with dynamic routes. For example, if you create a file called `pages/posts/[id].js`, then it will be accessible at `posts/1`, `posts/2`, etc.
> To learn more about dynamic routing, check the Dynamic Routing documentation.
## Layout Pattern
The React model allows us to deconstruct a page into a series of components. Many of these components are often reused between pages. For example, you might have the same navigation bar and footer on every page.
components/layout.js
```
import Navbar from'./navbar'
import Footer from'./footer'
exportdefaultfunctionLayout({ children }) {
return (
  <>
   <Navbar />
   <main>{children}</main>
   <Footer />
  </>
 )
}
```

## Examples
### Single Shared Layout with Custom App
If you only have one layout for your entire application, you can create a Custom App and wrap your application with the layout. Since the `<Layout />` component is re-used when changing pages, its component state will be preserved (e.g. input values).
pages/_app.js
```
import Layout from'../components/layout'
exportdefaultfunctionMyApp({ Component, pageProps }) {
return (
  <Layout>
   <Component {...pageProps} />
  </Layout>
 )
}
```

### Per-Page Layouts
If you need multiple layouts, you can add a property `getLayout` to your page, allowing you to return a React component for the layout. This allows you to define the layout on a _per-page basis_. Since we're returning a function, we can have complex nested layouts if desired.
pages/index.js
```

import Layout from'../components/layout'
import NestedLayout from'../components/nested-layout'
exportdefaultfunctionPage() {
return (
/** Your content */
 )
}
Page.getLayout=functiongetLayout(page) {
return (
  <Layout>
   <NestedLayout>{page}</NestedLayout>
  </Layout>
 )
}
```

pages/_app.js
```
exportdefaultfunctionMyApp({ Component, pageProps }) {
// Use the layout defined at the page level, if available
constgetLayout=Component.getLayout ?? ((page) => page)
returngetLayout(<Component {...pageProps} />)
}
```

When navigating between pages, we want to _persist_ page state (input values, scroll position, etc.) for a Single-Page Application (SPA) experience.
This layout pattern enables state persistence because the React component tree is maintained between page transitions. With the component tree, React can understand which elements have changed to preserve state.
> **Good to know** : This process is called reconciliation, which is how React understands which elements have changed.
### With TypeScript
When using TypeScript, you must first create a new type for your pages which includes a `getLayout` function. Then, you must create a new type for your `AppProps` which overrides the `Component` property to use the previously created type.
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
importtype { ReactElement } from'react'
import Layout from'../components/layout'
import NestedLayout from'../components/nested-layout'
importtype { NextPageWithLayout } from'./_app'
constPage:NextPageWithLayout= () => {
return <p>hello world</p>
}
Page.getLayout=functiongetLayout(page:ReactElement) {
return (
  <Layout>
   <NestedLayout>{page}</NestedLayout>
  </Layout>
 )
}
exportdefault Page
```

pages/_app.tsx
TypeScript
JavaScriptTypeScript
```
importtype { ReactElement, ReactNode } from'react'
importtype { NextPage } from'next'
importtype { AppProps } from'next/app'
exporttypeNextPageWithLayout<P= {},IP=P> =NextPage<P,IP> & {
getLayout?: (page:ReactElement) =>ReactNode
}
typeAppPropsWithLayout=AppProps& {
 Component:NextPageWithLayout
}
exportdefaultfunctionMyApp({ Component, pageProps }:AppPropsWithLayout) {
// Use the layout defined at the page level, if available
constgetLayout=Component.getLayout ?? ((page) => page)
returngetLayout(<Component {...pageProps} />)
}
```

### Data Fetching
Inside your layout, you can fetch data on the client-side using `useEffect` or a library like SWR. Because this file is not a Page, you cannot use `getStaticProps` or `getServerSideProps` currently.
components/layout.js
```
import useSWR from'swr'
import Navbar from'./navbar'
import Footer from'./footer'
exportdefaultfunctionLayout({ children }) {
const { data,error } =useSWR('/api/navigation', fetcher)
if (error) return <div>Failed to load</div>
if (!data) return <div>Loading...</div>
return (
  <>
   <Navbarlinks={data.links} />
   <main>{children}</main>
   <Footer />
  </>
 )
}
```

Was this helpful?
supported.
Send
