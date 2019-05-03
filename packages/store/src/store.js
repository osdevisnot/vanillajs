import emitter from '@vanillajs/emitter';

const EVENT = '@_@';

let _state = {},
  _actions = {};

const setState = (update, action) => {
  _state = { ..._state, ...update };
  emitter.emit(EVENT, _state, action);
};

const store = {
  off(handler) {
    emitter.off(EVENT, handler);
  },
  on(handler) {
    emitter.on(EVENT, handler);
    return store.off.bind(store, handler);
  },
  get state() {
    return _state;
  },
  dispatch(action, ...payload) {
    if (_actions[action]) {
      const update = _actions[action](_state, ...payload);
      if (update) {
        if (update.then) {
          return update.then(res => setState(res, action));
        }
        return setState(update, action);
      }
    }
  },
  use(state, actions) {
    _state = { ..._state, ...state };
    _actions = { ..._actions, ...actions };
  }
};

export default store;
