# The latest Next.js news
January 3rd, 2025
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flee.jpg&w=48&q=75)
Composable Caching with Next.js
We’re working on a simple and powerful caching model for Next.js. In a previous post, we talked about our journey with caching and how we’ve arrived at the `'use cache'` directive.
Read More
December 10th, 2024
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjanka.png&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjiachi.png&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fsebbie.png&w=48&q=75)
Next.js 15.1
Next.js 15.1 introduces core upgrades, new APIs, and improvements to the developer experience including:
  * React 19 (stable)
  * Improved Error Debugging
  * `after` (stable)
  * `forbidden` / `unauthorized` (experimental)


Read More
October 24th, 2024
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fseb.jpg&w=48&q=75)
Our Journey with Caching
Frontend performance can be hard to get right. Even in highly optimized apps, the most common culprit by far is client-server waterfalls. When introducing Next.js App Router, we knew we wanted to solve this issue. To do that, we needed to move client-server REST fetches to the server using React Server Components in a single roundtrip. This meant the server had to sometimes be dynamic, sacrificing the great initial loading performance of Jamstack. We built partial prerendering to solve this tradeoff and have the best of both worlds.
Read More
October 21st, 2024
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjimmy.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Frich.jpg&w=48&q=75)
Next.js 15
Our mission to create the best developer experience continues with Next.js 15, featuring:
  * `@next/codemod` CLI
  * Async Request APIs (Breaking)
  * Caching Semantics (Breaking)
  * React 19
  * Turbopack Dev
  * Static Indicator
  * unstable_after (Experimental)
  * `instrumentation.js` (Stable)
  * `next/form`
  * TypeScript Support for `next.config`
  * Self-hosting
  * Server Actions Security
  * Bundling external packages (Stable)
  * ESLint 9 support
  * Development and Build Performance


Read More
October 21st, 2024
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fmaia.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fsokra.jpg&w=48&q=75)
Turbopack Dev is Now Stable
It's been a long road, but we are happy to announce that `next dev --turbo` is now stable and ready to speed up your development experience.
Read More
October 15th, 2024
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjiachi.png&w=48&q=75)
+3![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjiwon.png&w=48&q=75)
Next.js 15 RC 2
The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release.
  * Turbopack (dev)
  * Async Request APIs (breaking)
  * `next/form`
  * Self-hosting
  * ESLint 9 support


Read More
May 23rd, 2024
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fzack.jpg&w=48&q=75)
Next.js 15 RC
The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release.
  * React RC
  * Caching defaults changes
  * Incremental Partial Prerendering adoption
  * next/after (Experimental)
  * New create-next-app design
  * Bundling external packages (Stable)


Read More
April 11th, 2024
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 14.2
Next.js 14.2 includes development, production, and caching improvements.
  * Turbopack (Release Candidate)
  * Caching Improvements
  * Build and Production Improvements
  * Errors DX Improvements


Read More
January 18th, 2024
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjiachi.png&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjimmy.jpg&w=48&q=75)
Next.js 14.1
Next.js 14.1 includes developer experience improvements including:
  * Improved Self-Hosting
  * Turbopack Improvements
  * DX Improvements
  * Parallel & Intercepted Routes
  * `next/image` Improvements


Read More
October 26th, 2023
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flee.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 14
As we announced at Next.js Conf, Next.js 14 is our most focused release with:
  * Turbopack
    * **53% faster** local server startup
    * **94% faster** code updates
  * Server Actions (Stable)
  * Partial Prerendering (Preview)
  * Next.js Learn (New)


Read More
October 23rd, 2023
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fseb.jpg&w=48&q=75)
How to Think About Security in Next.js
React Server Components (RSC) in App Router is a novel paradigm that eliminates much of the redundancy and potential risks linked with conventional methods. Given the newness, developers and subsequently security teams may find it challenging to align their existing security protocols with this model.
Read More
September 19th, 2023
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjimmy.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fsokra.jpg&w=48&q=75)
Next.js 13.5
Next.js 13.5 improves local dev performance and reliability with:
  * 22% faster local server startup
  * 29% faster HMR (Fast Refresh)
  * 40% less memory usage
  * Optimized Package Imports
  * `next/image` Improvements
  * And over 438 bugs patched!


Read More
June 22nd, 2023
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flee.jpg&w=48&q=75)
Next.js App Router Update
For the next release (and coming months) we're focused on the following areas:
  * **Performance**
  * **Stability**
  * **Developer Experience**


Read More
May 4th, 2023
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fseb.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 13.4
Next.js 13.4 is a foundational release, marking stability for the App Router:
  * App Router (Stable)
  * Turbopack (Beta)
  * Server Actions (Alpha)


Read More
April 6th, 2023
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 13.3
Next.js 13.3 adds popular community-requested features and is the last release before the App Router is stable, including:
  * File-Based Metadata API
  * Dynamic Open Graph Images
  * Static Export for App Router
  * Parallel Routes and Interception


Read More
February 23rd, 2023
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fcasey.png&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjimmy.jpg&w=48&q=75)
+1![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fluba.png&w=48&q=75)
Next.js 13.2
Next.js 13.2 includes major improvements to the App Router (`app`) in preparation for stability:
  * Built-in SEO Support
  * Route Handlers
  * MDX for Server Components
  * Rust MDX Parser
  * Improved Error Overlay
  * Statically Typed Links (Beta)
  * Turbopack Improvements (Alpha)
  * Next.js Cache (Beta)


Read More
December 22nd, 2022
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Foj.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 13.1
Next.js 13.1 includes improvements to both the `pages` and `app` directories:
  * `app` Directory (Beta) Improvements
  * Built-in Module Transpilation
  * Edge Runtime (Stable)
  * Turbopack Updates
  * Middleware Improvements
  * SWC Import Resolution


Read More
October 25th, 2022
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fbalazs.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&w=48&q=75)
+8![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fkdy.jpg&w=48&q=75)
Next.js 13
As we announced at Next.js Conf, Next.js 13 (stable) lays the foundations to be dynamic without limits:
  * `app/` Directory (beta)
    * Layouts
    * React Server Components
    * Streaming
  * Turbopack (alpha)
  * New `next/image` (stable)
  * New `@next/font` (beta)
  * Improved `next/link`


Read More
September 8th, 2022
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fbalazs.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fkdy.jpg&w=48&q=75)
+5![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjiachi.png&w=48&q=75)
Next.js 12.3
We've shipped some quality-of-life improvements to Next.js with 12.3:
  * Improved Fast Refresh
  * TypeScript Auto-Install
  * Image Component
  * SWC Minifier
  * New Router + Layouts Update


Read More
June 28th, 2022
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fbalazs.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fkdy.jpg&w=48&q=75)
+8![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjavi.jpg&w=48&q=75)
Next.js 12.2
We're laying the foundation for the future of Next.js with 12.2:
  * Middleware (Stable)
  * On-Demand ISR (Stable)
  * Edge API Routes (Experimental)
  * Edge SSR (Experimental)
  * SWC Plugins (Experimental)
  * Improvements to `next/image`


Read More
May 23rd, 2022
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flee.jpg&w=48&q=75)
+1![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fseb.jpg&w=48&q=75)
Layouts RFC
This RFC outlines the biggest update to Next.js since it was introduced in 2016:
  * **Nested Layouts:** Build complex applications with nested routes.
  * **Designed for Server Components:** Optimized for subtree navigation.
  * **Improved Data Fetching:** Fetch in layouts while avoiding waterfalls.
  * **Using React 18 Features:** Streaming, Transitions, and Suspense.
  * **Client and Server Routing:** Server-centric routing with _SPA-like_ behavior.
  * **100% incrementally adoptable** : No breaking changes so you can adopt gradually.
  * **Advanced Routing Conventions** : Offscreen stashing, instant transitions, and more.


Read More
February 17th, 2022
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fbalazs.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fkdy.jpg&w=48&q=75)
+9![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fgerald.jpg&w=48&q=75)
Next.js 12.1
We're excited to release one of our most requested features with Next.js 12.1:
  * On-demand ISR (Beta)
  * Expanded Support for SWC
  * `next/jest` Plugin
  * Faster Minification with SWC (RC)
  * Self-Hosting Improvements
  * React 18 & Server Components (Alpha)
  * Developer Survey


Read More
October 26th, 2021
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fconnor.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fkdy.jpg&w=48&q=75)
+9![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fgerald.jpg&w=48&q=75)
Next.js 12
As we announced at Next.js Conf, Next.js 12 is our biggest release ever:
  * Rust Compiler
  * Middleware (beta)
  * React 18 Support
  * `<Image />` AVIF Support
  * Bot-aware ISR Fallback
  * Native ES Modules Support
  * URL Imports (alpha)
  * React Server Components (alpha)


Read More
August 11th, 2021
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fkdy.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjiachi.png&w=48&q=75)
+5![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
Next.js 11.1
We're improving build performance across the entire stack with Next.js 11.1, featuring:
  * Security Patch
  * ES Modules Support
  * Rust-based Tooling
  * Faster Data Fetching
  * Faster Source Maps
  * ESLint Integration Improvements
  * `next/image` Improvements


Read More
June 15th, 2021
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fshu.jpg&w=48&q=75)
+1![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 11
Our mission to create the best developer experience continues with Next.js 11, featuring:
  * Conformance
  * Improved Performance
  * `next/script`
  * `next/image` Improvements
  * Webpack 5
  * Create React App Migration (Experimental)
  * Next.js Live (Preview Release)


Read More
April 28th, 2021
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fconnor.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
+2![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fshu.jpg&w=48&q=75)
Next.js 10.2
We are excited to introduce Next.js 10.2, featuring:
  * Faster Builds
  * Faster Refresh
  * Faster Startup
  * Improved Accessibility
  * More Flexible Redirects and Rewrites
  * Automatic Webfont Optimization


Read More
March 29th, 2021
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fbel.png&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
+5![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
Next.js 10.1
We are excited to introduce Next.js 10.1, featuring:
  * 3x Faster Refresh
  * Improved Installation Time
  * `next/image` Improvements
  * Next.js Commerce Shopify Integration
  * Custom 500 Page
  * Strict PostCSS Configuration Loading
  * Support for `extends` in `tsconfig.json`
  * Detect When Preview Mode Is Enabled
  * Router Methods Scroll to Top
  * Documentation Improvements


Read More
November 18th, 2020
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flee.jpg&w=48&q=75)
Incrementally Adopting Next.js
Next.js has been designed for gradual adoption. With Next.js, you can continue using your existing code and add as much (or as little) React as you need. By starting small and incrementally adding more pages, you can prevent derailing feature work by avoiding a complete rewrite.
Many companies need to modernize their tech stack to reduce costs, increase developer productivity, and provide the best experience for their customers. Component-driven development has greatly improved the deployment velocity and reusability of modern codebases.
And with over 8 million downloads/month, React is the leading component-driven choice for developers. Next.js, the React framework for production, enables you to incrementally adopt React.
Read More
October 27th, 2020
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fbel.png&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fconnor.jpg&w=48&q=75)
+5![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
Next.js 10
We are excited to introduce Next.js 10, featuring:
  * Built-in Image Component and Automatic Image Optimization
  * Internationalized Routing
  * Next.js Analytics
  * Next.js Commerce
  * React 17 Support
  * getStaticProps / getServerSideProps Fast Refresh
  * Fast Refresh for MDX
  * Importing CSS from Third Party React Components
  * Automatic Resolving of href
  * @next/codemod CLI
  * Blocking Fallback for getStaticPaths


Read More
July 27th, 2020
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fconnor.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
+3![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
Next.js 9.5
We are excited today to introduce Next.js 9.5, featuring:
  * Stable Incremental Static Regeneration
  * Customizable Base Path
  * Support for Rewrites, Redirects, and Headers
  * Optional Trailing Slash in URLs
  * Persistent Caching for Page Bundles
  * Fast Refresh Enhancements
  * Production React Profiling
  * Optional Catch All Routes
  * Webpack 5 Support (beta)


Read More
May 11th, 2020
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
+2![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flfades.jpg&w=48&q=75)
Next.js 9.4
We are excited today to introduce Next.js 9.4, featuring:
  * Fast Refresh
  * Incremental Static Regeneration (beta)
  * CMS Examples
  * New Environment Variables Support
  * Improved Built-in Fetch Support
  * Integrated Web Vitals Reporting
  * Absolute Imports and Aliases
  * Configurable Sass Support
  * Improved Log Output


Read More
March 9th, 2020
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
+2![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flfades.jpg&w=48&q=75)
Next.js 9.3
We are excited today to introduce Next.js 9.3, featuring:
  * Next-gen Static Site Generation (SSG) Support
  * Preview Mode
  * Built-In Sass Support for Global Stylesheets
  * Built-In Sass CSS Module Support for Component-Level Styles
  * Automatic Static Optimization for 404
  * 32 kB Smaller Runtime
  * Next.js Community on GitHub Discussions


Read More
January 15th, 2020
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
+1![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flfades.jpg&w=48&q=75)
Next.js 9.2
We are excited today to introduce the production-ready Next.js 9.2, featuring:
  * Built-In CSS Support for Global Stylesheets
  * Built-In CSS Module Support for Component-Level Styles
  * Improved Code-Splitting Strategy
  * Catch-All Dynamic Routes


Read More
January 9th, 2020
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
+1![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flfades.jpg&w=48&q=75)
New Next.js Documentation
We're excited to announce the new Next.js documentation, featuring:
  * Improved Content
  * Search
  * API Reference


Read More
January 6th, 2020
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
+1![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flfades.jpg&w=48&q=75)
Next.js 9.1.7
Next.js 9 was released six (6) months ago, followed by Next.js 9.1 three (3) months ago. These two releases added very powerful new features to Next.js, without increasing our baseline client runtime size.
Since then, we've focused heavily on refining and improving the framework as a whole: 9.1.1, 9.1.2, 9.1.3, 9.1.4, 9.1.5, 9.1.6, and 9.1.7.
Let's dive into what these releases have improved!
  * 3% – 8%+ Smaller Client-Side JavaScript Size
  * Redesigned Production Build CLI Output
  * New Built-In Polyfills: fetch(), URL, and Object.assign
  * Optimized Page Loading: Better FCP and TTI
  * Support for the Latest JavaScript Features
  * Zero-Config Deployment Support for `next export` Applications
  * React Strict Mode Compliance and Opt-In
  * Automated Testing against Nightly React Builds


Read More
October 9th, 2019
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Introducing Create Next App
We're delighted today to introduce the new Create Next App.
Create Next App sets up a modern React application powered by Next.js in one command.
Read More
October 7th, 2019
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
+1![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flfades.jpg&w=48&q=75)
Next.js 9.1
Today, we are excited to announce Next.js 9.1 with `src` and `public` directory support.
**New in This Release**
  * `src` Directory Support
  * `public` Directory Support


**Previewing in This Release**
  * Built-in CSS Support
  * Static Error Pages
  * Module / Nomodule
  * Improved Bundle Splitting


Read More
September 30th, 2019
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
+2![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Flfades.jpg&w=48&q=75)
Next.js 9.0.7
Next.js 9.0 was released approximately two months ago. Since then, we’ve been busy with 7 smaller but quite important releases: 9.0.1, 9.0.2, 9.0.3, 9.0.4, 9.0.5, 9.0.6, and 9.0.7.
Let’s dive into what these releases have brought to your websites and applications, with absolutely no breaking changes.
  * Improved Concurrency in Windows Environments
  * Gzip Compression by Default
  * TypeScript Report on Active Pages Only
  * Telemetry
  * Improved next/head Element Tracking
  * Preventing Non-Pages in the Pages Directory
  * Runtime Improvements


Read More
July 8th, 2019
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fconnor.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
+3![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
Next.js 9
Today, we're excited to announce Next.js 9 with TypeScript support, Dynamic Routing, API Routes, Automatic Static Optimization, and more!
  * Built-in Zero-Config TypeScript Support
  * File system-Based Dynamic Routing
  * Automatic Static Optimization
  * API Routes
  * More Production Optimizations
  * Improved DX


Read More
April 16th, 2019
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fconnor.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
+2![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
Next.js 8.1
Today, we're excited to announce we've extended the Next.js experience to authoring AMP pages.
  * What is AMP
  * AMP in Next.js
  * Hybrid AMP pages
  * AMP-first pages
  * AMP Validation


Read More
April 2nd, 2019
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fconnor.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fjj.jpg&w=48&q=75)
+2![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftimer.jpg&w=48&q=75)
Next.js 8.0.4
We are happy to introduce the production-ready Next.js 8.0.4:
  * Build performance improvements
  * Deterministic builds
  * Smaller client runtime
  * Smaller serverless functions
  * Default viewport tag
  * Learning guide improvements


Read More
March 28th, 2019
Styling Next.js with Styled JSX
Styled JSX is a CSS-in-JS library that allows you to write encapsulated and scoped CSS to style your components. The styles you introduce for one component won't affect other components, allowing you to add, change and delete styles without worrying about unintended side effects.
Read More
February 19th, 2019
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fconnor.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 8 Webpack Memory Improvements
Recently Next.js 8 was introduced. The release included a massive build-time memory usage reduction. This blog post will explore how we have helped optimize webpack for the community.
Read More
February 11th, 2019
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fconnor.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fshu.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 8
We are proud today to introduce the production-ready Next.js 8, featuring:
  * Serverless Next.js
  * Massive build-time memory usage reduction
  * Build-time environment configuration
  * Prefetch performance improvements
  * Smaller initial HTML size
  * Improved on-demand entries
  * Faster port listening in development
  * Faster Static Export
  * Head element deduplication
  * New crossOrigin config option
  * Removed inline Javascript
  * Example of API Authentication


Read More
September 19th, 2018
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fcollaborators%2Fgiuseppe.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Fshu.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 7
After 26 canary releases and 3.4 million downloads, we are proud to introduce the production-ready Next.js 7, featuring:
  * DX improvements: 57% faster bootup, 42% faster re-compilation
  * Better error reporting with react-error-overlay
  * Upgraded compilation pipeline: Webpack 4 and Babel 7
  * Standardized Dynamic Imports
  * Static CDN support
  * Smaller initial HTML payload
  * React Context with SSR between App and Pages


Read More
June 27th, 2018
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 6.1
We are proud today to introduce the production-ready **Next.js 6.1** , featuring:
  * Increased hot reloading reliability
  * Codebase improvements
  * Next.js codemods


Read More
May 16th, 2018
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Farunoda.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 6 and Nextjs.org
We are proud today to introduce the production-ready **Next.js 6** , featuring:
  * Zero-configuration static exports. No need for `next.config.js` by default
  * `_app.js`, an extension point that enables page transitions, error boundaries and more
  * Babel 7 and Fragment syntax `<>` support
  * Extended integration test suites with a strong focus on security
  * Flow annotations in the core codebase


Read More
March 26th, 2018
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Farunoda.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 5.1: Faster Page Resolution, Environment Config & More
We are happy to introduce Next.js 5.1, which features support for environment configuration, phases, source maps, and new Next.js plugins.
Read More
February 5th, 2018
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Farunoda.jpg&w=48&q=75)
![](https://nextjs.org/_next/image?url=%2Fstatic%2Fteam%2Ftim.jpg&w=48&q=75)
Next.js 5: Universal Webpack, CSS Imports, Plugins and Zones
We are very happy to introduce Next.js 5.0 to the world. It’s available on npm effective immediately.
Read More
