'use strict';
angular.module('app').directive('appMe',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/appme.html',
  }
}]);
