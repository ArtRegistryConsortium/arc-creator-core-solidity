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
API ReferenceFunctionsnotFound
# notFound
The `notFound` function allows you to render the `not-found file` within a route segment as well as inject a `<meta name="robots" content="noindex" />` tag.
## `notFound()`
Invoking the `notFound()` function throws a `NEXT_NOT_FOUND` error and terminates rendering of the route segment in which it was thrown. Specifying a **not-found** file allows you to gracefully handle such errors by rendering a Not Found UI within the segment.
app/user/[id]/page.js
```
import { notFound } from'next/navigation'
asyncfunctionfetchUser(id) {
constres=awaitfetch('https://...')
if (!res.ok) returnundefined
returnres.json()
}
exportdefaultasyncfunctionProfile({ params }) {
constuser=awaitfetchUser((await params).id)
if (!user) {
notFound()
 }
// ...
}
```

> **Good to know** : `notFound()` does not require you to use `return notFound()` due to using the TypeScript `never` type.
## Version History
Version| Changes  
---|---  
`v13.0.0`| `notFound` introduced.  
Was this helpful?
supported.
Send
