Skip to main content
SvelteKit automatically makes files under `src/lib` available using the `$lib` import alias. You can change which directory this alias points to in your config file.
src/lib/Component
```
A reusable component
```

src/routes/+page
```
<script>
	import Component from '$lib/Component.svelte';
</script>
<Component />
```
```
<script lang="ts">
	import Component from '$lib/Component.svelte';
</script>
<Component />
```

Edit this page on GitHub
previous next
$env/static/public $service-worker
