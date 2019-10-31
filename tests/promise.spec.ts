import * as cast from '../src';
import { expect } from 'chai';
describe('promise', function() {
  it('value', async function() {
    expect(await cast.promise(1)()).to.be.equals(1);
    return;
    // type check:
    cast
      .promise(1)()
      .then(() => {});
  });
  it('normal function', async function() {
    expect(await cast.promise(() => 1)()).to.be.equals(1);
    return;
    // type check:
    cast
      .promise((a: boolean) => a)(true)
      .then(() => {});
  });
  it('async normal function', async function() {
    expect(await cast.promise(async () => 1)()).to.be.equals(1);
    return;
    // type check:
    cast
      .promise(async (a: boolean) => a)(true)
      .then(() => {});
  });
});
