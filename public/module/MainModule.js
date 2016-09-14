/**
 * http://usejsdoc.org/
 */
var mainModuleName = 'MainModule';

var mainAppModule = angular.module(mainModuleName,[]);

mainAppModule.controller('mainCtrl', MainController);
mainAppModule.controller('dataCtrl', DataController);
mainAppModule.controller('checkCtrl', CheckController);
//mainAppModule.factory('userService', UserService);
