import { expect } from 'chai';
import * as cast from '../src';

describe('object', function() {
  it('valid', function() {
    expect(cast.object({ a: 1 })).to.be.a('object');
    return;
    // Typescript type check:
    cast.object(1).a;
    cast.object(1)[1];
  });
  it('invalid', function() {
    expect(() => cast.object('a')).to.throw(cast.CastError);
  });
});
