let _state = {},
	_actions = {},
	_events = []

let update = (action, state) => {
	_state = { ..._state, ...state }
	_events.map(handler => handler(_state, action))
}

let dispatch = (action, ...payload) => {
	return event => {
		if (_actions[action]) {
			let result = _actions[action](event, _state, ...payload)
			if (result) {
				if (result.then) {
					return result.then(response => update(action, response))
				}
				return update(action, result)
			}
		}
	}
}

let store = {
	off(handler) {
		_events.splice(_events.indexOf(handler) >>> 0, 1)
	},
	on(handler) {
		_events.push(handler)
		return store.off.bind(store, handler)
	},
	get state() {
		return _state
	},
	init(state, actions) {
		_state = { ..._state, ...state }
		_actions = { ..._actions, ...actions }
	},
}

export { update, store, dispatch }
