import angular from 'angular';

import States from './states';

const module = angular.module('admin', [])
	.config(States);

export default module;