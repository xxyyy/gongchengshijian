/**
 * Created by Administrator on 2016/12/27.
 */
(function(){
  'use strict';
  angular.module('starter.controllers')
    .controller('RegisterNewCtrl',['$scope','$state','$ionicPopup',function($scope,$state,$ionicPopup){
      $scope.goBack = function () {
        $state.go("login");
      };
      $scope.login=function() {
        $state.go("login");
      };
    }]);
})();
