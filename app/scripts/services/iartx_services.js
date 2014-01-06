'use strict';

angular.module('iartxServices', ['ngResource'])

	.factory('Page', function(){
		var title = '';
	    return {
	    	title: function() { return title; },
	    	setTitle: function(newTitle) { title = newTitle; }
	    };
	  })

	.factory('Authors', function($resource){
	    return $resource('data/authors/authors.json', {});
	  })

	.factory('Artists', function($resource){
	    return $resource('data/artists/:artistId.json', {}, {
	      query: {method:'GET', params:{artistId:'artists'}, isArray:true}
	    });
	  });
