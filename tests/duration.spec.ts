import { expect } from 'chai';
import * as cast from '../src';

describe('duration', function() {
  let moment: typeof import('moment');
  try {
    moment = require('moment');
  } catch {
    // Skip this suite when not installed moment.
    return;
  }

  it('valid', function() {
    expect(moment.isDuration(cast.duration('PT1D'))).to.be.true;
  });
  it('invalid', function() {
    this.skip(); // always fail, due to https://github.com/moment/moment/issues/1805.
    expect(() => cast.duration('a')).to.throw(cast.CastError);
  });
});
