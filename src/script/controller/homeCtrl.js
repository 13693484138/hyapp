'use strict';
angular.module('app').controller('homeCtrl',['$state','$scope','$cookieStore','$http',function($state,$scope,$cookieStore,$http){
  var ys = $scope.ys = {};
        $scope.cc=tank;
        ys.tab=2;
        ys.activeTab=1;
        $scope.content=function(name){
          $state.go('content',{name:name,ide:ys.activeTab});
        };
        // 八卦
        $scope.liff=1;
        $scope.songkai=function(){
        var  test1=$("#test1");
         var test1l=$("#test1").css('left');
         var test1t=$("#test1").css('top');
         var test2l=$("#test2").css('left');
         var test2t=$("#test2").css('top');
             test1l=test1l.replace("px","");
             test1t=test1t.replace("px","");
             test2l=test2l.replace("px","");
             test2t=test2t.replace("px","");
        if(test1t>180&&test1l>135){
        $scope.test1=true;

        if($scope.liff==4){
            $scope.liff=3;

        }
        else {
          $scope.liff=2;
        }
        }
        if(test2t>180&&test2l>135){
          $scope.test2=true;
          if($scope.liff==2){
          $scope.liff=3;
        }
        else if($scope.liff==3){
          $scope.liff=3;
        }
        else{
          $scope.liff=4;
        }
        }
        if($scope.liff==3){
          $scope.text='animation:yang 3s';
          $scope.text1='animation:yin 3s';
          $scope.ui='opacity:0';
          $("#bg").show().delay(3000).fadeOut();
          tank-=2;

        }

         }
        //  八卦
        var gallery = mui('.mui-slider');
  var userid=$cookieStore.get('userid');
  $scope.banner=function(index){
    var is=$scope.li[index].ADV_URL;
    var isON=is.substring(0,2);
    var iszhe=is.substring(3);
    $state.go('details',{wid:iszhe,name:isON});
  }
  $http({
  method:'POST',
  url:url,
  data:"{\"FunName\":\"Get_ADVERTISEMENT_DataList\",\"Params\":{\"Page_Index\":\"1\",\"Page_Count\":\"15\"}}",
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
}).then(function(data){
 $scope.li=data.data.RET.SYS_ADVERTISEMENT;
  });
  //主页banner图的http
  $http({
    method:'POST',
    url:url,
    data:"{\"FunName\":\"Get_KC_DataList\",\"Params\":{\"KC_ID\":\"\",\"Page_Index\":\"1\",\"Page_Count\":\"100\"}}",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).then(function(data){
  $scope.li1=data.data.RET.Sys_KC;
  $scope.kcid=data.data.RET.Sys_KC[0].KC_ID;
  });
}]);
