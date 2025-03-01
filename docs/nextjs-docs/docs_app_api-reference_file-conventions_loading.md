Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
API ReferenceFile Conventionsloading.js
# loading.js
A **loading** file can create instant loading states built on Suspense.
By default, this file is a Server Component - but can also be used as a Client Component through the `"use client"` directive.
app/feed/loading.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionLoading() {
// Or a custom loading skeleton component
return <p>Loading...</p>
}
```

Loading UI components do not accept any parameters.
> **Good to know** :
>   * While designing loading UI, you may find it helpful to use the React Developer Tools to manually toggle Suspense boundaries.
> 

## Version History
Version| Changes  
---|---  
`v13.0.0`| `loading` introduced.  
Was this helpful?
supported.
Send
