import { expect } from 'chai';
import * as cast from '../src';

describe('number', function() {
  it('number', function() {
    expect(cast.number(1)).to.be.equals(1);
  });
  it('infinite', function() {
    expect(cast.number(Infinity)).to.be.equals(Infinity);
  });
  it('nan', function() {
    expect(() => cast.number(NaN)).to.throw(cast.CastError);
  });
  it('valid-string', function() {
    expect(cast.number('1')).to.be.equals(1);
  });
  it('invalid-string', function() {
    expect(() => cast.number('a')).to.throw(cast.CastError);
  });
  it('null', function() {
    expect(() => cast.number(null)).to.throw(cast.CastError);
  });
  it('undefined', function() {
    expect(() => cast.number(undefined)).to.throw(cast.CastError);
  });
});
