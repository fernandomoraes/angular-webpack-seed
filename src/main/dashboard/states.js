import template from './dashboard.html';

export default function States ($stateProvider) {
	$stateProvider.state({
		name: 'dashboard',
		url: '/dashboard',
		templateUrl: template
	});
};

States.$inject = [
	'$stateProvider'
];