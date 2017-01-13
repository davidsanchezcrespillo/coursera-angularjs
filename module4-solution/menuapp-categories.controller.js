(function () {
  'use strict';

  // Categories controller.

  angular.module("MenuApp")
  .controller('CategoriesController', CategoriesController);

  // Inject the data retrieved by the service into the CategoriesController.
  CategoriesController.$inject = ['categoriesList'];
  function CategoriesController(categoriesList) {
    var ctrl = this;
    ctrl.categoriesList = categoriesList.data;
  }

}) ();
