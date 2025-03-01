Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationOptimizingAnalytics
# Analytics
Next.js has built-in support for measuring and reporting performance metrics. You can either use the `useReportWebVitals` hook to manage reporting yourself, or alternatively, Vercel provides a managed service to automatically collect and visualize metrics for you.
## Build Your Own
app/_components/web-vitals.js
```
'use client'
import { useReportWebVitals } from'next/web-vitals'
exportfunctionWebVitals() {
useReportWebVitals((metric) => {
console.log(metric)
 })
}
```

app/layout.js
```
import { WebVitals } from'./_components/web-vitals'
exportdefaultfunctionLayout({ children }) {
return (
  <html>
   <body>
    <WebVitals />
    {children}
   </body>
  </html>
 )
}
```

> Since the `useReportWebVitals` hook requires the `"use client"` directive, the most performant approach is to create a separate component that the root layout imports. This confines the client boundary exclusively to the `WebVitals` component.
View the API Reference for more information.
## Web Vitals
Web Vitals are a set of useful metrics that aim to capture the user experience of a web page. The following web vitals are all included:
  * Time to First Byte (TTFB)
  * First Contentful Paint (FCP)
  * Largest Contentful Paint (LCP)
  * First Input Delay (FID)
  * Cumulative Layout Shift (CLS)
  * Interaction to Next Paint (INP)


You can handle all the results of these metrics using the `name` property.
app/_components/web-vitals.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useReportWebVitals } from'next/web-vitals'
exportfunctionWebVitals() {
useReportWebVitals((metric) => {
switch (metric.name) {
case'FCP': {
// handle FCP results
   }
case'LCP': {
// handle LCP results
   }
// ...
  }
 })
}
```

## Sending results to external systems
You can send results to any endpoint to measure and track real user performance on your site. For example:
```
useReportWebVitals((metric) => {
constbody=JSON.stringify(metric)
consturl='https://example.com/analytics'
// Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
if (navigator.sendBeacon) {
navigator.sendBeacon(url, body)
 } else {
fetch(url, { body, method:'POST', keepalive:true })
 }
})
```

> **Good to know** : If you use Google Analytics, using the `id` value can allow you to construct metric distributions manually (to calculate percentiles, etc.)
> ```
useReportWebVitals((metric) => {
// Use `window.gtag` if you initialized Google Analytics as this example:
// https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics
window.gtag('event',metric.name, {
  value:Math.round(
metric.name ==='CLS'?metric.value *1000:metric.value
  ),// values must be integers
  event_label:metric.id,// id unique to current page load
  non_interaction:true,// avoids affecting bounce rate.
 })
})
```

> Read more about sending results to Google Analytics.
Was this helpful?
supported.
Send
