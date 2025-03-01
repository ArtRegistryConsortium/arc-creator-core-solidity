Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
API ReferenceFile Conventionsroute.js
# route.js
Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.
route.ts
TypeScript
JavaScriptTypeScript
```
exportasyncfunctionGET() {
returnResponse.json({ message:'Hello World' })
}
```

## Reference
### HTTP Methods
A **route** file allows you to create custom request handlers for a given route. The following HTTP methods are supported: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`.
route.ts
TypeScript
JavaScriptTypeScript
```
exportasyncfunctionGET(request:Request) {}
exportasyncfunctionHEAD(request:Request) {}
exportasyncfunctionPOST(request:Request) {}
exportasyncfunctionPUT(request:Request) {}
exportasyncfunctionDELETE(request:Request) {}
exportasyncfunctionPATCH(request:Request) {}
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
exportasyncfunctionOPTIONS(request:Request) {}
```

### Parameters
#### `request` (optional)
The `request` object is a NextRequest object, which is an extension of the Web Request API. `NextRequest` gives you further control over the incoming request, including easily accessing `cookies` and an extended, parsed, URL object `nextUrl`.
route.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextRequest } from'next/server'
exportasyncfunctionGET(request:NextRequest) {
consturl=request.nextUrl
}
```

#### `context` (optional)
  * **`params`**: a promise that resolves to an object containing thedynamic route parameters for the current route.


app/dashboard/[team]/route.ts
TypeScript
JavaScriptTypeScript
```
exportasyncfunctionGET(
 request:Request,
 { params }: { params:Promise<{ team:string }> }
) {
constteam= (await params).team
}
```

Example| URL| `params`  
---|---|---  
`app/dashboard/[team]/route.js`| `/dashboard/1`| `Promise<{ team: '1' }>`  
`app/shop/[tag]/[item]/route.js`| `/shop/1/2`| `Promise<{ tag: '1', item: '2' }>`  
`app/blog/[...slug]/route.js`| `/blog/1/2`| `Promise<{ slug: ['1', '2'] }>`  
## Examples
### Handling cookies
route.ts
TypeScript
JavaScriptTypeScript
```
import { cookies } from'next/headers'
exportasyncfunctionGET(request:NextRequest) {
constcookieStore=awaitcookies()
consta=cookieStore.get('a')
constb=cookieStore.set('b','1')
constc=cookieStore.delete('c')
}
```

## Version History
Version| Changes  
---|---  
`v15.0.0-RC`| `context.params` is now a promise. A codemod is available  
`v15.0.0-RC`| The default caching for `GET` handlers was changed from static to dynamic  
`v13.2.0`| Route Handlers are introduced.  
Was this helpful?
supported.
Send
