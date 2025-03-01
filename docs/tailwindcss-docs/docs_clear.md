v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. clear


Layout
# clear
Utilities for controlling the wrapping of content around an element.
Class| Styles  
---|---  
`clear-left`| `clear: left;`  
`clear-right`| `clear: right;`  
`clear-both`| `clear: both;`  
`clear-start`| `clear: inline-start;`  
`clear-end`| `clear: inline-end;`  
`clear-none`| `clear: none;`  
## Examples
### Clearing left
Use the `clear-left` utility to position an element below any preceding left-floated elements:
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)![](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)
Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
```
<article> <img class="float-left ..." src="/img/snow-mountains.jpg" /> <img class="float-right ..." src="/img/green-mountains.jpg" /> <p class="clear-left ...">Maybe we can live without libraries...</p></article>
```

### Clearing right
Use the `clear-right` utility to position an element below any preceding right-floated elements:
![](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=formathttps://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)
Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
```
<article> <img class="float-left ..." src="/img/green-mountains.jpg" /> <img class="float-right ..." src="/img/snow-mountains.jpg" /> <p class="clear-right ...">Maybe we can live without libraries...</p></article>
```

### Clearing all
Use the `clear-both` utility to position an element below all preceding floated elements:
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=formathttps://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)![](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)
Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
```
<article> <img class="float-left ..." src="/img/snow-mountains.jpg" /> <img class="float-right ..." src="/img/green-mountains.jpg" /> <p class="clear-both ...">Maybe we can live without libraries...</p></article>
```

### Using logical properties
Use the `clear-start` and `clear-end` utilities, which use logical properties to map to either the left or right side based on the text direction:
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)![](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)
ربما يمكننا العيش بدون مكتبات، أشخاص مثلي ومثلك. ربما. بالتأكيد، نحن أكبر من أن نغير العالم، ولكن ماذا عن ذلك الطفل الذي يجلس ويفتح كتابًا الآن في أحد فروع المكتبة المحلية ويجد رسومات للتبول والبول على القطة في القبعة والإخوة الصينيون الخمسة؟ ألا يستحق الأفضل؟ ينظر. إذا كنت تعتقد أن الأمر يتعلق بالغرامات المتأخرة والكتب المفقودة، فمن الأفضل أن تفكر مرة أخرى. يتعلق الأمر بحق ذلك الطفل في قراءة كتاب دون أن يتشوه عقله! أو: ربما يثيرك هذا يا سينفيلد؛ ربما هذه هي الطريقة التي تحصل بها على ركلاتك. أنت ورفاقك الطيبين.
```
<articledir="rtl"> <img class="float-left ..." src="/img/green-mountains.jpg" /> <img class="float-right ..." src="/img/green-mountains.jpg" /> <p class="clear-end ...">...ربما يمكننا العيش بدون مكتبات،</p></article>
```

### Disabling clears
Use the `clear-none` utility to reset any clears that are applied to an element:
![](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=formathttps://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)
Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
```
<article> <img class="float-left ..." src="/img/green-mountains.jpg" /> <img class="float-right ..." src="/img/snow-mountains.jpg" /> <p class="clear-none ...">Maybe we can live without libraries...</p></article>
```

### Responsive design
Prefix a `clear` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="clear-left md:clear-none ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Clearing left
    * Clearing right
    * Clearing all
    * Using logical properties
    * Disabling clears
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fclear&r=&sid=PMFMDJGK&qs=%7B%7D&cid=25499372)
