const sum = require("./index");

describe("Sum App", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds -1 + 1 to equal 0", () => {
    expect(sum(-1, 1)).toBe(0);
  });

  test("adds -1.2 + 2 to equal 0.80", () => {
    expect(sum(-1.2, 2)).toBe(0.8);
  });
});
