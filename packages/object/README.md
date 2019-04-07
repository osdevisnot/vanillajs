# @vanillajs/object

Collection of tiny, vanillajs object utilities

## Installation

```bash
npm install @vanillajs/object
```

## Usage

```js
import { get, set } from '@vanillajs/object';

get(response, 'data.a.b.c', 0);
set(request, 'a.b.c', 20);
```

## Legacy UMD Usage

```html
<script src="//unpkg.com/@vanillajs/object"></script>
```

```js
const { get, set } = window.vanillajs.object;

get(response, 'data.a.b.c', 0);
set(request, 'a.b.c', 20);
...
```
