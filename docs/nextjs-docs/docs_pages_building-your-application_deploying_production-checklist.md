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
Building Your ApplicationDeployingProduction Checklist
# Production Checklist
Before taking your Next.js application to production, there are some optimizations and patterns you should consider implementing for the best user experience, performance, and security.
This page provides best practices that you can use as a reference when building your application, before going to production, and after deployment - as well as the automatic Next.js optimizations you should be aware of.
## Automatic optimizations
These Next.js optimizations are enabled by default and require no configuration:
  * **Code-splitting:** Next.js automatically code-splits your application code by pages. This means only the code needed for the current page is loaded on navigation. You may also consider lazy loading third-party libraries, where appropriate.
  * **Prefetching:** When a link to a new route enters the user's viewport, Next.js prefetches the route in background. This makes navigation to new routes almost instant. You can opt out of prefetching, where appropriate.
  * **Automatic Static Optimization:** Next.js automatically determines that a page is static (can be pre-rendered) if it has no blocking data requirements. Optimized pages can be cached, and served to the end-user from multiple CDN locations. You may opt into Server-side Rendering, where appropriate.


These defaults aim to improve your application's performance, and reduce the cost and amount of data transferred on each network request.
## During development
While building your application, we recommend using the following features to ensure the best performance and user experience:
### Routing and rendering
  * **`<Link>`component:** Use the `<Link>` component for client-side navigation and prefetching.
  * **Custom Errors:** Gracefully handle 500 and 404 errors


### Data fetching and caching
  * **API Routes:** Use Route Handlers to access your backend resources, and prevent sensitive secrets from being exposed to the client.
  * **Data Caching:** Verify whether your data requests are being cached or not, and opt into caching, where appropriate. Ensure requests that don't use `getStaticProps` are cached where appropriate.
  * **Incremental Static Regeneration:** Use Incremental Static Regeneration to update static pages after they've been built, without rebuilding your entire site.
  * **Static Images:** Use the `public` directory to automatically cache your application's static assets, e.g. images.


### UI and accessibility
  * **Font Module:** Optimize fonts by using the Font Module, which automatically hosts your font files with other static assets, removes external network requests, and reduces layout shift.
  * **`<Image>`Component:** Optimize images by using the Image Component, which automatically optimizes images, prevents layout shift, and serves them in modern formats like WebP.
  * **`<Script>`Component:** Optimize third-party scripts by using the Script Component, which automatically defers scripts and prevents them from blocking the main thread.
  * **ESLint:** Use the built-in `eslint-plugin-jsx-a11y` plugin to catch accessibility issues early.


### Security
  * **Environment Variables:** Ensure your `.env.*` files are added to `.gitignore` and only public variables are prefixed with `NEXT_PUBLIC_`.
  * **Content Security Policy:** Consider adding a Content Security Policy to protect your application against various security threats such as cross-site scripting, clickjacking, and other code injection attacks.


### Metadata and SEO
  * **`<Head>`Component:** Use the `next/head` component to add page titles, descriptions, and more.


### Type safety
  * **TypeScript andTS Plugin:** Use TypeScript and the TypeScript plugin for better type-safety, and to help you catch errors early.


## Before going to production
Before going to production, you can run `next build` to build your application locally and catch any build errors, then run `next start` to measure the performance of your application in a production-like environment.
### Core Web Vitals
  * **Lighthouse:** Run lighthouse in incognito to gain a better understanding of how your users will experience your site, and to identify areas for improvement. This is a simulated test and should be paired with looking at field data (such as Core Web Vitals).


### Analyzing bundles
Use the `@next/bundle-analyzer` plugin to analyze the size of your JavaScript bundles and identify large modules and dependencies that might be impacting your application's performance.
Additionally, the following tools can help you understand the impact of adding new dependencies to your application:
  * Import Cost
  * Package Phobia
  * Bundle Phobia
  * bundlejs


## After deployment
Depending on where you deploy your application, you might have access to additional tools and integrations to help you monitor and improve your application's performance.
For Vercel deployments, we recommend the following:
  * **Analytics:** A built-in analytics dashboard to help you understand your application's traffic, including the number of unique visitors, page views, and more.
  * **Speed Insights:** Real-world performance insights based on visitor data, offering a practical view of how your website is performing in the field.
  * **Logging:** Runtime and Activity logs to help you debug issues and monitor your application in production. Alternatively, see the integrations page for a list of third-party tools and services.


> **Good to know:**
> To get a comprehensive understanding of the best practices for production deployments on Vercel, including detailed strategies for improving website performance, refer to the Vercel Production Checklist.
Following these recommendations will help you build a faster, more reliable, and secure application for your users.
Was this helpful?
supported.
Send
