'use strict';

/**
 * @ngdoc function
 * @name weatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatApp
 */
angular.module('weatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
