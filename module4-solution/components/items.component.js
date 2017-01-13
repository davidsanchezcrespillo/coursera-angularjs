(function () {
  'use strict';

  // Items component.
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'components/itemsComponent.html',
    controller: ItemsComponentController,
    bindings: {
      itemsList: '<'
    }
  });

  function ItemsComponentController() {
    var $ctrl = this;
  }

}) ();
