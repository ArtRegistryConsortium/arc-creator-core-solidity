v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Tables
  2. caption-side


Tables
# caption-side
Utilities for controlling the alignment of a caption element inside of a table.
Class| Styles  
---|---  
`caption-top`| `caption-side: top;`  
`caption-bottom`| `caption-side: bottom;`  
## Examples
### Placing at top of table
Use the `caption-top` utility to position a caption element at the top of a table:
Table 3.1: Professional wrestlers and their signature moves.Wrestler| Signature Move(s)  
---|---  
"Stone Cold" Steve Austin| Stone Cold Stunner, Lou Thesz Press  
Bret "The Hitman" Hart| The Sharpshooter  
Razor Ramon| Razor's Edge, Fallaway Slam  
```
<table> <caption class="caption-top">  Table 3.1: Professional wrestlers and their signature moves. </caption> <thead>  <tr>   <th>Wrestler</th>   <th>Signature Move(s)</th>  </tr> </thead> <tbody>  <tr>   <td>"Stone Cold" Steve Austin</td>   <td>Stone Cold Stunner, Lou Thesz Press</td>  </tr>  <tr>   <td>Bret "The Hitman" Hart</td>   <td>The Sharpshooter</td>  </tr>  <tr>   <td>Razor Ramon</td>   <td>Razor's Edge, Fallaway Slam</td>  </tr> </tbody></table>
```

### Placing at bottom of table
Use the `caption-bottom` utility to position a caption element at the bottom of a table:
Table 3.1: Professional wrestlers and their signature moves.Wrestler| Signature Move(s)  
---|---  
"Stone Cold" Steve Austin| Stone Cold Stunner, Lou Thesz Press  
Bret "The Hitman" Hart| The Sharpshooter  
Razor Ramon| Razor's Edge, Fallaway Slam  
```
<table> <caption class="caption-bottom">  Table 3.1: Professional wrestlers and their signature moves. </caption> <thead>  <tr>   <th>Wrestler</th>   <th>Signature Move(s)</th>  </tr> </thead> <tbody>  <tr>   <td>"Stone Cold" Steve Austin</td>   <td>Stone Cold Stunner, Lou Thesz Press</td>  </tr>  <tr>   <td>Bret "The Hitman" Hart</td>   <td>The Sharpshooter</td>  </tr>  <tr>   <td>Razor Ramon</td>   <td>Razor's Edge, Fallaway Slam</td>  </tr> </tbody></table>
```

### Responsive design
Prefix a `caption-side` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<caption class="caption-top md:caption-bottom ..."> <!-- ... --></caption>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Placing at top of table
    * Placing at bottom of table
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fcaption-side&r=&sid=PMFMDJGK&qs=%7B%7D&cid=97784341)
