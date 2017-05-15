'use strict';
angular.module('app').directive('muiBanner',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/muibannner.html',
  }
}]);
