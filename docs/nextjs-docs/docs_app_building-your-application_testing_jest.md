Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationTestingJest
# Setting up Jest with Next.js
Jest and React Testing Library are frequently used together for **Unit Testing** and **Snapshot Testing**. This guide will show you how to set up Jest with Next.js and write your first tests.
> **Good to know:** Since `async` Server Components are new to the React ecosystem, Jest currently does not support them. While you can still run **unit tests** for synchronous Server and Client Components, we recommend using an **E2E tests** for `async` components.
## Quickstart
You can use `create-next-app` with the Next.js with-jest example to quickly get started:
Terminal
```
npx create-next-app@latest--examplewith-jestwith-jest-app
```

## Manual setup
Since the release of Next.js 12, Next.js now has built-in configuration for Jest.
To set up Jest, install `jest` and the following packages as dev dependencies:
Terminal
```
npm install-Djestjest-environment-jsdom@testing-library/react@testing-library/dom@testing-library/jest-domts-node
# or
yarn add-Djestjest-environment-jsdom@testing-library/react@testing-library/dom@testing-library/jest-domts-node
# or
pnpm install-Djestjest-environment-jsdom@testing-library/react@testing-library/dom@testing-library/jest-domts-node
```

Generate a basic Jest configuration file by running the following command:
Terminal
```
npm initjest@latest
# or
yarn createjest@latest
# or
pnpm createjest@latest
```

This will take you through a series of prompts to setup Jest for your project, including automatically creating a `jest.config.ts|js` file.
Update your config file to use `next/jest`. This transformer has all the necessary configuration options for Jest to work with Next.js:
jest.config.ts
TypeScript
JavaScriptTypeScript
```
importtype { Config } from'jest'
import nextJest from'next/jest.js'
constcreateJestConfig=nextJest({
// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
 dir:'./',
})
// Add any custom config to be passed to Jest
constconfig:Config= {
 coverageProvider:'v8',
 testEnvironment:'jsdom',
// Add more setup options before each test is run
// setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
exportdefaultcreateJestConfig(config)
```

Under the hood, `next/jest` is automatically configuring Jest for you, including:
  * Setting up `transform` using the Next.js Compiler.
  * Auto mocking stylesheets (`.css`, `.module.css`, and their scss variants), image imports and `next/font`.
  * Loading `.env` (and all variants) into `process.env`.
  * Ignoring `node_modules` from test resolving and transforms.
  * Ignoring `.next` from test resolving.
  * Loading `next.config.js` for flags that enable SWC transforms.


> **Good to know** : To test environment variables directly, load them manually in a separate setup script or in your `jest.config.ts` file. For more information, please see Test Environment Variables.
## Optional: Handling Absolute Imports and Module Path Aliases
If your project is using Module Path Aliases, you will need to configure Jest to resolve the imports by matching the paths option in the `jsconfig.json` file with the `moduleNameMapper` option in the `jest.config.js` file. For example:
tsconfig.json or jsconfig.json
```
{
"compilerOptions": {
"module":"esnext",
"moduleResolution":"bundler",
"baseUrl":"./",
"paths": {
"@/components/*": ["components/*"]
  }
 }
}
```

jest.config.js
```
moduleNameMapper: {
// ...
'^@/components/(.*)$': '<rootDir>/components/$1',
}
```

## Optional: Extend Jest with custom matchers
`@testing-library/jest-dom` includes a set of convenient custom matchers such as `.toBeInTheDocument()` making it easier to write tests. You can import the custom matchers for every test by adding the following option to the Jest configuration file:
jest.config.ts
TypeScript
JavaScriptTypeScript
```
setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
```

Then, inside `jest.setup`, add the following import:
jest.setup.ts
TypeScript
JavaScriptTypeScript
```
import'@testing-library/jest-dom'
```

> **Good to know:** `extend-expect` was removed in `v6.0`, so if you are using `@testing-library/jest-dom` before version 6, you will need to import `@testing-library/jest-dom/extend-expect` instead.
If you need to add more setup options before each test, you can add them to the `jest.setup` file above.
## Add a test script to `package.json`
Finally, add a Jest `test` script to your `package.json` file:
package.json
```
{
"scripts": {
"dev":"next dev",
"build":"next build",
"start":"next start",
"test":"jest",
"test:watch":"jest --watch"
 }
}
```

`jest --watch` will re-run tests when a file is changed. For more Jest CLI options, please refer to the Jest Docs.
### Creating your first test
Your project is now ready to run tests. Create a folder called `__tests__` in your project's root directory.
For example, we can add a test to check if the `<Page />` component successfully renders a heading:
app/page.js
```
import Link from'next/link'
exportdefaultfunctionPage() {
return (
  <div>
   <h1>Home</h1>
   <Linkhref="/about">About</Link>
  </div>
 )
}
```

__tests__/page.test.jsx
```
import'@testing-library/jest-dom'
import { render, screen } from'@testing-library/react'
import Page from'../app/page'
describe('Page', () => {
it('renders a heading', () => {
render(<Page />)
constheading=screen.getByRole('heading', { level:1 })
expect(heading).toBeInTheDocument()
 })
})
```

Optionally, add a snapshot test to keep track of any unexpected changes in your component:
__tests__/snapshot.js
```
import { render } from'@testing-library/react'
import Page from'../app/page'
it('renders homepage unchanged', () => {
const { container } =render(<Page />)
expect(container).toMatchSnapshot()
})
```

## Running your tests
Then, run the following command to run your tests:
Terminal
```
npm runtest
# or
yarn test
# or
pnpm test
```

## Additional Resources
For further reading, you may find these resources helpful:
  * Next.js with Jest example
  * Jest Docs
  * React Testing Library Docs
  * Testing Playground - use good testing practices to match elements.


Was this helpful?
supported.
Send
