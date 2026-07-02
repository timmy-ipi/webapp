const calcul = require('./app');

describe('Fonction calcul', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calcul(1, 2)).toBe(3);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(calcul(0, 0)).toBe(0);
  });

  test('adds negative numbers', () => {
    expect(calcul(-1, -2)).toBe(-3);
  });

  test('adds positive and negative number', () => {
    expect(calcul(5, -2)).toBe(3);
  });

  test('adds decimal numbers', () => {
    expect(calcul(1.5, 2.5)).toBe(4);
  });
});
