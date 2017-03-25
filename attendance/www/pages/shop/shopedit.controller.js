/**
 * Created by ago on 2016/10/29.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ShopEditCtrl',['$scope','$stateParams','LocalStorageService','$ionicPopup',function ($scope,$stateParams,LocalStorageService,$ionicPopup) {
      $scope.title = $stateParams.title;
      //$scope.value = '';
      $scope.inputData = {
        value:''
      };
      $scope.shopData = LocalStorageService.get('Shop',{
        ID:0
        ,Name:'agooooo'
        ,Boss:'grglym'
        ,Phone:'18649717287'
        ,Email:'1099331915@qq.com'
        ,Category:''
        ,ShopPhone:'787878'
        ,AB:'ago'
        ,CreateDate:'2016-11-24 20:00:00'
      });
      if($scope.title=='店铺名称'){
        $scope.inputData.value = $scope.shopData.Name;
      }
      else if($scope.title=='店铺简称'){
        $scope.inputData.value = $scope.shopData.AB;
      }
      else if($scope.title=='店主姓名'){
        $scope.inputData.value = $scope.shopData.Boss;
      }
      else if($scope.title=='店铺电话'){
        $scope.inputData.value = $scope.shopData.ShopPhone;
      }
      else if($scope.title=='行业类型'){
        $scope.inputData.value = $scope.shopData.Category;
      }
      $scope.save = function () {
        if($scope.title=='店铺名称'){
          $scope.shopData.Name = $scope.inputData.value;
        }
        else if($scope.title=='店铺简称'){
          $scope.shopData.AB = $scope.inputData.value;
        }
        else if($scope.title=='店主姓名'){
          $scope.shopData.Boss = $scope.inputData.value;
        }
        else if($scope.title=='店铺电话'){
          $scope.shopData.ShopPhone = $scope.inputData.value;
        }
        else if($scope.title=='行业类型'){
          $scope.shopData.Category = $scope.inputData.value;
        }
        LocalStorageService.update('Shop',$scope.shopData);
        $ionicPopup.alert({
          title: '友情提醒'
          , subTitle: ''
          , template: '修改成功'
          , okText: ''
        });
      };
    }]);
})();
