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
API ReferenceFile Conventionsmdx-components.js
# mdx-components.js
The `mdx-components.js|tsx` file is **required** to use `@next/mdx` with App Router and will not work without it. Additionally, you can use it to customize styles.
Use the file `mdx-components.tsx` (or `.js`) in the root of your project to define MDX Components. For example, at the same level as `pages` or `app`, or inside `src` if applicable.
mdx-components.tsx
TypeScript
JavaScriptTypeScript
```
importtype { MDXComponents } from'mdx/types'
exportfunctionuseMDXComponents(components:MDXComponents):MDXComponents {
return {
...components,
 }
}
```

## Exports
### `useMDXComponents` function
The file must export a single function, either as a default export or named `useMDXComponents`.
mdx-components.tsx
TypeScript
JavaScriptTypeScript
```
importtype { MDXComponents } from'mdx/types'
exportfunctionuseMDXComponents(components:MDXComponents):MDXComponents {
return {
...components,
 }
}
```

## Params
### `components`
When defining MDX Components, the export function accepts a single parameter, `components`. This parameter is an instance of `MDXComponents`.
  * The key is the name of the HTML element to override.
  * The value is the component to render instead.


> **Good to know** : Remember to pass all other components (i.e. `...components`) that do not have overrides.
## Version History
Version| Changes  
---|---  
`v13.1.2`| MDX Components added  
## Learn more about MDX Components
### MDX
Learn how to configure MDX and use it in your Next.js apps.
Was this helpful?
supported.
Send
