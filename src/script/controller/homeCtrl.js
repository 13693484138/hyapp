'use strict';
angular.module('app').controller('homeCtrl',['$state','$scope','$cookieStore','$http',function($state,$scope,$cookieStore,$http){
  var ys = $scope.ys = {};
        ys.activeTab=1;
        ys.tab=2;
        $scope.content=function(name){
          $state.go('content',{name:name});
        };
  var userid=$cookieStore.get('userid');
  $http({
  method:'POST',
  url:"http://www.kingwant.com/App/App.ashx",
  data:"{\"Right_ID\":'"+userid+"',\"FunName\":\"Get_WJ_TYPE_Data\",\"Params\":{\"DATA\":\"儒\"}}",
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
}).then(function(data){
   console.log(data);
  });

}]);
