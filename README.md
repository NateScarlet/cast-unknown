# Cast Unknown

[![build status](https://github.com/NateScarlet/cast-unknown/workflows/Node%20CI/badge.svg)](https://github.com/NateScarlet/cast-unknown/actions)
[![npm package](https://img.shields.io/npm/v/cast-unknown)](https://www.npmjs.com/package/cast-unknown)

Cast unknown value to desired type with typescript support.

Throws `CastError` when value is invalid.

Current supported cast target:

- string
- number
- object
- array
- date
- duration (need `moment` package installed)
- milliseconds (need `moment` package installed)
- promise
- iterable
- one (one and the only one item from given iterable, otherwise undefined)
- nonNull (not null or undefined)

```javascript
import {
  castString,
  castNumber,
  castObject,
  castArray,
  castDate,
  castPromise,
  castIterable,
  castSoleItem,
  castNonNull,
  CastError,
} from 'cast-unknown';

castString(1);
// '1'
castNumber('2');
// 2
castObject(3);
// <throws CastError>
castArray(4);
// [4]
castArray([5]);
// [5]
castArray(null);
// []
castArray(undefined);
// []
castArray([null]);
// [null]
castArray([undefined]);
// [undefined]
castDate('2019-01-01 12:00');
// <same as `new Date('2019-01-01 12:00')`, but throws CastError if value invalid>
castPromise(6);
// async () => 6
castPromise(() => 7);
// async () => 7
castPromise(async () => 8);
// async () => 8
castIterable(9);
// [9]
const generator = (function* () {
  for (let i; i < 10; i++) {
    yield i;
  }
})();
castIterable(generator);
// generator
castIterable(null);
// []
castIterable(undefined);
// []
castOne(11);
// 11
castOne([12, 13]);
// undefined
castOne([14]);
// 14
castNonNull(15);
// 15
castNonNull(null);
// <throws CastError>
castNonNull(undefined);
// <throws CastError>
```

## related

- [cast-unknown-python](https://github.com/NateScarlet/cast-unknown-python)
