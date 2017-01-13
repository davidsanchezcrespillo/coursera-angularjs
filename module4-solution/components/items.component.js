(function () {
  'use strict';

  // Items component.
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'components/itemsComponent.html',
    bindings: {
      items: '<'
    }
  });

}) ();
