'use strict';
angular.module('app').controller('mecoCtrl',['$state','$scope','$cookieStore','$http',function($state,$scope,$cookieStore,$http){
       var userid=$cookieStore.get('userid');
       $http({
         method:'POST',
         url:'http://www.kingwant.com/App/App.ashx',
         data:"{\"Right_ID\":'"+userid+"',\"FunName\":\"Select_User\",\"Params\":{}}",
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
       }).then(function(data){
         console.log(data);
          $scope.user_uid=data.data.RET.Sys_GX_User.USER_UID;//用户ID
          $scope.user_name=data.data.RET.Sys_GX_User.USER_NAME;//用户名称
          $scope.user_pass=data.data.RET.Sys_GX_User.USER_PASS;//用户密码
          $scope.user_phone=data.data.RET.Sys_GX_User.USER_PHONE;//用户电话
          $scope.user_base_name=data.data.RET.Sys_GX_User.USER_BASE_NAME;//昵称
          $scope.user_sex=data.data.RET.Sys_GX_User.USER_SEX;//性别
          $scope.user_content=data.data.RET.Sys_GX_User.USER_CONTENT;//简介
          $scope.user_city=data.data.RET.Sys_GX_User.USER_CITY;//地区
          $scope.user_add_date=data.data.RET.Sys_GX_User.USER_ADD_DATE;//创建时间
          $scope.user_last_date=data.data.RET.Sys_GX_User.USER_LAST_DATE;//创建时间
          $scope.user_is_delete=data.data.RET.Sys_GX_User.USER_IS_DELETE;//0
          $scope.user_birthday=data.data.RET.Sys_GX_User.USER_BIRTHDAY;//用户生日
          $scope.user_tx=data.data.RET.Sys_GX_User.USER_TX;
          $scope.user_img=data.data.RET.Sys_GX_User.USER_IMG;
       });
       $scope.back1=function(){
        $state.go('home');
       }
       $scope.tuichu=function(){
         $http({
           method:'POST',
           url:'http://www.kingwant.com/App/App.ashx',
           data:"{\"Right_ID\":'"+userid+"',\"FunName\":\"Exit_User\",\"Params\":{}}",
           headers:{'Content-Type':'application/x-www-form-urlencoded'},
         }).then(function(data){
           if(data.data.RET.DATA==1){
            $state.go('loging');
           }
           else{
             alert("退出登录失败!");
           }
         });
       }
       $scope.baochun=function(){
         $http({
           method:'POST',
           url:'http://www.kingwant.com/App/App.ashx',
           data:"{\"Right_ID\":'"+userid+"',\"FunName\":\"Update_User\",\"Params\":{\"Sys_GX_User\":{\"USER_UID\":'"+$scope.user_uid+"',\"USER_BASE_NAME\":'"+$scope.user_base_name+"',\"USER_IMG\":'"+$scope.user_img+"',\"USER_TX\":'"+$scope.user_tx+"',\"USER_BIRTHDAY\":'"+$scope.user_birthday+"',\"USER_NAME\":'"+
           $scope.user_name+"',\"USER_PASS\":'"+$scope.user_pass+"',\"USER_PHONE\":'"+$scope.user_phone+"',\"USER_SEX\":'"+$scope.user_sex+"',\"USER_CONTENT\":'"+$scope.user_content+"',\"USER_CITY\":'"+$scope.user_city+"',\"USER_ADD_DATE\":'"+$scope.user_add_date+"',\"USER_IS_DELETE\":'"+$scope.user_is_delete+"',\"USER_LAST_DATE\":'"+$scope.user_last_date
           +"',\"USER_BIRTHDAY\":'"+$scope.user_birthday+"'}}}",
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
         }).then(function(data){
          if(data.data.RET.DATA==1){
            alert("更新成功!");
          }
          else if(data.data.RET.DATA==0) {
            alert("更新失败!");
          }
          else {
            alert("参数传递失败!");
          }
         });
       }
}]);
