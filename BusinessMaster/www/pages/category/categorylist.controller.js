/**
 * Created by ago on 2016/12/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('CategoryListCtrl', ['$scope', '$ionicActionSheet', '$ionicHistory', function ($scope, $ionicActionSheet, $ionicHistory) {
      $scope.categories = [
        {
          ID: 1
          , Name: '电脑整机'
          , Children: [
          {
            ID: 5
            , Name: '笔记本'
            , Children: []
          }
          , {
            ID: 6
            , Name: '台式机'
            , Children: []
          }
          , {
            ID: 7
            , Name: '平板电脑'
            , Children: []
          }
        ]
        }
        , {
          ID: 2
          , Name: '电脑配件'
          , Children: [
            {
              ID: 8
              , Name: 'CPU'
              , Children: []
            }
            , {
              ID: 9
              , Name: '内存'
              , Children: []
            }]
        }
        , {
          ID: 3
          , Name: '外设产品'
          , Children: [
            {
              ID: 10
              , Name: '鼠标'
              , Children: []
            }
            , {
              ID: 11
              , Name: '键盘'
              , Children: []
            }
            , {
              ID: 12
              , Name: 'U 盘'
              , Children: []
            }
          ]
        }
        , {
          ID: 4
          , Name: '网络产品'
          , Children: [
            {
              ID: 13
              , Name: '路由器'
              , Children: []
            }
            , {
              ID: 14
              , Name: '交换机'
              , Children: []
            }
            , {
              ID: 15
              , Name: '网卡'
              , Children: []
            }
            , {
              ID: 16, Name: '网络配件'
              , Children: []
            }
          ]
        }
        , {
          ID: 5
          , Name: '默认类别'
          , Children: []
        }
      ];

      $scope.activeCategory = $scope.categories[0];
      $scope.sections = $scope.categories[0].Children;

      $scope.activeSection = {};

      $scope.selectCategory1 = function (selectindex) {
        $scope.activeCategory = $scope.categories[selectindex];
        $scope.sections = $scope.categories[selectindex].Children;
      }

      $scope.selectCategory = function (id) {
        if ($scope.activeCategory.ID != id) {
          //对数据集$scope遍历时做function()
          angular.forEach($scope.categories, function (data, index) {
            if (data.ID == id) {
              $scope.activeCategory = data;
              $scope.sections = data.Children;
            }
          })
        }
      }

      $scope.showActionSheet = function () {
        $ionicActionSheet.show({
          buttons: [
            {
              text: '新增小分类'
            }
            , {
              text: '编辑分类'
            }
          ]
          ,cancelText:'取消'
          ,buttonClicked:function (index) {
            console.log(index);
            switch(index){
              case 0:
                $scope.gotoAddCategory();
                break;
              case 1:
                break;
              case 2:
                break;
              default:
                break;
            }
          }
        })
        ;
      }
      //新增小分类
      $scope.gotoAddCategory = function () {
        location.href='#/app/categoryadd/'+$scope.activeCategory.ID+'/'+$scope.activeCategory.Name;
      };
      $scope.$watch('activeSection',function(newValue,oldValue){
        CategoryService.updateCategory($scope.activeSection);
      });

    }]);
})();

