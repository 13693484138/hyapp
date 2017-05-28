
'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider)
{
  $stateProvider.state('main', {
		url: "/main",
		templateUrl: "view/main.html",
		controller: "mainCtrl"
	}).state('loging', {
		url: "/loging",
		templateUrl: "view/loging.html",
		controller: "logingCtrl"
	}).state('zhuche', {
		url: "/zhuche",
		templateUrl: "view/zhuche.html",
		controller: "zhucheCtrl"
	}).state('zhuche1', {
		url: "/zhuche1/:phone",
		templateUrl: "view/zhuche1.html",
		controller: "zhuche1Ctrl"
	}).state('password', {
		url: "/password",
		templateUrl: "view/password.html",
		controller: "passwordCtrl"
	}).state('home', {
		url: "/home",
		templateUrl: "view/home.html",
		controller: "homeCtrl"
	}).state('content',{
    url:"/content/:name",
    templateUrl:"view/content.html",
    controller:"contentCtrl"
  }).state('meco',{
    url:"/meco",
    templateUrl:"view/meco.html",
    controller:"mecoCtrl"
  }).state('yuedu',{
    url:"/yuedu/:wid&:name&:wj&zname:zname",
    templateUrl:"view/yuedu.html",
    controller:"yueduCtrl",

  }).state('mulu',{
    url:"/mulu/:wid&:iis",
    templateUrl:"view/mulu.html",
    controller:"muluCtrl"
  });
  $urlRouterProvider.otherwise('loging');
}])
