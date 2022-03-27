import reverseString from './../code/reverseString.js'


test('april will be lirpa', () => {
    expect(reverseString ('april')).toBe('lirpa');
});

test('tuesday will be yadseut', () => {
    expect(reverseString ('tuesday')).toBe('yadseut');
});

test('yram will be mary', () => {
    expect(reverseString ('yram')).toBe('mary');
});

test('AhaHahAA will be AAhaHahA', () => {
    expect(reverseString ('AhaHahAA')).toBe('AAhaHahA');
});