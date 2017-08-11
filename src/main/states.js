import template from './welcome.html';

export default function States ($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/welcome');

	$stateProvider
		.state('welcome', {
			name: 'welcome',
			url: '/welcome',
			templateUrl: template 
		});

};

States.$inject = [
	'$urlRouterProvider',
	'$stateProvider'
];