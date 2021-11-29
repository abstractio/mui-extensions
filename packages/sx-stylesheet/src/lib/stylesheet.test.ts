import { Stylesheet } from './stylesheet';

describe('sxStylesheet', () => {
  it('should work', () => {
    expect(Stylesheet.create({})).toMatchObject({});
  });
});
