Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationStylingCSS
# CSS
Examples
  * Basic CSS Example


Next.js supports multiple ways of handling CSS, including:
  * CSS Modules
  * Global Styles
  * External Stylesheets


## CSS Modules
Next.js has built-in support for CSS Modules using the `.module.css` extension.
CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same class name in different files without worrying about collisions. This behavior makes CSS Modules the ideal way to include component-level CSS.
### Example
For example, consider a reusable `Button` component in the `components/` folder:
First, create `components/Button.module.css` with the following content:
Button.module.css
```
/*
You do not need to worry about .error {} colliding with any other `.css` or
`.module.css` files!
*/
.error {
color:white;
background-color:red;
}
```

Then, create `components/Button.js`, importing and using the above CSS file:
components/Button.js
```
import styles from'./Button.module.css'
exportfunctionButton() {
return (
  <button
type="button"
// Note how the "error" class is accessed as a property on the imported
// `styles` object.
className={styles.error}
  >
   Destroy
  </button>
 )
}
```

CSS Modules are **only enabled for files with the`.module.css` and `.module.sass` extensions**.
In production, all CSS Module files will be automatically concatenated into **many minified and code-split** `.css` files. These `.css` files represent hot execution paths in your application, ensuring the minimal amount of CSS is loaded for your application to paint.
## Global Styles
To add a stylesheet to your application, import the CSS file within `pages/_app.js`.
For example, consider the following stylesheet named `styles.css`:
styles.css
```
body {
font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue','Helvetica',
'Arial', sans-serif;
padding:20px 20px 60px;
max-width:680px;
margin:0 auto;
}
```

Create a `pages/_app.js` file if not already present. Then, `import` the `styles.css` file.
pages/_app.js
```
import'../styles.css'
// This default export is required in a new `pages/_app.js` file.
exportdefaultfunctionMyApp({ Component, pageProps }) {
return <Component {...pageProps} />
}
```

These styles (`styles.css`) will apply to all pages and components in your application. Due to the global nature of stylesheets, and to avoid conflicts, you may **only import them inside`pages/_app.js`**.
In development, expressing stylesheets this way allows your styles to be hot reloaded as you edit them—meaning you can keep application state.
In production, all CSS files will be automatically concatenated into a single minified `.css` file. The order that the CSS is concatenated will match the order the CSS is imported into the `_app.js` file. Pay special attention to imported JS modules that include their own CSS; the JS module's CSS will be concatenated following the same ordering rules as imported CSS files. For example:
```
import'../styles.css'
// The CSS in ErrorBoundary depends on the global CSS in styles.css,
// so we import it after styles.css.
import ErrorBoundary from'../components/ErrorBoundary'
exportdefaultfunctionMyApp({ Component, pageProps }) {
return (
  <ErrorBoundary>
   <Component {...pageProps} />
  </ErrorBoundary>
 )
}
```

## External Stylesheets
Next.js allows you to import CSS files from a JavaScript file. This is possible because Next.js extends the concept of `import` beyond JavaScript.
### Import styles from `node_modules`
Since Next.js **9.5.4** , importing a CSS file from `node_modules` is permitted anywhere in your application.
For global stylesheets, like `bootstrap` or `nprogress`, you should import the file inside `pages/_app.js`. For example:
pages/_app.js
```
import'bootstrap/dist/css/bootstrap.css'
exportdefaultfunctionMyApp({ Component, pageProps }) {
return <Component {...pageProps} />
}
```

For importing CSS required by a third-party component, you can do so in your component. For example:
components/example-dialog.js
```
import { useState } from'react'
import { Dialog } from'@reach/dialog'
import VisuallyHidden from'@reach/visually-hidden'
import'@reach/dialog/styles.css'
functionExampleDialog(props) {
const [showDialog,setShowDialog] =useState(false)
constopen= () =>setShowDialog(true)
constclose= () =>setShowDialog(false)
return (
  <div>
   <buttononClick={open}>Open Dialog</button>
   <DialogisOpen={showDialog} onDismiss={close}>
    <buttonclassName="close-button"onClick={close}>
     <VisuallyHidden>Close</VisuallyHidden>
     <spanaria-hidden>×</span>
    </button>
    <p>Hello there. I am a dialog</p>
   </Dialog>
  </div>
 )
}
```

## Additional Features
Next.js includes additional features to improve the authoring experience of adding styles:
  * When running locally with `next dev`, local stylesheets (either global or CSS modules) will take advantage of Fast Refresh to instantly reflect changes as edits are saved.
  * When building for production with `next build`, CSS files will be bundled into fewer minified `.css` files to reduce the number of network requests needed to retrieve styles.
  * If you disable JavaScript, styles will still be loaded in the production build (`next start`). However, JavaScript is still required for `next dev` to enable Fast Refresh.


Was this helpful?
supported.
Send
