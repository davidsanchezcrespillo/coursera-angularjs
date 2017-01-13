(function () {
  'use strict';

  // Routes of the application.

  angular.module("MenuApp")
  .config(RoutesConfig)
  .controller('CategoriesController', CategoriesController)
  .controller('ItemsController', ItemsController);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.html',
      controller: 'CategoriesController as categoriescontroller'
      //resolve: {
        //categoriesList: ['MenuDataService', function(menuDataService) {
        //  return menuDataService.getAllCategories();
        //}]
        //categoriesList: ['one', 'two']
      //}
    })

    .state('items', {
      url: '/items/{category}',
      templateUrl: 'templates/items.html',
      controller: 'ItemsController as itemscontroller',
      resolve: {
        category: ['$stateParams', function($stateParams) {
          return $stateParams.category;
        }]
      }
    });
  }

  // Inject the data retrieved by the service into the CategoriesController.
  CategoriesController.$inject = ['MenuDataService'];
  function CategoriesController(MenuDataService) {
    var ctrl = this;
    var categoriesPromise = MenuDataService.getAllCategories();
    categoriesPromise.then(function(result) {
      ctrl.categoriesList = result.data;
      console.log(ctrl.categoriesList);
    },
    function(reason) {
      console.log("getAllCategories failed: ", reason);
    });
  }

  // Inject the data retrieved by the service into the ItemsController.
  ItemsController.$inject = ['MenuDataService', 'category'];
  function ItemsController(MenuDataService, category) {
    var ctrl = this;
    console.log("Category is ", category);
    ctrl.category = category;
    var itemsPromise = MenuDataService.getItemsForCategory(category);
    itemsPromise.then(function(result) {
      ctrl.itemsList = result.data.menu_items;
      console.log('Items list:' , ctrl.itemsList);
    },
    function(reason) {
      console.log("getItemsForCategory failed: ", reason);
    });
  }
}) ();
