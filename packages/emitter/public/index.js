import { emitter } from '../src/emitter'

const sub = payload => console.log(payload)

emitter.on('ev', sub) // subscribe to an event
emitter.emit('ev', 20) // emit an event with data
emitter.off('ev', sub) // unsubscribe from an event

const unsub = emitter.on('ev', sub) // on returns unsubsriber
emitter.emit('ev', { a: 10 }) // emit an event with object
unsub() // unsubscribe by calling the method returned by `on`
