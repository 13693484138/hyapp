'use strict';
angular.module('app').directive('conHead',['$stateParams',function($stateParams){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/conhead.html',
    scope:{
      bc:'=',
      text:"=",
      name:"="
    },
    link:function($scope){
      $scope.back1=function(){
             window.history.back();
      		}
    }
  }
}]);
