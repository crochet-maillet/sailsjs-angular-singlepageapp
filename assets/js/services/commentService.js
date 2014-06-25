angular.module('commentService', [])

	.factory('Comment', function($http) {

		return {
			get : function() {
				return $http.get('/comment');
			},
			show : function(id) {
				return $http.get('/comment/' + id);
			},
			save : function(commentData) {
				return $http({
					method: 'POST',
					url: '/comment',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
					data: $.param(commentData)
				});
			},
			destroy : function(id) {
				return $http.delete('/comment/' + id);
			}
		}

	});
