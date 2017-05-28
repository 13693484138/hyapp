'use strict';
angular.module('app').controller('homeCtrl',['$state','$scope','$cookieStore','$http',function($state,$scope,$cookieStore,$http){
  var ys = $scope.ys = {};
        ys.activeTab=1;
        ys.tab=2;
        $scope.content=function(name){
          $state.go('content',{name:name});
        };
        var gallery = mui('.mui-slider');
  var userid=$cookieStore.get('userid');
  $scope.banner=function(index){
    var is=$scope.li[index].ADV_URL;
    var isON=is.substring(0,2);
    var iszhe=is.substring(3);
        if(isON=='WJ'){
        $state.go('yuedu',{wid:iszhe,name:0});
        }
        else if(isON=='KC'){
        $state.go('yuedu',{wid:iszhe,wj:25});
        }
        else{
          alert("参数传递有错!");
        }
  }
  $http({
  method:'POST',
  url:"http://www.kingwant.com/App/App.ashx",
  data:"{\"FunName\":\"Get_ADVERTISEMENT_DataList\",\"Params\":{\"Page_Index\":\"1\",\"Page_Count\":\"15\"}}",
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
}).then(function(data){
  console.log(data);
 $scope.li=data.data.RET.SYS_ADVERTISEMENT;
  });
  //主页banner图的http
  $http({
    method:'POST',
    url:"http://www.kingwant.com/App/App.ashx",
    data:"{\"FunName\":\"Get_KC_DataList\",\"Params\":{\"KC_ID\":\"\",\"Page_Index\":\"1\",\"Page_Count\":\"100\"}}",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).then(function(data){
  $scope.li1=data.data.RET.Sys_KC;
  $scope.kcid=data.data.RET.Sys_KC[0].KC_ID;
  });
}]);
