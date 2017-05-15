angular.module("app").controller('contentCtrl',['$cookieStore','$http','$stateParams','$scope',function($cookieStore,$http,$stateParams,$scope){
  $scope.name=$stateParams.name;
  var userid=$cookieStore.get('userid');
  $scope.back=function(){
     window.history.back();
  };
  $http({
   method:'POST',
   url:"http://www.kingwant.com/App/App.ashx",
   data:"{\"Right_ID\":'"+userid+"',\"FunName\":\"Get_WenJi_DataList\",\"Params\":{\"TYPE\":'"+$scope.name+"',\"Page_Index\":\"1\",\"Page_Count\":\"9\"}}",
   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 }).then(function(data){
  $scope.list=data.data.RET.Sys_GX_WenJI;
  console.log(data);
   });
}])
