v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. word-break


Typography
# word-break
Utilities for controlling word breaks in an element.
Class| Styles  
---|---  
`break-normal`| `overflow-wrap: normal; word-break: normal;`  
`break-words`| `overflow-wrap: break-word;`  
`break-all`| `word-break: break-all;`  
`break-keep`| `word-break: keep-all;`  
## Examples
### Normal
Use the `break-normal` utility to only add line breaks at normal word break points:
The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
```
<p class="break-normal">The longest word in any of the major...</p>
```

### Break Words
Use the `break-words` utility to add line breaks mid-word if needed:
The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
```
<p class="break-words">The longest word in any of the major...</p>
```

### Break All
Use the `break-all` utility to add line breaks whenever necessary, without trying to preserve whole words:
The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
```
<p class="break-all">The longest word in any of the major...</p>
```

### Break Keep
Use the `break-keep` utility to prevent line breaks from being applied to Chinese/Japanese/Korean (CJK) text:
抗衡不屈不挠 (kànghéng bùqū bùnáo) 这是一个长词，意思是不畏强暴，奋勇抗争，坚定不移，永不放弃。这个词通常用来描述那些在面对困难和挑战时坚持自己信念的人， 他们克服一切困难，不屈不挠地追求自己的目标。无论遇到多大的挑战，他们都能够坚持到底，不放弃，最终获得胜利。
```
<p class="break-keep">抗衡不屈不挠...</p>
```

For non-CJK text the `break-keep` utility has the same behavior as the `break-normal` utility.
### Responsive design
Prefix a `word-break` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="break-normal md:break-all ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Normal
    * Break Words
    * Break All
    * Break Keep
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fword-break&r=&sid=PMFMDJGK&qs=%7B%7D&cid=97323326)
