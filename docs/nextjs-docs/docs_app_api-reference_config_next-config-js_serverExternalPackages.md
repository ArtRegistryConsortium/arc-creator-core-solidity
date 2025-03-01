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
Configurationnext.config.jsserverExternalPackages
# serverExternalPackages
Dependencies used inside Server Components and Route Handlers will automatically be bundled by Next.js.
If a dependency is using Node.js specific features, you can choose to opt-out specific dependencies from the Server Components bundling and use native Node.js `require`.
next.config.js
```
/** @type{import('next').NextConfig} */
constnextConfig= {
 serverExternalPackages: ['@acme/ui'],
}
module.exports= nextConfig
```

Next.js includes a short list of popular packages that currently are working on compatibility and automatically opt-ed out:
  * `@appsignal/nodejs`
  * `@aws-sdk/client-s3`
  * `@aws-sdk/s3-presigned-post`
  * `@blockfrost/blockfrost-js`
  * `@highlight-run/node`
  * `@jpg-store/lucid-cardano`
  * `@libsql/client`
  * `@mikro-orm/core`
  * `@mikro-orm/knex`
  * `@node-rs/argon2`
  * `@node-rs/bcrypt`
  * `@prisma/client`
  * `@react-pdf/renderer`
  * `@sentry/profiling-node`
  * `@sparticuz/chromium`
  * `@swc/core`
  * `argon2`
  * `autoprefixer`
  * `aws-crt`
  * `bcrypt`
  * `better-sqlite3`
  * `canvas`
  * `cpu-features`
  * `cypress`
  * `dd-trace`
  * `eslint`
  * `express`
  * `firebase-admin`
  * `import-in-the-middle`
  * `isolated-vm`
  * `jest`
  * `jsdom`
  * `keyv`
  * `libsql`
  * `mdx-bundler`
  * `mongodb`
  * `mongoose`
  * `newrelic`
  * `next-mdx-remote`
  * `next-seo`
  * `node-cron`
  * `node-pty`
  * `node-web-audio-api`
  * `oslo`
  * `pg`
  * `playwright`
  * `playwright-core`
  * `postcss`
  * `prettier`
  * `prisma`
  * `puppeteer-core`
  * `puppeteer`
  * `require-in-the-middle`
  * `rimraf`
  * `sharp`
  * `shiki`
  * `sqlite3`
  * `ts-node`
  * `ts-morph`
  * `typescript`
  * `vscode-oniguruma`
  * `webpack`
  * `websocket`
  * `zeromq`


Version| Changes  
---|---  
`v15.0.0`| Moved from experimental to stable. Renamed from `serverComponentsExternalPackages` to `serverExternalPackages`  
Was this helpful?
supported.
Send
