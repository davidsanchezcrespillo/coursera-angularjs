(function () {
  'use strict';

  // Routes of the application.

  angular.module("MenuApp")
  .config(RoutesConfig);

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
      templateUrl: 'templates/categories.html'
    })

    .state('items', {
      url: '/items',
      templateUrl: 'templates/items.html'
    });
  }

}) ();
