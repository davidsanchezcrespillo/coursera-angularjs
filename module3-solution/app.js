(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController() {
  var mv = this;

  mv.found = [];

  mv.removeItem = function(index) {
    
  }
}

function MenuSearchService() {
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

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
	scope: {
      found: '<',
	  onRemove: '&'
	}
  };
  
  return ddo;
}

})();
