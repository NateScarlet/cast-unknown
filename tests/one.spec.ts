import * as cast from '../src';
import { expect } from 'chai';
describe('one', function() {
  it('null', function() {
    expect(cast.one(null)).to.be.equals(undefined);
  });
  it('undefined', function() {
    expect(cast.one(undefined)).to.be.equals(undefined);
  });
  it('number', function() {
    expect(cast.one(1)).to.be.equals(1);
  });
  it('empty-array', function() {
    expect(cast.one([])).to.be.equals(undefined);
  });
  it('one-item-array', function() {
    expect(cast.one([1])).to.be.equals(1);
  });
  it('multiple-item-array', function() {
    expect(cast.one([1, 2])).to.be.equals(undefined);
  });
  it('null-array', function() {
    expect(cast.one([null])).to.be.equals(null);
  });
  it('undefined-array', function() {
    expect(cast.one([undefined])).to.be.equals(undefined);
  });
  it('one-item-generator', function() {
    function* gen() {
      yield 0;
    }
    const generator = gen();
    expect(cast.one(generator)).to.be.equals(0);
  });
  it('multiple-item-generator', function() {
    function* gen() {
      let v = 0;
      while (v < 10) {
        yield 0;
        v += 1;
      }
    }
    const generator = gen();
    expect(cast.one(generator)).to.be.equals(undefined);
  });
});
