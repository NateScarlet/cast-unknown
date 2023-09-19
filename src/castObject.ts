import CastError from './CastError';

export default function castObject(v: unknown): Record<string | number, unknown> {
  if (!(v instanceof Object)) {
    throw new CastError(`can not cast to object: ${v}`);
  }
  return v as Record<string | number, unknown>;
}
