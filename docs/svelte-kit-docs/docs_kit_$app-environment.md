Skip to main content
```
import { const browser: boolean
true if the app is running in the browser.


browser, const building: boolean
SvelteKit analyses your app during the build step by running it. During this process, building is true. This also applies during prerendering.


building, const dev: boolean
Whether the dev server is running. This is not guaranteed to correspond to NODE_ENV or MODE.


dev, const version: string
The value of config.kit.version.name.


version } from '$app/environment';
```

## browser
`true` if the app is running in the browser.
```
const browser: boolean;
```

## building
SvelteKit analyses your app during the `build` step by running it. During this process, `building` is `true`. This also applies during prerendering.
```
const building: boolean;
```

## dev
Whether the dev server is running. This is not guaranteed to correspond to `NODE_ENV` or `MODE`.
```
const dev: boolean;
```

## version
The value of `config.kit.version.name`.
```
const version: string;
```

Edit this page on GitHub
previous next
@sveltejs/kit/vite $app/forms
