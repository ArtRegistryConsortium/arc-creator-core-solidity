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
API ReferenceFunctionsgetServerSideProps
# getServerSideProps
When exporting a function called `getServerSideProps` (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by `getServerSideProps`. This is useful if you want to fetch data that changes often, and have the page update to show the most current data.
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
importtype { InferGetServerSidePropsType, GetServerSideProps } from'next'
typeRepo= {
 name:string
 stargazers_count:number
}
exportconstgetServerSideProps= (async () => {
// Fetch data from external API
constres=awaitfetch('https://api.github.com/repos/vercel/next.js')
constrepo:Repo=awaitres.json()
// Pass data to the page via props
return { props: { repo } }
}) satisfiesGetServerSideProps<{ repo:Repo }>
exportdefaultfunctionPage({
 repo,
}:InferGetServerSidePropsType<typeof getServerSideProps>) {
return (
  <main>
   <p>{repo.stargazers_count}</p>
  </main>
 )
}
```

You can import modules in top-level scope for use in `getServerSideProps`. Imports used will **not be bundled for the client-side**. This means you can write **server-side code directly in`getServerSideProps`** , including fetching data from your database.
## Context parameter
The `context` parameter is an object containing the following keys:
Name| Description  
---|---  
`params`| If this page uses a dynamic route, `params` contains the route parameters. If the page name is `[id].js`, then `params` will look like `{ id: ... }`.  
`req`| The `HTTP` IncomingMessage object, with an additional `cookies` prop, which is an object with string keys mapping to string values of cookies.  
`res`| The `HTTP` response object.  
`query`| An object representing the query string, including dynamic route parameters.  
`preview`| (Deprecated for `draftMode`) `preview` is `true` if the page is in the Preview Mode and `false` otherwise.  
`previewData`| (Deprecated for `draftMode`) The preview data set by `setPreviewData`.  
`draftMode`| `draftMode` is `true` if the page is in the Draft Mode and `false` otherwise.  
`resolvedUrl`| A normalized version of the request `URL` that strips the `_next/data` prefix for client transitions and includes original query values.  
`locale`| Contains the active locale (if enabled).  
`locales`| Contains all supported locales (if enabled).  
`defaultLocale`| Contains the configured default locale (if enabled).  
## getServerSideProps return values
The `getServerSideProps` function should return an object with **any one of the following** properties:
### `props`
The `props` object is a key-value pair, where each value is received by the page component. It should be a serializable object so that any props passed, could be serialized with `JSON.stringify`.
```
exportasyncfunctiongetServerSideProps(context) {
return {
  props: { message:`Next.js is awesome` },// will be passed to the page component as props
 }
}
```

### `notFound`
The `notFound` boolean allows the page to return a `404` status and 404 Page. With `notFound: true`, the page will return a `404` even if there was a successfully generated page before. This is meant to support use cases like user-generated content getting removed by its author.
```
exportasyncfunctiongetServerSideProps(context) {
constres=awaitfetch(`https://.../data`)
constdata=awaitres.json()
if (!data) {
return {
   notFound:true,
  }
 }
return {
  props: { data },// will be passed to the page component as props
 }
}
```

### `redirect`
The `redirect` object allows redirecting to internal and external resources. It should match the shape of `{ destination: string, permanent: boolean }`. In some rare cases, you might need to assign a custom status code for older `HTTP` clients to properly redirect. In these cases, you can use the `statusCode` property instead of the `permanent` property, but not both.
```
exportasyncfunctiongetServerSideProps(context) {
constres=awaitfetch(`https://.../data`)
constdata=awaitres.json()
if (!data) {
return {
   redirect: {
    destination:'/',
    permanent:false,
   },
  }
 }
return {
  props: {},// will be passed to the page component as props
 }
}
```

## Version History
Version| Changes  
---|---  
`v13.4.0`| App Router is now stable with simplified data fetching  
`v10.0.0`| `locale`, `locales`, `defaultLocale`, and `notFound` options added.  
`v9.3.0`| `getServerSideProps` introduced.  
Was this helpful?
supported.
Send
