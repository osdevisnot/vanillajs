import { get, set } from '../src/object'

const response = {}

set(response, 'data.a.b.c', 0) // creates the path in response and assign 0 to leaf
const d = get(response, 'data.a.d') // get d from deep object without erroring out.

console.log(response)
console.log(d) // undefined sice data.a.d is not defined
