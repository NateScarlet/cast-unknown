import { expect } from 'chai';
import { castString, CastError } from '../src';

describe('string', function () {
  it('number', function () {
    expect(castString(1)).to.be.equals('1');
  });
  it('string', function () {
    expect(castString('1')).to.be.equals('1');
  });
  it('null', function () {
    expect(() => castString(null)).to.throw(CastError);
  });
  it('undefined', function () {
    expect(() => castString(undefined)).to.throw(CastError);
  });
});
