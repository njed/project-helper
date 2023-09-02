import Middlewares, { Middleware } from '../utils/middleware';

test('middleware', async () => {
  const md = new Middlewares<string>();
  function uppercase(
    data: string,
    next?: Middleware<string>,
  ): Promise<string> | string {
    data = data.toUpperCase();
    return next ? next(data) : data;
  }

  async function double(
    data: string,
    next?: Middleware<string>,
  ): Promise<string> {
    data = `${data}${data}`;
    return next ? next(data) : Promise.resolve(data);
  }

  md.use(uppercase);
  md.use(double);
  const result = await md.run('a');
  expect(result).toBe('AA');
});
