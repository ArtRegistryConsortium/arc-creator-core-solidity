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
API ReferenceDirectivesuse server
# use server
The `use server` directive designates a function or file to be executed on the **server side**. It can be used at the top of a file to indicate that all functions in the file are server-side, or inline at the top of a function to mark the function as a Server Function. This is a React feature.
## Using `use server` at the top of a file
The following example shows a file with a `use server` directive at the top. All functions in the file are executed on the server.
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { db } from'@/lib/db'// Your database client
exportasyncfunctioncreateUser(data: { name:string; email:string }) {
constuser=awaitdb.user.create({ data })
return user
}
```

### Using Server Functions in a Client Component
To use Server Functions in Client Components you need to create your Server Functions in a dedicated file using the `use server` directive at the top of the file. These Server Functions can then be imported into Client and Server Components and executed.
Assuming you have a `fetchUsers` Server Function in `actions.ts`:
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { db } from'@/lib/db'// Your database client
exportasyncfunctionfetchUsers() {
constusers=awaitdb.user.findMany()
return users
}
```

Then you can import the `fetchUsers` Server Function into a Client Component and execute it on the client-side.
app/components/my-button.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { fetchUsers } from'../actions'
exportdefaultfunctionMyButton() {
return <buttononClick={() =>fetchUsers()}>Fetch Users</button>
}
```

## Using `use server` inline
In the following example, `use server` is used inline at the top of a function to mark it as a Server Function:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { db } from'@/lib/db'// Your database client
exportdefaultfunctionUserList() {
asyncfunctionfetchUsers() {
'use server'
constusers=awaitdb.user.findMany()
return users
 }
return <buttononClick={() =>fetchUsers()}>Fetch Users</button>
}
```

## Security considerations
When using the `use server` directive, it's important to ensure that all server-side logic is secure and that sensitive data remains protected.
### Authentication and authorization
Always authenticate and authorize users before performing sensitive server-side operations.
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { db } from'@/lib/db'// Your database client
import { authenticate } from'@/lib/auth'// Your authentication library
exportasyncfunctioncreateUser(
 data: { name:string; email:string },
 token:string
) {
constuser=authenticate(token)
if (!user) {
thrownewError('Unauthorized')
 }
constnewUser=awaitdb.user.create({ data })
return newUser
}
```

## Reference
See the React documentation for more information on `use server`.
Was this helpful?
supported.
Send
