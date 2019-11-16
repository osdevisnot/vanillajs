import { hash } from "../src/hash";

describe("hash", () => {
  test("exports", () => {
    expect(hash).toBeDefined();
  });
  test('simple hash', () => {
    const h = hash('fooBar');
    expect(h).toEqual('_z6tzpu');
  })
  test('same hash', () => {
    const h1 = hash('fooBar');
    const h2 = hash('fooBar');
    expect(h1).toEqual(h2);
  })
  test('variations', () => {
    const h1 = hash('fooBar');
    const h2 = hash('foobar');
    expect(h1).not.toEqual(h2);
  })
  test('css usage', () => {
    const h = hash(`
    border: 10px solid red;
    margin: 5em 4em 3em 2em;
    padding: 50px;
  `)
  expect(h).toEqual('_17di9gt');
  })
});
