import { expect } from 'chai';
import { CastError, castDate } from '../src';

describe('date', function () {
  it('valid', function () {
    expect(castDate('2019-01-01 12:00')).to.be.a('date');
  });
  it('invalid', function () {
    expect(() => castDate('a')).to.throw(CastError);
  });
});
