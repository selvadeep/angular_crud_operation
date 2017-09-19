'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('sample')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '/',
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})

			.state('test', {
				url:'/test',
				templateUrl: 'app/modules/home/new_user.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'				
			})

			.state('edit_page', {
				url:'/edit_page/:id',
				templateUrl: 'app/modules/home/edit_user.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'				
			})
			.state('edit_list', {
				url:'/edited_list',
				templateUrl: 'app/modules/home/edited_list.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'				
			})
			
	}]);
