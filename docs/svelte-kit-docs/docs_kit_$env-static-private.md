Skip to main content
Environment variables loaded by Vite from `.env` files and `process.env`. Like `$env/dynamic/private`, this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with `config.kit.env.publicPrefix` _and do_ start with `config.kit.env.privatePrefix` (if configured).
_Unlike_ `$env/dynamic/private`, the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
```
import { import API_KEYAPI_KEY } from '$env/static/private';
```

Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don’t have a value until the app is deployed:
```
MY_FEATURE_FLAG=""
```

You can override `.env` values from the command line like so:
```
MY_FEATURE_FLAG="enabled" npm run dev
```

Edit this page on GitHub
previous next
$env/dynamic/public $env/static/public
