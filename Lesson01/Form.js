var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope',
    function($scope) {
        $scope.userInfo = {
            email: "253445528@qq.com",
            password: "253445528",
            autoLogin: true
        };
        $scope.getFormData = function() {
            console.log($scope.userInfo);
        };
        $scope.setFormData = function() {
            $scope.userInfo = {
                email: 'damoqiongqiu@126.com',
                password: 'damoqiongqiu',
                autoLogin: false
            }
        };
        $scope.resetForm = function() {
            $scope.userInfo = {
                email: "253445528@qq.com",
                password: "253445528",
                autoLogin: true
            };

        };
       
    }
]);
userInfoModule.controller('cssCtrl', ['$scope', function ($scope) {
     $scope.color = "red";
        $scope.changecolor = function() {
             console.log($scope.color);
            $scope.color = "green";
        };
        
}]);
userInfoModule.controller('showCtrl', ['$scope', function ($scope) {
     $scope.isshow=false;
         $scope.changemenu=function()
         {
            $scope.isshow= !$scope.isshow;
         };
}])
