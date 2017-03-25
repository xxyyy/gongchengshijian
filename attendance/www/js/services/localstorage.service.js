/**
 * Created by Administrator on 2016/10/29 0029.
 */
(function(){
  'user strict';
  angular.module('starter.services',[])
    .factory('LocalStorageService',[function(){
     var service={};
      service.get=function(key,defaultValue){
        var temp=localStorage.getItem(key);
        var obj;
        try{
          obj=angular.fromJson(temp);
        }
        catch(error){
          obj=null;
        }
        if(!obj && defaultValue){
          obj=defaultValue;
        }
        return obj;
      };
      service.update = function(key,defaultValue) {
        if(defaultValue){
          localStorage.setItem(key,angular.toJson(defaultValue));
        }
      };

      return service;
      return {

      };
    }]);

})();
