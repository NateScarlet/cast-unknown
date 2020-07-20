import { expect } from 'chai';
import * as cast from '../src';

describe('non-null', function() {
  it('number', function() {
    expect(cast.nonNull(1)).to.be.equals(1);
  });
  it('string', function() {
    expect(cast.nonNull('1')).to.be.equals('1');
  });
  it('null', function() {
    expect(() => cast.nonNull(null)).to.throw(cast.CastError);
  });
  it('undefined', function() {
    expect(() => cast.nonNull(undefined)).to.throw(cast.CastError);
  });
});
