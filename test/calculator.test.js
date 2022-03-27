import calculator from './../code/calculator.js'


test('56.5 + 43 = 99.5', () => {
    expect(calculator.add(56.5, 43)).toBe(99.5);
});

test('40 - 50 = -10', () => {
    expect(calculator.subtract(40, 50)).toBe(-10);
});

test('60 / 3', () => {
    expect(calculator.divide(60, 3)).toBe(20);
});

test('9 * 8 = 72', () => {
    expect(calculator.multiply(9, 8)).toBe(72);
});