Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
API ReferenceComponentsLink
# Link
`<Link>` is a React component that extends the HTML `<a>` element to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.
Basic usage:
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionHome() {
return <Linkhref="/dashboard">Dashboard</Link>
}
```

## Reference
The following props can be passed to the `<Link>` component:
Prop| Example| Type| Required  
---|---|---|---  
`href`| `href="/dashboard"`| String or Object| Yes  
`replace`| `replace={false}`| Boolean| -  
`scroll`| `scroll={false}`| Boolean| -  
`prefetch`| `prefetch={false}`| Boolean| -  
`legacyBehavior`| `legacyBehavior={true}`| Boolean| -  
`passHref`| `passHref={true}`| Boolean| -  
`shallow`| `shallow={false}`| Boolean| -  
`locale`| `locale="fr"`| String or Boolean| -  
> **Good to know** : `<a>` tag attributes such as `className` or `target="_blank"` can be added to `<Link>` as props and will be passed to the underlying `<a>` element.
### `href` (required)
The path or URL to navigate to.
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
// Navigate to /about?name=test
exportdefaultfunctionHome() {
return (
  <Link
href={{
    pathname:'/about',
    query: { name:'test' },
   }}
  >
   About
  </Link>
 )
}
```

### `replace`
**Defaults to`false`.** When `true`, `next/link` will replace the current history state instead of adding a new URL into the browser's history stack.
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionHome() {
return (
  <Linkhref="/dashboard"replace>
   Dashboard
  </Link>
 )
}
```

### `scroll`
**Defaults to`true`.** The default scrolling behavior of `<Link>` in Next.js **is to maintain scroll position** , similar to how browsers handle back and forwards navigation. When you navigate to a new Page, scroll position will stay the same as long as the Page is visible in the viewport. However, if the Page is not visible in the viewport, Next.js will scroll to the top of the first Page element.
When `scroll = {false}`, Next.js will not attempt to scroll to the first Page element.
> **Good to know** : Next.js checks if `scroll: false` before managing scroll behavior. If scrolling is enabled, it identifies the relevant DOM node for navigation and inspects each top-level element. All non-scrollable elements and those without rendered HTML are bypassed, this includes sticky or fixed positioned elements, and non-visible elements such as those calculated with `getBoundingClientRect`. Next.js then continues through siblings until it identifies a scrollable element that is visible in the viewport.
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionHome() {
return (
  <Linkhref="/dashboard"scroll={false}>
   Dashboard
  </Link>
 )
}
```

### `prefetch`
Prefetching happens when a `<Link />` component enters the user's viewport (initially or through scroll). Next.js prefetches and loads the linked route (denoted by the `href`) and data in the background to improve the performance of client-side navigation's. **Prefetching is only enabled in production**.
The following values can be passed to the `prefetch` prop:
  * **`true`(default)** : The full route and its data will be prefetched.
  * `false`: Prefetching will not happen when entering the viewport, but will happen on hover. If you want to completely remove fetching on hover as well, consider using an `<a>` tag or incrementally adopting the App Router, which enables disabling prefetching on hover too.


pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionHome() {
return (
  <Linkhref="/dashboard"prefetch={false}>
   Dashboard
  </Link>
 )
}
```

### `legacyBehavior`
An `<a>` element is no longer required as a child of `<Link>`. Add the `legacyBehavior` prop to use the legacy behavior or remove the `<a>` to upgrade. A codemod is available to automatically upgrade your code.
> **Good to know** : when `legacyBehavior` is not set to `true`, all `anchor` tag properties can be passed to `next/link` as well such as, `className`, `onClick`, etc.
### `passHref`
Forces `Link` to send the `href` property to its child. Defaults to `false`. See the passing a functional component example for more information.
### `scroll`
Scroll to the top of the page after a navigation. Defaults to `true`.
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionHome() {
return (
  <Linkhref="/dashboard"scroll={false}>
   Dashboard
  </Link>
 )
}
```

### `shallow`
Update the path of the current page without rerunning `getStaticProps`, `getServerSideProps` or `getInitialProps`. Defaults to `false`.
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionHome() {
return (
  <Linkhref="/dashboard"shallow={false}>
   Dashboard
  </Link>
 )
}
```

### `locale`
The active locale is automatically prepended. `locale` allows for providing a different locale. When `false` `href` has to include the locale as the default behavior is disabled.
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionHome() {
return (
  <>
   {/* Default behavior: locale is prepended */}
   <Linkhref="/dashboard">Dashboard (with locale)</Link>
   {/* Disable locale prepending */}
   <Linkhref="/dashboard"locale={false}>
    Dashboard (without locale)
   </Link>
   {/* Specify a different locale */}
   <Linkhref="/dashboard"locale="fr">
    Dashboard (French)
   </Link>
  </>
 )
}
```

## Examples
The following examples demonstrate how to use the `<Link>` component in different scenarios.
### Linking to dynamic route segments
For dynamic route segments, it can be handy to use template literals to create the link's path.
For example, you can generate a list of links to the dynamic route `pages/blog/[slug].js`
pages/blog/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
functionPosts({ posts }) {
return (
  <ul>
   {posts.map((post) => (
    <likey={post.id}>
     <Linkhref={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
   ))}
  </ul>
 )
}
```

### If the child is a custom component that wraps an `<a>` tag
If the child of `Link` is a custom component that wraps an `<a>` tag, you must add `passHref` to `Link`. This is necessary if you’re using libraries like styled-components. Without this, the `<a>` tag will not have the `href` attribute, which hurts your site's accessibility and might affect SEO. If you're using ESLint, there is a built-in rule `next/link-passhref` to ensure correct usage of `passHref`.
components/nav-link.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
import styled from'styled-components'
// This creates a custom component that wraps an <a> tag
constRedLink=styled.a`
 color: red;
`
functionNavLink({ href, name }) {
return (
  <Linkhref={href} passHreflegacyBehavior>
   <RedLink>{name}</RedLink>
  </Link>
 )
}
exportdefault NavLink
```

  * If you’re using emotion’s JSX pragma feature (`@jsx jsx`), you must use `passHref` even if you use an `<a>` tag directly.
  * The component should support `onClick` property to trigger navigation correctly.


### Nesting a functional component
If the child of `Link` is a functional component, in addition to using `passHref` and `legacyBehavior`, you must wrap the component in `React.forwardRef`:
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
import React from'react'
// Define the props type for MyButton
interfaceMyButtonProps {
 onClick?:React.MouseEventHandler<HTMLAnchorElement>
 href?:string
}
// Use React.ForwardRefRenderFunction to properly type the forwarded ref
constMyButton:React.ForwardRefRenderFunction<
HTMLAnchorElement,
MyButtonProps
> = ({ onClick, href }, ref) => {
return (
  <ahref={href} onClick={onClick} ref={ref}>
   Click Me
  </a>
 )
}
// Use React.forwardRef to wrap the component
constForwardedMyButton=React.forwardRef(MyButton)
exportdefaultfunctionHome() {
return (
  <Linkhref="/about"passHreflegacyBehavior>
   <ForwardedMyButton />
  </Link>
 )
}
```

### Passing a URL Object
`Link` can also receive a URL object and it will automatically format it to create the URL string:
pages/index.ts
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
functionHome() {
return (
  <ul>
   <li>
    <Link
href={{
      pathname:'/about',
      query: { name:'test' },
     }}
    >
     About us
    </Link>
   </li>
   <li>
    <Link
href={{
      pathname:'/blog/[slug]',
      query: { slug:'my-post' },
     }}
    >
     Blog Post
    </Link>
   </li>
  </ul>
 )
}
exportdefault Home
```

The above example has a link to:
  * A predefined route: `/about?name=test`
  * A dynamic route: `/blog/my-post`


You can use every property as defined in the Node.js URL module documentation.
### Replace the URL instead of push
The default behavior of the `Link` component is to `push` a new URL into the `history` stack. You can use the `replace` prop to prevent adding a new entry, as in the following example:
pages/index.js
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionHome() {
return (
  <Linkhref="/about"replace>
   About us
  </Link>
 )
}
```

### Disable scrolling to the top of the page
The default behavior of `Link` is to scroll to the top of the page. When there is a hash defined it will scroll to the specific id, like a normal `<a>` tag. To prevent scrolling to the top / hash `scroll={false}` can be added to `Link`:
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionHome() {
return (
  <Linkhref="/#hashid"scroll={false}>
   Disables scrolling to the top
  </Link>
 )
}
```

### Prefetching links in Middleware
It's common to use Middleware for authentication or other purposes that involve rewriting the user to a different page. In order for the `<Link />` component to properly prefetch links with rewrites via Middleware, you need to tell Next.js both the URL to display and the URL to prefetch. This is required to avoid un-necessary fetches to middleware to know the correct route to prefetch.
For example, if you want to serve a `/dashboard` route that has authenticated and visitor views, you can add the following in your Middleware to redirect the user to the correct page:
middleware.ts
TypeScript
JavaScriptTypeScript
```
import { NextResponse } from'next/server'
exportfunctionmiddleware(request:Request) {
constnextUrl=request.nextUrl
if (nextUrl.pathname ==='/dashboard') {
if (request.cookies.authToken) {
returnNextResponse.rewrite(newURL('/auth/dashboard',request.url))
  } else {
returnNextResponse.rewrite(newURL('/public/dashboard',request.url))
  }
 }
}
```

In this case, you would want to use the following code in your `<Link />` component:
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import Link from'next/link'
import useIsAuthed from'./hooks/useIsAuthed'// Your auth hook
exportdefaultfunctionHome() {
constisAuthed=useIsAuthed()
constpath= isAuthed ?'/auth/dashboard':'/public/dashboard'
return (
  <Linkas="/dashboard"href={path}>
   Dashboard
  </Link>
 )
}
```

> **Good to know** : If you're using Dynamic Routes, you'll need to adapt your `as` and `href` props. For example, if you have a Dynamic Route like `/dashboard/authed/[user]` that you want to present differently via middleware, you would write: `<Link href={{ pathname: '/dashboard/authed/[user]', query: { user: username } }} as="/dashboard/[user]">Profile</Link>`.
## Version history
Version| Changes  
---|---  
`v13.0.0`| No longer requires a child `<a>` tag. A codemod is provided to automatically update your codebase.  
`v10.0.0`| `href` props pointing to a dynamic route are automatically resolved and no longer require an `as` prop.  
`v8.0.0`| Improved prefetching performance.  
`v1.0.0`| `next/link` introduced.  
Was this helpful?
supported.
Send
