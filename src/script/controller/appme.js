'use strict';
angular.module('app').directive('appMe',['$rootScope','$http','$cookieStore',function($rootScope,$http,$cookieStore){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/appme.html',
    link:function($scope){
      var userid1=$cookieStore.get('userid')||$rootScope.Phoneuserid;
      $http({
      method:'post',
      url:url,
      data:"{\"Right_ID\":'"+userid1+"',\"FunName\":\"Select_User\",\"Params\":{}}",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(function(data){
      console.log(data);
        $scope.user_base_name=data.data.RET.Sys_GX_User.USER_BASE_NAME;
        $scope.user_content=data.data.RET.Sys_GX_User.USER_CONTENT;
      })
    }
  }
}]);
