(function () {
  'use strict';

  // Items component.
  angular.module('MenuApp')
  .component('items', {
    bindings: {
      items: '<'
    }
  });

}) ();
