'use strict';
angular.module('app').directive('yudu',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/yudu.html',
    scope:{
      content:"="
    }
  }
}]);
