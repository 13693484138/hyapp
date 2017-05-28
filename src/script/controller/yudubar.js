'use strict';
angular.module('app').directive('yuduBar',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/yudubar.html',
  }
}]);
