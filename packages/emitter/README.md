# @vanillajs/emitter

A tiny, vanillajs event emitter

## Installation

```bash
npm install @vanillajs/emitter
```

## Usage

```js
import emitter from '@vanillajs/emitter';

const unsub = emitter.on('ev', sub);

emitter.emit('ev', { a: 10 }); // emit an event

emitter.off('ev', sub); // unsubscribe using off

unsub(); // unsubscribe by calling the method returned by `on`
```

## Legacy UMD Usage

```html
<script src="//unpkg.com/@vanillajs/emitter"></script>
```

```js
const { emitter } = window.vanillajs;

const unsub = emitter.on('ev', sub);

...
```

[MIT License](https://oss.ninja/mit/osdevisnot) @ [osdevisnot](https://github.com/osdevisnot)
