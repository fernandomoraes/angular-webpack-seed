import angular from 'angular';

import States from './states';

const module = angular.module('profile', [])
	.config(States);

export default module;