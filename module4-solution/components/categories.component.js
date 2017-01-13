(function () {
  'use strict';

  // Categories component.
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'components/categoriesComponent.html',
    bindings: {
      items: '<'
    }
  });

}) ();
