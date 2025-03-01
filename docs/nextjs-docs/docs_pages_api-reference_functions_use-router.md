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
API ReferenceFunctionsuseRouter
# useRouter
If you want to access the `router` object inside any function component in your app, you can use the `useRouter` hook, take a look at the following example:
```
import { useRouter } from'next/router'
functionActiveLink({ children, href }) {
constrouter=useRouter()
conststyle= {
  marginRight:10,
  color:router.asPath === href ?'red':'black',
 }
consthandleClick= (e) => {
e.preventDefault()
router.push(href)
 }
return (
  <ahref={href} onClick={handleClick} style={style}>
   {children}
  </a>
 )
}
exportdefault ActiveLink
```

> `useRouter` is a React Hook, meaning it cannot be used with classes. You can either use withRouter or wrap your class in a function component.
## `router` object
The following is the definition of the `router` object returned by both `useRouter` and `withRouter`:
  * `pathname`: `String` - The path for current route file that comes after `/pages`. Therefore, `basePath`, `locale` and trailing slash (`trailingSlash: true`) are not included.
  * `query`: `Object` - The query string parsed to an object, including dynamic route parameters. It will be an empty object during prerendering if the page doesn't use Server-side Rendering. Defaults to `{}`
  * `asPath`: `String` - The path as shown in the browser including the search params and respecting the `trailingSlash` configuration. `basePath` and `locale` are not included.
  * `isFallback`: `boolean` - Whether the current page is in fallback mode.
  * `basePath`: `String` - The active basePath (if enabled).
  * `locale`: `String` - The active locale (if enabled).
  * `locales`: `String[]` - All supported locales (if enabled).
  * `defaultLocale`: `String` - The current default locale (if enabled).
  * `domainLocales`: `Array<{domain, defaultLocale, locales}>` - Any configured domain locales.
  * `isReady`: `boolean` - Whether the router fields are updated client-side and ready for use. Should only be used inside of `useEffect` methods and not for conditionally rendering on the server. See related docs for use case with automatically statically optimized pages
  * `isPreview`: `boolean` - Whether the application is currently in preview mode.


> Using the `asPath` field may lead to a mismatch between client and server if the page is rendered using server-side rendering or automatic static optimization. Avoid using `asPath` until the `isReady` field is `true`.
The following methods are included inside `router`:
### router.push
Handles client-side transitions, this method is useful for cases where `next/link` is not enough.
```
router.push(url, as, options)
```

  * `url`: `UrlObject | String` - The URL to navigate to (see Node.JS URL module documentation for `UrlObject` properties).
  * `as`: `UrlObject | String` - Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes.
  * `options` - Optional object with the following configuration options: 
    * `scroll` - Optional boolean, controls scrolling to the top of the page after navigation. Defaults to `true`
    * `shallow`: Update the path of the current page without rerunning `getStaticProps`, `getServerSideProps` or `getInitialProps`. Defaults to `false`
    * `locale` - Optional string, indicates locale of the new page


> You don't need to use `router.push` for external URLs. window.location is better suited for those cases.
Navigating to `pages/about.js`, which is a predefined route:
```
import { useRouter } from'next/router'
exportdefaultfunctionPage() {
constrouter=useRouter()
return (
  <buttontype="button"onClick={() =>router.push('/about')}>
   Click me
  </button>
 )
}
```

Navigating `pages/post/[pid].js`, which is a dynamic route:
```
import { useRouter } from'next/router'
exportdefaultfunctionPage() {
constrouter=useRouter()
return (
  <buttontype="button"onClick={() =>router.push('/post/abc')}>
   Click me
  </button>
 )
}
```

Redirecting the user to `pages/login.js`, useful for pages behind authentication:
```
import { useEffect } from'react'
import { useRouter } from'next/router'
// Here you would fetch and return the user
constuseUser= () => ({ user:null, loading:false })
exportdefaultfunctionPage() {
const { user,loading } =useUser()
constrouter=useRouter()
useEffect(() => {
if (!(user || loading)) {
router.push('/login')
  }
 }, [user, loading])
return <p>Redirecting...</p>
}
```

#### Resetting state after navigation
When navigating to the same page in Next.js, the page's state **will not** be reset by default as React does not unmount unless the parent component has changed.
pages/[slug].js
```
import Link from'next/link'
import { useState } from'react'
import { useRouter } from'next/router'
exportdefaultfunctionPage(props) {
constrouter=useRouter()
const [count,setCount] =useState(0)
return (
  <div>
   <h1>Page: {router.query.slug}</h1>
   <p>Count: {count}</p>
   <buttononClick={() =>setCount(count +1)}>Increase count</button>
   <Linkhref="/one">one</Link> <Linkhref="/two">two</Link>
  </div>
 )
}
```

In the above example, navigating between `/one` and `/two` **will not** reset the count . The `useState` is maintained between renders because the top-level React component, `Page`, is the same.
If you do not want this behavior, you have a couple of options:
  * Manually ensure each state is updated using `useEffect`. In the above example, that could look like:
```
useEffect(() => {
setCount(0)
}, [router.query.slug])
```

  * Use a React `key` to tell React to remount the component. To do this for all pages, you can use a custom app:
pages/_app.js
```
import { useRouter } from'next/router'
exportdefaultfunctionMyApp({ Component, pageProps }) {
constrouter=useRouter()
return <Componentkey={router.asPath} {...pageProps} />
}
```



#### With URL object
You can use a URL object in the same way you can use it for `next/link`. Works for both the `url` and `as` parameters:
```
import { useRouter } from'next/router'
exportdefaultfunctionReadMore({ post }) {
constrouter=useRouter()
return (
  <button
type="button"
onClick={() => {
router.push({
     pathname:'/post/[pid]',
     query: { pid:post.id },
    })
   }}
  >
   Click here to read more
  </button>
 )
}
```

### router.replace
Similar to the `replace` prop in `next/link`, `router.replace` will prevent adding a new URL entry into the `history` stack.
```
router.replace(url, as, options)
```

  * The API for `router.replace` is exactly the same as the API for `router.push`.


Take a look at the following example:
```
import { useRouter } from'next/router'
exportdefaultfunctionPage() {
constrouter=useRouter()
return (
  <buttontype="button"onClick={() =>router.replace('/home')}>
   Click me
  </button>
 )
}
```

### router.prefetch
Prefetch pages for faster client-side transitions. This method is only useful for navigations without `next/link`, as `next/link` takes care of prefetching pages automatically.
> This is a production only feature. Next.js doesn't prefetch pages in development.
```
router.prefetch(url, as, options)
```

  * `url` - The URL to prefetch, including explicit routes (e.g. `/dashboard`) and dynamic routes (e.g. `/product/[id]`)
  * `as` - Optional decorator for `url`. Before Next.js 9.5.3 this was used to prefetch dynamic routes.
  * `options` - Optional object with the following allowed fields: 
    * `locale` - allows providing a different locale from the active one. If `false`, `url` has to include the locale as the active locale won't be used.


Let's say you have a login page, and after a login, you redirect the user to the dashboard. For that case, we can prefetch the dashboard to make a faster transition, like in the following example:
```
import { useCallback, useEffect } from'react'
import { useRouter } from'next/router'
exportdefaultfunctionLogin() {
constrouter=useRouter()
consthandleSubmit=useCallback((e) => {
e.preventDefault()
fetch('/api/login', {
   method:'POST',
   headers: { 'Content-Type':'application/json' },
   body:JSON.stringify({
/* Form data */
   }),
  }).then((res) => {
// Do a fast client-side transition to the already prefetched dashboard page
if (res.ok) router.push('/dashboard')
  })
 }, [])
useEffect(() => {
// Prefetch the dashboard page
router.prefetch('/dashboard')
 }, [router])
return (
  <formonSubmit={handleSubmit}>
   {/* Form fields */}
   <buttontype="submit">Login</button>
  </form>
 )
}
```

### router.beforePopState
In some cases (for example, if using a Custom Server), you may wish to listen to popstate and do something before the router acts on it.
```
router.beforePopState(cb)
```

  * `cb` - The function to run on incoming `popstate` events. The function receives the state of the event as an object with the following props: 
    * `url`: `String` - the route for the new state. This is usually the name of a `page`
    * `as`: `String` - the url that will be shown in the browser
    * `options`: `Object` - Additional options sent by router.push


If `cb` returns `false`, the Next.js router will not handle `popstate`, and you'll be responsible for handling it in that case. See Disabling file-system routing.
You could use `beforePopState` to manipulate the request, or force a SSR refresh, as in the following example:
```
import { useEffect } from'react'
import { useRouter } from'next/router'
exportdefaultfunctionPage() {
constrouter=useRouter()
useEffect(() => {
router.beforePopState(({ url, as, options }) => {
// I only want to allow these two routes!
if (as!=='/'&&as!=='/other') {
// Have SSR render bad routes as a 404.
window.location.href =as
returnfalse
   }
returntrue
  })
 }, [router])
return <p>Welcome to the page</p>
}
```

### router.back
Navigate back in history. Equivalent to clicking the browser’s back button. It executes `window.history.back()`.
```
import { useRouter } from'next/router'
exportdefaultfunctionPage() {
constrouter=useRouter()
return (
  <buttontype="button"onClick={() =>router.back()}>
   Click here to go back
  </button>
 )
}
```

### router.reload
Reload the current URL. Equivalent to clicking the browser’s refresh button. It executes `window.location.reload()`.
```
import { useRouter } from'next/router'
exportdefaultfunctionPage() {
constrouter=useRouter()
return (
  <buttontype="button"onClick={() =>router.reload()}>
   Click here to reload
  </button>
 )
}
```

### router.events
You can listen to different events happening inside the Next.js Router. Here's a list of supported events:
  * `routeChangeStart(url, { shallow })` - Fires when a route starts to change
  * `routeChangeComplete(url, { shallow })` - Fires when a route changed completely
  * `routeChangeError(err, url, { shallow })` - Fires when there's an error when changing routes, or a route load is cancelled 
    * `err.cancelled` - Indicates if the navigation was cancelled
  * `beforeHistoryChange(url, { shallow })` - Fires before changing the browser's history
  * `hashChangeStart(url, { shallow })` - Fires when the hash will change but not the page
  * `hashChangeComplete(url, { shallow })` - Fires when the hash has changed but not the page


> **Good to know** : Here `url` is the URL shown in the browser, including the `basePath`.
For example, to listen to the router event `routeChangeStart`, open or create `pages/_app.js` and subscribe to the event, like so:
```
import { useEffect } from'react'
import { useRouter } from'next/router'
exportdefaultfunctionMyApp({ Component, pageProps }) {
constrouter=useRouter()
useEffect(() => {
consthandleRouteChange= (url, { shallow }) => {
console.log(
`App is changing to ${url}${
     shallow ?'with':'without'
} shallow routing`
   )
  }
router.events.on('routeChangeStart', handleRouteChange)
// If the component is unmounted, unsubscribe
// from the event with the `off` method:
return () => {
router.events.off('routeChangeStart', handleRouteChange)
  }
 }, [router])
return <Component {...pageProps} />
}
```

> We use a Custom App (`pages/_app.js`) for this example to subscribe to the event because it's not unmounted on page navigations, but you can subscribe to router events on any component in your application.
Router events should be registered when a component mounts (useEffect or componentDidMount / componentWillUnmount) or imperatively when an event happens.
If a route load is cancelled (for example, by clicking two links rapidly in succession), `routeChangeError` will fire. And the passed `err` will contain a `cancelled` property set to `true`, as in the following example:
```
import { useEffect } from'react'
import { useRouter } from'next/router'
exportdefaultfunctionMyApp({ Component, pageProps }) {
constrouter=useRouter()
useEffect(() => {
consthandleRouteChangeError= (err, url) => {
if (err.cancelled) {
console.log(`Route to ${url} was cancelled!`)
   }
  }
router.events.on('routeChangeError', handleRouteChangeError)
// If the component is unmounted, unsubscribe
// from the event with the `off` method:
return () => {
router.events.off('routeChangeError', handleRouteChangeError)
  }
 }, [router])
return <Component {...pageProps} />
}
```

## The `next/compat/router` export
This is the same `useRouter` hook, but can be used in both `app` and `pages` directories.
It differs from `next/router` in that it does not throw an error when the pages router is not mounted, and instead has a return type of `NextRouter | null`. This allows developers to convert components to support running in both `app` and `pages` as they transition to the `app` router.
A component that previously looked like this:
```
import { useRouter } from'next/router'
constMyComponent= () => {
const { isReady,query } =useRouter()
// ...
}
```

Will error when converted over to `next/compat/router`, as `null` can not be destructured. Instead, developers will be able to take advantage of new hooks:
```
import { useEffect } from'react'
import { useRouter } from'next/compat/router'
import { useSearchParams } from'next/navigation'
constMyComponent= () => {
constrouter=useRouter() // may be null or a NextRouter instance
constsearchParams=useSearchParams()
useEffect(() => {
if (router &&!router.isReady) {
return
  }
// In `app/`, searchParams will be ready immediately with the values, in
// `pages/` it will be available after the router is ready.
constsearch=searchParams.get('search')
// ...
 }, [router, searchParams])
// ...
}
```

This component will now work in both `pages` and `app` directories. When the component is no longer used in `pages`, you can remove the references to the compat router:
```
import { useSearchParams } from'next/navigation'
constMyComponent= () => {
constsearchParams=useSearchParams()
// As this component is only used in `app/`, the compat router can be removed.
constsearch=searchParams.get('search')
// ...
}
```

### Using `useRouter` outside of Next.js context in pages
Another specific use case is when rendering components outside of a Next.js application context, such as inside `getServerSideProps` on the `pages` directory. In this case, the compat router can be used to avoid errors:
```
import { renderToString } from'react-dom/server'
import { useRouter } from'next/compat/router'
constMyComponent= () => {
constrouter=useRouter() // may be null or a NextRouter instance
// ...
}
exportasyncfunctiongetServerSideProps() {
constrenderedComponent=renderToString(<MyComponent />)
return {
  props: {
   renderedComponent,
  },
 }
}
```

## Potential ESLint errors
Certain methods accessible on the `router` object return a Promise. If you have the ESLint rule, no-floating-promises enabled, consider disabling it either globally, or for the affected line.
If your application needs this rule, you should either `void` the promise – or use an `async` function, `await` the Promise, then void the function call. **This is not applicable when the method is called from inside an`onClick` handler**.
The affected methods are:
  * `router.push`
  * `router.replace`
  * `router.prefetch`


### Potential solutions
```
import { useEffect } from'react'
import { useRouter } from'next/router'
// Here you would fetch and return the user
constuseUser= () => ({ user:null, loading:false })
exportdefaultfunctionPage() {
const { user,loading } =useUser()
constrouter=useRouter()
useEffect(() => {
// disable the linting on the next line - This is the cleanest solution
// eslint-disable-next-line no-floating-promises
router.push('/login')
// void the Promise returned by router.push
if (!(user || loading)) {
voidrouter.push('/login')
  }
// or use an async function, await the Promise, then void the function call
asyncfunctionhandleRouteChange() {
if (!(user || loading)) {
awaitrouter.push('/login')
   }
  }
voidhandleRouteChange()
 }, [user, loading])
return <p>Redirecting...</p>
}
```

## withRouter
If `useRouter` is not the best fit for you, `withRouter` can also add the same `router` object to any component.
### Usage
```
import { withRouter } from'next/router'
functionPage({ router }) {
return <p>{router.pathname}</p>
}
exportdefaultwithRouter(Page)
```

### TypeScript
To use class components with `withRouter`, the component needs to accept a router prop:
```
import React from'react'
import { withRouter, NextRouter } from'next/router'
interfaceWithRouterProps {
 router:NextRouter
}
interfaceMyComponentPropsextendsWithRouterProps {}
classMyComponentextendsReact.Component<MyComponentProps> {
render() {
return <p>{this.props.router.pathname}</p>
 }
}
exportdefaultwithRouter(MyComponent)
```

Was this helpful?
supported.
Send
