export default function castFunction<TArgs extends unknown[], TReturn>(
  v: TReturn | ((...args: TArgs) => TReturn)
): (...args: TArgs) => TReturn {
  if (typeof v !== 'function') {
    return () => v as any;
  }
  return v as any;
}
