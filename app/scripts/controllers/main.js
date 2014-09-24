'use strict';

/**
 * @ngdoc function
 * @name weatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatApp
 */
angular.module('weatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
