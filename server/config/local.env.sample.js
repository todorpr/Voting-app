'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'workspace-secret',

  TWITTER_ID:       'vwh3s1DahjdRuSWQd1zdY5CSJ', //app-id',
  TWITTER_SECRET:   'dIHmfmjyf9NGlCc2W7SCbRKD1lgenKgIREz9Zb3Er3QmRnkTQg',//secret',

  GOOGLE_ID:        'app-id',
  GOOGLE_SECRET:    'secret',
  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
