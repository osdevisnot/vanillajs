const _events = {};

const emitter = {
  off(event, handler) {
    if (_events[event])
      _events[event] = _events[event].filter(handle => handle !== handler);
  },
  on(event, handler) {
    (_events[event] || (_events[event] = [])).push(handler);
    return emitter.off.bind(emitter, event, handler);
  },
  emit(event, payload) {
    if (_events[event]) _events[event].map(handler => handler(payload));
  }
};

export default emitter;
