'use strict';
angular.module('app').directive('conHead',['$stateParams','$state',function($stateParams,$state){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/conhead.html',
    scope:{
      bc:'=',
      text:"=",
      name:"=",
      is:"="
    },
    link:function($scope){
      $scope.back1=function(){
        window.history.back();
          //  $state.go('home',{cc:2});
      		}
    }
  }
}]);
