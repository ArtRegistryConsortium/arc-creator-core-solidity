Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
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
## Setting up Jest (with Babel)
If you opt out of the Next.js Compiler and use Babel instead, you will need to manually configure Jest and install `babel-jest` and `identity-obj-proxy` in addition to the packages above.
Here are the recommended options to configure Jest for Next.js:
jest.config.js
```
module.exports= {
 collectCoverage:true,
// on node 14.x coverage provider v8 offers good speed and more or less good report
 coverageProvider:'v8',
 collectCoverageFrom: [
'**/*.{js,jsx,ts,tsx}',
'!**/*.d.ts',
'!**/node_modules/**',
'!<rootDir>/out/**',
'!<rootDir>/.next/**',
'!<rootDir>/*.config.js',
'!<rootDir>/coverage/**',
 ],
 moduleNameMapper: {
// Handle CSS imports (with CSS modules)
// https://jestjs.io/docs/webpack#mocking-css-modules
'^.+\\.module\\.(css|sass|scss)$':'identity-obj-proxy',
// Handle CSS imports (without CSS modules)
'^.+\\.(css|sass|scss)$':'<rootDir>/__mocks__/styleMock.js',
// Handle image imports
// https://jestjs.io/docs/webpack#handling-static-assets
'^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$':`<rootDir>/__mocks__/fileMock.js`,
// Handle module aliases
'^@/components/(.*)$':'<rootDir>/components/$1',
// Handle @next/font
'@next/font/(.*)':`<rootDir>/__mocks__/nextFontMock.js`,
// Handle next/font
'next/font/(.*)':`<rootDir>/__mocks__/nextFontMock.js`,
// Disable server-only
'server-only':`<rootDir>/__mocks__/empty.js`,
 },
// Add more setup options before each test is run
// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 testPathIgnorePatterns: ['<rootDir>/node_modules/','<rootDir>/.next/'],
 testEnvironment:'jsdom',
 transform: {
// Use babel-jest to transpile tests with the next/babel preset
// https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
 },
 transformIgnorePatterns: [
'/node_modules/',
'^.+\\.module\\.(css|sass|scss)$',
 ],
}
```

You can learn more about each configuration option in the Jest docs. We also recommend reviewing `next/jest` configuration to see how Next.js configures Jest.
### Handling stylesheets and image imports
Stylesheets and images aren't used in the tests but importing them may cause errors, so they will need to be mocked.
Create the mock files referenced in the configuration above - `fileMock.js` and `styleMock.js` - inside a `__mocks__` directory:
__mocks__/fileMock.js
```
module.exports='test-file-stub'
```

__mocks__/styleMock.js
```
module.exports= {}
```

For more information on handling static assets, please refer to the Jest Docs.
## Handling Fonts
To handle fonts, create the `nextFontMock.js` file inside the `__mocks__` directory, and add the following configuration:
__mocks__/nextFontMock.js
```
module.exports=newProxy(
 {},
 {
get:functiongetter() {
return () => ({
    className:'className',
    variable:'variable',
    style: { fontFamily:'fontFamily' },
   })
  },
 }
)
```

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
For example, we can add a test to check if the `<Home />` component successfully renders a heading:
```
exportdefaultfunctionHome() {
return <h1>Home</h1>
}
```

__tests__/index.test.js
```
import'@testing-library/jest-dom'
import { render, screen } from'@testing-library/react'
import Home from'../pages/index'
describe('Home', () => {
it('renders a heading', () => {
render(<Home />)
constheading=screen.getByRole('heading', { level:1 })
expect(heading).toBeInTheDocument()
 })
})
```

Optionally, add a snapshot test to keep track of any unexpected changes in your component:
__tests__/snapshot.js
```
import { render } from'@testing-library/react'
import Home from'../pages/index'
it('renders homepage unchanged', () => {
const { container } =render(<Home />)
expect(container).toMatchSnapshot()
})
```

> **Good to know** : Test files should not be included inside the Pages Router because any files inside the Pages Router are considered routes.
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
