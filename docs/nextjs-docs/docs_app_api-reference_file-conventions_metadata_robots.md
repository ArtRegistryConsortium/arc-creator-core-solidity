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
File ConventionsMetadata Filesrobots.txt
# robots.txt
Add or generate a `robots.txt` file that matches the Robots Exclusion Standard in the **root** of `app` directory to tell search engine crawlers which URLs they can access on your site.
## Static `robots.txt`
app/robots.txt
```
User-Agent: *
Allow: /
Disallow: /private/
Sitemap: https://acme.com/sitemap.xml
```

## Generate a Robots file
Add a `robots.js` or `robots.ts` file that returns a `Robots` object.
> **Good to know** : `robots.js` is a special Route Handlers that is cached by default unless it uses a Dynamic API or dynamic config option.
app/robots.ts
TypeScript
JavaScriptTypeScript
```
importtype { MetadataRoute } from'next'
exportdefaultfunctionrobots():MetadataRoute.Robots {
return {
  rules: {
   userAgent:'*',
   allow:'/',
   disallow:'/private/',
  },
  sitemap:'https://acme.com/sitemap.xml',
 }
}
```

Output:
```
User-Agent: *
Allow: /
Disallow: /private/
Sitemap: https://acme.com/sitemap.xml
```

### Customizing specific user agents
You can customise how individual search engine bots crawl your site by passing an array of user agents to the `rules` property. For example:
app/robots.ts
TypeScript
JavaScriptTypeScript
```
importtype { MetadataRoute } from'next'
exportdefaultfunctionrobots():MetadataRoute.Robots {
return {
  rules: [
   {
    userAgent:'Googlebot',
    allow: ['/'],
    disallow:'/private/',
   },
   {
    userAgent: ['Applebot','Bingbot'],
    disallow: ['/'],
   },
  ],
  sitemap:'https://acme.com/sitemap.xml',
 }
}
```

Output:
```
User-Agent: Googlebot
Allow: /
Disallow: /private/
User-Agent: Applebot
Disallow: /
User-Agent: Bingbot
Disallow: /
Sitemap: https://acme.com/sitemap.xml
```

### Robots object
```
typeRobots= {
 rules:
| {
    userAgent?:string|string[]
    allow?:string|string[]
    disallow?:string|string[]
    crawlDelay?:number
   }
|Array<{
    userAgent:string|string[]
    allow?:string|string[]
    disallow?:string|string[]
    crawlDelay?:number
   }>
 sitemap?:string|string[]
 host?:string
}
```

## Version History
Version| Changes  
---|---  
`v13.3.0`| `robots` introduced.  
Was this helpful?
supported.
Send
