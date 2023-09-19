type PromiseConstructor<T, TArgs extends unknown[]> = (
  ...args: TArgs
) => T | PromiseLike<T>;

export type PromiseInput<T, TArgs extends unknown[] = never[]> = T extends
  | PromiseLike<unknown>
  | (() => unknown)
  ? never
  : T | PromiseLike<T> | PromiseConstructor<T, TArgs>;

export default function castPromise<T, TArgs extends unknown[] = never[]>(
  v: PromiseInput<T, TArgs>
): (...args: TArgs) => Promise<T> {
  return async (...args: TArgs): Promise<T> => {
    switch (typeof v) {
      case 'function':
        return v(...args);
      default:
        return v as T | PromiseLike<T>;
    }
  };
}
