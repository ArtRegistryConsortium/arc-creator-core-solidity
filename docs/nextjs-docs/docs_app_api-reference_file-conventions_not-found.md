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
API ReferenceFile Conventionsnot-found.js
# not-found.js
The **not-found** file is used to render UI when the `notFound` function is thrown within a route segment. Along with serving a custom UI, Next.js will return a `200` HTTP status code for streamed responses, and `404` for non-streamed responses.
app/not-found.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionNotFound() {
return (
  <div>
   <h2>Not Found</h2>
   <p>Could not find requested resource</p>
   <Linkhref="/">Return Home</Link>
  </div>
 )
}
```

## Reference
### Props
`not-found.js` components do not accept any props.
> **Good to know** : In addition to catching expected `notFound()` errors, the root `app/not-found.js` file also handles any unmatched URLs for your whole application. This means users that visit a URL that is not handled by your app will be shown the UI exported by the `app/not-found.js` file.
## Examples
### Data Fetching
By default, `not-found` is a Server Component. You can mark it as `async` to fetch and display data:
app/not-found.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
import { headers } from'next/headers'
exportdefaultasyncfunctionNotFound() {
constheadersList=awaitheaders()
constdomain=headersList.get('host')
constdata=awaitgetSiteData(domain)
return (
  <div>
   <h2>Not Found: {data.name}</h2>
   <p>Could not find requested resource</p>
   <p>
    View <Linkhref="/blog">all posts</Link>
   </p>
  </div>
 )
}
```

If you need to use Client Component hooks like `usePathname` to display content based on the path, you must fetch data on the client-side instead.
## Version History
Version| Changes  
---|---  
`v13.3.0`| Root `app/not-found` handles global unmatched URLs.  
`v13.0.0`| `not-found` introduced.  
Was this helpful?
supported.
Send
