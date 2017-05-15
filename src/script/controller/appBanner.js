'use strict';
angular.module('app').directive('appBanner',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/appBanner.html',
  }
}]);
