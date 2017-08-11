import template from './admin.html';

export default function States ($stateProvider) {
	$stateProvider.state({
		name: 'admin',
		url: '/admin',
		templateUrl: template
	});
}

States.$inject = [
	'$stateProvider'
];
