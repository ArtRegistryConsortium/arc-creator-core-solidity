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
Configurationnext.config.js OptionsurlImports
# urlImports
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
URL imports are an experimental feature that allows you to import modules directly from external servers (instead of from the local disk).
> **Warning** : Only use domains that you trust to download and execute on your machine. Please exercise discretion, and caution until the feature is flagged as stable.
To opt-in, add the allowed URL prefixes inside `next.config.js`:
next.config.js
```
module.exports= {
 experimental: {
  urlImports: ['https://example.com/assets/','https://cdn.skypack.dev'],
 },
}
```

Then, you can import modules directly from URLs:
```
import { a, b, c } from'https://example.com/assets/some/module.js'
```

URL Imports can be used everywhere normal package imports can be used.
## Security Model
This feature is being designed with **security as the top priority**. To start, we added an experimental flag forcing you to explicitly allow the domains you accept URL imports from. We're working to take this further by limiting URL imports to execute in the browser sandbox using the Edge Runtime.
## Lockfile
When using URL imports, Next.js will create a `next.lock` directory containing a lockfile and fetched assets. This directory **must be committed to Git** , not ignored by `.gitignore`.
  * When running `next dev`, Next.js will download and add all newly discovered URL Imports to your lockfile.
  * When running `next build`, Next.js will use only the lockfile to build the application for production.


Typically, no network requests are needed and any outdated lockfile will cause the build to fail. One exception is resources that respond with `Cache-Control: no-cache`. These resources will have a `no-cache` entry in the lockfile and will always be fetched from the network on each build.
## Examples
### Skypack
```
import confetti from'https://cdn.skypack.dev/canvas-confetti'
import { useEffect } from'react'
exportdefault () => {
useEffect(() => {
confetti()
 })
return <p>Hello</p>
}
```

### Static Image Imports
```
import Image from'next/image'
import logo from'https://example.com/assets/logo.png'
exportdefault () => (
 <div>
  <Imagesrc={logo} placeholder="blur" />
 </div>
)
```

### URLs in CSS
```
.className {
background:url('https://example.com/assets/hero.jpg');
}
```

### Asset Imports
```
constlogo=newURL('https://example.com/assets/file.txt',import.meta.url)
console.log(logo.pathname)
// prints "/_next/static/media/file.a9727b5d.txt"
```

Was this helpful?
supported.
Send
