# @vanillajs/fetch

a tiny, vanillajs fetch wrapper.

Fixes below issue with `window.fetch`

- The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally, and it will only reject on network failure or if anything prevented the request from completing.

## Installation

```bash
npm install @vanillajs/fetch
```

## Usage

```js
import { fetch } from '@vanillajs/fetch'

fetch('/api/users').then(res => {
	console.log(`user details: ${res.user}`)
})
```

## Legacy UMD Usage

```html
<script src="//unpkg.com/@vanillajs/fetch"></script>
```

```js
const { fetch } = window.vanillajs;

fetch('/api/users').then(res => {
  console.log(`user details: ${res.user}`);
});
...
```

## License

**@vanillajs/fetch** is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).

Created with ♥ by [@osdevisnot](https://github.com/osdevisnot) and [all contributors](https://github.com/osdevisnot/vanillajs/graphs/contributors).
