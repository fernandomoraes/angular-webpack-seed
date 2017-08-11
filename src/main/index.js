import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import States from './states';

import menu from './menu';
import admin from './admin';
import dashboard from './dashboard';
import profile from './profile';

const module = angular.module('main', [
	uiRouter,
	menu.name,
	admin.name,
	dashboard.name,
	profile.name
]);

module.config(States);