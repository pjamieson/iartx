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
        Page.setDescription('Haitian Art for sale. Featuring paintings by the respected Haitian artist ' + $scope.data.artist.name + '.');
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
    Page.setDescription('Haitian Art offered for sale and a reference list of West Indian Literature.');
    //Page.setTitle('Haitian Art at the Internet Art Exchange');
    //Page.setDescription('Haitian Art and other Art of the Americas offered for sale.');
  }]);

iartxControllers.controller('SourcesCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle('West Indian Literature - Sources');
    Page.setDescription('Sources used in compiling our reference list of West Indian Literature.');
  }]);

iartxControllers.controller('NotesCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle('Haitian Art Collection Notes');
    Page.setDescription('Notes about our Haitian Art Collection, and our buying and selling of Haitian Art.');
  }]);

iartxControllers.controller('AboutCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle('WestIndiesBooks.com and iBookX.com - About');
    Page.setDescription('Technical notes on the development of WestIndiesBooks.com and iBookX.com.');
  }]);

iartxControllers.controller('ContactCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle('West Indian Literature - Contact');
    Page.setDescription('How to contact us to buy or sell Haitian Art or add a book to our reference list');
    //Page.setTitle('Internet Art Exchange - Contact');
    //Page.setDescription('How to contact us to buy or sell Haitian Art, or to learn more about listing your art on this site.');
  }]);

 