export type EventHandler = (...args: unknown[]) => unknown

interface Events {
	[key: string]: EventHandler[]
}

let _events: Events = {}

let emitter = {
	off(event: string, handler: EventHandler): void {
		_events[event] && _events[event].splice(_events[event].indexOf(handler) >>> 0, 1)
	},
	on(event: string, handler: EventHandler): () => void {
		;(_events[event] || (_events[event] = [])).push(handler)
		return emitter.off.bind(emitter, event, handler)
	},
	emit(event: string, ...payload: unknown[]): void {
		_events[event] && _events[event].map(handler => handler(...payload))
	},
}

export { emitter }
