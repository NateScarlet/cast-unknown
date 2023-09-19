import { castArray } from '../src';
import { expect } from 'chai';

describe('array', function () {
  it('null', function () {
    expect(castArray(null)).to.be.deep.equals([]);
  });
  it('undefined', function () {
    expect(castArray(undefined)).to.be.deep.equals([]);
  });
  it('number', function () {
    expect(castArray(1)).to.be.deep.equals([1]);
  });
  it('number-array', function () {
    expect(castArray([1])).to.be.deep.equals([1]);
  });
  it('null-array', function () {
    expect(castArray([null])).to.be.deep.equals([null]);
  });
  it('undefined-array', function () {
    expect(castArray([undefined])).to.be.deep.equals([undefined]);
  });
});
