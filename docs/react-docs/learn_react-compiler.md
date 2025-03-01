Learn React
Setup
# React Compiler
This page will give you an introduction to React Compiler and how to try it out successfully.
### Under Construction
These docs are still a work in progress. More documentation is available in the React Compiler Working Group repo, and will be upstreamed into these docs when they are more stable.
### You will learn
  * Getting started with the compiler
  * Installing the compiler and ESLint plugin
  * Troubleshooting


### Note
React Compiler is a new compiler currently in Beta, that we’ve open sourced to get early feedback from the community. While it has been used in production at companies like Meta, rolling out the compiler to production for your app will depend on the health of your codebase and how well you’ve followed the Rules of React.
The latest Beta release can be found with the `@beta` tag, and daily experimental releases with `@experimental`.
React Compiler is a new compiler that we’ve open sourced to get early feedback from the community. It is a build-time only tool that automatically optimizes your React app. It works with plain JavaScript, and understands the Rules of React, so you don’t need to rewrite any code to use it.
The compiler also includes an ESLint plugin that surfaces the analysis from the compiler right in your editor. **We strongly recommend everyone use the linter today.** The linter does not require that you have the compiler installed, so you can use it even if you are not ready to try out the compiler.
The compiler is currently released as `beta`, and is available to try out on React 17+ apps and libraries. To install the Beta:
Terminal
Copy
npm install -D babel-plugin-react-compiler@beta eslint-plugin-react-compiler@beta
Or, if you’re using Yarn:
Terminal
Copy
yarn add -D babel-plugin-react-compiler@beta eslint-plugin-react-compiler@beta
If you are not using React 19 yet, please see the section below for further instructions.
### What does the compiler do? 
In order to optimize applications, React Compiler automatically memoizes your code. You may be familiar today with memoization through APIs such as `useMemo`, `useCallback`, and `React.memo`. With these APIs you can tell React that certain parts of your application don’t need to recompute if their inputs haven’t changed, reducing work on updates. While powerful, it’s easy to forget to apply memoization or apply them incorrectly. This can lead to inefficient updates as React has to check parts of your UI that don’t have any _meaningful_ changes.
The compiler uses its knowledge of JavaScript and React’s rules to automatically memoize values or groups of values within your components and hooks. If it detects breakages of the rules, it will automatically skip over just those components or hooks, and continue safely compiling other code.
### Note
React Compiler can statically detect when Rules of React are broken, and safely opt-out of optimizing just the affected components or hooks. It is not necessary for the compiler to optimize 100% of your codebase.
If your codebase is already very well-memoized, you might not expect to see major performance improvements with the compiler. However, in practice memoizing the correct dependencies that cause performance issues is tricky to get right by hand.
##### Deep Dive
#### What kind of memoization does React Compiler add? 
Show Details
The initial release of React Compiler is primarily focused on **improving update performance** (re-rendering existing components), so it focuses on these two use cases:
  1. **Skipping cascading re-rendering of components**
     * Re-rendering `<Parent />` causes many components in its component tree to re-render, even though only `<Parent />` has changed
  2. **Skipping expensive calculations from outside of React**
     * For example, calling `expensivelyProcessAReallyLargeArrayOfObjects()` inside of your component or hook that needs that data


#### Optimizing Re-renders 
React lets you express your UI as a function of their current state (more concretely: their props, state, and context). In its current implementation, when a component’s state changes, React will re-render that component _and all of its children_ — unless you have applied some form of manual memoization with `useMemo()`, `useCallback()`, or `React.memo()`. For example, in the following example, `<MessageButton>` will re-render whenever `<FriendList>`’s state changes:
```

function FriendList({ friends }) {
 const onlineCount = useFriendOnlineCount();
 if (friends.length === 0) {
  return <NoFriends />;
 }
 return (
  <div>
   <span>{onlineCount} online</span>
   {friends.map((friend) => (
    <FriendListCard key={friend.id} friend={friend} />
   ))}
   <MessageButton />
  </div>
 );
}

```

_See this example in the React Compiler Playground_
React Compiler automatically applies the equivalent of manual memoization, ensuring that only the relevant parts of an app re-render as state changes, which is sometimes referred to as “fine-grained reactivity”. In the above example, React Compiler determines that the return value of `<FriendListCard />` can be reused even as `friends` changes, and can avoid recreating this JSX _and_ avoid re-rendering `<MessageButton>` as the count changes.
#### Expensive calculations also get memoized 
The compiler can also automatically memoize for expensive calculations used during rendering:
```

// **Not** memoized by React Compiler, since this is not a component or hook
function expensivelyProcessAReallyLargeArrayOfObjects() { /* ... */ }
// Memoized by React Compiler since this is a component
function TableContainer({ items }) {
 // This function call would be memoized:
 const data = expensivelyProcessAReallyLargeArrayOfObjects(items);
 // ...
}

```

_See this example in the React Compiler Playground_
However, if `expensivelyProcessAReallyLargeArrayOfObjects` is truly an expensive function, you may want to consider implementing its own memoization outside of React, because:
  * React Compiler only memoizes React components and hooks, not every function
  * React Compiler’s memoization is not shared across multiple components or hooks


So if `expensivelyProcessAReallyLargeArrayOfObjects` was used in many different components, even if the same exact items were passed down, that expensive calculation would be run repeatedly. We recommend profiling first to see if it really is that expensive before making code more complicated.
### Should I try out the compiler? 
Please note that the compiler is still in Beta and has many rough edges. While it has been used in production at companies like Meta, rolling out the compiler to production for your app will depend on the health of your codebase and how well you’ve followed the Rules of React.
**You don’t have to rush into using the compiler now. It’s okay to wait until it reaches a stable release before adopting it.** However, we do appreciate trying it out in small experiments in your apps so that you can provide feedback to us to help make the compiler better.
## Getting Started 
In addition to these docs, we recommend checking the React Compiler Working Group for additional information and discussion about the compiler.
### Installing eslint-plugin-react-compiler 
React Compiler also powers an ESLint plugin. The ESLint plugin can be used **independently** of the compiler, meaning you can use the ESLint plugin even if you don’t use the compiler.
Terminal
Copy
npm install -D eslint-plugin-react-compiler@beta
Then, add it to your ESLint config:
```

import reactCompiler from 'eslint-plugin-react-compiler'
export default [
 {
  plugins: {
   'react-compiler': reactCompiler,
  },
  rules: {
   'react-compiler/react-compiler': 'error',
  },
 },
]

```

Or, in the deprecated eslintrc config format:
```

module.exports = {
 plugins: [
  'eslint-plugin-react-compiler',
 ],
 rules: {
  'react-compiler/react-compiler': 'error',
 },
}

```

The ESLint plugin will display any violations of the rules of React in your editor. When it does this, it means that the compiler has skipped over optimizing that component or hook. This is perfectly okay, and the compiler can recover and continue optimizing other components in your codebase.
### Note
**You don’t have to fix all ESLint violations straight away.** You can address them at your own pace to increase the amount of components and hooks being optimized, but it is not required to fix everything before you can use the compiler.
### Rolling out the compiler to your codebase 
#### Existing projects 
The compiler is designed to compile functional components and hooks that follow the Rules of React. It can also handle code that breaks those rules by bailing out (skipping over) those components or hooks. However, due to the flexible nature of JavaScript, the compiler cannot catch every possible violation and may compile with false negatives: that is, the compiler may accidentally compile a component/hook that breaks the Rules of React which can lead to undefined behavior.
For this reason, to adopt the compiler successfully on existing projects, we recommend running it on a small directory in your product code first. You can do this by configuring the compiler to only run on a specific set of directories:
```

const ReactCompilerConfig = {
 sources: (filename) => {
  return filename.indexOf('src/path/to/dir') !== -1;
 },
};

```

When you have more confidence with rolling out the compiler, you can expand coverage to other directories as well and slowly roll it out to your whole app.
#### New projects 
If you’re starting a new project, you can enable the compiler on your entire codebase, which is the default behavior.
### Using React Compiler with React 17 or 18 
React Compiler works best with React 19 RC. If you are unable to upgrade, you can install the extra `react-compiler-runtime` package which will allow the compiled code to run on versions prior to 19. However, note that the minimum supported version is 17.
Terminal
Copy
npm install react-compiler-runtime@beta
You should also add the correct `target` to your compiler config, where `target` is the major version of React you are targeting:
```

// babel.config.js
const ReactCompilerConfig = {
 target: '18' // '17' | '18' | '19'
};
module.exports = function () {
 return {
  plugins: [
   ['babel-plugin-react-compiler', ReactCompilerConfig],
  ],
 };
};

```

### Using the compiler on libraries 
React Compiler can also be used to compile libraries. Because React Compiler needs to run on the original source code prior to any code transformations, it is not possible for an application’s build pipeline to compile the libraries they use. Hence, our recommendation is for library maintainers to independently compile and test their libraries with the compiler, and ship compiled code to npm.
Because your code is pre-compiled, users of your library will not need to have the compiler enabled in order to benefit from the automatic memoization applied to your library. If your library targets apps not yet on React 19, specify a minimum `target` and add `react-compiler-runtime` as a direct dependency. The runtime package will use the correct implementation of APIs depending on the application’s version, and polyfill the missing APIs if necessary.
Library code can often require more complex patterns and usage of escape hatches. For this reason, we recommend ensuring that you have sufficient testing in order to identify any issues that might arise from using the compiler on your library. If you identify any issues, you can always opt-out the specific components or hooks with the `'use no memo'` directive.
Similarly to apps, it is not necessary to fully compile 100% of your components or hooks to see benefits in your library. A good starting point might be to identify the most performance sensitive parts of your library and ensuring that they don’t break the Rules of React, which you can use `eslint-plugin-react-compiler` to identify.
## Usage 
### Babel 
Terminal
Copy
npm install babel-plugin-react-compiler@beta
The compiler includes a Babel plugin which you can use in your build pipeline to run the compiler.
After installing, add it to your Babel config. Please note that it’s critical that the compiler run **first** in the pipeline:
```

// babel.config.js
const ReactCompilerConfig = { /* ... */ };
module.exports = function () {
 return {
  plugins: [
   ['babel-plugin-react-compiler', ReactCompilerConfig], // must run first!
   // ...
  ],
 };
};

```

`babel-plugin-react-compiler` should run first before other Babel plugins as the compiler requires the input source information for sound analysis.
### Vite 
If you use Vite, you can add the plugin to vite-plugin-react:
```

// vite.config.js
const ReactCompilerConfig = { /* ... */ };
export default defineConfig(() => {
 return {
  plugins: [
   react({
    babel: {
     plugins: [
      ["babel-plugin-react-compiler", ReactCompilerConfig],
     ],
    },
   }),
  ],
  // ...
 };
});

```

### Next.js 
Please refer to the Next.js docs for more information.
### Remix 
Install `vite-plugin-babel`, and add the compiler’s Babel plugin to it:
Terminal
Copy
npm install vite-plugin-babel
```

// vite.config.js
import babel from "vite-plugin-babel";
const ReactCompilerConfig = { /* ... */ };
export default defineConfig({
 plugins: [
  remix({ /* ... */}),
  babel({
   filter: /\.[jt]sx?$/,
   babelConfig: {
    presets: ["@babel/preset-typescript"], // if you use TypeScript
    plugins: [
     ["babel-plugin-react-compiler", ReactCompilerConfig],
    ],
   },
  }),
 ],
});

```

### Webpack 
A community webpack loader is now available here.
### Expo 
Please refer to Expo’s docs to enable and use the React Compiler in Expo apps.
### Metro (React Native) 
React Native uses Babel via Metro, so refer to the Usage with Babel section for installation instructions.
### Rspack 
Please refer to Rspack’s docs to enable and use the React Compiler in Rspack apps.
### Rsbuild 
Please refer to Rsbuild’s docs to enable and use the React Compiler in Rsbuild apps.
## Troubleshooting 
To report issues, please first create a minimal repro on the React Compiler Playground and include it in your bug report. You can open issues in the facebook/react repo.
You can also provide feedback in the React Compiler Working Group by applying to be a member. Please see the README for more details on joining.
### What does the compiler assume? 
React Compiler assumes that your code:
  1. Is valid, semantic JavaScript.
  2. Tests that nullable/optional values and properties are defined before accessing them (for example, by enabling `strictNullChecks` if using TypeScript), i.e., `if (object.nullableProperty) { object.nullableProperty.foo }` or with optional-chaining `object.nullableProperty?.foo`.
  3. Follows the Rules of React.


React Compiler can verify many of the Rules of React statically, and will safely skip compilation when it detects an error. To see the errors we recommend also installing eslint-plugin-react-compiler.
### How do I know my components have been optimized? 
React DevTools (v5.0+) and React Native DevTools have built-in support for React Compiler and will display a “Memo ✨” badge next to components that have been optimized by the compiler.
### Something is not working after compilation 
If you have eslint-plugin-react-compiler installed, the compiler will display any violations of the rules of React in your editor. When it does this, it means that the compiler has skipped over optimizing that component or hook. This is perfectly okay, and the compiler can recover and continue optimizing other components in your codebase. **You don’t have to fix all ESLint violations straight away.** You can address them at your own pace to increase the amount of components and hooks being optimized.
Due to the flexible and dynamic nature of JavaScript however, it’s not possible to comprehensively detect all cases. Bugs and undefined behavior such as infinite loops may occur in those cases.
If your app doesn’t work properly after compilation and you aren’t seeing any ESLint errors, the compiler may be incorrectly compiling your code. To confirm this, try to make the issue go away by aggressively opting out any component or hook you think might be related via the `"use no memo"` directive.
```

function SuspiciousComponent() {
 "use no memo"; // opts out this component from being compiled by React Compiler
 // ...
}

```

### Note
#### `"use no memo"`
`"use no memo"` is a _temporary_ escape hatch that lets you opt-out components and hooks from being compiled by the React Compiler. This directive is not meant to be long lived the same way as eg `"use client"` is.
It is not recommended to reach for this directive unless it’s strictly necessary. Once you opt-out a component or hook, it is opted-out forever until the directive is removed. This means that even if you fix the code, the compiler will still skip over compiling it unless you remove the directive.
When you make the error go away, confirm that removing the opt out directive makes the issue come back. Then share a bug report with us (you can try to reduce it to a small repro, or if it’s open source code you can also just paste the entire source) using the React Compiler Playground so we can identify and help fix the issue.
### Other issues 
Please see https://github.com/reactwg/react-compiler/discussions/7.
PreviousReact Developer Tools
