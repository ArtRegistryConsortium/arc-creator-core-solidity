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
Building Your ApplicationData FetchinggetStaticPaths
# getStaticPaths
If a page has Dynamic Routes and uses `getStaticProps`, it needs to define a list of paths to be statically generated.
When you export a function called `getStaticPaths` (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by `getStaticPaths`.
pages/repo/[name].tsx
TypeScript
JavaScriptTypeScript
```
importtype {
 InferGetStaticPropsType,
 GetStaticProps,
 GetStaticPaths,
} from'next'
typeRepo= {
 name:string
 stargazers_count:number
}
exportconstgetStaticPaths= (async () => {
return {
  paths: [
   {
    params: {
     name:'next.js',
    },
   },// See the "paths" section below
  ],
  fallback:true,// false or "blocking"
 }
}) satisfiesGetStaticPaths
exportconstgetStaticProps= (async (context) => {
constres=awaitfetch('https://api.github.com/repos/vercel/next.js')
constrepo=awaitres.json()
return { props: { repo } }
}) satisfiesGetStaticProps<{
repo:Repo
}>
exportdefaultfunctionPage({
repo,
}:InferGetStaticPropsType<typeof getStaticProps>) {
returnrepo.stargazers_count
}
```

The `getStaticPaths` API reference covers all parameters and props that can be used with `getStaticPaths`.
## When should I use getStaticPaths?
You should use `getStaticPaths` if you’re statically pre-rendering pages that use dynamic routes and:
  * The data comes from a headless CMS
  * The data comes from a database
  * The data comes from the filesystem
  * The data can be publicly cached (not user-specific)
  * The page must be pre-rendered (for SEO) and be very fast — `getStaticProps` generates `HTML` and `JSON` files, both of which can be cached by a CDN for performance


## When does getStaticPaths run
`getStaticPaths` will only run during build in production, it will not be called during runtime. You can validate code written inside `getStaticPaths` is removed from the client-side bundle with this tool.
### How does getStaticProps run with regards to getStaticPaths
  * `getStaticProps` runs during `next build` for any `paths` returned during build
  * `getStaticProps` runs in the background when using `fallback: true`
  * `getStaticProps` is called before initial render when using `fallback: blocking`


## Where can I use getStaticPaths
  * `getStaticPaths` **must** be used with `getStaticProps`
  * You **cannot** use `getStaticPaths` with `getServerSideProps`
  * You can export `getStaticPaths` from a Dynamic Route that also uses `getStaticProps`
  * You **cannot** export `getStaticPaths` from non-page file (e.g. your `components` folder)
  * You must export `getStaticPaths` as a standalone function, and not a property of the page component


## Runs on every request in development
In development (`next dev`), `getStaticPaths` will be called on every request.
## Generating paths on-demand
`getStaticPaths` allows you to control which pages are generated during the build instead of on-demand with `fallback`. Generating more pages during a build will cause slower builds.
You can defer generating all pages on-demand by returning an empty array for `paths`. This can be especially helpful when deploying your Next.js application to multiple environments. For example, you can have faster builds by generating all pages on-demand for previews (but not production builds). This is helpful for sites with hundreds/thousands of static pages.
pages/posts/[id].js
```
exportasyncfunctiongetStaticPaths() {
// When this is true (in preview environments) don't
// prerender any static pages
// (faster builds, but slower initial page load)
if (process.env.SKIP_BUILD_STATIC_GENERATION) {
return {
   paths: [],
   fallback:'blocking',
  }
 }
// Call an external API endpoint to get posts
constres=awaitfetch('https://.../posts')
constposts=awaitres.json()
// Get the paths we want to prerender based on posts
// In production environments, prerender all pages
// (slower builds, but faster initial page load)
constpaths=posts.map((post) => ({
  params: { id:post.id },
 }))
// { fallback: false } means other routes should 404
return { paths, fallback:false }
}
```

Was this helpful?
supported.
Send
