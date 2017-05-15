'use strict';
angular.module('app').controller('passwordCtrl',['$scope','$http',function($scope,$http){
  $scope.back=function(){
         window.history.back();
  		}
  $scope.password=function(){
    $http({
      method:"POST",
      url:"http://www.kingwant.com/App/App.ashx",
      data:"{\"FunName\":\"Get_Pass\",\"Params\": {\"PhoneNo\":'"+$scope.phonpass+"',\"RightCode\":'"+$scope.passyz+"',\"EARA\":\"86\",\"PassWord\":'"+$scope.newpass+"'}}",
      dataType:'json',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(function(data){
       if(data.data.RET.DATA==1){
         alert("密码修改成功!");
       }
       else{
         alert("密码修改失败!");
       }
    });
  }
}]);
