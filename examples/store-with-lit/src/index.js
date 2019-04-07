import { render, html } from 'lit-html';
import store from '@vanillajs/store';

store.use(
  { count: 0 },
  {
    increment({ state }) {
      return { count: state.count + 1 };
    },
    decrement({ state }) {
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

// Note: We are re-rendering on every state change
flush();
store.on(_ => flush());
