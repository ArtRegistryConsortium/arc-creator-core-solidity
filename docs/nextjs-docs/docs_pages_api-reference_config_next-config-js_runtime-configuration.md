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
Configurationnext.config.js OptionsRuntime Config
# Runtime Config
> **Warning:**
>   * **This feature is deprecated.** We recommend using environment variables instead, which also can support reading runtime values.
>   * You can run code on server startup using the `register` function.
>   * This feature does not work with Automatic Static Optimization, Output File Tracing, or React Server Components.
> 

To add runtime configuration to your app, open `next.config.js` and add the `publicRuntimeConfig` and `serverRuntimeConfig` configs:
next.config.js
```
module.exports= {
 serverRuntimeConfig: {
// Will only be available on the server side
  mySecret:'secret',
  secondSecret:process.env.SECOND_SECRET,// Pass through env variables
 },
 publicRuntimeConfig: {
// Will be available on both server and client
  staticFolder:'/static',
 },
}
```

Place any server-only runtime config under `serverRuntimeConfig`.
Anything accessible to both client and server-side code should be under `publicRuntimeConfig`.
> A page that relies on `publicRuntimeConfig` **must** use `getInitialProps` or `getServerSideProps` or your application must have a Custom App with `getInitialProps` to opt-out of Automatic Static Optimization. Runtime configuration won't be available to any page (or component in a page) without being server-side rendered.
To get access to the runtime configs in your app use `next/config`, like so:
```
import getConfig from'next/config'
import Image from'next/image'
// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig,publicRuntimeConfig } =getConfig()
// Will only be available on the server-side
console.log(serverRuntimeConfig.mySecret)
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder)
functionMyImage() {
return (
  <div>
   <Image
src={`${publicRuntimeConfig.staticFolder}/logo.png`}
alt="logo"
layout="fill"
   />
  </div>
 )
}
exportdefault MyImage
```

Was this helpful?
supported.
Send
