import { expect } from 'chai';
import * as cast from '../src';
import { IS_TESTING_WITHOUT_MOMENT } from './env';

describe('duration', function() {
  before(function() {
    if (IS_TESTING_WITHOUT_MOMENT) {
      this.skip();
    }
  });

  it('string', function() {
    expect(cast.milliseconds('P1D')).to.be.equals(24 * 60 * 60e3);
  });
  it('number', function() {
    expect(cast.milliseconds(999)).to.be.equals(999);
  });
});
