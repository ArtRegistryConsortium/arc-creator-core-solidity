Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
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
`defaultLocale`| `string` | `undefined`| The default locale for internationalization.  
`domainLocale`  
- `defaultLocale`| `string`| The default locale within a domain.  
- `domain`| `string`| The domain associated with a specific locale.  
- `http`| `boolean` | `undefined`| Indicates if the domain is using HTTP.  
`locales`| `string[]` | `undefined`| An array of available locales.  
`locale`| `string` | `undefined`| The currently active locale.  
`url`| `URL`| The URL object.  
## Version History
Version| Changes  
---|---  
`v15.0.0`| `ip` and `geo` removed.  
Was this helpful?
supported.
Send
