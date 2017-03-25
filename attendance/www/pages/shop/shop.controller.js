/**
 * Created by ago on 2016/10/29.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ShopCtrl',['$scope','$state','LocalStorageService',function ($scope,$state,LocalStorageService) {
     //$scope.shopData = LocalStorageService.get('Shop');
      $scope.edit = function (title) {
        $state.go('app.shopedit',{title:title});
      };
      $scope.$on('$stateChangeSuccess',function (event,toState,toStateParams,fromState,fromParams) {
        $scope.shopData = LocalStorageService.get('Shop');
      });
    }]);
})();
