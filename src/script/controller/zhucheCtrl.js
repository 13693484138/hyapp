'use strict';
angular.module('app').controller('zhucheCtrl',['$scope','$http','$location','$state',function($scope,$http,$location,$state){
      $scope.back=function(){
         window.history.back();
  		};
      $scope.zhuche=function(){
        $http({
          method:"post",
          url:"http://www.kingwant.com/App/App.ashx",
          data:"{\"FunName\":\"Get_Phone_List\",\"Params\":{\"Phones\":'"+$scope.phone1+"'}}",
          dataType:'json',
          headers:{'Content-Type':'application/x-www-form-urlencoded'},
        }).then(function(data){
          if(data.data.RET.DATA=="No"){
          $state.go('zhuche1',{phone:$scope.phone1});
        }
        else {
          alert("此用户已经注册!");
        }
        });

      }
}]);
