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
API ReferenceFunctionsuseAmp
# useAmp
Examples
  * AMP


> AMP support is one of our advanced features, you can read more about AMP here.
To enable AMP, add the following config to your page:
pages/index.js
```
exportconstconfig= { amp:true }
```

The `amp` config accepts the following values:
  * `true` - The page will be AMP-only
  * `'hybrid'` - The page will have two versions, one with AMP and another one with HTML


To learn more about the `amp` config, read the sections below.
## AMP First Page
Take a look at the following example:
pages/about.js
```
exportconstconfig= { amp:true }
functionAbout(props) {
return <h3>My AMP About Page!</h3>
}
exportdefault About
```

The page above is an AMP-only page, which means:
  * The page has no Next.js or React client-side runtime
  * The page is automatically optimized with AMP Optimizer, an optimizer that applies the same transformations as AMP caches (improves performance by up to 42%)
  * The page has a user-accessible (optimized) version of the page and a search-engine indexable (unoptimized) version of the page


## Hybrid AMP Page
Take a look at the following example:
pages/about.js
```
import { useAmp } from'next/amp'
exportconstconfig= { amp:'hybrid' }
functionAbout(props) {
constisAmp=useAmp()
return (
  <div>
   <h3>My AMP About Page!</h3>
   {isAmp ? (
    <amp-img
width="300"
height="300"
src="/my-img.jpg"
alt="a cool image"
layout="responsive"
    />
   ) : (
    <imgwidth="300"height="300"src="/my-img.jpg"alt="a cool image" />
   )}
  </div>
 )
}
exportdefault About
```

The page above is a hybrid AMP page, which means:
  * The page is rendered as traditional HTML (default) and AMP HTML (by adding `?amp=1` to the URL)
  * The AMP version of the page only has valid optimizations applied with AMP Optimizer so that it is indexable by search-engines


The page uses `useAmp` to differentiate between modes, it's a React Hook that returns `true` if the page is using AMP, and `false` otherwise.
Was this helpful?
supported.
Send
