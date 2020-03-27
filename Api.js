const axios = require('axios');

const Api = axios.create({
    baseURL: ' https://api.spotify.com',
});

module.exports = Api;