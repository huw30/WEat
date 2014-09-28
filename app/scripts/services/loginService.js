'use strict';

angular.module('weatApp')
.factory('loginService', function ($http, $q) {
  return {
    login: function(user) {
      var deferred = $q.defer();
      
      $http.post('http://10.242.1.165/user/login', user);

      return deferred.promise;
    }
  };
});