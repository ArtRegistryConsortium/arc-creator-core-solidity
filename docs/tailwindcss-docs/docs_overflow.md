v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. overflow


Layout
# overflow
Utilities for controlling how an element handles content that is too large for the container.
Class| Styles  
---|---  
`overflow-auto`| `overflow: auto;`  
`overflow-hidden`| `overflow: hidden;`  
`overflow-clip`| `overflow: clip;`  
`overflow-visible`| `overflow: visible;`  
`overflow-scroll`| `overflow: scroll;`  
`overflow-x-auto`| `overflow-x: auto;`  
`overflow-y-auto`| `overflow-y: auto;`  
`overflow-x-hidden`| `overflow-x: hidden;`  
`overflow-y-hidden`| `overflow-y: hidden;`  
`overflow-x-clip`| `overflow-x: clip;`  
`overflow-y-clip`| `overflow-y: clip;`  
`overflow-x-visible`| `overflow-x: visible;`  
`overflow-y-visible`| `overflow-y: visible;`  
`overflow-x-scroll`| `overflow-x: scroll;`  
`overflow-y-scroll`| `overflow-y: scroll;`  
## Examples
### Showing content that overflows
Use the `overflow-visible` utility to prevent content within an element from being clipped:
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Andrew Alfred** Technical advisor
```
<div class="overflow-visible ..."> <!-- ... --></div>
```

Note that any content that overflows the bounds of the element will then be visible.
### Hiding content that overflows
Use the `overflow-hidden` utility to clip any content within an element that overflows the bounds of that element:
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Andrew Alfred** Technical advisor
```
<div class="overflow-hidden ..."> <!-- ... --></div>
```

### Scrolling if needed
Use the `overflow-auto` utility to add scrollbars to an element in the event that its content overflows the bounds of that element:
Scroll vertically
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Andrew Alfred** Technical advisor
![](https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Debra Houston** Analyst
![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Jane White** Director, Marketing
![](https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Ray Flint** Technical Advisor
```
<div class="overflow-auto ..."> <!-- ... --></div>
```

Unlike `overflow-scroll`, which always shows scrollbars, this utility will only show them if scrolling is necessary.
### Scrolling horizontally if needed
Use the `overflow-x-auto` utility to allow horizontal scrolling if needed:
Scroll horizontally
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Andrew**
![](https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Emily**
![](https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Whitney**
![](https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**David**
![](https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Kristin**
![](https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Sarah**
```
<div class="overflow-x-auto ..."> <!-- ... --></div>
```

### Scrolling vertically if needed
Use the `overflow-y-auto` utility to allow vertical scrolling if needed:
Scroll vertically
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Andrew Alfred** Technical advisor
![](https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Debra Houston** Analyst
![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Jane White** Director, Marketing
![](https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Ray Flint** Technical Advisor
```
<div class="h-32 overflow-y-auto ..."> <!-- ... --></div>
```

### Scrolling horizontally always
Use the `overflow-x-scroll` utility to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system:
Scroll horizontally
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Andrew**
![](https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Emily**
![](https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Whitney**
![](https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**David**
![](https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Kristin**
![](https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Sarah**
```
<div class="overflow-x-scroll ..."> <!-- ... --></div>
```

### Scrolling vertically always
Use the `overflow-y-scroll` utility to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system:
Scroll vertically
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Andrew Alfred** Technical advisor
![](https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Debra Houston** Analyst
![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Jane White** Director, Marketing
![](https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)
**Ray Flint** Technical Advisor
```
<div class="overflow-y-scroll ..."> <!-- ... --></div>
```

### Scrolling in all directions
Use the `overflow-scroll` utility to add scrollbars to an element:
Scroll vertically and horizontally
Sun
Mon
Tue
Wed
Thu
Fri
Sat
5 AM
6 AM
7 AM
8 AM
9 AM
10 AM
11 AM
12 PM
1 PM
2 PM
3 PM
4 PM
5 PM
6 PM
7 PM
8 PM
5 AMFlight to VancouverToronto YYZ
6 AMBreakfastMel's Diner
5 PM🎉 Party party 🎉We like to party!
```
<div class="overflow-scroll ..."> <!-- ... --></div>
```

Unlike `overflow-auto`, which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.
### Responsive design
Prefix an `overflow` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="overflow-auto md:overflow-scroll ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Showing content that overflows
    * Hiding content that overflows
    * Scrolling if needed
    * Scrolling horizontally if needed
    * Scrolling vertically if needed
    * Scrolling horizontally always
    * Scrolling vertically always
    * Scrolling in all directions
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Foverflow&r=&sid=PMFMDJGK&qs=%7B%7D&cid=73123914)
