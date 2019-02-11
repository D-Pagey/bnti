const Chance = require('chance');

const chance = new Chance();

module.exports.hello = async () => ({
    statusCode: 200,
    body: JSON.stringify({ message: `Hello ${chance.name()}!` })
});

module.exports.helloAuth = async () => ({
    statusCode: 200,
    body: JSON.stringify({ message: `Special hello to you ${chance.name()}!` })
});
