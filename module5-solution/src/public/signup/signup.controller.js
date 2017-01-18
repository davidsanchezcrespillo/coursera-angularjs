(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ["UserService", "userPreferences", "$http", "ApiPath"];
  function SignupController(UserService, userPreferences, $http, ApiPath) {
    var $ctrl = this;
    $ctrl.submitted = false;
    $ctrl.user = userPreferences;

    $ctrl.submit = function() {
      var short_name = $ctrl.user.menu_number;
      $http.get(ApiPath + '/menu_items/' + short_name + '.json')
      .success(function(result) {
        $ctrl.user.favorite = result;
        UserService.setUserPreferences($ctrl.user);
        $ctrl.submitted = true;
        $ctrl.noSuchMenu = false;
      })
      .error(function() {
        $ctrl.submitted = false;
        $ctrl.noSuchMenu = true;
      });
    }
  }

})();
