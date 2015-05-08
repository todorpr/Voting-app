'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/polls', {
        templateUrl: 'app/poll/poll.html',
        controller: 'PollCtrl'
      });
  });