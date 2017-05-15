'use strict';
angular.module('app').directive('conWarp',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/conwarp.html',
    scope:{
      data:'='
    }
  }
}]);
