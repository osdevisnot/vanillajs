# @vanillajs/object

tiny, vanillajs object utilities.

[![The GZIP size of @vanillajs/object](http://img.badgesize.io/https://unpkg.com/@vanillajs/object?compression=gzip&label=GZIP%20Size)](https://unpkg.com/@vanillajs/object)
[![The Brotli size of @vanillajs/object](http://img.badgesize.io/https://unpkg.com/@vanillajs/object?compression=brotli&label=Brotli%20Size)](https://unpkg.com/@vanillajs/object)

## Installation

```bash
npm install @vanillajs/object
```

## Usage

```js
import { get, set } from '@vanillajs/object'

const response = {}

set(response, 'data.a.b.c', 0) // creates the path in response and assign 0 to leaf
const d = get(response, 'data.a.d') // get d from deep object without erroring out.

console.log(response)
console.log(d) // undefined sice data.a.d is not defined
```

## Use from unpkg

```html
<script src="//unpkg.com/@vanillajs/object"></script>
```

```js
const { get, set } = window.vanillajs;
...
```

## License

**@vanillajs/object** is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).

Created with ♥ by [@osdevisnot](https://github.com/osdevisnot) and [all contributors](https://github.com/osdevisnot/vanillajs/graphs/contributors).
