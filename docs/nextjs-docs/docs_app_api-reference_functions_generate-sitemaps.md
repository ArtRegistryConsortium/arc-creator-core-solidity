Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
API ReferenceFunctionsgenerateSitemaps
# generateSitemaps
You can use the `generateSitemaps` function to generate multiple sitemaps for your application.
## Returns
The `generateSitemaps` returns an array of objects with an `id` property.
## URLs
Your generated sitemaps will be available at `/.../sitemap/[id].xml`. For example, `/product/sitemap/1.xml`.
## Example
For example, to split a sitemap using `generateSitemaps`, return an array of objects with the sitemap `id`. Then, use the `id` to generate the unique sitemaps.
app/product/sitemap.ts
TypeScript
JavaScriptTypeScript
```
import { BASE_URL } from'@/app/lib/constants'
exportasyncfunctiongenerateSitemaps() {
// Fetch the total number of products and calculate the number of sitemaps needed
return [{ id:0 }, { id:1 }, { id:2 }, { id:3 }]
}
exportdefaultasyncfunctionsitemap({
 id,
}: {
 id:number
}):Promise<MetadataRoute.Sitemap> {
// Google's limit is 50,000 URLs per sitemap
conststart= id *50000
constend= start +50000
constproducts=awaitgetProducts(
`SELECT id, date FROM products WHERE id BETWEEN ${start} AND ${end}`
 )
returnproducts.map((product) => ({
  url:`${BASE_URL}/product/${product.id}`,
  lastModified:product.date,
 }))
}
```

## Version History
Version| Changes  
---|---  
`v15.0.0`| `generateSitemaps` now generates consistent URLs between development and production  
`v13.3.2`| `generateSitemaps` introduced. In development, you can view the generated sitemap on `/.../sitemap.xml/[id]`. For example, `/product/sitemap.xml/1`.  
## Next Steps
Learn how to create sitemaps for your Next.js application.
### sitemap.xml
API Reference for the sitemap.xml file.
Was this helpful?
supported.
Send
