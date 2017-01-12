(function () {
  'use strict';

  // MenuData service.
  angular.module("Data")
  .service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    // Retrieval of all categories
    service.getAllCategories = function() {
    };

    // Retrieval of all items of a given category
    service.getItemsForCategory = function(categoryShortName) {
    };
  }
}) ();

