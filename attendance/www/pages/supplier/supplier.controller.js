/**
 * Created by Administrator on 2016/12/30.
 */
(function(){
  'use strict';
  angular.module('starter.controllers')
    .controller('SupplierCtrl',['$scope','$state','$ionicPopup',function($scope,$state,$ionicPopup){
      $scope.goBack = function () {
        $state.go("app.home");
      };
    }]);
})();
