/**
 * Created by ago on 2016/12/27.
 */
(function(){
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl',['$scope','$ionicLoading','$timeout',function($scope,$ionicLoading,$timeout){
      var isLoading=false;
      var pageIndex=1;
      $scope.more=true;
      $scope.load=function(){
        $scope.products=[];
        pageIndex=1;
        if(isLoading==true)return;
        isLoading=true;
        $ionicLoading.show({
          template:'<ion-spinner icon="ios" class="light"></ion-spinner><span>数据加载中，请稍后......</span>'
        });
        $timeout(function(){
          var list=[
            {
              ID:1
              ,Images:['pages/productmanagement/img/iphone7.png']
              ,Name:'iphone7'
              ,Price:'5388'
              ,Stock:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:2
              ,Images:['pages/productmanagement/img/note7.png']
              ,Name:'note7'
              ,Price:'5388'
              ,Stock:120
              ,Barcode:'12121212112'
            }
            ,{
              ID:3
              ,Images:['pages/productmanagement/img/mi5.png']
              ,Name:'MI5Plus'
              ,Price:'1999'
              ,Stock:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:4
              ,Images:['pages/productmanagement/img/ry8.png']
              ,Name:'honor8'
              ,Price:'5388'
              ,Stock:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:5
              ,Images:['pages/productmanagement/img/m2.png']
              ,Name:'M2'
              ,Price:'5388'
              ,Stock:120
              ,Barcode:'12121212112'
            }
            ,{
              ID:6
              ,Images:['pages/productmanagement/img/m3.png']
              ,Name:'M3'
              ,Price:'1999'
              ,Stock:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:7
              ,Images:['pages/productmanagement/img/mix.png']
              ,Name:'MIX'
              ,Price:'5388'
              ,Stock:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:8
              ,Images:['pages/productmanagement/img/xperia.png']
              ,Name:'Xperia XZ'
              ,Price:'5388'
              ,Stock:120
              ,Barcode:'12121212112'
            }
            ,{
              ID:9
              ,Images:['pages/productmanagement/img/gs7.png']
              ,Name:'Galaxy S7 edge'
              ,Price:'1999'
              ,Stock:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:10
              ,Images:['pages/productmanagement/img/motoz.png']
              ,Name:'Moto Z'
              ,Price:'5388'
              ,Stock:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:11
              ,Images:['pages/productmanagement/img/xperia5.png']
              ,Name:'Xperia Z5'
              ,Price:'5388'
              ,Stock:120
              ,Barcode:'12121212112'
            }
            ,{
              ID:12
              ,Images:['pages/productmanagement/img/mate9.png']
              ,Name:'Mate9 Pro'
              ,Price:'1999'
              ,Stock:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:13
              ,Images:['pages/productmanagement/img/vetas.png']
              ,Name:'vetas'
              ,Price:'5388'
              ,Stock:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:14
              ,Images:['pages/productmanagement/img/sonim.png']
              ,Name:'sonim'
              ,Price:'5388'
              ,Stock:120
              ,Barcode:'12121212112'
            }
            ,{
              ID:15
              ,Images:['pages/productmanagement/img/p9.png']
              ,Name:'P9'
              ,Price:'1999'
              ,Stock:12
              ,Barcode:'12121212112'
            }
          ];
          console.log(pageIndex);
          if(pageIndex==1)
          {
            $scope.products=list;
          }
          else {
            $scope.products=$scope.products.concat(list);
            if(pageIndex==3)
              $scope.more=false;
          }
          $ionicLoading.hide();
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');

          isLoading=false;
        },3000);
      };
      $scope.searchCondition={
        name:''
      };
      $scope.getByName=function(){
        console.log('change');
      };
      $scope.$on('$ionicView.enter',function(){
        pageIndex=1;
        $scope.load();
      });
      $scope.doRefresh=function(){
        pageIndex=1;
        $scope.products=[];
        $scope.load();
      };
      $scope.loadMore=function(){
        pageIndex++;
        if(pageIndex==3)return;
        $scope.load();
      };
    }]);
})();
