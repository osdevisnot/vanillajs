import { get, set } from "../src/object";

describe("object", () => {
  test("exports", () => {
    expect(get).toBeDefined();
    expect(set).toBeDefined();
  });
});
