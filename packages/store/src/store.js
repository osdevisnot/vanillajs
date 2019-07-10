import emitter from '@vanillajs/emitter';

const EVENT = '@_@';

let _state = {},
  _actions = {};

const setState = (update, action) => {
  _state = { ..._state, ...update };
  emitter.emit(EVENT, { state: _state, action });
};

const dispatch = (action, ...payload) => {
  return event => {
    if (_actions[action]) {
      const update = _actions[action]({ state: _state, event, ...payload });
      if (update) {
        if (update.then) {
          return update.then(res => setState(res, action));
        }
        return setState(update, action);
      }
    }
  };
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
  use(state, actions) {
    _state = { ..._state, ...state };
    _actions = { ..._actions, ...actions };
  }
};

export default store;
