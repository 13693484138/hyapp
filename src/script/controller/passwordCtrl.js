'use strict';
angular.module('app').controller('passwordCtrl',['$state','$scope','$http',function($state,$scope,$http){
  $scope.back=function(){
         $window.history.back();
  		}
  $scope.yz_password=function(){
    $http({
     method:"POST",
     url:url,
     data:"{\"FunName\":\"Set_Right_Code\",\"Params\": {\"DATA\":'"+$scope.phonpass+"'}}",
     dataType:'json',
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
   }).then(function(data){
     if(data.data.RET.DATA==1){
       alert("验证码已发送!");
     }
     else {
       alert("验证码发送失败!");
     }
    });
  };
  $scope.password=function(){
    $http({
      method:"POST",
      url:"http://www.kingwant.com/App/App.ashx",
      data:"{\"FunName\":\"Get_Pass\",\"Params\": {\"PhoneNo\":'"+$scope.phonpass+"',\"RightCode\":'"+$scope.passyz+"',\"EARA\":\"中国\",\"PassWord\":'"+$scope.newpass+"'}}",
      dataType:'json',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(function(data){
      console.log(data);
       if(data.data.RET.DATA==1){
         alert("验证码错误!");

       }
       else if(data.data.RET.DATA==0){
         alert("密码修改失败!");
       }
       else {
         alert("密码修改成功!");
         $state.go('loging');
       }
    });
  }
}]);
