'use strict';
angular.module('app').controller('zhucheCtrl',['$scope','$http','$location','$state',function($scope,$http,$location,$state){
      $scope.back=function(){
         window.history.back();
  		};
      $scope.zhuche=function(){
        $state.go('zhuche1',{phone:$scope.phone1});
      }
}]);
