'use strict';
angular.module('app').controller('zhuche1Ctrl',['$stateParams','$scope','$state','$http',function($stateParams,$scope,$state,$http){
  $scope.back=function(){
         window.history.back();
  		}
  $scope.phone2=$stateParams.phone;
      $scope.zhuche1=function(){
        $http({
         method:"POST",
         url:url,
         data:"{\"FunName\":\"Set_Right_Code\",\"Params\": {\"DATA\":'"+$scope.phone2+"'}}",
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
      }
    $scope.zhuche2=function(){
      $http({
       method:"POST",
       url:"http://www.kingwant.com/App/App.ashx",
       data:"{\"FunName\":\"Add_User\",\"Params\": {\"PhoneNo\":'"+$scope.phone2+"',\"RightCode\":'"+$scope.yzm+"',\"EARA\":\"86\",\"PassWord\":'"+$scope.password1+"'}}",
       dataType:'json',
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     }).then(function(data2){
         if(data2.data.RET.DATA>=1)
         {
           alert("注册成功!");
         }
      });
    }
}]);
