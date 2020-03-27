let Api = require('./Api');
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '299ff69b429c488a80effdfa8d58b766',
  clientSecret: '0117e97f665341c7b494fe79c45dc103',
  redirectUri: 'http://www.example.com/callback'
});




function getAutho(params) {
    var scopes = ['user-read-private', 'user-read-email'],
    redirectUri = 'https://example.com/callback',
    clientId = '5fe01282e44241328a84e7c5cc169165',
    state = 'some-state-of-my-choice';

    // Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
    var spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId
    });

    // Create the authorization URL
    var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

    // https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
    console.log(authorizeURL);
}
getAutho();