'use strict';
angular.module('app').directive('yinyue',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/yinyue.html',
    scope:{
      yin:"="
    }
  }
}]);
