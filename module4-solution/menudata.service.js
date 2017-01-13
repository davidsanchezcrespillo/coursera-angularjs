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
      var endPointUrl = 'https://davids-restaurant.herokuapp.com/categories.json';
      var response = $http({
        method: "GET",
        url: endPointUrl
      });

      return response;
    };

    // Retrieval of all items of a given category
    service.getItemsForCategory = function(categoryShortName) {
	  var endPointUrl = 'https://davids-restaurant.herokuapp.com/menu_items.json';
      var response = $http({
        method: "GET",
        url: endPointUrl,
        params: {
          category: categoryShortName
        }
      });
      return response;
    };
  }
}) ();

