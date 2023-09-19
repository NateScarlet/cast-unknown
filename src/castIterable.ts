export default function castIterable<T>(
  v: Iterable<T> | T | null | undefined
): Iterable<T> {
  if (v == null) {
    return [];
  }
  if (
    typeof (v as { [Symbol.iterator]: unknown })[Symbol.iterator] === 'function'
  ) {
    return v as Iterable<T>;
  }
  return [v as T];
}
