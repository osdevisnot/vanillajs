import { patch, h } from 'https://unpkg.com/superfine?module';
import store from '/node_modules/@vanillajs/store/dist/store.mjs';

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

const view = () => {
  const { state, dispatch } = store;
  return h('div', { class: 'container' }, [
    h('h1', {}, state.count),
    h('button', { onclick: () => dispatch('increment') }, '++'),
    h('button', { onclick: () => dispatch('decrement') }, '--')
  ]);
};

const app = (view, container, node) => state => {
  node = patch(node, view(state), container);
};

const flush = app(view, document.body);

flush();
store.on(() => flush());
