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
- promise

```javascript
import * as cast from 'cast-unknown';

cast.string(1);
// '1'
cast.number('2');
// 2
cast.object(3);
// <throws cast.CastError>
cast.array(4);
// [4]
cast.array([5]);
// [5]
cast.array(null);
// []
cast.array(undefined);
// []
cast.array([null]);
// [null]
cast.array([undefined]);
// [undefined]
cast.date('2019-01-01 12:00');
// <same as `new Date('2019-01-01 12:00')`, but throws cast.CastError if value invalid>
cast.duration('PT1D');
// <same as `moment.duration("PT1D")`, but throws cast.CastError if value invalid>
cast.promise(6);
// async () => 6
cast.promise(() => 7);
// async () => 7
cast.promise(async () => 8);
// async () => 8
```
