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
API ReferenceFile Conventionsinstrumentation.js
# instrumentation.js
The `instrumentation.js|ts` file is used to integrate observability tools into your application, allowing you to track the performance and behavior, and to debug issues in production.
To use it, place the file in the **root** of your application or inside a `src` folder if using one.
## Exports
### `register` (optional)
The file exports a `register` function that is called **once** when a new Next.js server instance is initiated. `register` can be an async function.
instrumentation.ts
TypeScript
JavaScriptTypeScript
```
import { registerOTel } from'@vercel/otel'
exportfunctionregister() {
registerOTel('next-app')
}
```

### `onRequestError` (optional)
You can optionally export an `onRequestError` function to track **server** errors to any custom observability provider.
  * If you're running any async tasks in `onRequestError`, make sure they're awaited. `onRequestError` will be triggered when the Next.js server captures the error.
  * The `error` instance might not be the original error instance thrown, as it may be processed by React if encountered during Server Components rendering. If this happens, you can use `digest` property on an error to identify the actual error type.


instrumentation.ts
TypeScript
JavaScriptTypeScript
```
import { type Instrumentation } from'next'
exportconstonRequestError:Instrumentation.onRequestError=async (
 err,
 request,
 context
) => {
awaitfetch('https://.../report-error', {
  method:'POST',
  body:JSON.stringify({
   message:err.message,
   request,
   context,
  }),
  headers: {
'Content-Type':'application/json',
  },
 })
}
```

#### Parameters
The function accepts three parameters: `error`, `request`, and `context`.
Types
```
exportfunctiononRequestError(
 error: { digest:string } &Error,
 request: {
  path:string// resource path, e.g. /blog?name=foo
  method:string// request method. e.g. GET, POST, etc
  headers: { [key:string]:string }
 },
 context: {
  routerKind:'Pages Router'|'App Router'// the router type
  routePath:string// the route file path, e.g. /app/blog/[dynamic]
  routeType:'render'|'route'|'action'|'middleware'// the context in which the error occurred
  renderSource:
|'react-server-components'
|'react-server-components-payload'
|'server-rendering'
  revalidateReason:'on-demand'|'stale'|undefined// undefined is a normal request without revalidation
  renderType:'dynamic'|'dynamic-resume'// 'dynamic-resume' for PPR
 }
):void|Promise<void>
```

  * `error`: The caught error itself (type is always `Error`), and a `digest` property which is the unique ID of the error.
  * `request`: Read-only request information associated with the error.
  * `context`: The context in which the error occurred. This can be the type of router (App or Pages Router), and/or (Server Components (`'render'`), Route Handlers (`'route'`), Server Actions (`'action'`), or Middleware (`'middleware'`)).


### Specifying the runtime
The `instrumentation.js` file works in both the Node.js and Edge runtime, however, you can use `process.env.NEXT_RUNTIME` to target a specific runtime.
instrumentation.js
```
exportfunctionregister() {
if (process.env.NEXT_RUNTIME==='edge') {
returnrequire('./register.edge')
 } else {
returnrequire('./register.node')
 }
}
exportfunctiononRequestError() {
if (process.env.NEXT_RUNTIME==='edge') {
returnrequire('./on-request-error.edge')
 } else {
returnrequire('./on-request-error.node')
 }
}
```

## Version History
Version| Changes  
---|---  
`v15.0.0-RC`| `onRequestError` introduced, `instrumentation` stable  
`v14.0.4`| Turbopack support for `instrumentation`  
`v13.2.0`| `instrumentation` introduced as an experimental feature  
## Learn more about Instrumentation
### Instrumentation
Learn how to use instrumentation to run code at server startup in your Next.js app
Was this helpful?
supported.
Send
