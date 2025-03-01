v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Interactivity
  2. appearance


Interactivity
# appearance
Utilities for suppressing native form control styling.
Class| Styles  
---|---  
`appearance-none`| `appearance: none;`  
`appearance-auto`| `appearance: auto;`  
## Examples
### Removing default appearance
Use `appearance-none` to reset any browser specific styling on an element:
YesNoMaybe
Default browser styles applied
YesNoMaybe
Remove default browser styles
```
<select> <option>Yes</option> <option>No</option> <option>Maybe</option></select><div class="grid"> <select class="col-start-1 row-start-1 appearance-none bg-gray-50 dark:bg-gray-800 ...">  <option>Yes</option>  <option>No</option>  <option>Maybe</option> </select> <svg class="pointer-events-none col-start-1 row-start-1 ...">  <!-- ... --> </svg></div>
```

This utility is often used when creating custom form components.
### Restoring default appearance
Use `appearance-auto` to restore the default browser specific styling on an element:
Try emulating `forced-colors: active` in your developer tools to see the difference
Falls back to default appearance
Keeps custom appearance
```
<label> <div>  <input type="checkbox" class="appearance-none forced-colors:appearance-auto ..." />  <svg class="invisible peer-checked:visible forced-colors:hidden ...">   <!-- ... -->  </svg> </div> Falls back to default appearance</label><label> <div>  <input type="checkbox" class="appearance-none ..." />  <svg class="invisible peer-checked:visible ...">   <!-- ... -->  </svg> </div> Keeps custom appearance</label>
```

This is useful for reverting to the standard browser controls in certain accessibility modes.
### Responsive design
Prefix an `appearance` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<select class="appearance-auto md:appearance-none ..."> <!-- ... --></select>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Removing default appearance
    * Restoring default appearance
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
