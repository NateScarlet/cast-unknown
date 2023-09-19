import CastError from './CastError';

export default function castNumber(v: unknown): number {
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
    throw new CastError(`can not cast to number: ${v}`);
  }
  return ret;
}
