Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationRoutingCustom App
# Custom App
Next.js uses the `App` component to initialize pages. You can override it and control the page initialization and:
  * Create a shared layout between page changes
  * Inject additional data into pages
  * Add global CSS


## Usage
To override the default `App`, create the file `pages/_app` as shown below:
pages/_app.tsx
TypeScript
JavaScriptTypeScript
```
importtype { AppProps } from'next/app'
exportdefaultfunctionMyApp({ Component, pageProps }:AppProps) {
return <Component {...pageProps} />
}
```

The `Component` prop is the active `page`, so whenever you navigate between routes, `Component` will change to the new `page`. Therefore, any props you send to `Component` will be received by the `page`.
`pageProps` is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.
> **Good to know** :
>   * If your app is running and you added a custom `App`, you'll need to restart the development server. Only required if `pages/_app.js` didn't exist before.
>   * `App` does not support Next.js Data Fetching methods like `getStaticProps` or `getServerSideProps`.
> 

## `getInitialProps` with `App`
Using `getInitialProps` in `App` will disable Automatic Static Optimization for pages without `getStaticProps`.
**We do not recommend using this pattern.** Instead, consider incrementally adopting the App Router, which allows you to more easily fetch data for pages and layouts.
pages/_app.tsx
TypeScript
JavaScriptTypeScript
```
import App, { AppContext, AppInitialProps, AppProps } from'next/app'
typeAppOwnProps= { example:string }
exportdefaultfunctionMyApp({
 Component,
 pageProps,
 example,
}:AppProps&AppOwnProps) {
return (
  <>
   <p>Data: {example}</p>
   <Component {...pageProps} />
  </>
 )
}
MyApp.getInitialProps=async (
 context:AppContext
):Promise<AppOwnProps&AppInitialProps> => {
constctx=awaitApp.getInitialProps(context)
return { ...ctx, example:'data' }
}
```

Was this helpful?
supported.
Send
