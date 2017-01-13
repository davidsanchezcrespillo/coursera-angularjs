(function () {
  'use strict';

  // Routes of the application.

  angular.module("MenuApp")
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Default route
    $urlRouterProvider
    .otherwise('/');

    $stateProvider

    // Home route
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })

    // Categories
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

    // Items of a given category
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

}) ();
