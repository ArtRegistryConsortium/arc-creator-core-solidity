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
API ReferenceFunctionsunauthorized
# unauthorized
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
The `unauthorized` function throws an error that renders a Next.js 401 error page. It's useful for handling authorization errors in your application. You can customize the UI using the `unauthorized.js` file.
To start using `unauthorized`, enable the experimental `authInterrupts` configuration option in your `next.config.js` file:
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 experimental: {
  authInterrupts:true,
 },
}
exportdefault nextConfig
```

`unauthorized` can be invoked in Server Components, Server Actions, and Route Handlers.
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
// Render the dashboard for authenticated users
return (
  <main>
   <h1>Welcome to the Dashboard</h1>
   <p>Hi, {session.user.name}.</p>
  </main>
 )
}
```

## Good to know
  * The `unauthorized` function cannot be called in the root layout.


## Examples
### Displaying login UI to unauthenticated users
You can use `unauthorized` function to display the `unauthorized.js` file with a login UI.
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

### Mutations with Server Actions
You can invoke `unauthorized` in Server Actions to ensure only authenticated users can perform specific mutations.
app/actions/update-profile.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { verifySession } from'@/app/lib/dal'
import { unauthorized } from'next/navigation'
import db from'@/app/lib/db'
exportasyncfunctionupdateProfile(data:FormData) {
constsession=awaitverifySession()
// If the user is not authenticated, return a 401
if (!session) {
unauthorized()
 }
// Proceed with mutation
// ...
}
```

### Fetching data with Route Handlers
You can use `unauthorized` in Route Handlers to ensure only authenticated users can access the endpoint.
app/api/profile/route.ts
TypeScript
JavaScriptTypeScript
```
import { NextRequest, NextResponse } from'next/server'
import { verifySession } from'@/app/lib/dal'
import { unauthorized } from'next/navigation'
exportasyncfunctionGET(req:NextRequest):Promise<NextResponse> {
// Verify the user's session
constsession=awaitverifySession()
// If no session exists, return a 401 and render unauthorized.tsx
if (!session) {
unauthorized()
 }
// Fetch data
// ...
}
```

## Version History
Version| Changes  
---|---  
`v15.1.0`| `unauthorized` introduced.  
## Next Steps
### unauthorized.js
API reference for the unauthorized.js special file.
Was this helpful?
supported.
Send
