import { expect } from 'chai';
import * as cast from '../src';

describe('string', function() {
  it('number', function() {
    expect(cast.string(1)).to.be.equals('1');
  });
  it('string', function() {
    expect(cast.string('1')).to.be.equals('1');
  });
  it('null', function() {
    expect(() => cast.string(null)).to.throw(cast.CastError);
  });
  it('undefined', function() {
    expect(() => cast.string(undefined)).to.throw(cast.CastError);
  });
});
