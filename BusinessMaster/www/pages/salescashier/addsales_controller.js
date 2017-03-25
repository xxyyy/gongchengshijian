/**
 * Created by Administrator on 2016/12/28.
 */
(function(){
  'use strict';
  angular.module('starter.controllers')
    .controller('SalesCashierCtrl',['$scope','$state','$ionicPopup',function($scope,$state,$ionicPopup){
      $scope.goBack = function () {
        $state.go("app.home");
      };
    }]);
})();

