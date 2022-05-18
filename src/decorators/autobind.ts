  // Autobind Decorator
  export function Autobind(_: any, __: string, dscriptor: PropertyDescriptor) {
    const originalMethod = dscriptor.value;
    return {
      configurable: true,
      enumerable: false,
      get() {
        return originalMethod.bind(this);
      },
    } as PropertyDescriptor;
  }
