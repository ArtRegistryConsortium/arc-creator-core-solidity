Skip to content
Menu
App.vue
+
```
xxxxxxxxxx
```

18
1
```
<!--
```

2
```
Say Hello World with Vue!
```

3
```
-->
```

4
```
​
```

5
```
<script setup>
```

6
```
import { ref } from 'vue'
```

7
```
​
```

8
```
// A "ref" is a reactive data source that stores a value.
```

9
```
// Technically, we don't need to wrap the string with ref()
```

10
```
// in order to display it, but we will see in the next
```

11
```
// example why it is needed if we ever intend to change
```

12
```
// the value.
```

13
```
const message = ref('Hello World!')
```

14
```
</script>
```

15
```
​
```

16
```
<template>
```

17
```
  <h1>{{ message }}</h1>
```

18
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
Examples has loaded
