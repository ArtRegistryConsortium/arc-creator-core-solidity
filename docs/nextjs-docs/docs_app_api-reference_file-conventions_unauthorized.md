Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
API ReferenceFile Conventionsunauthorized.js
# unauthorized.js
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
The **unauthorized** file is used to render UI when the `unauthorized` function is invoked during authentication. Along with allowing you to customize the UI, Next.js will return a `401` status code.
app/unauthorized.tsx
TypeScript
JavaScriptTypeScript
```
import Login from'@/app/components/Login'
exportdefaultfunctionUnauthorized() {
return (
  <main>
   <h1>401 - Unauthorized</h1>
   <p>Please log in to access this page.</p>
   <Login />
  </main>
 )
}
```

## Reference
### Props
`unauthorized.js` components do not accept any props.
## Examples
### Displaying login UI to unauthenticated users
You can use `unauthorized` function to render the `unauthorized.js` file with a login UI.
app/dashboard/page.tsx
TypeScript
JavaScriptTypeScript
```
import { verifySession } from'@/app/lib/dal'
import { unauthorized } from'next/navigation'
exportdefaultasyncfunctionDashboardPage() {
constsession=awaitverifySession()
if (!session) {
unauthorized()
 }
return <div>Dashboard</div>
}
```

app/unauthorized.tsx
TypeScript
JavaScriptTypeScript
```
import Login from'@/app/components/Login'
exportdefaultfunctionUnauthorizedPage() {
return (
  <main>
   <h1>401 - Unauthorized</h1>
   <p>Please log in to access this page.</p>
   <Login />
  </main>
 )
}
```

## Version History
Version| Changes  
---|---  
`v15.1.0`| `unauthorized.js` introduced.  
## Next Steps
### unauthorized
API Reference for the unauthorized function.
Was this helpful?
supported.
Send
