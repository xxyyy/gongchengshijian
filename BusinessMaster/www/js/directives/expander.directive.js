/**
 * Created by Administrator on 2016/12/30.
 */
(function () {
  'use strict';
  angular.module('starter.directives')
    .directive('expanderDirective',[function () {
      return {
        restrict: 'AE'
        ,transclude:true
        ,template:'<div ng-show="show" ng-transclude></div>' +
        '<button class="button button-clear icon-left button-positive margin-left"' +
        'ng-class="{\'ion-plus-circled\':!show,\'ion-minus-circled\':show}"' +
        'ng-click="toggle()">{{title}}</button> '
        ,link : function (scope,element,attris) {
          scope.show = false;
          scope.title='完善更多信息';
          scope.toggle = function(){
            scope.show =!scope.show;
            if(scope.show){
              scope.title='收起';
            }
            else {
              scope.title = '完善更多信息';
            }
          };
        }
      };
    }]);
})();
