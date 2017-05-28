'use strict';
angular.module('app').directive('mlList',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/mllist.html',
    scope:{
      list:"="

    }
  }
}]);
