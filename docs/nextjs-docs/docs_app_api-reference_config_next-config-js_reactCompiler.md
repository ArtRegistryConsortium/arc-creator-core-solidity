Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jsreactCompiler
# reactCompiler
This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
Next.js 15 introduced support for the React Compiler. The compiler improves performance by automatically optimizing component rendering. This reduces the amount of manual memoization developers have to do through APIs such as `useMemo` and `useCallback`.
To use it, upgrade to Next.js 15, install the `babel-plugin-react-compiler`:
Terminal
```
npm installbabel-plugin-react-compiler
```

Then, add `experimental.reactCompiler` option in `next.config.js`:
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 experimental: {
  reactCompiler:true,
 },
}
exportdefault nextConfig
```

> **Note:** The React Compiler is currently only possible to use in Next.js through a Babel plugin. This will opt-out of Next.js's default Rust-based compiler, which could result in slower build times. We are working on support for the React Compiler as our default compiler.
## Annotations
You can configure the compiler to run in "opt-in" mode as follows:
next.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextConfig } from'next'
constnextConfig:NextConfig= {
 experimental: {
  reactCompiler: {
   compilationMode:'annotation',
  },
 },
}
exportdefault nextConfig
```

Then, you can annotate specific components or hooks with the `"use memo"` directive from React to opt-in:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionPage() {
'use memo'
// ...
}
```

> **Note:** You can also use the `"use no memo"` directive from React for the opposite effect, to opt-out a component or hook.
Was this helpful?
supported.
Send
