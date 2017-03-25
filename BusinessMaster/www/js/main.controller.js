/**
 * Created by ago on 2016/10/29.
 */
(function (){
  'user strict';
  var APP_KEY='App';
  angular.module('starter.controllers')
    .controller('MainCtrl',['$scope','LocalStorageService','$state',function($scope,LocalStorageService,$state){
      var app=LocalStorageService.get('App',{
        version:'1.0.0'
        ,run:false
      });
      if(app.run===false){
        app.run=true;
        LocalStorageService.update('App',app);
        $state.go('welcome');

      }
      else{

        $state.go('login');
      }
    }]);
})();
