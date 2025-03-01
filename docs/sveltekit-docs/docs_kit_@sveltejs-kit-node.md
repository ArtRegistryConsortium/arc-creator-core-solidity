Skip to main content
```
import {
	function createReadableStream(file: string): ReadableStream
Converts a file on disk to a readable stream


@since2.4.0
createReadableStream,
	```
function getRequest({ request, base, bodySizeLimit }: {
  request: import("http").IncomingMessage;
  base: string;
  bodySizeLimit?: number;
}): Promise<Request>
```
`getRequest, `function setResponse(res: import("http").ServerResponse, response: Response): Promise<void>`setResponse } from '@sveltejs/kit/node';`
```

## createReadableStream
> Available since 2.4.0
Converts a file on disk to a readable stream
```
function createReadableStream(file: string): ReadableStream;
```

## getRequest
```
function getRequest({
	request,
	base,
	bodySizeLimit
}: {
	request: import('http').IncomingMessage;
	base: string;
	bodySizeLimit?: number;
}): Promise<Request>;
```

## setResponse
```
function setResponse(
	res: import('http').ServerResponse,
	response: Response
): Promise<void>;
```

Edit this page on GitHub
previous next
@sveltejs/kit/node/polyfills @sveltejs/kit/vite
