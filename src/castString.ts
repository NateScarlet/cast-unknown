import CastError from "./CastError";

export default function castString(v: unknown): string {
  switch (typeof v) {
    case 'string':
      return v;
    case 'number':
      return v.toString();
  }

  throw new CastError(`can not cast to string: ${v}`);
}
