(function () {
  'use strict';

  // Categories component.
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'components/categoriesComponent.html',
    controller: CategoriesComponentController,
    bindings: {
      items: '<'
    }
  });

  function CategoriesComponentController() {
    var $ctrl = this;
  }
}) ();
