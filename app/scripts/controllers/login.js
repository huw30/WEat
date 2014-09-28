'use strict';

/**
 * @ngdoc function
 * @name weatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatApp
 */
angular.module('weatApp')
  .controller('LoginCtrl', function ($scope, loginService) {
    $scope.user = {};
    $scope.login = function(user) {
      loginService.login(user);
    };
  });
