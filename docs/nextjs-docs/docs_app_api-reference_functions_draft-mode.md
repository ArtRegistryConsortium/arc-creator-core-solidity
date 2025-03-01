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
API ReferenceFunctionsdraftMode
# draftMode
`draftMode` is an **async** function allows you to enable and disable Draft Mode, as well as check if Draft Mode is enabled in a Server Component.
app/page.ts
TypeScript
JavaScriptTypeScript
```
import { draftMode } from'next/headers'
exportdefaultasyncfunctionPage() {
const { isEnabled } =awaitdraftMode()
}
```

## Reference
The following methods and properties are available:
Method| Description  
---|---  
`isEnabled`| A boolean value that indicates if Draft Mode is enabled.  
`enable()`| Enables Draft Mode in a Route Handler by setting a cookie (`__prerender_bypass`).  
`disable()`| Disables Draft Mode in a Route Handler by deleting a cookie.  
## Good to know
  * `draftMode` is an **asynchronous** function that returns a promise. You must use `async/await` or React's `use` function. 
    * In version 14 and earlier, `draftMode` was a synchronous function. To help with backwards compatibility, you can still access it synchronously in Next.js 15, but this behavior will be deprecated in the future.
  * A new bypass cookie value will be generated each time you run `next build`. This ensures that the bypass cookie can’t be guessed.
  * To test Draft Mode locally over HTTP, your browser will need to allow third-party cookies and local storage access.


## Examples
### Enabling Draft Mode
To enable Draft Mode, create a new Route Handler and call the `enable()` method:
app/draft/route.ts
TypeScript
JavaScriptTypeScript
```
import { draftMode } from'next/headers'
exportasyncfunctionGET(request:Request) {
constdraft=awaitdraftMode()
draft.enable()
returnnewResponse('Draft mode is enabled')
}
```

### Disabling Draft Mode
By default, the Draft Mode session ends when the browser is closed.
To disable Draft Mode manually, call the `disable()` method in your Route Handler:
app/draft/route.ts
TypeScript
JavaScriptTypeScript
```
import { draftMode } from'next/headers'
exportasyncfunctionGET(request:Request) {
constdraft=awaitdraftMode()
draft.disable()
returnnewResponse('Draft mode is disabled')
}
```

Then, send a request to invoke the Route Handler. If calling the route using the `<Link>` component, you must pass `prefetch={false}` to prevent accidentally deleting the cookie on prefetch.
### Checking if Draft Mode is enabled
You can check if Draft Mode is enabled in a Server Component with the `isEnabled` property:
app/page.ts
TypeScript
JavaScriptTypeScript
```
import { draftMode } from'next/headers'
exportdefaultasyncfunctionPage() {
const { isEnabled } =awaitdraftMode()
return (
  <main>
   <h1>My Blog Post</h1>
   <p>Draft Mode is currently {isEnabled ?'Enabled':'Disabled'}</p>
  </main>
 )
}
```

## Version History
Version| Changes  
---|---  
`v15.0.0-RC`| `draftMode` is now an async function. A codemod is available.  
`v13.4.0`| `draftMode` introduced.  
## Next Steps
Learn how to use Draft Mode with this step-by-step guide.
### Draft Mode
Next.js has draft mode to toggle between static and dynamic pages. You can learn how it works with App Router here.
Was this helpful?
supported.
Send
