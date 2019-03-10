import { randomInt } from './random.utils';

describe('randomInt', () => {
  it('always returns 0 if max is 0', () => {
    const result = randomInt(0);
    expect(result).toBe(0);
  });
});
