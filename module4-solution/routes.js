(function () {
  'use strict';

  angular.module("MenuApp")
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .otherwise('/');

    $stateProvider
    .state('view1', {
      url: '/',
      templateUrl: 'view1.html'
    });
  }

}) ();
