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
    mv.found = MenuSearchService.getMatchedMenuItems(mv.searchTerm);
  }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  this.getMatchedMenuItems = function(searchTerm) {
    var endPointUrl = ApiBasePath + "menu_items.json";
	var response = $http({
      method: "GET",
	  url: endPointUrl
	});
    return response.then(function (result) {
      // process result and only keep items that match
      var foundItems = this.processMenuItems(result.data.menu_items, searchTerm);

	  console.log(foundItems);
      // return processed items
      return foundItems;
    });    
  };
  
  this.processMenuItems = function(menuItems, searchTerm) {
    return menuItems;
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
