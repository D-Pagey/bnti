const Chance = require('chance');
const axios = require('axios');

const chance = new Chance();

module.exports.hello = async () => ({
    statusCode: 200,
    body: JSON.stringify({ message: `Hello ${chance.name()}!` })
});

module.exports.helloAuth = async () => ({
    statusCode: 200,
    body: JSON.stringify({ message: `Special hello to you ${chance.name()}!` })
});

module.exports.playerStats = async (e) => {
    const response = await axios({
        method: 'get',
        url: `https://api.pubg.com/shards/steam/players/${e.pathParameters.id}/seasons/lifetime`,
        headers: {
            Accept: 'application/vnd.api+json',
            Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2ZDNkNWYxMC00ZTZlLTAxMzYtMzI2Ny01ZjVhODFkMjcwMzgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI4NTg4NDkyLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImRhbi1wYWdlOTEtZ21haWwtY29tLXMtYXBwIn0.P04HihK1fDkltyQc_ELF-3GNfTy-0MRcImBgUyMNTkQ'
        }
    });

    return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: response.data })
    };
};

module.exports.pubgMatches = async () => {
    const response = await axios({
        method: 'get',
        url: 'https://api.pubg.com/shards/steam/matches/13dc7b6a-e39d-4a75-b1ad-d1841c70a42b',
        headers: { Accept: 'application/vnd.api+json' }
    });

    return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: response.data })
    };
};
