/**
 * Created by Administrator on 2016/12/28.
 */
/**
 * Created by ago on 2016/10/29.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('AnalyseCtrl',['$scope','$ionicHistory','$state','LocalStorageService',function ($scope,$ionicHistory,$state,LocalStorageService) {
      $scope.goBack = function () {
        $ionicHistory.nextViewOptions({
          disableBack:true
        });
        $state.go("app.home");
      };
    }]);
})();

