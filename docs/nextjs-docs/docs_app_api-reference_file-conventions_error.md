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
API ReferenceFile Conventionserror.js
# error.js
An **error** file allows you to handle unexpected runtime errors and display fallback UI.
![error.js special file](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ferror-special-file.png&w=3840&q=75)![error.js special file](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ferror-special-file.png&w=3840&q=75)
app/dashboard/error.tsx
TypeScript
JavaScriptTypeScript
```
'use client'// Error boundaries must be Client Components
import { useEffect } from'react'
exportdefaultfunctionError({
 error,
 reset,
}: {
 error:Error& { digest?:string }
reset: () =>void
}) {
useEffect(() => {
// Log the error to an error reporting service
console.error(error)
 }, [error])
return (
  <div>
   <h2>Something went wrong!</h2>
   <button
onClick={
// Attempt to recover by trying to re-render the segment
     () =>reset()
    }
   >
    Try again
   </button>
  </div>
 )
}
```

`error.js` wraps a route segment and its nested children in a React Error Boundary. When an error throws within the boundary, the `error` component shows as the fallback UI.
![How error.js works](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ferror-overview.png&w=3840&q=75)![How error.js works](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ferror-overview.png&w=3840&q=75)
> **Good to know** :
>   * The React DevTools allow you to toggle error boundaries to test error states.
>   * If you want errors to bubble up to the parent error boundary, you can `throw` when rendering the `error` component.
> 

## Reference
### Props
#### `error`
An instance of an `Error` object forwarded to the `error.js` Client Component.
> **Good to know:** During development, the `Error` object forwarded to the client will be serialized and include the `message` of the original error for easier debugging. However, **this behavior is different in production** to avoid leaking potentially sensitive details included in the error to the client.
#### `error.message`
  * Errors forwarded from Client Components show the original `Error` message.
  * Errors forwarded from Server Components show a generic message with an identifier. This is to prevent leaking sensitive details. You can use the identifier, under `errors.digest`, to match the corresponding server-side logs.


#### `error.digest`
An automatically generated hash of the error thrown. It can be used to match the corresponding error in server-side logs.
#### `reset`
The cause of an error can sometimes be temporary. In these cases, trying again might resolve the issue.
An error component can use the `reset()` function to prompt the user to attempt to recover from the error. When executed, the function will try to re-render the error boundary's contents. If successful, the fallback error component is replaced with the result of the re-render.
app/dashboard/error.tsx
TypeScript
JavaScriptTypeScript
```
'use client'// Error boundaries must be Client Components
exportdefaultfunctionError({
 error,
 reset,
}: {
 error:Error& { digest?:string }
reset: () =>void
}) {
return (
  <div>
   <h2>Something went wrong!</h2>
   <buttononClick={() =>reset()}>Try again</button>
  </div>
 )
}
```

## Examples
### Global Error
While less common, you can handle errors in the root layout or template using `global-error.js`, located in the root app directory, even when leveraging internationalization. Global error UI must define its own `<html>` and `<body>` tags. This file replaces the root layout or template when active.
app/global-error.tsx
TypeScript
JavaScriptTypeScript
```
'use client'// Error boundaries must be Client Components
exportdefaultfunctionGlobalError({
 error,
 reset,
}: {
 error:Error& { digest?:string }
reset: () =>void
}) {
return (
// global-error must include html and body tags
  <html>
   <body>
    <h2>Something went wrong!</h2>
    <buttononClick={() =>reset()}>Try again</button>
   </body>
  </html>
 )
}
```

> **Good to know** : `global-error.js` is always displayed In development, error overlay will show instead.
## Version History
Version| Changes  
---|---  
`v15.2.0`| display `global-error` also in development.  
`v13.1.0`| `global-error` introduced.  
`v13.0.0`| `error` introduced.  
## Learn more about error handling
### Error Handling
Learn how to display expected errors and handle uncaught exceptions.
Was this helpful?
supported.
Send
