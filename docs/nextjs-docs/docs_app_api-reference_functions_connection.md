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
API ReferenceFunctionsconnection
# connection
The `connection()` function allows you to indicate rendering should wait for an incoming user request before continuing.
It's useful when a component doesn’t use Dynamic APIs, but you want it to be dynamically rendered at runtime and not statically rendered at build time. This usually occurs when you access external information that you intentionally want to change the result of a render, such as `Math.random()` or `new Date()`.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { connection } from'next/server'
exportdefaultasyncfunctionPage() {
awaitconnection()
// Everything below will be excluded from prerendering
constrand=Math.random()
return <span>{rand}</span>
}
```

## Reference
### Type
```
functionconnection():Promise<void>
```

### Parameters
  * The function does not accept any parameters.


### Returns
  * The function returns a `void` Promise. It is not meant to be consumed.


## Good to know
  * `connection` replaces `unstable_noStore` to better align with the future of Next.js.
  * The function is only necessary when dynamic rendering is required and common Dynamic APIs are not used.


### Version History
Version| Changes  
---|---  
`v15.0.0`| `connection` stabilized.  
`v15.0.0-RC`| `connection` introduced.  
Was this helpful?
supported.
Send
