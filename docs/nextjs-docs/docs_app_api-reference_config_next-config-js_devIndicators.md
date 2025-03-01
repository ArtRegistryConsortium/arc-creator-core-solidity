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
Configurationnext.config.jsdevIndicators
# devIndicators
`devIndicators` allows you to configure the on-screen indicators that give context about the current route you're viewing during development.
Types
```
 devIndicators: {
  appIsrStatus?: boolean,// defaults to true
  buildActivity?: boolean,// defaults to true
  buildActivityPosition?:'bottom-right'
|'bottom-left'
|'top-right'
|'top-left',// defaults to 'bottom-right'
 },
```

## `appIsrStatus` (Static Indicator)
Next.js displays a static indicator in the bottom corner of the screen that signals if a route will be prerendered at build time. This makes it easier to understand whether a route is static or dynamic, and for you to identify if a route opts out of static rendering.
![App Folder Structure](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fstatic-indicator.png&w=3840&q=75)![App Folder Structure](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fstatic-indicator.png&w=3840&q=75)
You can temporarily hide the indicator by clicking the close indicator which will remember your preference in `localStorage` for 1 hour. To permanently disable it, you can use the config option in `next.config.js`:
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 devIndicators: {
  appIsrStatus:false,
 },
}
exportdefault nextConfig
```

## `buildActivity` (Compilation Indicator)
When you edit your code, and Next.js is compiling the application, a compilation indicator appears in the bottom right corner of the page.
> **Good to know** : This indicator is only present in development mode and will not appear when building and running the app in production mode.
In some cases this indicator can be misplaced on your page, for example, when conflicting with a chat launcher. To change its position, open `next.config.js` and set the `buildActivityPosition` in the `devIndicators` object to `bottom-right` (default), `bottom-left`, `top-right` or `top-left`:
next.config.js
```
module.exports= {
 devIndicators: {
  buildActivityPosition:'bottom-right',
 },
}
```

In some cases, this indicator might not be useful for you. To remove it, open `next.config.js` and disable the `buildActivity` config in `devIndicators` object:
next.config.js
```
module.exports= {
 devIndicators: {
  buildActivity:false,
 },
}
```

## Troubleshooting
### Static route not showing the indicator
If you expect a route to be static and the indicator is enabled but not showing, it's likely the route has opted out of static rendering.
You can confirm if a route is static or dynamic by building your application using `next build --debug`, and checking the output in your terminal. Static (or prerendered) routes will display a `○` symbol, whereas dynamic routes will display a `ƒ` symbol. For example:
Build Output
```
Route (app)               SizeFirstLoadJS
┌ ○/_not-found0B0kB
└ ƒ/products/[id]0B0kB
○ (Static)  prerenderedasstaticcontent
ƒ (Dynamic) server-renderedondemand
```

There are two reasons a route might opt out of static rendering:
  * The presence of Dynamic APIs which rely on runtime information.
  * An uncached data request, like a call to an ORM or database driver.


Check your route for any of these conditions, and if you are not able to statically render the route, then consider using `loading.js` or `<Suspense />` to leverage streaming.
Was this helpful?
supported.
Send
