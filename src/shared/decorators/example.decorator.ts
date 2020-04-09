export function DecorateProperty() {
  return function (target: any, key: string | symbol) {
    let value = target[key];

    const getter = () => value;
    const setter = (next: any) => {
      value = `Amazing ${next} Property!`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
