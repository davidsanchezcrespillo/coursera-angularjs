(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ["UserService", "$http", "ApiPath"];
  function SignupController(UserService, $http, ApiPath) {
    var $ctrl = this;
    $ctrl.submitted = false;
    $ctrl.user = UserService.getUserPreferences();

    $ctrl.submit = function() {
      UserService.setUserPreferences($ctrl.user);
      var short_name = $ctrl.user.menu_number;
      $http.get(ApiPath + '/menu_items/' + short_name + '.json')
      .success(function() {
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
