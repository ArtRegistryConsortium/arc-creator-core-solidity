Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Pages RouterBuilding Your ApplicationAuthentication
# Authentication
Understanding authentication is crucial for protecting your application's data. This page will guide you through what React and Next.js features to use to implement auth.
Before starting, it helps to break down the process into three concepts:
  1. **Authentication** : Verifies if the user is who they say they are. It requires the user to prove their identity with something they have, such as a username and password.
  2. **Session Management** : Tracks the user's auth state across requests.
  3. **Authorization** : Decides what routes and data the user can access.


This diagram shows the authentication flow using React and Next.js features:
![Diagram showing the authentication flow with React and Next.js features](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fauthentication-overview.png&w=3840&q=75)![Diagram showing the authentication flow with React and Next.js features](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fauthentication-overview.png&w=3840&q=75)
The examples on this page walk through basic username and password auth for educational purposes. While you can implement a custom auth solution, for increased security and simplicity, we recommend using an authentication library. These offer built-in solutions for authentication, session management, and authorization, as well as additional features such as social logins, multi-factor authentication, and role-based access control. You can find a list in the Auth Libraries section.
## Authentication
Here are the steps to implement a sign-up and/or login form:
  1. The user submits their credentials through a form.
  2. The form sends a request that is handled by an API route.
  3. Upon successful verification, the process is completed, indicating the user's successful authentication.
  4. If verification is unsuccessful, an error message is shown.


Consider a login form where users can input their credentials:
pages/login.tsx
TypeScript
JavaScriptTypeScript
```
import { FormEvent } from'react'
import { useRouter } from'next/router'
exportdefaultfunctionLoginPage() {
constrouter=useRouter()
asyncfunctionhandleSubmit(event:FormEvent<HTMLFormElement>) {
event.preventDefault()
constformData=newFormData(event.currentTarget)
constemail=formData.get('email')
constpassword=formData.get('password')
constresponse=awaitfetch('/api/auth/login', {
   method:'POST',
   headers: { 'Content-Type':'application/json' },
   body:JSON.stringify({ email, password }),
  })
if (response.ok) {
router.push('/profile')
  } else {
// Handle errors
  }
 }
return (
  <formonSubmit={handleSubmit}>
   <inputtype="email"name="email"placeholder="Email"required />
   <inputtype="password"name="password"placeholder="Password"required />
   <buttontype="submit">Login</button>
  </form>
 )
}
```

The form above has two input fields for capturing the user's email and password. On submission, it triggers a function that sends a POST request to an API route (`/api/auth/login`).
You can then call your Authentication Provider's API in the API route to handle authentication:
pages/api/auth/login.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
import { signIn } from'@/auth'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
try {
const { email,password } =req.body
awaitsignIn('credentials', { email, password })
res.status(200).json({ success:true })
 } catch (error) {
if (error.type ==='CredentialsSignin') {
res.status(401).json({ error:'Invalid credentials.' })
  } else {
res.status(500).json({ error:'Something went wrong.' })
  }
 }
}
```

## Session Management
Session management ensures that the user's authenticated state is preserved across requests. It involves creating, storing, refreshing, and deleting sessions or tokens.
There are two types of sessions:
  1. **Stateless**: Session data (or a token) is stored in the browser's cookies. The cookie is sent with each request, allowing the session to be verified on the server. This method is simpler, but can be less secure if not implemented correctly.
  2. **Database**: Session data is stored in a database, with the user's browser only receiving the encrypted session ID. This method is more secure, but can be complex and use more server resources.


> **Good to know:** While you can use either method, or both, we recommend using a session management library such as iron-session or Jose.
### Stateless Sessions
#### Setting and deleting cookies
You can use API Routes to set the session as a cookie on the server:
pages/api/login.ts
TypeScript
JavaScriptTypeScript
```
import { serialize } from'cookie'
importtype { NextApiRequest, NextApiResponse } from'next'
import { encrypt } from'@/app/lib/session'
exportdefaultfunctionhandler(req:NextApiRequest, res:NextApiResponse) {
constsessionData=req.body
constencryptedSessionData=encrypt(sessionData)
constcookie=serialize('session', encryptedSessionData, {
  httpOnly:true,
  secure:process.env.NODE_ENV==='production',
  maxAge:60*60*24*7,// One week
  path:'/',
 })
res.setHeader('Set-Cookie', cookie)
res.status(200).json({ message:'Successfully set cookie!' })
}
```

### Database Sessions
To create and manage database sessions, you'll need to follow these steps:
  1. Create a table in your database to store session and data (or check if your Auth Library handles this).
  2. Implement functionality to insert, update, and delete sessions
  3. Encrypt the session ID before storing it in the user's browser, and ensure the database and cookie stay in sync (this is optional, but recommended for optimistic auth checks in Middleware).


**Creating a Session on the Server** :
pages/api/create-session.ts
TypeScript
JavaScriptTypeScript
```
import db from'../../lib/db'
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
try {
constuser=req.body
constsessionId=generateSessionId()
awaitdb.insertSession({
   sessionId,
   userId:user.id,
   createdAt:newDate(),
  })
res.status(200).json({ sessionId })
 } catch (error) {
res.status(500).json({ error:'Internal Server Error' })
 }
}
```

## Authorization
Once a user is authenticated and a session is created, you can implement authorization to control what the user can access and do within your application.
There are two main types of authorization checks:
  1. **Optimistic** : Checks if the user is authorized to access a route or perform an action using the session data stored in the cookie. These checks are useful for quick operations, such as showing/hiding UI elements or redirecting users based on permissions or roles.
  2. **Secure** : Checks if the user is authorized to access a route or perform an action using the session data stored in the database. These checks are more secure and are used for operations that require access to sensitive data or actions.


For both cases, we recommend:
  * Creating a Data Access Layer to centralize your authorization logic
  * Using Data Transfer Objects (DTO) to only return the necessary data
  * Optionally use Middleware to perform optimistic checks.


### Optimistic checks with Middleware (Optional)
There are some cases where you may want to use Middleware and redirect users based on permissions:
  * To perform optimistic checks. Since Middleware runs on every route, it's a good way to centralize redirect logic and pre-filter unauthorized users.
  * To protect static routes that share data between users (e.g. content behind a paywall).


However, since Middleware runs on every route, including prefetched routes, it's important to only read the session from the cookie (optimistic checks), and avoid database checks to prevent performance issues.
For example:
middleware.ts
TypeScript
JavaScriptTypeScript
```
import { NextRequest, NextResponse } from'next/server'
import { decrypt } from'@/app/lib/session'
import { cookies } from'next/headers'
// 1. Specify protected and public routes
constprotectedRoutes= ['/dashboard']
constpublicRoutes= ['/login','/signup','/']
exportdefaultasyncfunctionmiddleware(req:NextRequest) {
// 2. Check if the current route is protected or public
constpath=req.nextUrl.pathname
constisProtectedRoute=protectedRoutes.includes(path)
constisPublicRoute=publicRoutes.includes(path)
// 3. Decrypt the session from the cookie
constcookie= (awaitcookies()).get('session')?.value
constsession=awaitdecrypt(cookie)
// 4. Redirect to /login if the user is not authenticated
if (isProtectedRoute &&!session?.userId) {
returnNextResponse.redirect(newURL('/login',req.nextUrl))
 }
// 5. Redirect to /dashboard if the user is authenticated
if (
  isPublicRoute &&
session?.userId &&
!req.nextUrl.pathname.startsWith('/dashboard')
 ) {
returnNextResponse.redirect(newURL('/dashboard',req.nextUrl))
 }
returnNextResponse.next()
}
// Routes Middleware should not run on
exportconstconfig= {
 matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
```

While Middleware can be useful for initial checks, it should not be your only line of defense in protecting your data. The majority of security checks should be performed as close as possible to your data source, see Data Access Layer for more information.
> **Tips** :
>   * In Middleware, you can also read cookies using `req.cookies.get('session').value`.
>   * Middleware uses the Edge Runtime, check if your Auth library and session management library are compatible.
>   * You can use the `matcher` property in the Middleware to specify which routes Middleware should run on. Although, for auth, it's recommended Middleware runs on all routes.
> 

### Creating a Data Access Layer (DAL)
#### Protecting API Routes
API Routes in Next.js are essential for handling server-side logic and data management. It's crucial to secure these routes to ensure that only authorized users can access specific functionalities. This typically involves verifying the user's authentication status and their role-based permissions.
Here's an example of securing an API Route:
pages/api/route.ts
TypeScript
JavaScriptTypeScript
```
import { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
constsession=awaitgetSession(req)
// Check if the user is authenticated
if (!session) {
res.status(401).json({
   error:'User is not authenticated',
  })
return
 }
// Check if the user has the 'admin' role
if (session.user.role !=='admin') {
res.status(401).json({
   error:'Unauthorized access: User does not have admin privileges.',
  })
return
 }
// Proceed with the route for authorized users
// ... implementation of the API Route
}
```

This example demonstrates an API Route with a two-tier security check for authentication and authorization. It first checks for an active session, and then verifies if the logged-in user is an 'admin'. This approach ensures secure access, limited to authenticated and authorized users, maintaining robust security for request processing.
## Resources
Now that you've learned about authentication in Next.js, here are Next.js-compatible libraries and resources to help you implement secure authentication and session management:
### Auth Libraries
  * Auth0
  * Clerk
  * Kinde
  * NextAuth.js
  * Ory
  * Stack Auth
  * Supabase
  * Stytch
  * WorkOS


### Session Management Libraries
  * Iron Session
  * Jose


## Further Reading
To continue learning about authentication and security, check out the following resources:
  * How to think about security in Next.js
  * Understanding XSS Attacks
  * Understanding CSRF Attacks
  * The Copenhagen Book


Was this helpful?
supported.
Send
