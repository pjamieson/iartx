'use strict';

var iartxControllers = angular.module('iartxApp');

iartxControllers.controller('HeaderController', ['$scope', '$location',
 	function($scope, $location) {
		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		}
  }]);

iartxControllers.controller('AuthorListCtrl', ['$scope', 'Authors',
 function($scope, Authors) {
    $scope.data = {};
    Authors.query(function(response) {
    	$scope.data.authors = response;
    });
  }]);

iartxControllers.controller('ArtistListCtrl', ['$scope', 'Artists',
 function($scope, Artist) {
		$scope.data = {};
    Artist.query(function(response) {
    	$scope.data.artists = response;
    });
  }]);

 iartxControllers.controller('ArtistDetailCtrl', ['$scope', '$routeParams', 'Artists',
  	function($scope, $routeParams, Artist) {
  		$scope.data = {};
    	Artist.get({artistId: $routeParams.artistId}, function(response) {
    		$scope.data.artist = response;
	   });
  }]);

iartxControllers.controller('ArtworkDetailCtrl', ['$scope',
 	function($scope) {
 		$scope.mainImageUrl = $scope.artwork.images[0];
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

 