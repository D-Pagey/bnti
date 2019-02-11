import { hello, helloAuth } from '.';

describe('hello lambda', () => {
    it.each([hello, helloAuth])('should responsed with 200 status and body', async (handler) => {
        expect.assertions(1);

        expect(handler()).resolves.toMatchObject({
            statusCode: 200,
            body: expect.any(String)
        });
    });
});
