import { get, set } from '../src/object'

describe('object', () => {
	test('exports', () => {
		expect(get).toBeDefined()
		expect(set).toBeDefined()
	})
	test('n level deep', () => {
		const data = {}
		set(data, 'a.b.c.d.e.f', 10)
		expect(data).toEqual({ a: { b: { c: { d: { e: { f: 10 } } } } } })
		expect(get(data, 'a.b.c.d.e.f')).toEqual(10)
	})
	test('using array notation', () => {
		const data = {}
		set(data, ['a', 'b', 'c'], 10)
		expect(data).toEqual({ a: { b: { c: 10 } } })
		expect(get(data, ['a', 'b', 'c'])).toEqual(10)
	})
	test('get returns undefined without crashing', () => {
		const data = { a: { b: { c: { d: { e: { f: 10 } } } } } }
		expect(get(data, 'a.d.e.f')).toEqual(undefined)
	})
})
