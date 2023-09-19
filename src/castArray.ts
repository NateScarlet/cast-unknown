export default function castArray<T>(v: T | T[] | undefined): T[] {
  if (v instanceof Array) {
    return v;
  }
  if (v === undefined || v === null) {
    return [];
  }
  return [v];
}
