(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController() {
  var mv = this;
}

function MenuSearchService() {
  this.getMatchedMenuItems = function(searchTerm) {
    
  };
}

})();
