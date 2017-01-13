(function () {
  'use strict';

  // Items controller.

  angular.module("MenuApp")
  .controller('ItemsController', ItemsController);

  // Inject the data retrieved by the service into the ItemsController.
  ItemsController.$inject = ['category', 'itemsList'];
  function ItemsController(category, itemsList) {
    var ctrl = this;
    ctrl.category = category;
    ctrl.itemsList = itemsList.data.menu_items;
  }
}) ();
