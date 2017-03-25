/**
 * Created by ago on 2016/12/27.
 */
(function () {
  'use strict';
  angular.module('starter.services')
    .factory('CategoryService',['$rootScope',function ($rootScope) {
      var service ={};
      service.activeCategory = {};
      service.updateCategory = function (data) {
        this.activeCategory = angular.copy(data);
        $rootScope.$broadcast('CategoryUpdate');
        /*this.activeCategory.ID = data.ID;
        this.activeCategory.Name = data.Name;*/
      };
      return service;
    }]);
})();
