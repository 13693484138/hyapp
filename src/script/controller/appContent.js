'use strict';
angular.module('app').directive('appContent',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/appContent.html',
  }
}]);
