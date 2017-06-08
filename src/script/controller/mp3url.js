'use strict';
angular.module('app').filter("trustUrl", function () {
        return function (content) {
           if(String(content).substring(0,5).indexOf('[')>-1){
             var a=/\[.{0,5}\]/igm;
             var str=String(content);
                 return str.replace(a,'');
           }
           else {
             return content;
           }


        };
    });
