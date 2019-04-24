import { render, html } from 'https://unpkg.com/lit-html';
import store from '../../node_modules/@vanillajs/store.js';


store.use(
  { count: 0 },
  {
    increment(state) {
      return { count: state.count + 1 };
    },
    decrement(state) {
      return { count: state.count - 1 };
    }
  }
);

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
