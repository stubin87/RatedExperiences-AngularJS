angular.module('ratedExpApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
				controller: 'ExpTypesController',
				templateUrl: 'views/expTypesList.html' 
			})
			.when('/expType/:id', {
				controller: 'ExpTypesController',
				templateUrl: 'views/expType.html'
			})
            .otherwise({ redirectTo: '/' });
    });