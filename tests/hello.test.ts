import { sayHello } from "../src/hello";

describe("Hello", () => {
  it("should return Say Hello", (): void => {
    expect(sayHello("Frans", "Selamat pagi")).toBe("Hello Frans, Selamat pagi");

    console.info(sayHello);
  });
});
