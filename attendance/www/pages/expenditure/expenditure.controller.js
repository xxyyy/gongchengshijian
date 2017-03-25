/**
 * Created by Administrator on 2016/12/28.
 */
(function(){
  'use strict';
  angular.module('starter.controllers')
    .controller('ExpenditureCtrl',['$scope','$state','$ionicPopup',function($scope,$state,$ionicPopup){
      $scope.goBack = function () {
        $state.go("app.home");
      };
      $scope.currentDate = new Date();
      $scope.minDate = new Date(2050, 6, 1);
      $scope.maxDate = new Date(2016, 9, 1);
      $scope.keeper = "gaorengui";
      $scope.one = "0.00"
      $scope.datePickerCallback = function (val) {
        if (!val) {
          console.log('Date not selected');
        } else {
          console.log('Selected date is : ', val);
        }
      };
      $scope.chack=function () {

      }
    }]);
})();
