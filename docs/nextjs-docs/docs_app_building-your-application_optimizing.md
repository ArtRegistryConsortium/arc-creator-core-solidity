Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
App RouterBuilding Your ApplicationOptimizing
# Optimizations
Next.js comes with a variety of built-in optimizations designed to improve your application's speed and Core Web Vitals. This guide will cover the optimizations you can leverage to enhance your user experience.
## Built-in Components
Built-in components abstract away the complexity of implementing common UI optimizations. These components are:
  * **Images** : Built on the native `<img>` element. The Image Component optimizes images for performance by lazy loading and automatically resizing images based on device size.
  * **Link** : Built on the native `<a>` tags. The Link Component prefetches pages in the background, for faster and smoother page transitions.
  * **Scripts** : Built on the native `<script>` tags. The Script Component gives you control over loading and execution of third-party scripts.


## Metadata
Metadata helps search engines understand your content better (which can result in better SEO), and allows you to customize how your content is presented on social media, helping you create a more engaging and consistent user experience across various platforms.
The Metadata API in Next.js allows you to modify the `<head>` element of a page. You can configure metadata in two ways:
  * **Config-based Metadata** : Export a static `metadata` object or a dynamic `generateMetadata` function in a `layout.js` or `page.js` file.
  * **File-based Metadata** : Add static or dynamically generated special files to route segments.


Additionally, you can create dynamic Open Graph Images using JSX and CSS with imageResponse constructor.
## Static Assets
Next.js `/public` folder can be used to serve static assets like images, fonts, and other files. Files inside `/public` can also be cached by CDN providers so that they are delivered efficiently.
## Analytics and Monitoring
For large applications, Next.js integrates with popular analytics and monitoring tools to help you understand how your application is performing. Learn more in the OpenTelemetry and Instrumentation guides.
### Images
Optimize your images with the built-in `next/image` component.
### Videos
Recommendations and best practices for optimizing videos in your Next.js application.
### Fonts
Optimize your application's web fonts with the built-in `next/font` loaders.
### Metadata
Use the Metadata API to define metadata in any layout or page.
### Scripts
Optimize 3rd party scripts with the built-in Script component.
### Package Bundling
Learn how to optimize your application's server and client bundles.
### Lazy Loading
Lazy load imported libraries and React Components to improve your application's loading performance.
### Analytics
Measure and track page performance using Next.js Speed Insights
### Instrumentation
Learn how to use instrumentation to run code at server startup in your Next.js app
### OpenTelemetry
Learn how to instrument your Next.js app with OpenTelemetry.
### Static Assets
Next.js allows you to serve static files, like images, in the public directory. You can learn how it works here.
### Third Party Libraries
Optimize the performance of third-party libraries in your application with the `@next/third-parties` package.
### Memory Usage
Optimize memory used by your application in development and production.
Was this helpful?
supported.
Send
