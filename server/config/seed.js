/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Live Results',
    info : "Live graphs show your poll results immediately in easy to an easy to understand format. One graph will not provide the whole picture, that/'s why we provide multiple graph types to better describe your results.",
    classes: "fa fa-bolt"
  }, {
    name : 'Works Everywhere',
    info : 'Traditional desktop computers now represent only 30% of Internet traffic. Your poll must work on the tablets, smart phones, netbooks and notebooks that your visitors are using. Our responsive designs do just that.',
    classes: "fa fa-globe"
  }, 
  {
     name : 'Social Integration',
     info : 'Free integrated facebook or traditional comments allow your poll voters to provide immediate feedback and discuss results. Social share buttons encourage your poll voters to help spread the word.',
     classes: "fa fa-facebook"
  });
  //,  {
  //   name : 'Modular Structure',
  //   info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  // },  {
  //   name : 'Optimized Build',
  //   info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  // },{
  //   name : 'Deployment Ready',
  //   info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  // });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});