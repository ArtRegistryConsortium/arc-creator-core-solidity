Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationOptimizingMetadata
# Metadata
Next.js has a Metadata API that can be used to define your application metadata (e.g. `meta` and `link` tags inside your HTML `head` element) for improved SEO and web shareability.
There are two ways you can add metadata to your application:
  * **Config-based Metadata** : Export a static `metadata` object or a dynamic `generateMetadata` function in a `layout.js` or `page.js` file.
  * **File-based Metadata** : Add static or dynamically generated special files to route segments.


With both these options, Next.js will automatically generate the relevant `<head>` elements for your pages. You can also create dynamic OG images using the `ImageResponse` constructor.
## Static Metadata
To define static metadata, export a `Metadata` object from a `layout.js` or static `page.js` file.
layout.tsx | page.tsx
TypeScript
JavaScriptTypeScript
```
importtype { Metadata } from'next'
exportconstmetadata:Metadata= {
 title:'...',
 description:'...',
}
exportdefaultfunctionPage() {}
```

For all the available options, see the API Reference.
## Dynamic Metadata
You can use `generateMetadata` function to `fetch` metadata that requires dynamic values.
app/products/[id]/page.tsx
TypeScript
JavaScriptTypeScript
```
importtype { Metadata, ResolvingMetadata } from'next'
typeProps= {
 params:Promise<{ id:string }>
 searchParams:Promise<{ [key:string]:string|string[] |undefined }>
}
exportasyncfunctiongenerateMetadata(
 { params, searchParams }:Props,
 parent:ResolvingMetadata
):Promise<Metadata> {
// read route params
constid= (await params).id
// fetch data
constproduct=awaitfetch(`https://.../${id}`).then((res) =>res.json())
// optionally access and extend (rather than replace) parent metadata
constpreviousImages= (await parent).openGraph?.images || []
return {
  title:product.title,
  openGraph: {
   images: ['/some-specific-page-image.jpg',...previousImages],
  },
 }
}
exportdefaultfunctionPage({ params, searchParams }:Props) {}
```

For all the available params, see the API Reference.
> **Good to know** :
>   * Both static and dynamic metadata through `generateMetadata` are **only supported in Server Components**.
>   * `fetch` requests are automatically memoized for the same data across `generateMetadata`, `generateStaticParams`, Layouts, Pages, and Server Components. React `cache` can be used if `fetch` is unavailable.
>   * Next.js will wait for data fetching inside `generateMetadata` to complete before streaming UI to the client. This guarantees the first part of a streamed response includes `<head>` tags.
> 

## File-based metadata
These special files are available for metadata:
  * favicon.ico, apple-icon.jpg, and icon.jpg
  * opengraph-image.jpg and twitter-image.jpg
  * robots.txt
  * sitemap.xml


You can use these for static metadata, or you can programmatically generate these files with code.
For implementation and examples, see the Metadata Files API Reference and Dynamic Image Generation.
## Behavior
File-based metadata has the higher priority and will override any config-based metadata.
### Default Fields
There are two default `meta` tags that are always added even if a route doesn't define metadata:
  * The meta charset tag sets the character encoding for the website.
  * The meta viewport tag sets the viewport width and scale for the website to adjust for different devices.


```
<metacharset="utf-8" />
<metaname="viewport"content="width=device-width, initial-scale=1" />
```

> **Good to know** : You can overwrite the default `viewport` meta tag.
### Ordering
Metadata is evaluated in order, starting from the root segment down to the segment closest to the final `page.js` segment. For example:
  1. `app/layout.tsx` (Root Layout)
  2. `app/blog/layout.tsx` (Nested Blog Layout)
  3. `app/blog/[slug]/page.tsx` (Blog Page)


### Merging
Following the evaluation order, Metadata objects exported from multiple segments in the same route are **shallowly** merged together to form the final metadata output of a route. Duplicate keys are **replaced** based on their ordering.
This means metadata with nested fields such as `openGraph` and `robots` that are defined in an earlier segment are **overwritten** by the last segment to define them.
#### Overwriting fields
app/layout.js
```
exportconstmetadata= {
 title:'Acme',
 openGraph: {
  title:'Acme',
  description:'Acme is a...',
 },
}
```

app/blog/page.js
```
exportconstmetadata= {
 title:'Blog',
 openGraph: {
  title:'Blog',
 },
}
// Output:
// <title>Blog</title>
// <meta property="og:title" content="Blog" />
```

In the example above:
  * `title` from `app/layout.js` is **replaced** by `title` in `app/blog/page.js`.
  * All `openGraph` fields from `app/layout.js` are **replaced** in `app/blog/page.js` because `app/blog/page.js` sets `openGraph` metadata. Note the absence of `openGraph.description`.


If you'd like to share some nested fields between segments while overwriting others, you can pull them out into a separate variable:
app/shared-metadata.js
```
exportconstopenGraphImage= { images: ['http://...'] }
```

app/page.js
```
import { openGraphImage } from'./shared-metadata'
exportconstmetadata= {
 openGraph: {
...openGraphImage,
  title:'Home',
 },
}
```

app/about/page.js
```
import { openGraphImage } from'../shared-metadata'
exportconstmetadata= {
 openGraph: {
...openGraphImage,
  title:'About',
 },
}
```

In the example above, the OG image is shared between `app/layout.js` and `app/about/page.js` while the titles are different.
#### Inheriting fields
app/layout.js
```
exportconstmetadata= {
 title:'Acme',
 openGraph: {
  title:'Acme',
  description:'Acme is a...',
 },
}
```

app/about/page.js
```
exportconstmetadata= {
 title:'About',
}
// Output:
// <title>About</title>
// <meta property="og:title" content="Acme" />
// <meta property="og:description" content="Acme is a..." />
```

**Notes**
  * `title` from `app/layout.js` is **replaced** by `title` in `app/about/page.js`.
  * All `openGraph` fields from `app/layout.js` are **inherited** in `app/about/page.js` because `app/about/page.js` doesn't set `openGraph` metadata.


## Dynamic Image Generation
The `ImageResponse` constructor allows you to generate dynamic images using JSX and CSS. This is useful for creating social media images such as Open Graph images, Twitter cards, and more.
To use it, you can import `ImageResponse` from `next/og`:
app/about/route.js
```
import { ImageResponse } from'next/og'
exportasyncfunctionGET() {
returnnewImageResponse(
  (
   <div
style={{
     fontSize:128,
     background:'white',
     width:'100%',
     height:'100%',
     display:'flex',
     textAlign:'center',
     alignItems:'center',
     justifyContent:'center',
    }}
   >
    Hello world!
   </div>
  ),
  {
   width:1200,
   height:600,
  }
 )
}
```

`ImageResponse` integrates well with other Next.js APIs, including Route Handlers and file-based Metadata. For example, you can use `ImageResponse` in a `opengraph-image.tsx` file to generate Open Graph images at build time or dynamically at request time.
`ImageResponse` supports common CSS properties including flexbox and absolute positioning, custom fonts, text wrapping, centering, and nested images. See the full list of supported CSS properties.
> **Good to know** :
>   * Examples are available in the Vercel OG Playground.
>   * `ImageResponse` uses @vercel/og, Satori, and Resvg to convert HTML and CSS into PNG.
>   * Only flexbox and a subset of CSS properties are supported. Advanced layouts (e.g. `display: grid`) will not work.
>   * Maximum bundle size of `500KB`. The bundle size includes your JSX, CSS, fonts, images, and any other assets. If you exceed the limit, consider reducing the size of any assets or fetching at runtime.
>   * Only `ttf`, `otf`, and `woff` font formats are supported. To maximize the font parsing speed, `ttf` or `otf` are preferred over `woff`.
> 

## JSON-LD
JSON-LD is a format for structured data that can be used by search engines to understand your content. For example, you can use it to describe a person, an event, an organization, a movie, a book, a recipe, and many other types of entities.
Our current recommendation for JSON-LD is to render structured data as a `<script>` tag in your `layout.js` or `page.js` components. For example:
app/products/[id]/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionPage({ params }) {
constproduct=awaitgetProduct((await params).id)
constjsonLd= {
'@context':'https://schema.org',
'@type':'Product',
  name:product.name,
  image:product.image,
  description:product.description,
 }
return (
  <section>
   {/* Add JSON-LD to your page */}
   <script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html:JSON.stringify(jsonLd) }}
   />
   {/* ... */}
  </section>
 )
}
```

You can validate and test your structured data with the Rich Results Test for Google or the generic Schema Markup Validator.
You can type your JSON-LD with TypeScript using community packages like `schema-dts`:
```
import { Product, WithContext } from'schema-dts'
constjsonLd:WithContext<Product> = {
'@context':'https://schema.org',
'@type':'Product',
 name:'Next.js Sticker',
 image:'https://nextjs.org/imgs/sticker.png',
 description:'Dynamic at the speed of static.',
}
```

## Next Steps
View all the Metadata API options.
### generateMetadata
Learn how to add Metadata to your Next.js application for improved search engine optimization (SEO) and web shareability.
### Metadata Files
API documentation for the metadata file conventions.
### generateViewport
API Reference for the generateViewport function.
Was this helpful?
supported.
Send
