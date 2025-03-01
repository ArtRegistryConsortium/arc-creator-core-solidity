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
Building Your ApplicationRenderingClient Components
# Client Components
Client Components allow you to write interactive UI that is prerendered on the server and can use client JavaScript to run in the browser.
This page will go through how Client Components work, how they're rendered, and when you might use them.
## Benefits of Client Rendering
There are a couple of benefits to doing the rendering work on the client, including:
  * **Interactivity** : Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
  * **Browser APIs** : Client Components have access to browser APIs, like geolocation or localStorage.


## Using Client Components in Next.js
To use Client Components, you can add the React `"use client"` directive at the top of a file, above your imports.
`"use client"` is used to declare a boundary between a Server and Client Component modules. This means that by defining a `"use client"` in a file, all other modules imported into it, including child components, are considered part of the client bundle.
app/counter.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useState } from'react'
exportdefaultfunctionCounter() {
const [count,setCount] =useState(0)
return (
  <div>
   <p>You clicked {count} times</p>
   <buttononClick={() =>setCount(count +1)}>Click me</button>
  </div>
 )
}
```

The diagram below shows that using `onClick` and `useState` in a nested component (`toggle.js`) will cause an error if the `"use client"` directive is not defined. This is because, by default, all components in the App Router are Server Components where these APIs are not available. By defining the `"use client"` directive in `toggle.js`, you can tell React to enter the client boundary where these APIs are available.
![Use Client Directive and Network Boundary](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fuse-client-directive.png&w=3840&q=75)![Use Client Directive and Network Boundary](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fuse-client-directive.png&w=3840&q=75)
> **Defining multiple`use client` entry points**:
> You can define multiple "use client" entry points in your React Component tree. This allows you to split your application into multiple client bundles.
> However, `"use client"` doesn't need to be defined in every component that needs to be rendered on the client. Once you define the boundary, all child components and modules imported into it are considered part of the client bundle.
## How are Client Components Rendered?
In Next.js, Client Components are rendered differently depending on whether the request is part of a full page load (an initial visit to your application or a page reload triggered by a browser refresh) or a subsequent navigation.
### Full page load
To optimize the initial page load, Next.js will use React's APIs to render a static HTML preview on the server for both Client and Server Components. This means, when the user first visits your application, they will see the content of the page immediately, without having to wait for the client to download, parse, and execute the Client Component JavaScript bundle.
On the server:
  1. React renders Server Components into a special data format called the **React Server Component Payload (RSC Payload)**, which includes references to Client Components.
  2. Next.js uses the RSC Payload and Client Component JavaScript instructions to render **HTML** for the route on the server.


Then, on the client:
  1. The HTML is used to immediately show a fast non-interactive initial preview of the route.
  2. The React Server Components Payload is used to reconcile the Client and Server Component trees, and update the DOM.
  3. The JavaScript instructions are used to hydrate Client Components and make their UI interactive.


> **What is hydration?**
> Hydration is the process of attaching event listeners to the DOM, to make the static HTML interactive. Behind the scenes, hydration is done with the `hydrateRoot` React API.
### Subsequent Navigations
On subsequent navigations, Client Components are rendered entirely on the client, without the server-rendered HTML.
This means the Client Component JavaScript bundle is downloaded and parsed. Once the bundle is ready, React will use the RSC Payload to reconcile the Client and Server Component trees, and update the DOM.
## Going back to the Server Environment
Sometimes, after you've declared the `"use client"` boundary, you may want to go back to the server environment. For example, you may want to reduce the client bundle size, fetch data on the server, or use an API that is only available on the server.
You can keep code on the server even though it's theoretically nested inside Client Components by interleaving Client and Server Components and Server Actions. See the Composition Patterns page for more information.
Was this helpful?
supported.
Send
