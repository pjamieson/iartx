'use strict';

angular.module('iartxServices', ['ngResource'])

	.factory('Page', function(){
		var title = '';
		var description = '';
	    return {
	    	title: function() { return title; },
	    	description: function() { return description; },
	    	setTitle: function(newTitle) { title = newTitle; },
	    	setDescription: function(newDescription) { description = newDescription; }
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
