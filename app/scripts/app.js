'use strict';

angular.module('iartxApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'iartxServices'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/artists/:artistId', {
        templateUrl: 'views/artist-detail.html',
        controller: 'ArtistDetailCtrl'
      })
      .when('/booklist', {
        templateUrl: 'views/author-list.html',
        controller: 'AuthorListCtrl'
      })
      .when('/sources', {
        templateUrl: 'views/sources.html'
      })
      .when('/notes', {
        templateUrl: 'views/notes.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
