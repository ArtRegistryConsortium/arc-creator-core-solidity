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
API ReferenceDirectivesuse client
# use client
The `use client` directive designates a component to be rendered on the **client side** and should be used when creating interactive user interfaces (UI) that require client-side JavaScript capabilities, such as state management, event handling, and access to browser APIs. This is a React feature.
## Usage
To designate a component as a Client Component, add the `use client` directive **at the top of the file** , before any imports:
app/components/counter.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useState } from'react'
exportdefaultfunctionCounter() {
const [count,setCount] =useState(0)
return (
  <div>
   <p>Count: {count}</p>
   <buttononClick={() =>setCount(count +1)}>Increment</button>
  </div>
 )
}
```

## Nesting Client Components within Server Components
Combining Server and Client Components allows you to build applications that are both performant and interactive:
  1. **Server Components** : Use for static content, data fetching, and SEO-friendly elements.
  2. **Client Components** : Use for interactive elements that require state, effects, or browser APIs.
  3. **Component composition** : Nest Client Components within Server Components as needed for a clear separation of server and client logic.


In the following example:
  * `Header` is a Server Component handling static content.
  * `Counter` is a Client Component enabling interactivity within the page.


app/page.tsx
TypeScript
JavaScriptTypeScript
```
import Header from'./header'
import Counter from'./counter'// This is a Client Component
exportdefaultfunctionPage() {
return (
  <div>
   <Header />
   <Counter />
  </div>
 )
}
```

## Reference
See the React documentation for more information on `use client`.
Was this helpful?
supported.
Send
