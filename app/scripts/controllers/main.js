'use strict';

var iartxControllers = angular.module('iartxApp');

iartxControllers.controller('TitleCrtl', ['$scope', 'Page',
  function($scope, Page) {
    $scope.Page = Page;
  }]);

iartxControllers.controller('HeaderController', ['$scope', '$location',
 	function($scope, $location) {
		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		}
  }]);

iartxControllers.controller('AuthorListCtrl', ['$scope', 'Authors', 'Page',
 function($scope, Authors, Page) {
    $scope.data = {};
    Authors.query(function(response) {
    	$scope.data.authors = response;
      Page.setTitle('West Indian Literature - Booklist');
    });
  }]);

iartxControllers.controller('ArtistListCtrl', ['$scope', 'Artists',
 function($scope, Artist) {
		$scope.data = {};
    Artist.query(function(response) {
    	$scope.data.artists = response;
    });
  }]);

 iartxControllers.controller('ArtistDetailCtrl', ['$scope', '$routeParams', 'Artists', 'Page',
  	function($scope, $routeParams, Artist, Page) {
  		$scope.data = {};
    	Artist.get({artistId: $routeParams.artistId}, function(response) {
    		$scope.data.artist = response;
        Page.setTitle($scope.data.artist.name + ' - Artist - ' + $scope.data.artist.country);
	   });
  }]);

iartxControllers.controller('ArtworkDetailCtrl', ['$scope',
 	function($scope) {
 		$scope.mainImageUrl = $scope.artwork.images[0];
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

iartxControllers.controller('HomeCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle('Haitian Art and West Indian Literature');
  }]);

iartxControllers.controller('SourcesCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle('West Indian Literature - Sources');
  }]);

iartxControllers.controller('NotesCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle('Haitian Art Collection Notes');
  }]);

iartxControllers.controller('AboutCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle('West Indian Literature - About');
  }]);

iartxControllers.controller('ContactCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle('West Indian Literature - Contact');
  }]);

 