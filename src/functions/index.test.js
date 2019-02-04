import { hello, helloAuth, pubgMatches, playerStats } from '.';

describe('hello lambda', () => {
    it.each([hello, helloAuth])('should responsed with 200 status and body', async (handler) => {
        expect.assertions(1);

        expect(handler()).resolves.toMatchObject({
            statusCode: 200,
            body: expect.any(String)
        });
    });
});

describe('pubgMatches lambda', () => {
    it('should respond with 200 status and body', async () => {
        expect(pubgMatches()).resolves.toMatchObject({
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: expect.any(String)
        });
    });
});

describe('playerStats lambda', () => {
    it('should respond with 200 status and body', async () => {
        const e = {
            pathParameters: {
                id: 'account.cc269d82f66d43dc9ac50dc798cc930a'
            }
        };

        expect(await playerStats(e)).toMatchObject({
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: expect.any(String)
        });
    });
});
