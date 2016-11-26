import angular from 'angular';
import '../style/app.scss';
import {AppCtrl} from './app.controller'

const app = {
  template: require('./app.html'),
  controller: 'AppCtrl',
  controllerAs: 'app'
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .component('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;