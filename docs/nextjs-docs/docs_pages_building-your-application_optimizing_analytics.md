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
Building Your ApplicationOptimizingAnalytics
# Analytics
Next.js has built-in support for measuring and reporting performance metrics. You can either use the `useReportWebVitals` hook to manage reporting yourself, or alternatively, Vercel provides a managed service to automatically collect and visualize metrics for you.
## Build Your Own
pages/_app.js
```
import { useReportWebVitals } from'next/web-vitals'
functionMyApp({ Component, pageProps }) {
useReportWebVitals((metric) => {
console.log(metric)
 })
return <Component {...pageProps} />
}
```

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
pages/_app.js
```
import { useReportWebVitals } from'next/web-vitals'
functionMyApp({ Component, pageProps }) {
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
return <Component {...pageProps} />
}
```

## Custom Metrics
In addition to the core metrics listed above, there are some additional custom metrics that measure the time it takes for the page to hydrate and render:
  * `Next.js-hydration`: Length of time it takes for the page to start and finish hydrating (in ms)
  * `Next.js-route-change-to-render`: Length of time it takes for a page to start rendering after a route change (in ms)
  * `Next.js-render`: Length of time it takes for a page to finish render after a route change (in ms)


You can handle all the results of these metrics separately:
```
exportfunctionreportWebVitals(metric) {
switch (metric.name) {
case'Next.js-hydration':
// handle hydration results
break
case'Next.js-route-change-to-render':
// handle route-change to render results
break
case'Next.js-render':
// handle render results
break
default:
break
 }
}
```

These metrics work in all browsers that support the User Timing API.
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
