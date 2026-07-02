const calcul = require('./app');

describe('Fonction calcul', () => {
  test('2 + 3 = 5', () => {
    expect(calcul(2, 3)).toBe(5);
  });

  test('1 + 2 = 3', () => {
    expect(calcul(1, 2)).toBe(3);
  });

  test('0 + 0 = 0', () => {
    expect(calcul(0, 0)).toBe(0);
  });

  test('-1 + -2 = -3', () => {
    expect(calcul(-1, -2)).toBe(-3);
  });

  test('5 + -2 = 3', () => {
    expect(calcul(5, -2)).toBe(3);
  });
});
