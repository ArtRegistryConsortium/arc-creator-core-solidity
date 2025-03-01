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
IntroductionArchitectureSupported Browsers
# Supported Browsers
Next.js supports **modern browsers** with zero configuration.
  * Chrome 64+
  * Edge 79+
  * Firefox 67+
  * Opera 51+
  * Safari 12+


## Browserslist
If you would like to target specific browsers or features, Next.js supports Browserslist configuration in your `package.json` file. Next.js uses the following Browserslist configuration by default:
package.json
```
{
"browserslist": [
"chrome 64",
"edge 79",
"firefox 67",
"opera 51",
"safari 12"
 ]
}
```

## Polyfills
We inject widely used polyfills, including:
  * **fetch()** — Replacing: `whatwg-fetch` and `unfetch`.
  * **URL** — Replacing: the `url` package (Node.js API).
  * **Object.assign()** — Replacing: `object-assign`, `object.assign`, and `core-js/object/assign`.


If any of your dependencies include these polyfills, they’ll be eliminated automatically from the production build to avoid duplication.
In addition, to reduce bundle size, Next.js will only load these polyfills for browsers that require them. The majority of the web traffic globally will not download these polyfills.
### Custom Polyfills
If your own code or any external npm dependencies require features not supported by your target browsers (such as IE 11), you need to add polyfills yourself.
In this case, you should add a top-level import for the **specific polyfill** you need in your Custom `<App>` or the individual component.
## JavaScript Language Features
Next.js allows you to use the latest JavaScript features out of the box. In addition to ES6 features, Next.js also supports:
  * Async/await (ES2017)
  * Object Rest/Spread Properties (ES2018)
  * Dynamic `import()` (ES2020)
  * Optional Chaining (ES2020)
  * Nullish Coalescing (ES2020)
  * Class Fields and Static Properties (ES2022)
  * and more!


### TypeScript Features
Next.js has built-in TypeScript support. Learn more here.
### Customizing Babel Config (Advanced)
You can customize babel configuration. Learn more here.
Was this helpful?
supported.
Send
