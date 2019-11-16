export type State = Record<string, any>
export type Action = (event: Event, state: State, ...payload: any[]) => State | Promise<State> | void
export type Actions = Record<string, Action>
export type Subscription = (state: State, action: string) => unknown

let _state: State = {},
	_actions: Actions = {},
	_events: Subscription[] = []

let update = (action: string, state: State) => {
	_state = { ..._state, ...state }
	_events.map(handler => handler(_state, action))
	return _state
}

let dispatch = (action: string, ...payload: any[]) => {
	return (event?: any) => {
		if (_actions[action]) {
			let result = _actions[action](event, _state, ...payload)
			if (result) {
				if (result.then) {
					return result.then((response: any) => update(action, response))
				}
				return update(action, result)
			}
		}
	}
}

let store = {
	off(handler: Subscription): void {
		_events.splice(_events.indexOf(handler) >>> 0, 1)
	},
	on(handler: Subscription): () => void {
		_events.push(handler)
		return store.off.bind(store, handler)
	},
	get state(): State {
		return _state
	},
	init(state: State, actions: Actions): void {
		_state = { ..._state, ...state }
		_actions = { ..._actions, ...actions }
	},
}

export { update, store, dispatch }
