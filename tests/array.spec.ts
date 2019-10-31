import * as cast from '../src';
import { expect } from 'chai';
describe('array', function() {
  it('null', function() {
    expect(cast.array(null)).to.be.deep.equals([]);
  });
  it('undefined', function() {
    expect(cast.array(undefined)).to.be.deep.equals([]);
  });
  it('number', function() {
    expect(cast.array(1)).to.be.deep.equals([1]);
  });
  it('number-array', function() {
    expect(cast.array([1])).to.be.deep.equals([1]);
  });
  it('null-array', function() {
    expect(cast.array([null])).to.be.deep.equals([null]);
  });
  it('undefined-array', function() {
    expect(cast.array([undefined])).to.be.deep.equals([undefined]);
  });
});
