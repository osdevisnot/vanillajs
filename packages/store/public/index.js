import { render, html } from 'https://unpkg.com/lit-html'

import { store, dispatch } from '../src/store'

store.init(
	{ count: 0 },
	{
		up: (e, state) => ({ count: state.count + 1 }),
		down: (e, state) => ({ count: state.count - 1 }),
	},
)

const app = () => {
	const { state } = store
	return html`
		<div class="container">
			<h1>Count: ${state.count}</h1>
			<button @click="${dispatch('up')}">++</button>
			<button @click="${dispatch('down')}">--</button>
		</div>
	`
}

const flush = () => render(app(), document.body)

flush()

store.on(() => flush())
