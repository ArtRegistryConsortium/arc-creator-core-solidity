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
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationDeployingStatic Exports
# Static Exports
Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server.
When running `next build`, Next.js generates an HTML file per route. By breaking a strict SPA into individual HTML files, Next.js can avoid loading unnecessary JavaScript code on the client-side, reducing the bundle size and enabling faster page loads.
Since Next.js supports this static export, it can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets.
## Configuration
To enable a static export, change the output mode inside `next.config.js`:
next.config.js
```
/**
 * @type{import('next').NextConfig}
 */
constnextConfig= {
 output:'export',
// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
// trailingSlash: true,
// Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
// skipTrailingSlashRedirect: true,
// Optional: Change the output directory `out` -> `dist`
// distDir: 'dist',
}
module.exports= nextConfig
```

After running `next build`, Next.js will create an `out` folder with the HTML/CSS/JS assets for your application.
You can utilize `getStaticProps` and `getStaticPaths` to generate an HTML file for each page in your `pages` directory (or more for dynamic routes).
## Supported Features
The majority of core Next.js features needed to build a static site are supported, including:
  * Dynamic Routes when using `getStaticPaths`
  * Prefetching with `next/link`
  * Preloading JavaScript
  * Dynamic Imports
  * Any styling options (e.g. CSS Modules, styled-jsx)
  * Client-side data fetching
  * `getStaticProps`
  * `getStaticPaths`


### Image Optimization
Image Optimization through `next/image` can be used with a static export by defining a custom image loader in `next.config.js`. For example, you can optimize images with a service like Cloudinary:
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
 output:'export',
 images: {
  loader:'custom',
  loaderFile:'./my-loader.ts',
 },
}
module.exports= nextConfig
```

This custom loader will define how to fetch images from a remote source. For example, the following loader will construct the URL for Cloudinary:
my-loader.ts
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctioncloudinaryLoader({
 src,
 width,
 quality,
}: {
 src:string
 width:number
 quality?:number
}) {
constparams= ['f_auto','c_limit',`w_${width}`,`q_${quality ||'auto'}`]
return`https://res.cloudinary.com/demo/image/upload/${params.join(
','
 )}${src}`
}
```

You can then use `next/image` in your application, defining relative paths to the image in Cloudinary:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import Image from'next/image'
exportdefaultfunctionPage() {
return <Imagealt="turtles"src="/turtles.jpg"width={300} height={300} />
}
```

## Unsupported Features
Features that require a Node.js server, or dynamic logic that cannot be computed during the build process, are **not** supported:
  * Internationalized Routing
  * API Routes
  * Rewrites
  * Redirects
  * Headers
  * Middleware
  * Incremental Static Regeneration
  * Image Optimization with the default `loader`
  * Draft Mode
  * `getStaticPaths` with `fallback: true`
  * `getStaticPaths` with `fallback: 'blocking'`
  * `getServerSideProps`


## Deploying
With a static export, Next.js can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets.
When running `next build`, Next.js generates the static export into the `out` folder. For example, let's say you have the following routes:
  * `/`
  * `/blog/[id]`


After running `next build`, Next.js will generate the following files:
  * `/out/index.html`
  * `/out/404.html`
  * `/out/blog/post-1.html`
  * `/out/blog/post-2.html`


If you are using a static host like Nginx, you can configure rewrites from incoming requests to the correct files:
nginx.conf
```
server {
 listen 80;
 server_name acme.com;
 root /var/www/out;
location / {
 try_files $uri $uri.html $uri/ =404;
 }
# This is necessary when `trailingSlash: false`.
# You can omit this when `trailingSlash: true`.
location /blog/ {
rewrite^/blog/(.*)$ /blog/$1.html break;
 }
 error_page 404 /404.html;
location=/404.html {
internal;
 }
}
```

## Version History
Version| Changes  
---|---  
`v14.0.0`| `next export` has been removed in favor of `"output": "export"`  
`v13.4.0`| App Router (Stable) adds enhanced static export support, including using React Server Components and Route Handlers.  
`v13.3.0`| `next export` is deprecated and replaced with `"output": "export"`  
Was this helpful?
supported.
Send
