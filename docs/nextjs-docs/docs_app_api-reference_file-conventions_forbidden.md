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
API ReferenceFile Conventionsforbidden.js
# forbidden.js
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
The **forbidden** file is used to render UI when the `forbidden` function is invoked during authentication. Along with allowing you to customize the UI, Next.js will return a `403` status code.
app/forbidden.tsx
TypeScript
JavaScriptTypeScript
```
import Link from'next/link'
exportdefaultfunctionForbidden() {
return (
  <div>
   <h2>Forbidden</h2>
   <p>You are not authorized to access this resource.</p>
   <Linkhref="/">Return Home</Link>
  </div>
 )
}
```

## Reference
### Props
`forbidden.js` components do not accept any props.
## Version History
Version| Changes  
---|---  
`v15.1.0`| `forbidden.js` introduced.  
## Next Steps
### forbidden
API Reference for the forbidden function.
Was this helpful?
supported.
Send
