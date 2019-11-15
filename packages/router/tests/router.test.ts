import { match } from "../src/router";

describe("router", () => {
  test("exports", () => {
    expect(match).toBeDefined();
  });
});
