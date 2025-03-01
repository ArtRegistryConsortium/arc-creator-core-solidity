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
Configurationnext.config.jscompress
# compress
By default, Next.js uses `gzip` to compress rendered content and static files when using `next start` or a custom server. This is an optimization for applications that do not have compression configured. If compression is _already_ configured in your application via a custom server, Next.js will not add compression.
> **Good to know:**
>   * When hosting your application on Vercel, compression uses `brotli` first, then `gzip`.
>   * You can check if compression is enabled and which algorithm is used by looking at the `Accept-Encoding` (browser accepted options) and `Content-Encoding` (currently used) headers in the response.
> 

## Disabling compression
To disable **compression** , set the `compress` config option to `false`:
next.config.js
```
module.exports= {
 compress:false,
}
```

We do not recommend disabling compression unless you have compression configured on your server, as compression reduces bandwidth usage and improves the performance of your application.
## Changing the compression algorithm
To change your compression algorithm, you will need to configure your custom server and set the `compress` option to `false` in your `next.config.js` file.
For example, you're using nginx and want to switch to `brotli`, set the `compress` option to `false` to allow nginx to handle compression.
> **Good to know:**
>   * For Next.js applications on Vercel, compression is handled by the Vercel's Edge Network and not Next.js. See the Vercel documentation for more information.
> 

Was this helpful?
supported.
Send
