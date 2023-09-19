import { expect } from 'chai';
import { castObject, CastError } from '../src';

describe('object', function () {
  it('valid', function () {
    expect(castObject({ a: 1 })).to.be.a('object');
    return;
  });
  it('invalid', function () {
    expect(() => castObject('a')).to.throw(CastError);
  });
});
