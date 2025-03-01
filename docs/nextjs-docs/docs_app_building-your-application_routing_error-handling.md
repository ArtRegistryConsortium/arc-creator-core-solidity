Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationRoutingError Handling
# Error Handling
Errors can be divided into two categories: **expected errors** and **uncaught exceptions** :
  * **Model expected errors as return values** : Avoid using `try`/`catch` for expected errors in Server Actions. Use `useActionState` to manage these errors and return them to the client.
  * **Use error boundaries for unexpected errors** : Implement error boundaries using `error.tsx` and `global-error.tsx` files to handle unexpected errors and provide a fallback UI.


## Handling Expected Errors
Expected errors are those that can occur during the normal operation of the application, such as those from server-side form validation or failed requests. These errors should be handled explicitly and returned to the client.
### Handling Expected Errors from Server Actions
Use the `useActionState` hook to manage the state of Server Actions, including handling errors. This approach avoids `try`/`catch` blocks for expected errors, which should be modeled as return values rather than thrown exceptions.
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { redirect } from'next/navigation'
exportasyncfunctioncreateUser(prevState:any, formData:FormData) {
constres=awaitfetch('https://...')
constjson=awaitres.json()
if (!res.ok) {
return { message:'Please enter a valid email' }
 }
redirect('/dashboard')
}
```

Then, you can pass your action to the `useActionState` hook and use the returned `state` to display an error message.
app/ui/signup.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useActionState } from'react'
import { createUser } from'@/app/actions'
constinitialState= {
 message:'',
}
exportfunctionSignup() {
const [state,formAction,pending] =useActionState(createUser, initialState)
return (
  <formaction={formAction}>
   <labelhtmlFor="email">Email</label>
   <inputtype="text"id="email"name="email"required />
   {/* ... */}
   <paria-live="polite">{state?.message}</p>
   <buttondisabled={pending}>Sign up</button>
  </form>
 )
}
```

You could also use the returned state to display a toast message from the client component.
### Handling Expected Errors from Server Components
When fetching data inside of a Server Component, you can use the response to conditionally render an error message or `redirect`.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionPage() {
constres=awaitfetch(`https://...`)
constdata=awaitres.json()
if (!res.ok) {
return'There was an error.'
 }
return'...'
}
```

## Uncaught Exceptions
Uncaught exceptions are unexpected errors that indicate bugs or issues that should not occur during the normal flow of your application. These should be handled by throwing errors, which will then be caught by error boundaries.
  * **Common:** Handle uncaught errors below the root layout with `error.js`.
  * **Optional:** Handle granular uncaught errors with nested `error.js` files (e.g. `app/dashboard/error.js`)
  * **Uncommon:** Handle uncaught errors in the root layout with `global-error.js`.


### Using Error Boundaries
Next.js uses error boundaries to handle uncaught exceptions. Error boundaries catch errors in their child components and display a fallback UI instead of the component tree that crashed.
Create an error boundary by adding an `error.tsx` file inside a route segment and exporting a React component:
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

If you want errors to bubble up to the parent error boundary, you can `throw` when rendering the `error` component.
### Handling Errors in Nested Routes
Errors will bubble up to the nearest parent error boundary. This allows for granular error handling by placing `error.tsx` files at different levels in the route hierarchy.
![Nested Error Component Hierarchy](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-error-component-hierarchy.png&w=3840&q=75)![Nested Error Component Hierarchy](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fnested-error-component-hierarchy.png&w=3840&q=75)
### Handling Global Errors
While less common, you can handle errors in the root layout using `app/global-error.js`, located in the root app directory, even when leveraging internationalization. Global error UI must define its own `<html>` and `<body>` tags, since it is replacing the root layout or template when active.
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

## Next Steps
### error.js
API reference for the error.js special file.
Was this helpful?
supported.
Send
