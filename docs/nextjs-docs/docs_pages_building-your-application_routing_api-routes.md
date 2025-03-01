Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationRoutingAPI Routes
# API Routes
Examples
  * API Routes Request Helpers
  * API Routes with GraphQL
  * API Routes with REST
  * API Routes with CORS


> **Good to know** : If you are using the App Router, you can use Server Components or Route Handlers instead of API Routes.
API routes provide a solution to build a **public API** with Next.js.
Any file inside the folder `pages/api` is mapped to `/api/*` and will be treated as an API endpoint instead of a `page`. They are server-side only bundles and won't increase your client-side bundle size.
For example, the following API route returns a JSON response with a status code of `200`:
pages/api/hello.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
typeResponseData= {
 message:string
}
exportdefaultfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse<ResponseData>
) {
res.status(200).json({ message:'Hello from Next.js!' })
}
```

> **Good to know** :
>   * API Routes do not specify CORS headers, meaning they are **same-origin only** by default. You can customize such behavior by wrapping the request handler with the CORS request helpers.
> 

  * API Routes can't be used with static exports. However, Route Handlers in the App Router can. 
>     * API Routes will be affected by `pageExtensions` configuration in `next.config.js`.


## Parameters
```
exportdefaultfunctionhandler(req:NextApiRequest, res:NextApiResponse) {
// ...
}
```

  * `req`: An instance of http.IncomingMessage
  * `res`: An instance of http.ServerResponse


## HTTP Methods
To handle different HTTP methods in an API route, you can use `req.method` in your request handler, like so:
pages/api/hello.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultfunctionhandler(req:NextApiRequest, res:NextApiResponse) {
if (req.method ==='POST') {
// Process a POST request
 } else {
// Handle any other HTTP method
 }
}
```

## Request Helpers
API Routes provide built-in request helpers which parse the incoming request (`req`):
  * `req.cookies` - An object containing the cookies sent by the request. Defaults to `{}`
  * `req.query` - An object containing the query string. Defaults to `{}`
  * `req.body` - An object containing the body parsed by `content-type`, or `null` if no body was sent


### Custom config
Every API Route can export a `config` object to change the default configuration, which is the following:
```
exportconstconfig= {
 api: {
  bodyParser: {
   sizeLimit:'1mb',
  },
 },
// Specifies the maximum allowed duration for this function to execute (in seconds)
 maxDuration:5,
}
```

`bodyParser` is automatically enabled. If you want to consume the body as a `Stream` or with `raw-body`, you can set this to `false`.
One use case for disabling the automatic `bodyParsing` is to allow you to verify the raw body of a **webhook** request, for example from GitHub.
```
exportconstconfig= {
 api: {
  bodyParser:false,
 },
}
```

`bodyParser.sizeLimit` is the maximum size allowed for the parsed body, in any format supported by bytes, like so:
```
exportconstconfig= {
 api: {
  bodyParser: {
   sizeLimit:'500kb',
  },
 },
}
```

`externalResolver` is an explicit flag that tells the server that this route is being handled by an external resolver like _express_ or _connect_. Enabling this option disables warnings for unresolved requests.
```
exportconstconfig= {
 api: {
  externalResolver:true,
 },
}
```

`responseLimit` is automatically enabled, warning when an API Routes' response body is over 4MB.
If you are not using Next.js in a serverless environment, and understand the performance implications of not using a CDN or dedicated media host, you can set this limit to `false`.
```
exportconstconfig= {
 api: {
  responseLimit:false,
 },
}
```

`responseLimit` can also take the number of bytes or any string format supported by `bytes`, for example `1000`, `'500kb'` or `'3mb'`. This value will be the maximum response size before a warning is displayed. Default is 4MB. (see above)
```
exportconstconfig= {
 api: {
  responseLimit:'8mb',
 },
}
```

## Response Helpers
The Server Response object, (often abbreviated as `res`) includes a set of Express.js-like helper methods to improve the developer experience and increase the speed of creating new API endpoints.
The included helpers are:
  * `res.status(code)` - A function to set the status code. `code` must be a valid HTTP status code
  * `res.json(body)` - Sends a JSON response. `body` must be a serializable object
  * `res.send(body)` - Sends the HTTP response. `body` can be a `string`, an `object` or a `Buffer`
  * `res.redirect([status,] path)` - Redirects to a specified path or URL. `status` must be a valid HTTP status code. If not specified, `status` defaults to "307" "Temporary redirect".
  * `res.revalidate(urlPath)` - Revalidate a page on demand using `getStaticProps`. `urlPath` must be a `string`.


### Setting the status code of a response
When sending a response back to the client, you can set the status code of the response.
The following example sets the status code of the response to `200` (`OK`) and returns a `message` property with the value of `Hello from Next.js!` as a JSON response:
pages/api/hello.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
typeResponseData= {
 message:string
}
exportdefaultfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse<ResponseData>
) {
res.status(200).json({ message:'Hello from Next.js!' })
}
```

### Sending a JSON response
When sending a response back to the client you can send a JSON response, this must be a serializable object. In a real world application you might want to let the client know the status of the request depending on the result of the requested endpoint.
The following example sends a JSON response with the status code `200` (`OK`) and the result of the async operation. It's contained in a try catch block to handle any errors that may occur, with the appropriate status code and error message caught and sent back to the client:
pages/api/hello.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
try {
constresult=awaitsomeAsyncOperation()
res.status(200).json({ result })
 } catch (err) {
res.status(500).json({ error:'failed to load data' })
 }
}
```

### Sending a HTTP response
Sending an HTTP response works the same way as when sending a JSON response. The only difference is that the response body can be a `string`, an `object` or a `Buffer`.
The following example sends a HTTP response with the status code `200` (`OK`) and the result of the async operation.
pages/api/hello.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
try {
constresult=awaitsomeAsyncOperation()
res.status(200).send({ result })
 } catch (err) {
res.status(500).send({ error:'failed to fetch data' })
 }
}
```

### Redirects to a specified path or URL
Taking a form as an example, you may want to redirect your client to a specified path or URL once they have submitted the form.
The following example redirects the client to the `/` path if the form is successfully submitted:
pages/api/hello.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
const { name,message } =req.body
try {
awaithandleFormInputAsync({ name, message })
res.redirect(307,'/')
 } catch (err) {
res.status(500).send({ error:'Failed to fetch data' })
 }
}
```

### Adding TypeScript types
You can make your API Routes more type-safe by importing the `NextApiRequest` and `NextApiResponse` types from `next`, in addition to those, you can also type your response data:
```
importtype { NextApiRequest, NextApiResponse } from'next'
typeResponseData= {
 message:string
}
exportdefaultfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse<ResponseData>
) {
res.status(200).json({ message:'Hello from Next.js!' })
}
```

> **Good to know** : The body of `NextApiRequest` is `any` because the client may include any payload. You should validate the type/shape of the body at runtime before using it.
## Dynamic API Routes
API Routes support dynamic routes, and follow the same file naming rules used for `pages/`.
pages/api/post/[pid].ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultfunctionhandler(req:NextApiRequest, res:NextApiResponse) {
const { pid } =req.query
res.end(`Post: ${pid}`)
}
```

Now, a request to `/api/post/abc` will respond with the text: `Post: abc`.
### Catch all API routes
API Routes can be extended to catch all paths by adding three dots (`...`) inside the brackets. For example:
  * `pages/api/post/[...slug].js` matches `/api/post/a`, but also `/api/post/a/b`, `/api/post/a/b/c` and so on.


> **Good to know** : You can use names other than `slug`, such as: `[...param]`
Matched parameters will be sent as a query parameter (`slug` in the example) to the page, and it will always be an array, so, the path `/api/post/a` will have the following `query` object:
```
{ "slug": ["a"] }
```

And in the case of `/api/post/a/b`, and any other matching path, new parameters will be added to the array, like so:
```
{ "slug": ["a","b"] }
```

For example:
pages/api/post/[...slug].ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultfunctionhandler(req:NextApiRequest, res:NextApiResponse) {
const { slug } =req.query
res.end(`Post: ${slug.join(', ')}`)
}
```

Now, a request to `/api/post/a/b/c` will respond with the text: `Post: a, b, c`.
### Optional catch all API routes
Catch all routes can be made optional by including the parameter in double brackets (`[[...slug]]`).
For example, `pages/api/post/[[...slug]].js` will match `/api/post`, `/api/post/a`, `/api/post/a/b`, and so on.
The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (`/api/post` in the example above).
The `query` objects are as follows:
```
{ } // GET `/api/post` (empty object)
{ "slug": ["a"] } // `GET /api/post/a` (single-element array)
{ "slug": ["a","b"] } // `GET /api/post/a/b` (multi-element array)
```

### Caveats
  * Predefined API routes take precedence over dynamic API routes, and dynamic API routes over catch all API routes. Take a look at the following examples: 
    * `pages/api/post/create.js` - Will match `/api/post/create`
    * `pages/api/post/[pid].js` - Will match `/api/post/1`, `/api/post/abc`, etc. But not `/api/post/create`
    * `pages/api/post/[...slug].js` - Will match `/api/post/1/2`, `/api/post/a/b/c`, etc. But not `/api/post/create`, `/api/post/abc`


## Edge API Routes
If you would like to use API Routes with the Edge Runtime, we recommend incrementally adopting the App Router and using Route Handlers instead.
The Route Handlers function signature is isomorphic, meaning you can use the same function for both Edge and Node.js runtimes.
Was this helpful?
supported.
Send
