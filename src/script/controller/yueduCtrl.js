'use strict';
angular.module('app').controller('yueduCtrl',['$state','$scope','$stateParams','$http',function($state,$scope,$stateParams,$http){
       $scope.wid=$stateParams.wid;
       $scope.name=$stateParams.name;
       $scope.obj=$stateParams.obj;
       $scope.hylist=$scope.obj;
       $scope.back1=function(){
         $state.go('details',{wid:$scope.wid,name:$scope.ysis});
       }

       if($scope.obj[0].KCXJ_ID){
         $scope.ysis='KC';
       }
       else {
         $scope.ysis='WJ';
       }
       $scope.hihed="display:none";
         if($scope.obj[$scope.name].GJ_MP3&&$scope.obj[$scope.name].GJ_MP3.length>0){
           $scope.hyMP3='http://www.kingwant.com'+$scope.obj[$scope.name].GJ_MP3;
           $scope.hihed="display:block";
           $scope.content=$scope.obj[$scope.name].GJ_CONTENT_CN||$scope.obj[$scope.name].KCXJ_CONTENT;
           $scope.zname=$scope.obj[$scope.name].GJ_NAME||$scope.obj[$scope.name].KCXJ_NAME;
         }
         else{
           $scope.content=$scope.obj[$scope.name].GJ_CONTENT_CN||$scope.obj[$scope.name].KCXJ_CONTENT;
           $scope.zname=$scope.obj[$scope.name].GJ_NAME||$scope.obj[$scope.name].KCXJ_NAME;
         }
  var ii=parseInt($scope.name)>0?parseInt($scope.name):0;
   $scope.xyz=function(){
           ii+=1;
           if(ii>=$scope.hylist.length){
             alert("主公!最后一张了");
           }
           else {
               $scope.content=$scope.hylist[ii].GJ_CONTENT_CN||$scope.hylist[ii].KCXJ_CONTENT;
               $scope.zname=$scope.hylist[ii].GJ_NAME||$scope.hylist[ii].KCXJ_NAME;
               $scope.hyMP3='http://www.kingwant.com'+$scope.hylist[ii].GJ_MP3||'http://www.kingwant.com'+$scope.hylist[ii].KCXJ_MP3;
           }
   }
  //  下一张的方法
    $scope.syz=function(){
    ii+=-1;
    if(ii<0){
      alert("主公!第一张了");
    }
    else {
        $scope.content=$scope.hylist[ii].GJ_CONTENT_CN||$scope.hylist[ii].KCXJ_CONTENT;
        $scope.zname=$scope.hylist[ii].GJ_NAME||$scope.hylist[ii].KCXJ_NAME;
        $scope.hyMP3='http://www.kingwant.com'+$scope.hylist[ii].GJ_MP3||'http://www.kingwant.com'+$scope.hylist[ii].KCXJ_MP3;
    }
}
//上一张的方法


}]);
