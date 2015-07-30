/*jslint browser: true, white: true*/
/*global angular, console, alert*/

(function () {
  'use strict';
  var app = angular.module('FullAdder');

  // routing
  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('fulladder', {
      url: '/fulladder',
      controller: 'FullAdderController',
      templateUrl: 'partials/fulladder.html'
    })
    .state('fulladder4bit', {
      url: '/fulladder4bit',
      templateUrl: 'partials/fulladder4bit.html'
    })
    .state('subtractor', {
      url: '/subtractor',
      templateUrl: 'partials/subtractor.html'
    })
    .state('subtractor4bit', {
      url: '/subtractor4bit',
      templateUrl: 'partials/subtractor4bit.html'
    });

  });

}());
