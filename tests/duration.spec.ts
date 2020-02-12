import { expect } from 'chai';
import * as cast from '../src';
import { IS_TESTING_WITHOUT_MOMENT } from './env';

describe('duration', function() {
  before(function() {
    if (IS_TESTING_WITHOUT_MOMENT) {
      this.skip();
    }
  });

  it('valid', function() {
    expect(require('moment').isDuration(cast.duration('P1D'))).to.be.true;
  });
  it('invalid', function() {
    this.skip(); // always fail, due to https://github.com/moment/moment/issues/1805.
    expect(() => cast.duration('a')).to.throw(cast.CastError);
  });
});
