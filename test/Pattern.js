const followsPattern = require('../src/followsPattern');
const expect = require("expect");


describe('followsPattern', () => {
    test('Input "abab" follows the pattern', () => {
        expect(followsPattern('abab')).toBe(true);
    });

    test('Input "aba" does not follow the pattern', () => {
        expect(followsPattern('aba')).toBe(false);
    });

    test('Input "abababab" follows the pattern', () => {
        expect(followsPattern('abababab')).toBe(true);
    });

    test('Input "abac" does not follow the pattern', () => {
        expect(followsPattern('abac')).toBe(false);
    });
});






