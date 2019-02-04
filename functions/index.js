const Chance = require('chance');
const axios = require('axios');

const chance = new Chance();

module.exports.hello = async () => ({
    statusCode: 200,
    body: JSON.stringify({ message: `Hello ${chance.name()}!` })
});

module.exports.pubgMatches = async () => {
    const response = await axios({
        method: 'get',
        url: 'https://api.playbattlegrounds.com/shards/steam/matches/13dc7b6a-e39d-4a75-b1ad-d1841c70a42b',
        headers: { Accept: 'application/vnd.api+json' }
    });

    return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: response.data })
    };
};
