export type Middleware<T> = (data: T, next?: Middleware<T>) => Promise<T> | T;

export default class Middlewares<T> {
  private middlewares: Middleware<T>[];

  constructor() {
    this.middlewares = [];
  }

  use(middleware: Middleware<T>) {
    this.middlewares.push(middleware);
  }

  run(data: T): Promise<T> {
    let idx = -1;
    const runner = async (i: number, data: T): Promise<T> => {
      if (i === idx) {
        throw new Error('next() called multiple times');
      }
      idx = i;
      const middleware = this.middlewares[idx];
      if (!middleware) {
        return data;
      }
      try {
        const next = (obj: T) => {
          return runner(idx + 1, obj);
        };
        if (middleware instanceof Promise) {
          return await middleware(data, next);
        } else {
          return middleware(data, next);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    };
    return runner(0, data);
  }
}
