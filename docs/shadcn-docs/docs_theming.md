Docs
Theming
# Theming
Using CSS Variables or Tailwind CSS for theming.
You can choose between using CSS variables or Tailwind CSS utility classes for theming.
## Utility classes
```
<div className="bg-zinc-950dark:bg-white" />
```
Copy
To use utility classes for theming set `tailwind.cssVariables` to `false` in your `components.json` file.
components.json
```
{
 "style": "default",
 "rsc": true,
 "tailwind": {
  "config": "tailwind.config.js",
  "css": "app/globals.css",
  "baseColor": "slate",
  "cssVariables": false
 },
 "aliases": {
  "components": "@/components",
  "utils": "@/lib/utils"
 }
}
```
Copy
## CSS Variables
```
<div className="bg-backgroundtext-foreground" />
```
Copy
To use CSS variables for theming set `tailwind.cssVariables` to `true` in your `components.json` file.
components.json
```
{
 "style": "default",
 "rsc": true,
 "tailwind": {
  "config": "tailwind.config.js",
  "css": "app/globals.css",
  "baseColor": "slate",
  "cssVariables": true
 },
 "aliases": {
  "components": "@/components",
  "utils": "@/lib/utils"
 }
}
```
Copy
### Convention
We use a simple `background` and `foreground` convention for colors. The `background` variable is used for the background color of the component and the `foreground` variable is used for the text color.
The `background` suffix is omitted when the variable is used for the background color of the component.
Given the following CSS variables:
```
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;
```
Copy
The `background` color of the following component will be `hsl(var(--primary))` and the `foreground` color will be `hsl(var(--primary-foreground))`.
```
<div className="bg-primary text-primary-foreground">Hello</div>
```
Copy
**CSS variables must be defined without color space function**. See the Tailwind CSS documentation for more information.
### List of variables
Here's the list of variables available for customization:
Default background color of <body />...etc
```
--background: 0 0% 100%;
--foreground: 222.2 47.4% 11.2%;
```
Copy
Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />
```
--muted: 210 40% 96.1%;
--muted-foreground: 215.4 16.3% 46.9%;
```
Copy
Background color for <Card />
```
--card: 0 0% 100%;
--card-foreground: 222.2 47.4% 11.2%;
```
Copy
Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />
```
--popover: 0 0% 100%;
--popover-foreground: 222.2 47.4% 11.2%;
```
Copy
Default border color
```
--border: 214.3 31.8% 91.4%;
```
Copy
Border color for inputs such as <Input />, <Select />, <Textarea />
```
--input: 214.3 31.8% 91.4%;
```
Copy
Primary colors for <Button />
```
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;
```
Copy
Secondary colors for <Button />
```
--secondary: 210 40% 96.1%;
--secondary-foreground: 222.2 47.4% 11.2%;
```
Copy
Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc
```
--accent: 210 40% 96.1%;
--accent-foreground: 222.2 47.4% 11.2%;
```
Copy
Used for destructive actions such as <Button variant="destructive">
```
--destructive: 0 100% 50%;
--destructive-foreground: 210 40% 98%;
```
Copy
Used for focus ring
```
--ring: 215 20.2% 65.1%;
```
Copy
Border radius for card, input and buttons
```
--radius: 0.5rem;
```
Copy
### Adding new colors
To add new colors, you need to add them to your CSS file and to your `tailwind.config.js` file.
app/globals.css
```
:root {
 --warning: 38 92% 50%;
 --warning-foreground: 48 96% 89%;
}
.dark {
 --warning: 48 96% 89%;
 --warning-foreground: 38 92% 50%;
}
```
Copy
tailwind.config.js
```
module.exports = {
 theme: {
  extend: {
   colors: {
    warning: "hsl(var(--warning))",
    "warning-foreground": "hsl(var(--warning-foreground))",
   },
  },
 },
}
```
Copy
You can now use the `warning` utility class in your components.
```
<div className="bg-warningtext-warning-foreground" />
```
Copy
### Other color formats
I recommend using HSL colors for theming but you can also use other color formats if you prefer.
See the Tailwind CSS documentation for more information on using `rgb`, `rgba` or `hsl` colors.
components.jsonDark mode
On This Page
  * Utility classes
  * CSS Variables
    * Convention
    * List of variables
    * Adding new colors
    * Other color formats


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
