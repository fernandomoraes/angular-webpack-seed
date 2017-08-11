import angular from 'angular';

import States from './states';

const module = angular.module('dashboard', [])
	.config(States);

export default module;