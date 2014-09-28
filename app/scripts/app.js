'use strict';

/**
 * @ngdoc overview
 * @name weatApp
 * @description
 * # weatApp
 *
 * Main module of the application.
 */
angular.module('weatApp', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/login'
    });
});
 