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
API ReferenceFunctionsNextRequest
# NextRequest
NextRequest extends the Web Request API with additional convenience methods.
## `cookies`
Read or mutate the `Set-Cookie` header of the request.
### `set(name, value)`
Given a name, set a cookie with the given value on the request.
```
// Given incoming request /home
// Set a cookie to hide the banner
// request will have a `Set-Cookie:show-banner=false;path=/home` header
request.cookies.set('show-banner','false')
```

### `get(name)`
Given a cookie name, return the value of the cookie. If the cookie is not found, `undefined` is returned. If multiple cookies are found, the first one is returned.
```
// Given incoming request /home
// { name: 'show-banner', value: 'false', Path: '/home' }
request.cookies.get('show-banner')
```

### `getAll()`
Given a cookie name, return the values of the cookie. If no name is given, return all cookies on the request.
```
// Given incoming request /home
// [
//  { name: 'experiments', value: 'new-pricing-page', Path: '/home' },
//  { name: 'experiments', value: 'winter-launch', Path: '/home' },
// ]
request.cookies.getAll('experiments')
// Alternatively, get all cookies for the request
request.cookies.getAll()
```

### `delete(name)`
Given a cookie name, delete the cookie from the request.
```
// Returns true for deleted, false is nothing is deleted
request.cookies.delete('experiments')
```

### `has(name)`
Given a cookie name, return `true` if the cookie exists on the request.
```
// Returns true if cookie exists, false if it does not
request.cookies.has('experiments')
```

### `clear()`
Remove the `Set-Cookie` header from the request.
```
request.cookies.clear()
```

## `nextUrl`
Extends the native `URL` API with additional convenience methods, including Next.js specific properties.
```
// Given a request to /home, pathname is /home
request.nextUrl.pathname
// Given a request to /home?name=lee, searchParams is { 'name': 'lee' }
request.nextUrl.searchParams
```

The following options are available:
Property| Type| Description  
---|---|---  
`basePath`| `string`| The base path of the URL.  
`buildId`| `string` | `undefined`| The build identifier of the Next.js application. Can be customized.  
`pathname`| `string`| The pathname of the URL.  
`searchParams`| `Object`| The search parameters of the URL.  
> **Note:** The internationalization properties from the Pages Router are not available for usage in the App Router. Learn more about internationalization with the App Router.
## Version History
Version| Changes  
---|---  
`v15.0.0`| `ip` and `geo` removed.  
Was this helpful?
supported.
Send
