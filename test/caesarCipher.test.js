import caesarCipher from './../code/caesarCipher.js'


test('right with a shift of 1 letter would be sjhiu', () => {
    expect(caesarCipher('right', 1)).toBe('sjhiu');
});

test('left with a shift of 5 letters would be qjky', () => {
    expect(caesarCipher('left', 5)).toBe('qjky');
});


test('jack with a shift of 3 letters would be mdfn', () => {
    expect(caesarCipher('jack', 3)).toBe('mdfn');
});


test('jill with a shift of 25 letters would be ihkk', () => {
    expect(caesarCipher('jill', 25)).toBe('ihkk');
});
