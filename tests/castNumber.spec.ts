import { expect } from 'chai';
import { castNumber, CastError } from '../src';

describe('number', function () {
  it('number', function () {
    expect(castNumber(1)).to.be.equals(1);
  });
  it('infinite', function () {
    expect(castNumber(Infinity)).to.be.equals(Infinity);
  });
  it('nan', function () {
    expect(() => castNumber(NaN)).to.throw(CastError);
  });
  it('valid-string', function () {
    expect(castNumber('1')).to.be.equals(1);
  });
  it('invalid-string', function () {
    expect(() => castNumber('a')).to.throw(CastError);
  });
  it('null', function () {
    expect(() => castNumber(null)).to.throw(CastError);
  });
  it('undefined', function () {
    expect(() => castNumber(undefined)).to.throw(CastError);
  });
});
