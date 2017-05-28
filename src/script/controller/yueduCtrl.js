'use strict';
angular.module('app').controller('yueduCtrl',['$state','$scope','$stateParams','$http',function($state,$scope,$stateParams,$http){
   $scope.wid=$stateParams.wid;
   $scope.name=$stateParams.name;
   $scope.wj=$stateParams.wj;
   if($scope.wj==25){
     $scope.iis=2;
     $http({
       method:'post',
       url:"http://www.kingwant.com/App/App.ashx",
       data:"{\"FunName\":\"Get_ZKC_DataList\",\"Params\":{\"KC_ID\":'"+$scope.wid+"',\"Page_Index\":\"1\",\"Page_Count\":\"100000\"}}",
       headers:{'Content-Type':'application/x-www-form-urlencoded'},
     }).then(function(data){
       console.log(data);
       console.log($scope.name);
       $scope.hylist=data.data.RET.Sys_KCXJ;
       $scope.hihed="display:none";
       if($scope.name>=0&&$scope.name.length>0){
         if(data.data.RET.Sys_KCXJ[$scope.name].KCXJ_MP3.length>0){
           $scope.hyMP3='http://www.kingwant.com'+data.data.RET.Sys_KCXJ[$scope.name].KCXJ_MP3;
           $scope.hihed="display:block";
           $scope.content=data.data.RET.Sys_KCXJ[$scope.name].KCXJ_CONTENT;
           $scope.zname=data.data.RET.Sys_KCXJ[$scope.name].KCXJ_NAME;
         }
         else {
           $scope.content=data.data.RET.Sys_KCXJ[$scope.name].KCXJ_CONTENT;
           $scope.zname=data.data.RET.Sys_KCXJ[$scope.name].KCXJ_NAME;
         }
       }
       else {
         $scope.content=data.data.RET.Sys_KCXJ[0].KCXJ_CONTENT;
         $scope.zname=data.data.RET.Sys_KCXJ[0].KCXJ_NAME;
       }
     })
   }
   else {
     $scope.iis=1;
     $http({
       method:'post',
       url:"http://www.kingwant.com/App/App.ashx",
       data:"{\"FunName\":\"Get_WJ_ZJ_TYPE_DataList\",\"Params\":{\"GJ_WJ_ID\":'"+$scope.wid+"',\"GJ_WJ_ZY_TYPE\":'"+$scope.wj+"',\"Page_Index\":\"1\",\"Page_Count\":\"100000\"}}",
       dataType:'json',
       headers:{'Content-Type':'application/x-www-form-urlencoded'},
     }).then(function(data){
       $scope.hylist=data.data.RET.Sys_GX_ZJ;
       $scope.hihed="display:none";
       if($scope.name>=0){
         if(data.data.RET.Sys_GX_ZJ[$scope.name].GJ_MP3.length>0){
           $scope.hyMP3='http://www.kingwant.com'+data.data.RET.Sys_GX_ZJ[$scope.name].GJ_MP3;
           $scope.hihed="display:block";
           $scope.content=data.data.RET.Sys_GX_ZJ[$scope.name].GJ_CONTENT_CN;
           $scope.zname=data.data.RET.Sys_GX_ZJ[$scope.name].GJ_NAME;
         }
         else {
           $scope.content=data.data.RET.Sys_GX_ZJ[$scope.name].GJ_CONTENT_CN;
           $scope.zname=data.data.RET.Sys_GX_ZJ[$scope.name].GJ_NAME;
         }
       }
       else {
         $scope.content=data.data.RET.Sys_GX_ZJ[0].GJ_CONTENT_CN;
         $scope.zname=data.data.RET.Sys_GX_ZJ[0].GJ_NAME;
       }
       // 单个或整个列表
     })
   }

  var ii=parseInt($scope.name)>0?parseInt($scope.name):0;
   $scope.xyz=function(){
           ii+=1;
           if(ii>=$scope.hylist.length){
             alert("主公!最后一张了");
           }
           else {
             if($scope.wj==25){
               $scope.content=$scope.hylist[ii].KCXJ_CONTENT;
               $scope.zname=$scope.hylist[ii].KCXJ_NAME;
               $scope.hyMP3='http://www.kingwant.com'+$scope.hylist[ii].KCXJ_MP3;
             }
             else {
               $scope.content=$scope.hylist[ii].GJ_CONTENT_CN;
               $scope.zname=$scope.hylist[ii].GJ_NAME;
               $scope.hyMP3='http://www.kingwant.com'+$scope.hylist[ii].GJ_MP3;
             }

           }
   }
  //  下一张的方法
    $scope.syz=function(){
    ii+=-1;
    if(ii<0){
      alert("主公!第一张了");
    }
    else {
      if($scope.wj==25){
        $scope.content=$scope.hylist[ii].KCXJ_CONTENT;
        $scope.zname=$scope.hylist[ii].KCXJ_NAME;
        $scope.hyMP3='http://www.kingwant.com'+$scope.hylist[ii].KCXJ_MP3;
      }
      else {
        $scope.content=$scope.hylist[ii].GJ_CONTENT_CN;
        $scope.zname=$scope.hylist[ii].GJ_NAME;
        $scope.hyMP3='http://www.kingwant.com'+$scope.hylist[ii].GJ_MP3;
      }

    }
}
//上一张的方法


}]);
