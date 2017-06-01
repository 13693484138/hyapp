'use strict';
angular.module('app').controller('muluCtrl',['$state','$scope','$stateParams','$http',function($state,$scope,$stateParams,$http){
  $scope.wid=$stateParams.wid;
  $scope.iis=$stateParams.iis;
  $scope.is=true;
if($scope.iis=='WJ'){
  $scope.meList=function(item,item1){
      $state.go('yuedu',{wid:$scope.wid,obj:$scope.obj,name:item});
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
      $scope.obj=data.data.RET.Sys_GX_ZJ;
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
else if($scope.iis=='KC'){
  $scope.misList=function(oa){
    $state.go('yuedu',{wid:$scope.wid,obj:$scope.data,name:oa});
  };
     $http({
       method:'post',
       url:'http://www.kingwant.com/App/App.ashx',
       data:"{\"FunName\":\"Get_KC_DataList\",\"Params\":{\"KC_ID\":'"+$scope.wid+"',\"Page_Index\":\"1\",\"Page_Count\":\"1000\"}}",
       dataType:'json',
       headers:{'Content-Type':'application/x-www-form-urlencoded'},
     }).then(function(data){
       $scope.detimg=data.data.RET.Sys_KC[0].KC_IMG;
       $scope.wj_content=data.data.RET.Sys_KC[0].KC_CONTENT;
       $scope.wj_type=data.data.RET.Sys_KC[0].KC_TYPE;
       $scope.wj_user=data.data.RET.Sys_KC[0].KC_USER;
       $scope.wj_name=data.data.RET.Sys_KC[0].KC_NAME;
       $scope.wj_language=data.data.RET.Sys_KC[0].KC_LANGUAGE;
       $scope.wj_title_img=data.data.RET.Sys_KC[0].KC_TITLE_IMG;
     });
     $http({
       method:'post',
       url:'http://www.kingwant.com/App/App.ashx',
       data:"{\"FunName\":\"Get_ZKC_DataList\",\"Params\":{\"KC_ID\":'"+$scope.wid+"',\"Page_Index\":\"1\",\"Page_Count\":\"1000\"}}",
       dataType:'json',
       headers:{'Content-Type':'application/x-www-form-urlencoded'},
     }).then(function(data){
      $scope.data=data.data.RET.Sys_KCXJ;
       var arr1=[];
       for(var i=0;i<data.data.RET.Sys_KCXJ.length;i++){
            arr1.push(data.data.RET.Sys_KCXJ[i].KCXJ_TYP1);
       }
       $scope.itemc=arr1;
        //  if(data.data.)
     });
}
else{
  alert("参数传递失误!");
}
}]);
