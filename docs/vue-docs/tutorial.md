Skip to content
API Preference
OptionsComposition?
HTMLSFC?
1 / 15 
1. Getting Started 2. Declarative Rendering 3. Attribute Bindings 4. Event Listeners 5. Form Bindings 6. Conditional Rendering 7. List Rendering 8. Computed Property 9. Lifecycle and Template Refs 10. Watchers 11. Components 12. Props 13. Emits 14. Slots 15. You Did It! 
# Getting Started ​
Welcome to the Vue tutorial!
The goal of this tutorial is to quickly give you an experience of what it feels like to work with Vue, right in the browser. It does not aim to be comprehensive, and you don't need to understand everything before moving on. However, after you complete it, make sure to also read the Guide which covers each topic in more detail.
## Prerequisites ​
The tutorial assumes basic familiarity with HTML, CSS and JavaScript. If you are totally new to front-end development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back! Prior experience with other frameworks helps, but is not required.
## How to Use This Tutorial ​
You can edit the code on the rightbelow and see the result update instantly. Each step will introduce a core feature of Vue, and you will be expected to complete the code to get the demo working. If you get stuck, you will have a "Show me!" button that reveals the working code for you. Try not to rely on it too much - you'll learn faster by figuring things out on your own.
If you are an experienced developer coming from Vue 2 or other frameworks, there are a few settings you can tweak to make the best use of this tutorial. If you are a beginner, it's recommended to go with the defaults.
Tutorial Setting Details
  * Vue offers two API styles: Options API and Composition API. This tutorial is designed to work for both - you can choose your preferred style using the **API Preference** switches at the top. Learn more about API styles.
  * You can also switch between SFC-mode or HTML-mode. The former will show code examples in Single-File Component (SFC) format, which is what most developers use when they use Vue with a build step. HTML-mode shows usage without a build step.


TIP
If you're about to use HTML-mode without a build step in your own applications, make sure you either change imports to:
js```
import { ... } from 'vue/dist/vue.esm-bundler.js'
```

inside your scripts or configure your build tool to resolve `vue` accordingly. Sample config for Vite:
js```
// vite.config.js
export default {
 resolve: {
  alias: {
   vue: 'vue/dist/vue.esm-bundler.js'
  }
 }
}
```

See the respective section in Tooling guide for more information.
Ready? Click "Next" to get started.
App.vue
+
​x
11
3
1
```
<template>
```

2
```
  <h1>Hello World!</h1>
```

3
```
</template>
```

```
Syntax error in import-map.json: Cannot read properties of undefined (reading 'code')
```
✕
Show Error
Auto Save
0px x 0px
preview
Output >
Tutorial has loaded
![](https://cdn.usefathom.com/?h=https%3A%2F%2Fvuejs.org&p=%2Ftutorial%2F&r=&sid=XNOLWPLB&qs=%7B%7D&cid=63162055)
