(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var mv = this;

  mv.toBuyList = ShoppingListCheckOffService.toBuyList;

  mv.buyItem = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var mv = this;

  mv.boughtList = ShoppingListCheckOffService.boughtList;
}

function ShoppingListCheckOffService() {
  this.toBuyList = [
    { name: "cookies", quantity: 10 },
    { name: "carrots", quantity: 20 },
    { name: "apples", quantity: 15 },
    { name: "bananas", quantity: 5 },
    { name: "watermelons", quantity: 25 }
  ];
  this.boughtList = [];

  this.buyItem = function(index) {
    var itemToMove = this.toBuyList.splice(index, 1);
    // splice() returns an Array.
    this.boughtList.push(itemToMove[0]);
  };
}

})();
