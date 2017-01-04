(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);
//.directive('foundItems', FoundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var mv = this;

  mv.found = [];

  mv.removeItem = function(index) {
    
  }

  mv.getMatchedMenuItems = function(searchTerm) {
    return MenuSearchService.getMatchedMenuItems(searchTerm);
  }

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  this.getMatchedMenuItems = function(searchTerm) {
    var endPointUrl = "https://davids-restaurant.herokuapp.com/menu_items.json";
    return $http(endPointUrl).then(function (result) {
      // process result and only keep items that match
      var foundItems = result;

	  console.log(foundItems);
      // return processed items
      return foundItems;
    });    
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
