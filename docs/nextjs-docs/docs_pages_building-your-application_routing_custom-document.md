Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationRoutingCustom Document
# Custom Document
A custom `Document` can update the `<html>` and `<body>` tags used to render a Page.
To override the default `Document`, create the file `pages/_document` as shown below:
pages/_document.tsx
TypeScript
JavaScriptTypeScript
```
import { Html, Head, Main, NextScript } from'next/document'
exportdefaultfunctionDocument() {
return (
  <Htmllang="en">
   <Head />
   <body>
    <Main />
    <NextScript />
   </body>
  </Html>
 )
}
```

> **Good to know** :
>   * `_document` is only rendered on the server, so event handlers like `onClick` cannot be used in this file.
>   * `<Html>`, `<Head />`, `<Main />` and `<NextScript />` are required for the page to be properly rendered.
> 

## Caveats
  * The `<Head />` component used in `_document` is not the same as `next/head`. The `<Head />` component used here should only be used for any `<head>` code that is common for all pages. For all other cases, such as `<title>` tags, we recommend using `next/head` in your pages or components.
  * React components outside of `<Main />` will not be initialized by the browser. Do _not_ add application logic here or custom CSS (like `styled-jsx`). If you need shared components in all your pages (like a menu or a toolbar), read Layouts instead.
  * `Document` currently does not support Next.js Data Fetching methods like `getStaticProps` or `getServerSideProps`.


## Customizing `renderPage`
Customizing `renderPage` is advanced and only needed for libraries like CSS-in-JS to support server-side rendering. This is not needed for built-in `styled-jsx` support.
**We do not recommend using this pattern.** Instead, consider incrementally adopting the App Router, which allows you to more easily fetch data for pages and layouts.
pages/_document.tsx
TypeScript
JavaScriptTypeScript
```
import Document, {
 Html,
 Head,
 Main,
 NextScript,
 DocumentContext,
 DocumentInitialProps,
} from'next/document'
classMyDocumentextendsDocument {
staticasyncgetInitialProps(
  ctx:DocumentContext
 ):Promise<DocumentInitialProps> {
constoriginalRenderPage=ctx.renderPage
// Run the React rendering logic synchronously
ctx.renderPage= () =>
originalRenderPage({
// Useful for wrapping the whole react tree
enhanceApp: (App) => App,
// Useful for wrapping in a per-page basis
enhanceComponent: (Component) => Component,
   })
// Run the parent `getInitialProps`, it now includes the custom `renderPage`
constinitialProps=awaitDocument.getInitialProps(ctx)
return initialProps
 }
render() {
return (
   <Htmllang="en">
    <Head />
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  )
 }
}
exportdefault MyDocument
```

> **Good to know** :
>   * `getInitialProps` in `_document` is not called during client-side transitions.
>   * The `ctx` object for `_document` is equivalent to the one received in `getInitialProps`, with the addition of `renderPage`.
> 

Was this helpful?
supported.
Send
