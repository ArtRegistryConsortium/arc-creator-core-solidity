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
Building Your ApplicationConfiguringContent Security Policy
# Content Security Policy
Content Security Policy (CSP) is important to guard your Next.js application against various security threats such as cross-site scripting (XSS), clickjacking, and other code injection attacks.
By using CSP, developers can specify which origins are permissible for content sources, scripts, stylesheets, images, fonts, objects, media (audio, video), iframes, and more.
Examples
  * Strict CSP


## Nonces
A nonce is a unique, random string of characters created for a one-time use. It is used in conjunction with CSP to selectively allow certain inline scripts or styles to execute, bypassing strict CSP directives.
### Why use a nonce?
Even though CSPs are designed to block malicious scripts, there are legitimate scenarios where inline scripts are necessary. In such cases, nonces offer a way to allow these scripts to execute if they have the correct nonce.
### Adding a nonce with Middleware
Middleware enables you to add headers and generate nonces before the page renders.
Every time a page is viewed, a fresh nonce should be generated. This means that you **must use dynamic rendering to add nonces**.
For example:
middleware.ts
TypeScript
JavaScriptTypeScript
```
import { NextRequest, NextResponse } from'next/server'
exportfunctionmiddleware(request:NextRequest) {
constnonce=Buffer.from(crypto.randomUUID()).toString('base64')
constcspHeader=`
  default-src 'self';
  script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
  style-src 'self' 'nonce-${nonce}';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
// Replace newline characters and spaces
constcontentSecurityPolicyHeaderValue= cspHeader
.replace(/\s{2,}/g,' ')
.trim()
constrequestHeaders=newHeaders(request.headers)
requestHeaders.set('x-nonce', nonce)
requestHeaders.set(
'Content-Security-Policy',
  contentSecurityPolicyHeaderValue
 )
constresponse=NextResponse.next({
  request: {
   headers: requestHeaders,
  },
 })
response.headers.set(
'Content-Security-Policy',
  contentSecurityPolicyHeaderValue
 )
return response
}
```

By default, Middleware runs on all requests. You can filter Middleware to run on specific paths using a `matcher`.
We recommend ignoring matching prefetches (from `next/link`) and static assets that don't need the CSP header.
middleware.ts
TypeScript
JavaScriptTypeScript
```
exportconstconfig= {
 matcher: [
/*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  {
   source:'/((?!api|_next/static|_next/image|favicon.ico).*)',
   missing: [
    { type:'header', key:'next-router-prefetch' },
    { type:'header', key:'purpose', value:'prefetch' },
   ],
  },
 ],
}
```

### Reading the nonce
You can now read the nonce from a Server Component using `headers`:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { headers } from'next/headers'
import Script from'next/script'
exportdefaultasyncfunctionPage() {
constnonce= (awaitheaders()).get('x-nonce')
return (
  <Script
src="https://www.googletagmanager.com/gtag/js"
strategy="afterInteractive"
nonce={nonce}
  />
 )
}
```

## Without Nonces
For applications that do not require nonces, you can set the CSP header directly in your `next.config.js` file:
next.config.js
```
constcspHeader=`
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
module.exports= {
asyncheaders() {
return [
   {
    source:'/(.*)',
    headers: [
     {
      key:'Content-Security-Policy',
      value:cspHeader.replace(/\n/g,''),
     },
    ],
   },
  ]
 },
}
```

## Version History
We recommend using `v13.4.20+` of Next.js to properly handle and apply nonces.
## Next Steps
### Middleware
Learn how to use Middleware to run code before a request is completed.
### headers
API reference for the headers function.
Was this helpful?
supported.
Send
