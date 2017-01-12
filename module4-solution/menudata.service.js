(function () {
  'use strict';

  angular.module("Data")
  .service("MenuDataService", MenuDataService);

  function MenuDataService() {
    var service = this;

    service.getAllCategories = function() {
    };

    service.getItemsForCategory = function(categoryShortName) {
    };
  }
}) ();

