(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/')
.service('MenuSearchService', MenuSearchService);
//.directive('foundItems', FoundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var mv = this;

  mv.searchTerm = "";

  mv.found = [];

  mv.removeItem = function(index) {
    
  }

  mv.getMatchedMenuItems = function() {
    var foundPromise = MenuSearchService.getMatchedMenuItems(mv.searchTerm);
    foundPromise.then(function(result) {
      mv.found = result;
    });
  }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var serv = this;

  serv.getMatchedMenuItems = function(searchTerm) {
    var endPointUrl = ApiBasePath + "menu_items.json";
    var response = $http({
      method: "GET",
      url: endPointUrl
    });
    return response.then(function (result) {
      // process result and only keep items that match
      var foundItems = serv.processMenuItems(result.data.menu_items, searchTerm);

      //console.log(foundItems);
      // return processed items
      return foundItems;
    });    
  };
  
  serv.processMenuItems = function(menuItems, searchTerm) {
    console.log("Search: " + searchTerm);
    if (searchTerm === "") {
      return menuItems;
    }

    var found = [];
    menuItems.forEach(function(element) {
      if (element.description.indexOf(searchTerm) != -1) {
        found.push(element);
      }
    });

    return found;
  };
}

/*
function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
	scope: {
      found: '<',
	  onRemove: '&'
	},
	controller: FoundItemsDirectiveController,
	controllerAs: 'foundMenuItems',
	bindToController: true
  };
  
  return ddo;
}

function FoundItemsDirectiveController() {
}
*/
})();
