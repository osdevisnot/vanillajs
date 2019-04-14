import { render, html } from 'lit-html';
import { store } from '@vanillajs/store';
import './store';

const app = () => {
  const { state, dispatch } = store;
  return html`
    <div class="container">
      <h1>Count: ${state.count}</h1>
      <button @click="${() => dispatch('increment')}">++</button>
      <button @click="${() => dispatch('decrement')}">--</button>
    </div>
  `;
};

const flush = () => render(app(), document.body);

flush();
store.on(() => flush());
