export default function castIterable<T>(v: Iterable<T> | T): Iterable<T> {
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
