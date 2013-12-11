'use strict';

var iartxControllers = angular.module('iartxApp');

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
    $scope.orderProp = 'name';
  }]);

 iartxControllers.controller('ArtistDetailCtrl', ['$scope', '$routeParams', 'Artists',
  	function($scope, $routeParams, Artist) {
  		$scope.data = {};
    	Artist.get({artistId: $routeParams.artistId}, function(response) {
    		$scope.data.artist = response;
    		$scope.mainImageUrl = response.artworks[0].images[0];
	   });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

 iartxControllers.controller('HeaderController', ['$scope', '$location',
 	function($scope, $location) {
		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		}
  }]);
