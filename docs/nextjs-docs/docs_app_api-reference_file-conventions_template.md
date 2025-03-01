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
API ReferenceFile Conventionstemplate.js
# template.js
A **template** file is similar to a layout in that it wraps a layout or page. Unlike layouts that persist across routes and maintain state, templates are given a unique key, meaning children Client Components reset their state on navigation.
app/template.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionTemplate({ children }: { children:React.ReactNode }) {
return <div>{children}</div>
}
```

![template.js special file](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ftemplate-special-file.png&w=3840&q=75)![template.js special file](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ftemplate-special-file.png&w=3840&q=75)
While less common, you might choose to use a template over a layout if you want:
  * Features that rely on `useEffect` (e.g logging page views) and `useState` (e.g a per-page feedback form).
  * To change the default framework behavior. For example, Suspense Boundaries inside layouts only show the fallback the first time the Layout is loaded and not when switching pages. For templates, the fallback is shown on each navigation.


## Props
### `children` (required)
Template accepts a `children` prop. For example:
Output
```
<Layout>
 {/* Note that the template is automatically given a unique key. */}
 <Templatekey={routeParam}>{children}</Template>
</Layout>
```

> **Good to know** :
>   * By default, `template` is a Server Component, but can also be used as a Client Component through the `"use client"` directive.
>   * When a user navigates between routes that share a `template`, a new instance of the component is mounted, DOM elements are recreated, state is **not** preserved in Client Components, and effects are re-synchronized.
> 

## Version History
Version| Changes  
---|---  
`v13.0.0`| `template` introduced.  
Was this helpful?
supported.
Send
