import CastError from './CastError';

export default function castNonNull<T>(v: T): NonNullable<T> {
  if (v == null) {
    throw new CastError(`can not cast to non null: ${v}`);
  }
  return v as NonNullable<T>;
}
