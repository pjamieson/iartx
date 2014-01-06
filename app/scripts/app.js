'use strict';

angular.module('HashBangURLs', [])
  .config(['$locationProvider',
    function($location) {
       $location.hashPrefix('!');
     }]);

angular.module('iartxApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'iartxServices',
  'HashBangURLs'
])
  .config(function ($provide, $httpProvider) {
    
    // Intercept http calls.
    $provide.factory('MyHttpInterceptor', ['$q', '$location', function ($q, $location) {
      return {
        // On request success
        request: function (config) {
          //console.log(config); // Contains the data about the request before it is sent.

          var absURL = $location.absUrl();
          if (absURL.indexOf('?_escaped_fragment_=') > -1) {
            // Redirect search engine requests to snapshots
            absURL = absURL.replace("?_escaped_fragment_=", "snapshots");
            absURL = absURL.replace("artists/", "");
            absURL = absURL.replace("#!/", "");
            absURL = absURL+".html";
            absURL = absURL.replace("/.html", "/index.html");
            config.url = absURL;
          }
          //console.log(config.url);

          // Return the config or wrap it in a promise if blank.
          return config || $q.when(config);
        },
   
        // On request failure
        requestError: function (rejection) {
          //console.log(rejection); // Contains the data about the error on the request.
          
          // Return the promise rejection.
          return $q.reject(rejection);
        },
   
        // On response success
        response: function (response) {
          //console.log(response); // Contains the data from the response.
          
          // Return the response or promise.
          return response || $q.when(response);
        },
   
        // On response failture
        responseError: function (rejection) {
          //console.log(rejection); // Contains the data about the error.
          
          // Return the promise rejection.
          return $q.reject(rejection);
        }
      };
    }]);
   
    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('MyHttpInterceptor');
   
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'HomeCtrl'
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
        templateUrl: 'views/sources.html',
        controller: 'SourcesCtrl'
      })
      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
