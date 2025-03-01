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
API ReferenceFunctionsNextResponse
# NextResponse
NextResponse extends the Web Response API with additional convenience methods.
## `cookies`
Read or mutate the `Set-Cookie` header of the response.
### `set(name, value)`
Given a name, set a cookie with the given value on the response.
```
// Given incoming request /home
let response =NextResponse.next()
// Set a cookie to hide the banner
response.cookies.set('show-banner','false')
// Response will have a `Set-Cookie:show-banner=false;path=/home` header
return response
```

### `get(name)`
Given a cookie name, return the value of the cookie. If the cookie is not found, `undefined` is returned. If multiple cookies are found, the first one is returned.
```
// Given incoming request /home
let response =NextResponse.next()
// { name: 'show-banner', value: 'false', Path: '/home' }
response.cookies.get('show-banner')
```

### `getAll()`
Given a cookie name, return the values of the cookie. If no name is given, return all cookies on the response.
```
// Given incoming request /home
let response =NextResponse.next()
// [
//  { name: 'experiments', value: 'new-pricing-page', Path: '/home' },
//  { name: 'experiments', value: 'winter-launch', Path: '/home' },
// ]
response.cookies.getAll('experiments')
// Alternatively, get all cookies for the response
response.cookies.getAll()
```

### `delete(name)`
Given a cookie name, delete the cookie from the response.
```
// Given incoming request /home
let response =NextResponse.next()
// Returns true for deleted, false is nothing is deleted
response.cookies.delete('experiments')
```

## `json()`
Produce a response with the given JSON body.
app/api/route.ts
TypeScript
JavaScriptTypeScript
```
import { NextResponse } from'next/server'
exportasyncfunctionGET(request:Request) {
returnNextResponse.json({ error:'Internal Server Error' }, { status:500 })
}
```

## `redirect()`
Produce a response that redirects to a URL.
```
import { NextResponse } from'next/server'
returnNextResponse.redirect(newURL('/new',request.url))
```

The URL can be created and modified before being used in the `NextResponse.redirect()` method. For example, you can use the `request.nextUrl` property to get the current URL, and then modify it to redirect to a different URL.
```
import { NextResponse } from'next/server'
// Given an incoming request...
constloginUrl=newURL('/login',request.url)
// Add ?from=/incoming-url to the /login URL
loginUrl.searchParams.set('from',request.nextUrl.pathname)
// And redirect to the new URL
returnNextResponse.redirect(loginUrl)
```

## `rewrite()`
Produce a response that rewrites (proxies) the given URL while preserving the original URL.
```
import { NextResponse } from'next/server'
// Incoming request: /about, browser shows /about
// Rewritten request: /proxy, browser shows /about
returnNextResponse.rewrite(newURL('/proxy',request.url))
```

## `next()`
The `next()` method is useful for Middleware, as it allows you to return early and continue routing.
```
import { NextResponse } from'next/server'
returnNextResponse.next()
```

You can also forward `headers` when producing the response:
```
import { NextResponse } from'next/server'
// Given an incoming request...
constnewHeaders=newHeaders(request.headers)
// Add a new header
newHeaders.set('x-version','123')
// And produce a response with the new headers
returnNextResponse.next({
 request: {
// New request headers
  headers: newHeaders,
 },
})
```

Was this helpful?
supported.
Send
