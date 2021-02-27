import findWord from '../../src/helpers/findWord.js';

describe('findWord.js', () => {
  const findWordReturn = findWord(['dog', 'god'], 'dgo');
  it('should receive the correct amount of results', () => {
    expect(findWordReturn.length).toBe(2);
  });

  it('should receive the correct results values', () => {
    expect(findWordReturn).toMatchObject(['dog', 'god']);
  });

  it('should receive no results', () => {
    const findWordReturnNone = findWord(['dog', 'god'], 'oxp');
    expect(findWordReturnNone.length).toBe(0);
    expect(findWordReturnNone).toMatchObject([]);
  });
});
