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
IntroductionApp Router
# App Router
The Next.js App Router introduces a new model for building applications using React's latest features such as Server Components, Streaming with Suspense, and Server Actions.
Get started with the App Router by creating your first page.
## Frequently Asked Questions
### How can I access the request object in a layout?
You intentionally cannot access the raw request object. However, you can access `headers` and `cookies` through server-only functions. You can also set cookies.
Layouts do not rerender. They can be cached and reused to avoid unnecessary computation when navigating between pages. By restricting layouts from accessing the raw request, Next.js can prevent the execution of potentially slow or expensive user code within the layout, which could negatively impact performance.
This design also enforces consistent and predictable behavior for layouts across different pages, which simplifies development and debugging.
Depending on the UI pattern you're building, Parallel Routes allow you to render multiple pages in the same layout, and pages have access to the route segments as well as the URL search params.
### How can I access the URL on a page?
By default, pages are Server Components. You can access the route segments through the `params` prop and the URL search params through the `searchParams` prop for a given page.
If you are using Client Components, you can use `usePathname`, `useSelectedLayoutSegment`, and `useSelectedLayoutSegments` for more complex routes.
Further, depending on the UI pattern you're building, Parallel Routes allow you to render multiple pages in the same layout, and pages have access to the route segments as well as the URL search params.
### How can I redirect from a Server Component?
You can use `redirect` to redirect from a page to a relative or absolute URL. `redirect` is a temporary (307) redirect, while `permanentRedirect` is a permanent (308) redirect. When these functions are used while streaming UI, they will insert a meta tag to emit the redirect on the client side.
### How can I handle authentication with the App Router?
Here are some common authentication solutions that support the App Router:
  * NextAuth.js
  * Clerk
  * Stack Auth
  * Auth0
  * Stytch
  * Kinde
  * WorkOS
  * Or manually handling sessions or JWTs


### How can I set cookies?
You can set cookies in Server Actions or Route Handlers using the `cookies` function.
Since HTTP does not allow setting cookies after streaming starts, you cannot set cookies from a page or layout directly. You can also set cookies from Middleware.
### How can I build multi-tenant apps?
If you are looking to build a single Next.js application that serves multiple tenants, we have built an example showing our recommended architecture.
### How can I invalidate the App Router cache?
There are multiple layers of caching in Next.js, and thus, multiple ways to invalidate different parts of the cache. Learn more about caching.
### Are there any comprehensive, open-source applications built on the App Router?
Yes. You can view Next.js Commerce or the Platforms Starter Kit for two larger examples of using the App Router that are open-source.
## Learn More
  * Routing Fundamentals
  * Data Fetching and Caching
  * Incremental Static Regeneration
  * Forms and Mutations
  * Caching
  * Rendering Fundamentals
  * Server Components
  * Client Components


### Getting Started
Learn how to create full-stack web applications with the Next.js App Router.
### Examples
Learn how to implement common UI patterns and use cases using Next.js
### Building Your Application
Learn how to use Next.js features to build your application.
### API Reference
Next.js API Reference for the App Router.
Was this helpful?
supported.
Send
