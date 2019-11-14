# @vanillajs/emitter

a tiny, vanillajs event emitter.

[![The GZIP size of @vanillajs/emitter](http://img.badgesize.io/https://unpkg.com/@vanillajs/emitter?compression=gzip&label=GZIP%20Size)](https://unpkg.com/@vanillajs/emitter)
[![The Brotli size of @vanillajs/emitter](http://img.badgesize.io/https://unpkg.com/@vanillajs/emitter?compression=brotli&label=Brotli%20Size)](https://unpkg.com/@vanillajs/emitter)

## Installation

```bash
npm install @vanillajs/emitter
```

## Usage

```js
import { emitter } from '@vanillajs/emitter'

const unsub = emitter.on('ev', sub)

emitter.emit('ev', { a: 10 }) // emit an event

emitter.off('ev', sub) // unsubscribe using off

unsub() // unsubscribe by calling the method returned by `on`
```

## Use from unpkg

```html
<script src="//unpkg.com/@vanillajs/emitter"></script>
```

```js
const { emitter } = window.vanillajs;

const unsub = emitter.on('ev', sub);

...
```

## License

**@vanillajs/emitter** is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).

Created with ♥ by [@osdevisnot](https://github.com/osdevisnot) and [all contributors](https://github.com/osdevisnot/vanillajs/graphs/contributors).
