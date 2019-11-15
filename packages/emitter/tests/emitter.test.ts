import { emitter } from "../src/emitter";

describe("emitter", () => {
  test("exports", () => {
    expect(emitter).toBeDefined();
  });
  test('sub', () => {
    const fn = jest.fn();
    emitter.on('foo', fn);
    emitter.emit('foo');
    expect(fn).toHaveBeenCalledTimes(1);
  })
  test('sub with payload', () => {
    const fn = jest.fn();
    emitter.on('foo', fn);
    emitter.emit('foo', {count: 10});
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith({count: 10})
  })
  test('no sub after unsub', () => {
    const fn = jest.fn();
    emitter.on('foo', fn);
    emitter.emit('foo');
    expect(fn).toHaveBeenCalledTimes(1);
    emitter.off('foo', fn);
    emitter.emit('foo');
    expect(fn).toHaveBeenCalledTimes(1);
  })
  test('no sub after unsub', () => {
    const fn = jest.fn();
    const of = emitter.on('foo', fn);
    emitter.emit('foo');
    expect(fn).toHaveBeenCalledTimes(1);
    of()
    emitter.emit('foo');
    expect(fn).toHaveBeenCalledTimes(1);
  })
});
