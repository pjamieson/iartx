'use strict';

angular.module('iartxServices', ['ngResource'])

	.factory('Authors', function($resource){
	    return $resource('data/authors/authors.json', {});
	  })

	.factory('Artists', function($resource){
	    return $resource('data/artists/:artistId.json', {}, {
	      query: {method:'GET', params:{artistId:'artists'}, isArray:true}
	    });
	  });
