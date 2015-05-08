'use strict';

angular.module('workspaceApp')
  .controller('PollCtrl', function ($scope, $http) {
    $scope.polls = [];

    $http.get('/api/polls').success(function(polls) {
      $scope.polls = polls;
    });

    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/polls', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };
  });