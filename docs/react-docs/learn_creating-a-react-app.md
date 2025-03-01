Learn React
Installation
# Creating a React App
If you want to build a new app or website with React, we recommend starting with a framework.
## Recommended React frameworks 
These recommended frameworks support all the features you need to deploy and scale your app in production. They have integrated the latest React features and take advantage of React’s architecture.
### Note
#### React frameworks do not require a server. 
All the frameworks on this page can create single-page apps. Single-page apps can be deployed to a CDN or static hosting service and do not need a server. If you would like to enable features that require a server (like server side rendering), you can opt-in on individual routes without rewriting your app.
### Next.js (App Router) 
**Next.js’s App Router is a React framework that takes full advantage of React’s architecture to enable full-stack React apps.**
Terminal
Copy
npx create-next-app@latest
Next.js is maintained by Vercel. You can deploy a Next.js app to any Node.js or serverless hosting, or to your own server. Next.js also supports static export which doesn’t require a server. Vercel additionally provides opt-in paid cloud services.
### React Router (v7) 
**React Router is the most popular routing library for React and can be paired with Vite to create a full-stack React framework**. It emphasizes standard Web APIs and has several ready to deploy templates for various JavaScript runtimes and platforms.
To create a new React Router framework project, run:
Terminal
Copy
npx create-react-router@latest
React Router is maintained by Shopify.
### Expo (for native apps) 
**Expo is a React framework that lets you create universal Android, iOS, and web apps with truly native UIs.** It provides an SDK for React Native that makes the native parts easier to use. To create a new Expo project, run:
Terminal
Copy
npx create-expo-app@latest
If you’re new to Expo, check out the Expo tutorial.
Expo is maintained by Expo (the company). Building apps with Expo is free, and you can submit them to the Google and Apple app stores without restrictions. Expo additionally provides opt-in paid cloud services.
## Other options 
There are other up-and-coming frameworks that are working towards our full stack React vision:
  * TanStack Start (Beta): TanStack Start is a full-stack React framework powered by TanStack Router. It provides a full-document SSR, streaming, server functions, bundling, and more using tools like Nitro and Vite.
  * RedwoodJS: Redwood is a full stack React framework with lots of pre-installed packages and configuration that makes it easy to build full-stack web applications.


##### Deep Dive
#### Which features make up the React team’s full-stack architecture vision? 
Show Details
Next.js’s App Router bundler fully implements the official React Server Components specification. This lets you mix build-time, server-only, and interactive components in a single React tree.
For example, you can write a server-only React component as an `async` function that reads from a database or from a file. Then you can pass data down from it to your interactive components:
```

// This component runs *only* on the server (or during the build).
async function Talks({ confId }) {
 // 1. You're on the server, so you can talk to your data layer. API endpoint not required.
 const talks = await db.Talks.findAll({ confId });
 // 2. Add any amount of rendering logic. It won't make your JavaScript bundle larger.
 const videos = talks.map(talk => talk.video);
 // 3. Pass the data down to the components that will run in the browser.
 return <SearchableVideoList videos={videos} />;
}

```

Next.js’s App Router also integrates data fetching with Suspense. This lets you specify a loading state (like a skeleton placeholder) for different parts of your user interface directly in your React tree:
```

<Suspense fallback={<TalksLoading />}>
 <Talks confId={conf.id} />
</Suspense>

```

Server Components and Suspense are React features rather than Next.js features. However, adopting them at the framework level requires buy-in and non-trivial implementation work. At the moment, the Next.js App Router is the most complete implementation. The React team is working with bundler developers to make these features easier to implement in the next generation of frameworks.
### Note
#### Do you recommend Vite? 
We provide several Vite-based recommendations.
React Router v7 is a Vite based framework which allows you to use Vite’s fast development server and build tooling with a framework that provides routing and data fetching. Just like the other frameworks we recommend, you can build a SPA with React Router v7.
We also recommend using Vite when adding React to an existing project, or building a framework.
Just like Svelte has Sveltekit, Vue has Nuxt, and Solid has SolidStart, React recommends using a framework that integrates with build tools like Vite for new projects.
_If you’re a framework author interested in being included on this page,please let us know._
PreviousInstallation
NextBuilding a React Framework
