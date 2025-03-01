Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationTestingPlaywright
# Setting up Playwright with Next.js
Playwright is a testing framework that lets you automate Chromium, Firefox, and WebKit with a single API. You can use it to write **End-to-End (E2E)** testing. This guide will show you how to set up Playwright with Next.js and write your first tests.
## Quickstart
The fastest way to get started is to use `create-next-app` with the with-playwright example. This will create a Next.js project complete with Playwright configured.
Terminal
```
npx create-next-app@latest--examplewith-playwrightwith-playwright-app
```

## Manual setup
To install Playwright, run the following command:
Terminal
```
npm initplaywright
# or
yarn createplaywright
# or
pnpm createplaywright
```

This will take you through a series of prompts to setup and configure Playwright for your project, including adding a `playwright.config.ts` file. Please refer to the Playwright installation guide for the step-by-step guide.
## Creating your first Playwright E2E test
Create two new Next.js pages:
pages/index.ts
```
import Link from'next/link'
exportdefaultfunctionHome() {
return (
  <div>
   <h1>Home</h1>
   <Linkhref="/about">About</Link>
  </div>
 )
}
```

pages/about.ts
```
import Link from'next/link'
exportdefaultfunctionAbout() {
return (
  <div>
   <h1>About</h1>
   <Linkhref="/">Home</Link>
  </div>
 )
}
```

Then, add a test to verify that your navigation is working correctly:
tests/example.spec.ts
```
import { test, expect } from'@playwright/test'
test('should navigate to the about page',async ({ page }) => {
// Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
awaitpage.goto('http://localhost:3000/')
// Find an element with the text 'About' and click on it
awaitpage.click('text=About')
// The new URL should be "/about" (baseURL is used there)
awaitexpect(page).toHaveURL('http://localhost:3000/about')
// The new page should contain an h1 with "About"
awaitexpect(page.locator('h1')).toContainText('About')
})
```

> **Good to know** : You can use `page.goto("/")` instead of `page.goto("http://localhost:3000/")`, if you add `"baseURL": "http://localhost:3000"` to the `playwright.config.ts` configuration file.
### Running your Playwright tests
Playwright will simulate a user navigating your application using three browsers: Chromium, Firefox and Webkit, this requires your Next.js server to be running. We recommend running your tests against your production code to more closely resemble how your application will behave.
Run `npm run build` and `npm run start`, then run `npx playwright test` in another terminal window to run the Playwright tests.
> **Good to know** : Alternatively, you can use the `webServer` feature to let Playwright start the development server and wait until it's fully available.
### Running Playwright on Continuous Integration (CI)
Playwright will by default run your tests in the headless mode. To install all the Playwright dependencies, run `npx playwright install-deps`.
You can learn more about Playwright and Continuous Integration from these resources:
  * Next.js with Playwright example
  * Playwright on your CI provider
  * Playwright Discord


Was this helpful?
supported.
Send
