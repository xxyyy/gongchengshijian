/**
 * Created by ago on 2016/11/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('CategoryAddCtrl', ['$scope', '$state','$stateParams', function ($scope, $state,$stateParams) {

      $scope.category = {
        ID: $state.params.id
        , Name: $state.params.Name
        , Children: [
          {
            ID: 0
            , Name: ''
            , Children: []
          }]
      };
      $scope.title = '新增分类';
      $scope.id = $stateParams.id;
      $scope.name = $stateParams.name;
      if ($stateParams.name != '') {
        $scope.title = '新增小分类';
      }
      $scope.addSection = function () {
        $scope.category.Children.push([
          {
            ID: 0
            , Name: ''
            , Children: []
          }]);
      }


    }]);
})();
