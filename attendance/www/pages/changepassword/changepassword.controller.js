/**
 * Created by Administrator on 2016/12/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ChangepasswordCtrl', ['$scope', 'LocalStorageService', '$ionicPopup', function ($scope, LocalStorageService, $ionicPopup) {
      //需要双向绑定时，使用对象
      $scope.passwordModel = {
        oldpassword: '',
        newpassword: '',
        againpassword: ''
      };

      $scope.change = function () {
        var user = LocalStorageService.get('User', {
          username: 'admin',
          password: '123456'
        });
        if ($scope.passwordModel.oldpassword == user.password &&
          $scope.passwordModel.newpassword == $scope.passwordModel.againpassword) {
          user.password = $scope.passwordModel.newpassword;
          LocalStorageService.update('User', user);
          $ionicPopup.alert({
            title: '友情提醒'
            , subTitle: ''
            , template: '修改成功'
            , okText: ''
          });
        }
        else if ($scope.passwordModel.newpassword != $scope.passwordModel.againpassword) {
          $ionicPopup.alert({
            title: '友情提醒'
            , subTitle: ''
            , template: '两次密码不一致'
            , okText: ''
          });
        }
        else {
          $ionicPopup.alert({
            title: '友情提醒'
            , subTitle: ''
            , template: '旧密码错误'
            , okText: ''
          });
        }


      };
    }]);
})();
