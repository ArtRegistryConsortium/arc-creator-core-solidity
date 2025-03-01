Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Configurationnext.config.js OptionsoptimizePackageImports
# optimizePackageImports
Some packages can export hundreds or thousands of modules, which can cause performance issues in development and production.
Adding a package to `experimental.optimizePackageImports` will only load the modules you are actually using, while still giving you the convenience of writing import statements with many named exports.
next.config.js
```
module.exports= {
 experimental: {
  optimizePackageImports: ['package-name'],
 },
}
```

The following libraries are optimized by default:
  * `lucide-react`
  * `date-fns`
  * `lodash-es`
  * `ramda`
  * `antd`
  * `react-bootstrap`
  * `ahooks`
  * `@ant-design/icons`
  * `@headlessui/react`
  * `@headlessui-float/react`
  * `@heroicons/react/20/solid`
  * `@heroicons/react/24/solid`
  * `@heroicons/react/24/outline`
  * `@visx/visx`
  * `@tremor/react`
  * `rxjs`
  * `@mui/material`
  * `@mui/icons-material`
  * `recharts`
  * `react-use`
  * `@material-ui/core`
  * `@material-ui/icons`
  * `@tabler/icons-react`
  * `mui-core`
  * `react-icons/*`


Was this helpful?
supported.
Send
