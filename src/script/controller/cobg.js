'use strict';
angular.module('app').directive('cobg',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/conBg.html',
  }
}]);
