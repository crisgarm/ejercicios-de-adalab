const paddingLeft = require("./index");

describe("Kata Padding", () => {
  test("adds xx to the left of hola", () => {
    expect(paddingLeft("hola", 6, "x")).toBe("xxhola");
  });

  test("adds xx to the left of hola", () => {
    expect(paddingLeft("hola", 6, "a")).toBe("aahola");
  });

  test("adds xx to the left of hola", () => {
    expect(paddingLeft("ee", 4, "aa")).toBe("aaee");
  });

  test("adds xx to the left of hola", () => {
    expect(paddingLeft("xxxx", 6, "x")).toBe("xxxxxx");
  });

  test("adds xx to the left of hola", () => {
    expect(paddingLeft("", 6, "x")).toBe("xxxxxx");
  });

  test("adds xx to the left of hola", () => {
    expect(paddingLeft("hola mi amigo", 6, "x")).toBe("hola mi amigo");
  });

  test("adds xx to the left of hola", () => {
    expect(paddingLeft("xxxx", 0, "x")).toBe("xxxx");
  });
});
