import { expect } from 'chai';
import * as cast from '../src';

describe('date', function() {
  it('valid', function() {
    expect(cast.date('2019-01-01 12:00')).to.be.a('date');
  });
  it('invalid', function() {
    expect(() => cast.date('a')).to.throw(cast.CastError);
  });
});
