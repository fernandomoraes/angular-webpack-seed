import template from './profile.html';

export default function States ($stateProvider) {
	$stateProvider.state({
		name: 'profile',
		url: '/profile',
		templateUrl: template
	});
}

States.$inject = [
	'$stateProvider'
];