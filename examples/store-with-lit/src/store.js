import store from '@vanillajs/store';

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
