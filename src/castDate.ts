import CastError from './CastError';

export default function castDate(v: unknown): Date {
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
    throw new CastError(`can not cast to date: ${v}`);
  }
  return ret;
}
