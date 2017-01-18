(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ["UserService"];
  function SignupController(UserService) {
    var $ctrl = this;
    $ctrl.submitted = false;

    $ctrl.submit = function() {
      UserService.setUserPreferences($ctrl.user);
      $ctrl.submitted = true;
    }
  }

})();
