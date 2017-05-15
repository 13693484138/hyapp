'use strict';
angular.module('app').directive('conHead',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/conhead.html',
  }
}]);
