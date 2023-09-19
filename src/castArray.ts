export default function castArray<T>(v: T[] | T | null | undefined): T[] {
  if (v == null) {
    return [];
  }
  if (v instanceof Array) {
    return v;
  }
  return [v];
}
