/**
 * Created by Administrator on 2016/12/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('MemberCtrl',['$scope','$ionicHistory','$state','LocalStorageService',function ($scope,$ionicHistory,$state,LocalStorageService) {
      $scope.goBack = function () {
        $ionicHistory.nextViewOptions({
          disableBack:true
        });
        $state.go("app.home");
      };

    }]);
})();
