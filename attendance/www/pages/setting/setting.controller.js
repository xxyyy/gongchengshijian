/**
 * Created by ago on 2016/10/29.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('SettingCtrl',['$scope','$ionicHistory','$state','LocalStorageService',function ($scope,$ionicHistory,$state,LocalStorageService) {
      $scope.goBack = function () {
        $ionicHistory.nextViewOptions({
          disableBack:true
        });
        $state.go("app.home");
      };
      $scope.logout = function () {
        $state.go("login");
      };
    }]);
})();
