Skip to content
Menu
On this page 
On this page
Sponsors
Become a Sponsor
![ads via Carbon](https://srv.carbonads.net/static/30242/2fe9fb16bf0117bfb6355b4e39e1cf951c2735bf) Squarespace tools make it easy to create a beautiful and unique website.  ads via Carbon
![ads via Carbon](https://ad.doubleclick.net/ddm/trackimp/N718679.452584BUYSELLADS.COM/B29090009.388096314;dc_trk_aid=579245143;dc_trk_cid=206564386;ord=173980251;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$;gdpr_consent=$;ltd=;dc_tdv=1)
# Routing ​
## Client-Side vs. Server-Side Routing ​
Routing on the server side means the server is sending a response based on the URL path that the user is visiting. When we click on a link in a traditional server-rendered web app, the browser receives an HTML response from the server and reloads the entire page with the new HTML.
In a Single-Page Application (SPA), however, the client-side JavaScript can intercept the navigation, dynamically fetch new data, and update the current page without full page reloads. This typically results in a more snappy user experience, especially for use cases that are more like actual "applications", where the user is expected to perform many interactions over a long period of time.
In such SPAs, the "routing" is done on the client side, in the browser. A client-side router is responsible for managing the application's rendered view using browser APIs such as History API or the `hashchange` event.
## Official Router ​
Watch a Free Video Course on Vue School 
Vue is well-suited for building SPAs. For most SPAs, it's recommended to use the officially-supported Vue Router library. For more details, see Vue Router's documentation.
## Simple Routing from Scratch ​
If you only need very simple routing and do not wish to involve a full-featured router library, you can do so with Dynamic Components and update the current component state by listening to browser `hashchange` events or using the History API.
Here's a bare-bone example:
vue```
<script setup>
import { ref, computed } from 'vue'
import Home from './Home.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'
const routes = {
 '/': Home,
 '/about': About
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
 currentPath.value = window.location.hash
})
const currentView = computed(() => {
 return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>
<template>
 <a href="#/">Home</a> |
 <a href="#/about">About</a> |
 <a href="#/non-existent-path">Broken Link</a>
 <component :is="currentView" />
</template>
```

Try it in the Playground
vue```
<script>
import Home from './Home.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'
const routes = {
 '/': Home,
 '/about': About
}
export default {
 data() {
  return {
   currentPath: window.location.hash
  }
 },
 computed: {
  currentView() {
   return routes[this.currentPath.slice(1) || '/'] || NotFound
  }
 },
 mounted() {
  window.addEventListener('hashchange', () => {
		 this.currentPath = window.location.hash
		})
 }
}
</script>
<template>
 <a href="#/">Home</a> |
 <a href="#/about">About</a> |
 <a href="#/non-existent-path">Broken Link</a>
 <component :is="currentView" />
</template>
```

Try it in the Playground
Edit this page on GitHub
Routing has loaded
