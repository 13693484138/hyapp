'use strict';
angular.module('app').controller('muluCtrl',['$state','$scope','$stateParams','$http',function($state,$scope,$stateParams,$http){
  $scope.wid=$stateParams.wid;
  $scope.iis=$stateParams.iis;
  if($scope.iis==1){
  $scope.meList=function(item,item1){
    if($scope.len>1){
      $state.go('yuedu',{wid:$scope.wid,wj:item1,name:item});
    }
    else {
        $state.go('yuedu',{wid:$scope.wid,name:item});
    }
  }
  $scope.misList=function(oa){
    $scope.oa1=oa;
    $http({
      method:'post',
      url:"http://www.kingwant.com/App/App.ashx",
      data:"{\"FunName\":\"Get_WJ_ZJ_TYPE_DataList\",\"Params\":{\"GJ_WJ_ID\":'"+$scope.wid+"',\"GJ_WJ_ZY_TYPE\":'"+$scope.itemc[oa]+"',\"Page_Index\":\"1\",\"Page_Count\":\"100000\"}}",
      dataType:'json',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
    }).then(function(data){
    $scope.itemz=data.data.RET.Sys_GX_ZJ;
    $scope.len=data.data.RET.Sys_GX_ZJ.length;
    })
  };
  $http({
    method:'post',
    url:"http://www.kingwant.com/App/App.ashx",
    data:"{\"FunName\":\"Get_WJ_ZJ_TYPE\",\"Params\":{\"GJ_WJ_ID\":'"+$scope.wid+"'}}",
    dataType:'json',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
  }).then(function(data){
      var arr = data.data.RET.DATA.split(',');
      $scope.itemc=arr;

  });
}
else if($scope.iis==2){
    $scope.misList=function(oa){
        $state.go('yuedu',{wid:$scope.wid,wj:25,name:oa});
    }
    $http({
      method:'post',
      url:"http://www.kingwant.com/App/App.ashx",
     data:"{\"FunName\":\"Get_ZKC_DataList\",\"Params\":{\"KC_ID\":'"+$scope.wid+"',\"Page_Index\":\"1\",\"Page_Count\":\"100000\"}}",
      dataType:'json',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
    }).then(function(data){
        $scope.len=data.data.RET.Sys_KCXJ.length;
        var itemc=$scope.itemc=[];
      for(var i=0;i<$scope.len;i++){

        $scope.itemc.push(data.data.RET.Sys_KCXJ[i].KCXJ_NAME);
      }
    });
}
else{
  alert("参数传递有误!")
}
}]);
