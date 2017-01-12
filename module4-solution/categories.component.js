(function () {
  'use strict';

  // Categories component.
  angular.module('MenuApp')
  .component('categories', {
    bindings: {
      items: '<'
    }
  });

}) ();
