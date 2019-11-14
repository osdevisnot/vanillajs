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

get(response, 'data.a.b.c', 0)
set(request, 'a.b.c', 20)
```

## Use from unpkg

```html
<script src="//unpkg.com/@vanillajs/object"></script>
```

```js
const { get, set } = window.vanillajs;

get(response, 'data.a.b.c', 0);
set(request, 'a.b.c', 20);
...
```

## License

**@vanillajs/object** is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).

Created with ♥ by [@osdevisnot](https://github.com/osdevisnot) and [all contributors](https://github.com/osdevisnot/vanillajs/graphs/contributors).
