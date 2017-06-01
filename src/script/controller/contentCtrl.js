angular.module("app").controller('contentCtrl',['$state','$cookieStore','$http','$stateParams','$scope',function($state,$cookieStore,$http,$stateParams,$scope){
  $scope.name=$stateParams.name;
  $scope.ide=$stateParams.ide;
  $scope.content=function(name){
    $state.go('content',{name:name});
  };
  if($scope.ide==1){
    $scope.obj1=[{
      name1:'弘毅',
      name2:'乐水',
      name3:'青囊'
    },{
      name1:'慎独',
      name2:'诗礼',
      name3:'宿儒'
    },
    {
      name1:'逸经',
      name2:'雅赏',
      name3:'緣覺'
    }
  ]
  }
  else if($scope.ide==2){
    $scope.obj1=[{
      name1:'般若',
      name2:'禅悦',
      name3:'定慧'
    },{
      name1:'梵行',
      name2:'悬壶',
      name3:'菩提'
    },
    {
      name1:'缘觉',
      name2:'止观',
      name3:'自在'
    }
  ]
  }
  else if($scope.ide==3){
    $scope.obj1=[{
      name1:'抱朴',
      name2:'静笃',
      name3:'歧黄'
    },{
      name1:'无为',
      name2:'玄霄',
      name3:'心斋'
    },
    {
      name1:'轩箓',
      name2:'一炁',
      name3:'玉虚'
    }
  ]
  }
  var userid=$cookieStore.get('userid');
  $scope.tcz=true;
  $scope.back1=function(){
     $state.go('home');
  };
  $http({
   method:'POST',
   url:"http://www.kingwant.com/App/App.ashx",
   data:"{\"Right_ID\":'"+userid+"',\"FunName\":\"Get_WenJi_DataList\",\"Params\":{\"TYPE\":'"+$scope.name+"',\"Page_Index\":\"1\",\"Page_Count\":\"9\"}}",
   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 }).then(function(data){
  $scope.list=data.data.RET.Sys_GX_WenJI;
   });
}])
