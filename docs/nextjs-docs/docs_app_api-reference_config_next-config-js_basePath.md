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
Configurationnext.config.jsbasePath
# basePath
To deploy a Next.js application under a sub-path of a domain you can use the `basePath` config option.
`basePath` allows you to set a path prefix for the application. For example, to use `/docs` instead of `''` (an empty string, the default), open `next.config.js` and add the `basePath` config:
next.config.js
```
module.exports= {
 basePath:'/docs',
}
```

> **Good to know** : This value must be set at build time and cannot be changed without re-building as the value is inlined in the client-side bundles.
### Links
When linking to other pages using `next/link` and `next/router` the `basePath` will be automatically applied.
For example, using `/about` will automatically become `/docs/about` when `basePath` is set to `/docs`.
```
exportdefaultfunctionHomePage() {
return (
  <>
   <Linkhref="/about">About Page</Link>
  </>
 )
}
```

Output html:
```
<ahref="/docs/about">About Page</a>
```

This makes sure that you don't have to change all links in your application when changing the `basePath` value.
### Images
When using the `next/image` component, you will need to add the `basePath` in front of `src`.
For example, using `/docs/me.png` will properly serve your image when `basePath` is set to `/docs`.
```
import Image from'next/image'
functionHome() {
return (
  <>
   <h1>My Homepage</h1>
   <Image
src="/docs/me.png"
alt="Picture of the author"
width={500}
height={500}
   />
   <p>Welcome to my homepage!</p>
  </>
 )
}
exportdefault Home
```

Was this helpful?
supported.
Send
