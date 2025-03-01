Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
API ReferenceFunctionsuseParams
# useParams
`useParams` is a **Client Component** hook that lets you read a route's dynamic params filled in by the current URL.
app/example-client-component.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useParams } from'next/navigation'
exportdefaultfunctionExampleClientComponent() {
constparams=useParams<{ tag:string; item:string }>()
// Route -> /shop/[tag]/[item]
// URL -> /shop/shoes/nike-air-max-97
// `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
console.log(params)
return'...'
}
```

## Parameters
```
constparams=useParams()
```

`useParams` does not take any parameters.
## Returns
`useParams` returns an object containing the current route's filled in dynamic parameters.
  * Each property in the object is an active dynamic segment.
  * The properties name is the segment's name, and the properties value is what the segment is filled in with.
  * The properties value will either be a `string` or array of `string`'s depending on the type of dynamic segment.
  * If the route contains no dynamic parameters, `useParams` returns an empty object.
  * If used in Pages Router, `useParams` will return `null` on the initial render and updates with properties following the rules above once the router is ready.


For example:
Route| URL| `useParams()`  
---|---|---  
`app/shop/page.js`| `/shop`| `{}`  
`app/shop/[slug]/page.js`| `/shop/1`| `{ slug: '1' }`  
`app/shop/[tag]/[item]/page.js`| `/shop/1/2`| `{ tag: '1', item: '2' }`  
`app/shop/[...slug]/page.js`| `/shop/1/2`| `{ slug: ['1', '2'] }`  
## Version History
Version| Changes  
---|---  
`v13.3.0`| `useParams` introduced.  
Was this helpful?
supported.
Send
