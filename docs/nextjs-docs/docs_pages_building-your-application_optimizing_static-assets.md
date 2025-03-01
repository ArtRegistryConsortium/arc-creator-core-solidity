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
Building Your ApplicationOptimizingStatic Assets
# Static Assets
Next.js can serve static files, like images, under a folder called `public` in the root directory. Files inside `public` can then be referenced by your code starting from the base URL (`/`).
For example, the file `public/avatars/me.png` can be viewed by visiting the `/avatars/me.png` path. The code to display that image might look like:
avatar.js
```
import Image from'next/image'
exportfunctionAvatar({ id, alt }) {
return <Imagesrc={`/avatars/${id}.png`} alt={alt} width="64"height="64" />
}
exportfunctionAvatarOfMe() {
return <Avatarid="me"alt="A portrait of me" />
}
```

## Caching
Next.js cannot safely cache assets in the `public` folder because they may change. The default caching headers applied are:
```
Cache-Control: public, max-age=0
```

## Robots, Favicons, and others
The folder is also useful for `robots.txt`, `favicon.ico`, Google Site Verification, and any other static files (including `.html`). But make sure to not have a static file with the same name as a file in the `pages/` directory, as this will result in an error. Read more.
> Good to know:
>   * The directory must be named `public`. The name cannot be changed and it's the only directory used to serve static assets.
>   * Only assets that are in the `public` directory at build time will be served by Next.js. Files added at request time won't be available. We recommend using a third-party service like Vercel Blob for persistent file storage.
> 

Was this helpful?
supported.
Send
