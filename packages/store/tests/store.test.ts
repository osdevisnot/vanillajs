import { update, store, dispatch } from "../src/store";

describe("store", () => {
  test("exports", () => {
    expect(update).toBeDefined();
    expect(store).toBeDefined();
    expect(dispatch).toBeDefined();
  });
});
