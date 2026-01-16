const {validPassword} = require('../src/password');

describe("Checking Password", ()=>{
    test('is password valid', () => {
        expect(validPassword('Abcdef1!')).toBe(true); // valid password
    });

    test('password shorter than 8 chars fails', () => {
        expect(validPassword('Ab1!')).toBe(false);
    });

    test('password without a number fails', () => {
        expect(validPassword('Abcdefg!')).toBe(false);
    });

    test('password without a special character fails', () => {
        expect(validPassword('Abcdefg1')).toBe(false);
    });

    test('password containing "IPL" (any case) fails', () => {
        expect(validPassword('AbcIPL123!')).toBe(false);
        expect(validPassword('abCipl1!')).toBe(false);
    });
})