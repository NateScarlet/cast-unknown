export class CastError extends Error {}

export function object(v: unknown): Record<string | number, unknown> {
  if (!(v instanceof Object)) {
    throw new CastError(`Can not cast to object: ${v}`);
  }
  return v as Record<string | number, unknown>;
}
export function number(v: unknown): number {
  let ret: number | undefined;
  switch (typeof v) {
    case 'string':
      ret = parseFloat(v);
      break;
    case 'number':
      ret = v;
      break;
  }
  if (ret === undefined || isNaN(ret)) {
    throw new CastError(`Can not cast to number: ${v}`);
  }
  return ret;
}

export function string(v: unknown): string {
  switch (typeof v) {
    case 'string':
      return v;
    case 'number':
      return v.toString();
  }

  throw new CastError(`Can not cast to string: ${v}`);
}

export function date(v: unknown): Date {
  if (v instanceof Date) {
    return v;
  }
  let ret: Date | undefined;
  switch (typeof v) {
    case 'string':
    case 'number':
      ret = new Date(v);
  }
  if (!(ret && isFinite(ret.getTime()))) {
    throw new CastError(`Can not cast to date: ${v}`);
  }
  return ret;
}

/**
 * Cast value to `moment.Duration`
 * need `moment` package installed.
 */
export function duration(v: unknown): import('moment').Duration {
  const moment: typeof import('moment') = require('moment');
  const duration = moment.duration(v as Parameters<typeof moment.duration>[0]);
  if (!duration.isValid()) {
    throw new CastError(`Can not cast to duration: ${v}`);
  }
  return duration;
}

/**
 * Cast value to milliseconds number
 * need `moment` package installed.
 */
export function milliseconds(v: unknown): number {
  return duration(v).asMilliseconds();
}

export function array<T>(v: T | T[] | undefined): T[] {
  if (v instanceof Array) {
    return v;
  }
  if (v === undefined || v === null) {
    return [];
  }
  return [v];
}

type PromiseConstructor<T, TArgs extends unknown[]> = (
  ...args: TArgs
) => T | PromiseLike<T>;

type PromiseInput<T> = T extends () => unknown
  ? PromiseConstructor<T, Parameters<T>>
  : T extends () => unknown
  ? never
  : PromiseLike<T> | T;

export function promise<T extends PromiseInput<unknown>>(
  v: T
): (
  ...args: T extends (...args: infer TArgs) => unknown ? TArgs : never
) => Promise<T> {
  return async (
    ...args: T extends (...args: infer TArgs) => unknown ? TArgs : never
  ): Promise<T> => {
    switch (typeof v) {
      case 'function':
        return v(...args);
      default:
        return v;
    }
  };
}

export function iterable<T>(v: Iterable<T> | T): Iterable<T> {
  if (v === undefined || v === null) {
    return [];
  }
  if (
    typeof (v as { [Symbol.iterator]: unknown })[Symbol.iterator] === 'function'
  ) {
    return v as Iterable<T>;
  }
  return [v as T];
}

export function one<T>(v: Iterable<T> | T): T | undefined {
  let ret: T | undefined;
  let index = 0;
  for (const i of iterable(v)) {
    if (index > 0) {
      return undefined;
    }
    ret = i;
    index += 1;
  }
  return ret;
}
