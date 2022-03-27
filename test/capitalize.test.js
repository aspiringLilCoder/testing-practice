import capitalize from './../code/capitalize.js'

test('april will be April', () => {
    expect(capitalize('april')).toBe('April');
});

test('tuesday will be Tuesday', () => {
    expect(capitalize('tuesday')).toBe('Tuesday');
});

test('Mary will be Mary', () => {
    expect(capitalize('Mary')).toBe('Mary');
});

test('AhaHahAA will be Ahahahaa', () => {
    expect(capitalize('AhaHahAA')).toBe('Ahahahaa');
});