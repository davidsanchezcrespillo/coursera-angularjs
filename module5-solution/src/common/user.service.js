(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$q'];
function UserService() {
  var service = this;
  service.userPreferences = null;

  service.setUserPreferences = function (userPreferences) {
    service.userPreferences = userPreferences;
  };


  service.getUserPreferences = function () {
    var deferred = $q.defer();
    deferred.resolve(userPreferences);
    return deferred.promise;
  };

}



})();
