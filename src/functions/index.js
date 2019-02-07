import Chance from 'chance';

const chance = new Chance();

export const hello = async () => ({
    statusCode: 200,
    body: JSON.stringify({ message: `Hello ${chance.name()}!!` })
});
