import angular from 'angular';

import menuComponent from './menu.component';

const module = angular.module('menu', [])
	.component('menu', menuComponent);

export default module;