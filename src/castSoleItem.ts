import castIterable from './castIterable';

export default function castSoleItem<T>(v: Iterable<T> | T): T | undefined {
  let ret: T | undefined;
  let index = 0;
  for (const i of castIterable(v)) {
    if (index > 0) {
      return undefined;
    }
    ret = i;
    index += 1;
  }
  return ret;
}
