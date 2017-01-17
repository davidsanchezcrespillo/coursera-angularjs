(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);
            
  MenuController.$inject = ['menuCategories'];
  function MenuController(menuCategories) {
    var $ctrl = this;
    $ctrl.menuCategories = menuCategories;
  }
                       
})();
