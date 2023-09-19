import { castIterable } from '../src';
import { expect } from 'chai';

describe('iterable', function () {
  it('null', function () {
    expect(castIterable(null)).to.be.deep.equals([]);
  });
  it('undefined', function () {
    expect(castIterable(undefined)).to.be.deep.equals([]);
  });
  it('number', function () {
    expect(castIterable(1)).to.be.deep.equals([1]);
  });
  it('number-array', function () {
    expect(castIterable([1])).to.be.deep.equals([1]);
  });
  it('null-array', function () {
    expect(castIterable([null])).to.be.deep.equals([null]);
  });
  it('undefined-array', function () {
    expect(castIterable([undefined])).to.be.deep.equals([undefined]);
  });
  it('generator', function () {
    function* gen() {
      let v = 0;
      while (v < 10) {
        yield 0;
        v += 1;
      }
    }
    const generator = gen();
    for (const i of castIterable(generator)) {
      expect(i).to.be.equals(0);
      break;
    }
    for (const i of castIterable(generator)) {
      expect(i).to.be.equals(1);
      break;
    }
  });
});
