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
# Telemetry
Next.js collects **completely anonymous** telemetry data about general usage. Participation in this anonymous program is optional, and you may opt-out if you'd not like to share any information.
## Why is telemetry collected?
Next.js has grown considerably since its release, becoming the de-facto React Framework for developers. Prior to telemetry collection, making decisions about how to improve Next.js was a very manual process.
For example, Vercel dogfoods many large React applications (including the Next.js website). Additionally, we actively engage with the community to gather feedback.
However, this approach only allows us to collect feedback from a subset of users. This subset may have different needs and use cases than you. Telemetry allows us to accurately gauge Next.js feature usage, pain points, and customization.
This data will let us better tailor Next.js to the masses, ensuring its continued growth, relevance, and best-in-class developer experience. Furthermore, this will allow us to verify if improvements made to the framework are improving the baseline of all applications.
## What is being collected?
We track general usage information, such as Next.js plugins and build performance. Specifically, we track the following anonymously:
  * Command invoked (`next build`, `next dev`, or `next export`)
  * Version of Next.js
  * General machine information (e.g. number of CPUs, macOS/Windows/Linux, whether or not the command was run within CI)
  * What Next.js plugins are present in your project
  * Duration of `next build` and size of application (total number of pages)


> **Note** : This list is regularly audited to ensure its accuracy.
You can view exactly what is being collected by setting the following environment variable: `NEXT_TELEMETRY_DEBUG=1`.
When this environment variable is set, data will **not be sent to us**. The data will only be printed out to the _stderr_ stream, prefixed with `[telemetry]`.
An example telemetry event looks like this:
```
{
"eventName":"NEXT_VERSION",
"payload": {
"version":"9.0.5-canary.2",
"isDevelopment":false
 }
}
```

## What about sensitive data (e.g. secrets)?
We **do not** collect any metrics which may contain sensitive data.
This includes, but is not limited to: environment variables, file paths, contents of files, logs, or serialized JavaScript errors.
We take privacy and our security very seriously. Next.js telemetry falls under the security disclosure policy.
## Will this data be shared?
The data we collect is completely anonymous, not traceable to the source, and only meaningful in aggregate form.
**No data we collect is personally identifiable.**
## How do I opt-out?
You may opt out-by running `next telemetry disable` in the root of your project directory:
```
npx nexttelemetrydisable
```

```
yarn nexttelemetrydisable
```

```
pnpm execnexttelemetrydisable
```

```
bun nexttelemetrydisable
```

You may check the status of telemetry collection at any time by running `next telemetry status` in the root of your project directory:
```
npx nexttelemetrystatus
```

```
yarn nexttelemetrystatus
```

```
pnpm execnexttelemetrystatus
```

```
bun nexttelemetrystatus
```

You may re-enable telemetry if you'd like to re-join the program by running the following in the root of your project directory:
```
npx nexttelemetryenable
```

```
yarn nexttelemetryenable
```

```
pnpm execnexttelemetryenable
```

```
bun nexttelemetryenable
```

You may also opt-out by setting an environment variable: `NEXT_TELEMETRY_DISABLED=1`.
