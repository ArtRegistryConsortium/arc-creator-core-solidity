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
File ConventionsMetadata Filessitemap.xml
# sitemap.xml
`sitemap.(xml|js|ts)` is a special file that matches the Sitemaps XML format to help search engine crawlers index your site more efficiently.
### Sitemap files (.xml)
For smaller applications, you can create a `sitemap.xml` file and place it in the root of your `app` directory.
app/sitemap.xml
```
<urlsetxmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 <url>
  <loc>https://acme.com</loc>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  <changefreq>yearly</changefreq>
  <priority>1</priority>
 </url>
 <url>
  <loc>https://acme.com/about</loc>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
 </url>
 <url>
  <loc>https://acme.com/blog</loc>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
 </url>
</urlset>
```

### Generating a sitemap using code (.js, .ts)
You can use the `sitemap.(js|ts)` file convention to programmatically **generate** a sitemap by exporting a default function that returns an array of URLs. If using TypeScript, a `Sitemap` type is available.
> **Good to know** : `sitemap.js` is a special Route Handler that is cached by default unless it uses a Dynamic API or dynamic config option.
app/sitemap.ts
TypeScript
JavaScriptTypeScript
```
importtype { MetadataRoute } from'next'
exportdefaultfunctionsitemap():MetadataRoute.Sitemap {
return [
  {
   url:'https://acme.com',
   lastModified:newDate(),
   changeFrequency:'yearly',
   priority:1,
  },
  {
   url:'https://acme.com/about',
   lastModified:newDate(),
   changeFrequency:'monthly',
   priority:0.8,
  },
  {
   url:'https://acme.com/blog',
   lastModified:newDate(),
   changeFrequency:'weekly',
   priority:0.5,
  },
 ]
}
```

Output:
acme.com/sitemap.xml
```
<urlsetxmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 <url>
  <loc>https://acme.com</loc>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  <changefreq>yearly</changefreq>
  <priority>1</priority>
 </url>
 <url>
  <loc>https://acme.com/about</loc>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
 </url>
 <url>
  <loc>https://acme.com/blog</loc>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
 </url>
</urlset>
```

### Image Sitemaps
You can use `images` property to create image sitemaps. Learn more details in the Google Developer Docs.
app/sitemap.ts
TypeScript
JavaScriptTypeScript
```
importtype { MetadataRoute } from'next'
exportdefaultfunctionsitemap():MetadataRoute.Sitemap {
return [
  {
   url:'https://example.com',
   lastModified:'2021-01-01',
   changeFrequency:'weekly',
   priority:0.5,
   images: ['https://example.com/image.jpg'],
  },
 ]
}
```

Output:
acme.com/sitemap.xml
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
 <url>
  <loc>https://example.com</loc>
  <image:image>
   <image:loc>https://example.com/image.jpg</image:loc>
  </image:image>
  <lastmod>2021-01-01</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
 </url>
</urlset>
```

### Video Sitemaps
You can use `videos` property to create video sitemaps. Learn more details in the Google Developer Docs.
app/sitemap.ts
TypeScript
JavaScriptTypeScript
```
importtype { MetadataRoute } from'next'
exportdefaultfunctionsitemap():MetadataRoute.Sitemap {
return [
  {
   url:'https://example.com',
   lastModified:'2021-01-01',
   changeFrequency:'weekly',
   priority:0.5,
   videos: [
    {
     title:'example',
     thumbnail_loc:'https://example.com/image.jpg',
     description:'this is the description',
    },
   ],
  },
 ]
}
```

Output:
acme.com/sitemap.xml
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
 <url>
  <loc>https://example.com</loc>
  <video:video>
   <video:title>example</video:title>
   <video:thumbnail_loc>https://example.com/image.jpg</video:thumbnail_loc>
   <video:description>this is the description</video:description>
  </video:video>
  <lastmod>2021-01-01</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
 </url>
</urlset>
```

### Generate a localized Sitemap
app/sitemap.ts
TypeScript
JavaScriptTypeScript
```
importtype { MetadataRoute } from'next'
exportdefaultfunctionsitemap():MetadataRoute.Sitemap {
return [
  {
   url:'https://acme.com',
   lastModified:newDate(),
   alternates: {
    languages: {
     es:'https://acme.com/es',
     de:'https://acme.com/de',
    },
   },
  },
  {
   url:'https://acme.com/about',
   lastModified:newDate(),
   alternates: {
    languages: {
     es:'https://acme.com/es/about',
     de:'https://acme.com/de/about',
    },
   },
  },
  {
   url:'https://acme.com/blog',
   lastModified:newDate(),
   alternates: {
    languages: {
     es:'https://acme.com/es/blog',
     de:'https://acme.com/de/blog',
    },
   },
  },
 ]
}
```

Output:
acme.com/sitemap.xml
```
<urlsetxmlns="http://www.sitemaps.org/schemas/sitemap/0.9"xmlns:xhtml="http://www.w3.org/1999/xhtml">
 <url>
  <loc>https://acme.com</loc>
  <xhtml:link
rel="alternate"
hreflang="es"
href="https://acme.com/es"/>
  <xhtml:link
rel="alternate"
hreflang="de"
href="https://acme.com/de"/>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
 </url>
 <url>
  <loc>https://acme.com/about</loc>
  <xhtml:link
rel="alternate"
hreflang="es"
href="https://acme.com/es/about"/>
  <xhtml:link
rel="alternate"
hreflang="de"
href="https://acme.com/de/about"/>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
 </url>
 <url>
  <loc>https://acme.com/blog</loc>
  <xhtml:link
rel="alternate"
hreflang="es"
href="https://acme.com/es/blog"/>
  <xhtml:link
rel="alternate"
hreflang="de"
href="https://acme.com/de/blog"/>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
 </url>
</urlset>
```

### Generating multiple sitemaps
While a single sitemap will work for most applications. For large web applications, you may need to split a sitemap into multiple files.
There are two ways you can create multiple sitemaps:
  * By nesting `sitemap.(xml|js|ts)` inside multiple route segments e.g. `app/sitemap.xml` and `app/products/sitemap.xml`.
  * By using the `generateSitemaps` function.


For example, to split a sitemap using `generateSitemaps`, return an array of objects with the sitemap `id`. Then, use the `id` to generate the unique sitemaps.
app/product/sitemap.ts
TypeScript
JavaScriptTypeScript
```
importtype { MetadataRoute } from'next'
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

Your generated sitemaps will be available at `/.../sitemap/[id]`. For example, `/product/sitemap/1.xml`.
See the `generateSitemaps` API reference for more information.
## Returns
The default function exported from `sitemap.(xml|ts|js)` should return an array of objects with the following properties:
```
typeSitemap=Array<{
 url:string
 lastModified?:string|Date
 changeFrequency?:
|'always'
|'hourly'
|'daily'
|'weekly'
|'monthly'
|'yearly'
|'never'
 priority?:number
 alternates?: {
  languages?:Languages<string>
 }
}>
```

## Version History
Version| Changes  
---|---  
`v14.2.0`| Add localizations support.  
`v13.4.14`| Add `changeFrequency` and `priority` attributes to sitemaps.  
`v13.3.0`| `sitemap` introduced.  
## Next Steps
Learn how to use the generateSitemaps function.
### generateSitemaps
Learn how to use the generateSiteMaps function to create multiple sitemaps for your application.
Was this helpful?
supported.
Send
