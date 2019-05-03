const _events = {};

const emitter = {
  off(event, handler) {
    _events[event] && _events[event].splice(_events[event].indexOf(handler) >>> 0, 1);
  },
  on(event, handler) {
    (_events[event] || (_events[event] = [])).push(handler);
    return emitter.off.bind(emitter, event, handler);
  },
  emit(event, ...payload) {
    _events[event] && _events[event].map(handler => handler(...payload));
  }
};

export default emitter;
