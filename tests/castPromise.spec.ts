import { castPromise } from '../src';
import { expect } from 'chai';
describe('promise', function () {
  it('value', async function () {
    expect(await castPromise(1)()).to.be.equals(1);
    // type check:
    castPromise(1)().then((i) => i);
  });
  it('normal function', async function () {
    expect(await castPromise(() => 1)()).to.be.equals(1);
    // type check:
    castPromise((a: boolean, b: number) => [a, b])(true, 1).then((i) => i[0]);
  });
  it('async normal function', async function () {
    expect(await castPromise(async () => 1)()).to.be.equals(1);
    // type check:
    castPromise(async (a: boolean, b: number) => [a, b])(true, 1).then(
      (i) => i[0]
    );
  });
  it('promise like', async function () {
    const input: PromiseLike<number> = {
      then(resolve) {
        if (!resolve) {
          throw new Error('unexpected');
        }
        return Promise.resolve(resolve(1));
      },
    };
    expect(input).to.be.not.instanceOf(Promise);
    const result = castPromise(input)();
    expect(result).to.be.instanceOf(Promise);
    expect(await result).to.be.equals(1);
  });
});
