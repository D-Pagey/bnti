import { hello } from '.';

describe('hello lambda', () => {
    it('should responsed with 200 status and body', async () => {
        expect.assertions(1);

        expect(hello()).resolves.toMatchObject({
            statusCode: 200,
            body: expect.any(String)
        });
    });
});
