Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Configurationnext.config.js Optionsimages
# images
If you want to use a cloud provider to optimize images instead of using the Next.js built-in Image Optimization API, you can configure `next.config.js` with the following:
next.config.js
```
module.exports= {
 images: {
  loader:'custom',
  loaderFile:'./my/image/loader.js',
 },
}
```

This `loaderFile` must point to a file relative to the root of your Next.js application. The file must export a default function that returns a string, for example:
my/image/loader.js
```
exportdefaultfunctionmyImageLoader({ src, width, quality }) {
return`https://example.com/${src}?w=${width}&q=${quality ||75}`
}
```

Alternatively, you can use the `loader` prop to pass the function to each instance of `next/image`.
To learn more about configuring the behavior of the built-in Image Optimization API and the Image Component, see Image Configuration Options for available options.
## Example Loader Configuration
  * Akamai
  * AWS CloudFront
  * Cloudinary
  * Cloudflare
  * Contentful
  * Fastly
  * Gumlet
  * ImageEngine
  * Imgix
  * PixelBin
  * Sanity
  * Sirv
  * Supabase
  * Thumbor
  * Imagekit
  * Nitrogen AIO


### Akamai
```
// Docs: https://techdocs.akamai.com/ivm/reference/test-images-on-demand
exportdefaultfunctionakamaiLoader({ src, width, quality }) {
return`https://example.com/${src}?imwidth=${width}`
}
```

### AWS CloudFront
```
// Docs: https://aws.amazon.com/developer/application-security-performance/articles/image-optimization
exportdefaultfunctioncloudfrontLoader({ src, width, quality }) {
consturl=newURL(`https://example.com${src}`)
url.searchParams.set('format','auto')
url.searchParams.set('width',width.toString())
url.searchParams.set('quality', (quality ||75).toString())
returnurl.href
}
```

### Cloudinary
```
// Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
exportdefaultfunctioncloudinaryLoader({ src, width, quality }) {
constparams= ['f_auto','c_limit',`w_${width}`,`q_${quality ||'auto'}`]
return`https://example.com/${params.join(',')}${src}`
}
```

### Cloudflare
```
// Docs: https://developers.cloudflare.com/images/transform-images
exportdefaultfunctioncloudflareLoader({ src, width, quality }) {
constparams= [`width=${width}`,`quality=${quality ||75}`,'format=auto']
return`https://example.com/cdn-cgi/image/${params.join(',')}/${src}`
}
```

### Contentful
```
// Docs: https://www.contentful.com/developers/docs/references/images-api/
exportdefaultfunctioncontentfulLoader({ src, width, quality }) {
consturl=newURL(`https://example.com${src}`)
url.searchParams.set('fm','webp')
url.searchParams.set('w',width.toString())
url.searchParams.set('q', (quality ||75).toString())
returnurl.href
}
```

### Fastly
```
// Docs: https://developer.fastly.com/reference/io/
exportdefaultfunctionfastlyLoader({ src, width, quality }) {
consturl=newURL(`https://example.com${src}`)
url.searchParams.set('auto','webp')
url.searchParams.set('width',width.toString())
url.searchParams.set('quality', (quality ||75).toString())
returnurl.href
}
```

### Gumlet
```
// Docs: https://docs.gumlet.com/reference/image-transform-size
exportdefaultfunctiongumletLoader({ src, width, quality }) {
consturl=newURL(`https://example.com${src}`)
url.searchParams.set('format','auto')
url.searchParams.set('w',width.toString())
url.searchParams.set('q', (quality ||75).toString())
returnurl.href
}
```

### ImageEngine
```
// Docs: https://support.imageengine.io/hc/en-us/articles/360058880672-Directives
exportdefaultfunctionimageengineLoader({ src, width, quality }) {
constcompression=100- (quality ||50)
constparams= [`w_${width}`,`cmpr_${compression}`)]
return`https://example.com${src}?imgeng=/${params.join('/')`
}
```

### Imgix
```
// Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
exportdefaultfunctionimgixLoader({ src, width, quality }) {
consturl=newURL(`https://example.com${src}`)
constparams=url.searchParams
params.set('auto',params.getAll('auto').join(',') ||'format')
params.set('fit',params.get('fit') ||'max')
params.set('w',params.get('w') ||width.toString())
params.set('q', (quality ||50).toString())
returnurl.href
}
```

### PixelBin
```
// Doc (Resize): https://www.pixelbin.io/docs/transformations/basic/resize/#width-w
// Doc (Optimise): https://www.pixelbin.io/docs/optimizations/quality/#image-quality-when-delivering
// Doc (Auto Format Delivery): https://www.pixelbin.io/docs/optimizations/format/#automatic-format-selection-with-f_auto-url-parameter
exportdefaultfunctionpixelBinLoader({ src, width, quality }) {
constname='<your-cloud-name>'
constopt=`t.resize(w:${width})~t.compress(q:${quality ||75})`
return`https://cdn.pixelbin.io/v2/${name}/${opt}/${src}?f_auto=true`
}
```

### Sanity
```
// Docs: https://www.sanity.io/docs/image-urls
exportdefaultfunctionsanityLoader({ src, width, quality }) {
constprj='zp7mbokg'
constdataset='production'
consturl=newURL(`https://cdn.sanity.io/images/${prj}/${dataset}${src}`)
url.searchParams.set('auto','format')
url.searchParams.set('fit','max')
url.searchParams.set('w',width.toString())
if (quality) {
url.searchParams.set('q',quality.toString())
 }
returnurl.href
}
```

### Sirv
```
// Docs: https://sirv.com/help/articles/dynamic-imaging/
exportdefaultfunctionsirvLoader({ src, width, quality }) {
consturl=newURL(`https://example.com${src}`)
constparams=url.searchParams
params.set('format',params.getAll('format').join(',') ||'optimal')
params.set('w',params.get('w') ||width.toString())
params.set('q', (quality ||85).toString())
returnurl.href
}
```

### Supabase
```
// Docs: https://supabase.com/docs/guides/storage/image-transformations#nextjs-loader
exportdefaultfunctionsupabaseLoader({ src, width, quality }) {
consturl=newURL(`https://example.com${src}`)
url.searchParams.set('width',width.toString())
url.searchParams.set('quality', (quality ||75).toString())
returnurl.href
}
```

### Thumbor
```
// Docs: https://thumbor.readthedocs.io/en/latest/
exportdefaultfunctionthumborLoader({ src, width, quality }) {
constparams= [`${width}x0`,`filters:quality(${quality ||75})`]
return`https://example.com${params.join('/')}${src}`
}
```

### ImageKit.io
```
// Docs: https://imagekit.io/docs/image-transformation
exportdefaultfunctionimageKitLoader({ src, width, quality }) {
constparams= [`w-${width}`,`q-${quality ||80}`]
return`https://ik.imagekit.io/your_imagekit_id/${src}?tr=${params.join(',')}`
}
```

### Nitrogen AIO
```
// Docs: https://docs.n7.io/aio/intergrations/
exportdefaultfunctionaioLoader({ src, width, quality }) {
consturl=newURL(src,window.location.href)
constparams=url.searchParams
constaioParams=params.getAll('aio')
aioParams.push(`w-${width}`)
if (quality) {
aioParams.push(`q-${quality.toString()}`)
 }
params.set('aio',aioParams.join(';'))
returnurl.href
}
```

Was this helpful?
supported.
Send
