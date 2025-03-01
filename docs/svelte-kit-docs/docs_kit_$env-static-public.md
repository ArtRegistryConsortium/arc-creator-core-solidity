Skip to main content
Similar to `$env/static/private`, except that it only includes environment variables that begin with `config.kit.env.publicPrefix` (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
Values are replaced statically at build time.
```
import { import PUBLIC_BASE_URLPUBLIC_BASE_URL } from '$env/static/public';
```

Edit this page on GitHub
previous next
$env/static/private $lib
