(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;
  service.userPreferences = null;

  service.setUserPreferences = function (userPreferences) {
    service.userPreferences = userPreferences;
  };

  service.getUserPreferences = function () {
    return service.userPreferences;
  };

}

})();
