import { castSoleItem } from '../src';
import { expect } from 'chai';
describe('one', function () {
  it('null', function () {
    expect(castSoleItem(null)).to.be.equals(undefined);
  });
  it('undefined', function () {
    expect(castSoleItem(undefined)).to.be.equals(undefined);
  });
  it('number', function () {
    expect(castSoleItem(1)).to.be.equals(1);
  });
  it('empty-array', function () {
    expect(castSoleItem([])).to.be.equals(undefined);
  });
  it('one-item-array', function () {
    expect(castSoleItem([1])).to.be.equals(1);
  });
  it('multiple-item-array', function () {
    expect(castSoleItem([1, 2])).to.be.equals(undefined);
  });
  it('null-array', function () {
    expect(castSoleItem([null])).to.be.equals(null);
  });
  it('undefined-array', function () {
    expect(castSoleItem([undefined])).to.be.equals(undefined);
  });
  it('one-item-generator', function () {
    function* gen() {
      yield 0;
    }
    const generator = gen();
    expect(castSoleItem(generator)).to.be.equals(0);
  });
  it('multiple-item-generator', function () {
    function* gen() {
      let v = 0;
      while (v < 10) {
        yield 0;
        v += 1;
      }
    }
    const generator = gen();
    expect(castSoleItem(generator)).to.be.equals(undefined);
  });
});
