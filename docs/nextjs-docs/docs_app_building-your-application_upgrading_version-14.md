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
Building Your ApplicationUpgradingVersion 14
# Version 14
## Upgrading from 13 to 14
To update to Next.js version 14, run the following command using your preferred package manager:
Terminal
```
npm inext@next-14react@18react-dom@18&& npm ieslint-config-next@next-14-D
```

Terminal
```
yarn addnext@next-14react@18react-dom@18&& yarn addeslint-config-next@next-14-D
```

Terminal
```
pnpm inext@next-14react@18react-dom@18&& pnpm ieslint-config-next@next-14-D
```

Terminal
```
bun addnext@next-14react@18react-dom@18&& bun addeslint-config-next@next-14-D
```

> **Good to know:** If you are using TypeScript, ensure you also upgrade `@types/react` and `@types/react-dom` to their latest versions.
### v14 Summary
  * The minimum Node.js version has been bumped from 16.14 to 18.17, since 16.x has reached end-of-life.
  * The `next export` command has been removed in favor of `output: 'export'` config. Please see the docs for more information.
  * The `next/server` import for `ImageResponse` was renamed to `next/og`. A codemod is available to safely and automatically rename your imports.
  * The `@next/font` package has been fully removed in favor of the built-in `next/font`. A codemod is available to safely and automatically rename your imports.
  * The WASM target for `next-swc` has been removed.


Was this helpful?
supported.
Send
