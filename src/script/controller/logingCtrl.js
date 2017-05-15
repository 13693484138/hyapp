'use strict';
angular.module('app').controller('logingCtrl',['$cookieStore','$scope','$http','$location',function($cookieStore,$scope,$http,$location){


  $scope.submit = function() {
    
  var data1="{\"FunName\":\"Login\",\"Params\":{\"PhoneNO\":\""+$scope.phone+"\",\"PassWord\":\""+$scope.password+"\"}}";
  $http({
   method:"POST",
   url:"http://www.kingwant.com/App/App.ashx",
   data:"{\"FunName\":\"Login\",\"Params\": {\"PhoneNo\": '"+$scope.phone+"',\"PassWord\": '"+$scope.password+"'}}",
   dataType:'json',
   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  // transformRequest: function(obj) {
  //             var str = [];
  //             for (var p in obj) {
  //                 str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  //             }
  //             return str.join("&");
  //         }
 }).then(function(data){

   if(data.data.RET.DATA==0){
     alert("账号密码错误!");
   }
   else {
     $cookieStore.put('userid',data.data.RET.DATA);
    $location.path('/home');
   }
  });
 }
}]);
