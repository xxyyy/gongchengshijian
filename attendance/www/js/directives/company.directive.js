/**
 * Created by Administrator on 2016/12/29.
 */
(function () {
  'use strict';
  angular.module('starter.directives')
    .directive('companyDirective',function () {
        return {
          restrict: 'AE'
          , replace: true
          , template: '<div style="position: absolute:bottom:{{bottom}}; width:100%;' +
          'height:44px;text-align:center;">\
          <h6>©2010-2016 生意专家</h6>\
          </div>'
          ,scope:{
            bottom:'@'
          }
        };
    });
})();

/****
return {
 restrict:'A'
 ,replace:true
 ,template:'<div style="position: absolute:botton:0px; width:100%;' +
 'height:44px;text-align:center;">\
 <h6>@2010-2016 生意专家</h6>\
 </div>'
 };
****/
