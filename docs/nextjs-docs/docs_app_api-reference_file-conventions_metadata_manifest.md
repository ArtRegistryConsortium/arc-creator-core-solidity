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
File ConventionsMetadata Filesmanifest.json
# manifest.json
Add or generate a `manifest.(json|webmanifest)` file that matches the Web Manifest Specification in the **root** of `app` directory to provide information about your web application for the browser.
## Static Manifest file
app/manifest.json | app/manifest.webmanifest
```
{
"name":"My Next.js Application",
"short_name":"Next.js App",
"description":"An application built with Next.js",
"start_url":"/"
// ...
}
```

## Generate a Manifest file
Add a `manifest.js` or `manifest.ts` file that returns a `Manifest` object.
> Good to know: `manifest.js` is special Route Handlers that is cached by default unless it uses a Dynamic API or dynamic config option.
app/manifest.ts
TypeScript
JavaScriptTypeScript
```
importtype { MetadataRoute } from'next'
exportdefaultfunctionmanifest():MetadataRoute.Manifest {
return {
  name:'Next.js App',
  short_name:'Next.js App',
  description:'Next.js App',
  start_url:'/',
  display:'standalone',
  background_color:'#fff',
  theme_color:'#fff',
  icons: [
   {
    src:'/favicon.ico',
    sizes:'any',
    type:'image/x-icon',
   },
  ],
 }
}
```

### Manifest Object
The manifest object contains an extensive list of options that may be updated due to new web standards. For information on all the current options, refer to the `MetadataRoute.Manifest` type in your code editor if using TypeScript or see the MDN docs.
Was this helpful?
supported.
Send
