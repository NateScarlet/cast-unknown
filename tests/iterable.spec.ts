import * as cast from '../src';
import { expect } from 'chai';
describe('iterable', function() {
  it('null', function() {
    expect(cast.iterable(null)).to.be.deep.equals([]);
  });
  it('undefined', function() {
    expect(cast.iterable(undefined)).to.be.deep.equals([]);
  });
  it('number', function() {
    expect(cast.iterable(1)).to.be.deep.equals([1]);
  });
  it('number-array', function() {
    expect(cast.iterable([1])).to.be.deep.equals([1]);
  });
  it('null-array', function() {
    expect(cast.iterable([null])).to.be.deep.equals([null]);
  });
  it('undefined-array', function() {
    expect(cast.iterable([undefined])).to.be.deep.equals([undefined]);
  });
  it('generator', function() {
    function* gen() {
      let v = 0;
      while (v < 10) {
        yield 0;
        v += 1;
      }
    }
    const generator = gen();
    for (const i of cast.iterable(generator)) {
      expect(i).to.be.equals(0);
      break;
    }
    for (const i of cast.iterable(generator)) {
      expect(i).to.be.equals(1);
      break;
    }
  });
});
