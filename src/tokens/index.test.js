import * as tokens from '.';

describe('tokens lib', () => {
    it('should contain correct tokens', () => {
        expect(Object.keys(tokens)).toEqual(
            expect.arrayContaining([
                'border',
                'colour',
                'fontFamily',
                'fontSize',
                'fontWeight',
                'lineHeight',
                'mediaQuery',
                'spacing',
                'zIndex'
            ])
        );
    });
});
