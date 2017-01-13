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
      controller: 'CategoriesController as categoriescontroller',
      resolve: {
        categoriesList: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{category}',
      templateUrl: 'templates/items.html',
      controller: 'ItemsController as itemscontroller',
      resolve: {
        category: ['$stateParams', function($stateParams) {
          return $stateParams.category;
        }],
        itemsList: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    });
  }

  // Inject the data retrieved by the service into the CategoriesController.
  CategoriesController.$inject = ['categoriesList'];
  function CategoriesController(categoriesList) {
    var ctrl = this;
    ctrl.categoriesList = categoriesList.data;
  }

  // Inject the data retrieved by the service into the ItemsController.
  ItemsController.$inject = ['category', 'itemsList'];
  function ItemsController(category, itemsList) {
    var ctrl = this;
    console.log("Category is ", category);
    ctrl.category = category;
    ctrl.itemsList = itemsList.data.menu_items;
  }
}) ();
