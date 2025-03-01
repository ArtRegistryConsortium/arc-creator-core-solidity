Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jswebVitalsAttribution
# webVitalsAttribution
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
When debugging issues related to Web Vitals, it is often helpful if we can pinpoint the source of the problem. For example, in the case of Cumulative Layout Shift (CLS), we might want to know the first element that shifted when the single largest layout shift occurred. Or, in the case of Largest Contentful Paint (LCP), we might want to identify the element corresponding to the LCP for the page. If the LCP element is an image, knowing the URL of the image resource can help us locate the asset we need to optimize.
Pinpointing the biggest contributor to the Web Vitals score, aka attribution, allows us to obtain more in-depth information like entries for PerformanceEventTiming, PerformanceNavigationTiming and PerformanceResourceTiming.
Attribution is disabled by default in Next.js but can be enabled **per metric** by specifying the following in `next.config.js`.
next.config.js
```
module.exports= {
 experimental: {
  webVitalsAttribution: ['CLS','LCP'],
 },
}
```

Valid attribution values are all `web-vitals` metrics specified in the `NextWebVitalsMetric` type.
Was this helpful?
supported.
Send
