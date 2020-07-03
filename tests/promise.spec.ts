import * as cast from '../src';
import { expect } from 'chai';
describe('promise', function() {
  it('value', async function() {
    expect(await cast.promise(1)()).to.be.equals(1);
    // type check:
    cast
      .promise(1)()
      .then(i => i);
  });
  it('normal function', async function() {
    expect(await cast.promise(() => 1)()).to.be.equals(1);
    // type check:
    cast
      .promise((a: boolean, b: number) => [a, b])(true, 1)
      .then(i => i[0]);
  });
  it('async normal function', async function() {
    expect(await cast.promise(async () => 1)()).to.be.equals(1);
    // type check:
    cast
      .promise(async (a: boolean, b: number) => [a, b])(true, 1)
      .then(i => i[0]);
  });
  it('promise like', async function() {
    const input: PromiseLike<number> = {
      then(resolve) {
        return Promise.resolve(resolve(1));
      },
    };
    expect(input).to.be.not.instanceOf(Promise);
    const result = cast.promise(input)();
    expect(result).to.be.instanceOf(Promise);
    expect(await result).to.be.equals(1);
  });
});
