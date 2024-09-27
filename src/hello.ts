export type Hello = {
  firtsName: string;
  lastName?: string;
  sayHello: string;
};

export const sayHello = function (firstName: string, greating: string) {
  return `Hello ${firstName}, ${greating}`;
};

console.info("print func sayHello", sayHello("Frans", "Selamat pagi"));
