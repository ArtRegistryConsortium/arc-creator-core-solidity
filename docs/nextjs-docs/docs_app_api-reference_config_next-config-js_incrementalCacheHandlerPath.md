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
Configurationnext.config.jscacheHandler
# Custom Next.js Cache Handler
Caching and revalidating pages (with Incremental Static Regeneration) use the same shared cache. When deploying to Vercel, the ISR cache is automatically persisted to durable storage.
When self-hosting, the ISR cache is stored to the filesystem (on disk) on your Next.js server. This works automatically when self-hosting using both the Pages and App Router.
You can configure the Next.js cache location if you want to persist cached pages and data to durable storage, or share the cache across multiple containers or instances of your Next.js application.
next.config.js
```
module.exports= {
 cacheHandler:require.resolve('./cache-handler.js'),
 cacheMaxMemorySize:0,// disable default in-memory caching
}
```

View an example of a custom cache handler and learn more about implementation.
## API Reference
The cache handler can implement the following methods: `get`, `set`, and `revalidateTag`.
### `get()`
Parameter| Type| Description  
---|---|---  
`key`| `string`| The key to the cached value.  
Returns the cached value or `null` if not found.
### `set()`
Parameter| Type| Description  
---|---|---  
`key`| `string`| The key to store the data under.  
`data`| Data or `null`| The data to be cached.  
`ctx`| `{ tags: [] }`| The cache tags provided.  
Returns `Promise<void>`.
### `revalidateTag()`
Parameter| Type| Description  
---|---|---  
`tag`| `string` or `string[]`| The cache tags to revalidate.  
Returns `Promise<void>`. Learn more about revalidating data or the `revalidateTag()` function.
**Good to know:**
  * `revalidatePath` is a convenience layer on top of cache tags. Calling `revalidatePath` will call your `revalidateTag` function, which you can then choose if you want to tag cache keys based on the path.


## Version History
Version| Changes  
---|---  
`v14.1.0`| Renamed to `cacheHandler` and became stable.  
`v13.4.0`| `incrementalCacheHandlerPath` support for `revalidateTag`.  
`v13.4.0`| `incrementalCacheHandlerPath` support for standalone output.  
`v12.2.0`| Experimental `incrementalCacheHandlerPath` added.  
Was this helpful?
supported.
Send
