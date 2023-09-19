import { expect } from 'chai';
import { castNonNull, CastError } from '../src';

describe('non-null', function () {
  it('number', function () {
    expect(castNonNull(1)).to.be.equals(1);
  });
  it('string', function () {
    expect(castNonNull('1')).to.be.equals('1');
  });
  it('null', function () {
    expect(() => castNonNull(null)).to.throw(CastError);
  });
  it('undefined', function () {
    expect(() => castNonNull(undefined)).to.throw(CastError);
  });
});
