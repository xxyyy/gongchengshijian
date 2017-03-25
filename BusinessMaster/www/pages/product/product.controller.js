/**
 * Created by ago on 2016/12/27.
 */
angular.module("starter.controllers")
  .controller('ProductCtrl',['$scope','CategoryService','$ionicActionSheet','$ionicPopup','$cordovaBarcodeScanner','$cordovaToast','$cordovaCamera',
    function ($scope,CategoryService,$ionicActionSheet,$ionicPopup,$cordovaBarcodeScanner,$cordovaToast,$cordovaCamera) {
    var self = this;
    $scope.product = {
      Name:''
      ,Images:[]//'img/ionic.png','pages/product/img/supplier_icon.png'
      ,Category:{ID:0,Name:'默认分类'}
      ,CategoryID:0
      ,Barcode:''
      ,SupplierID:0
      ,Supplier:{ID:0,Name:'',Phone:''}
    };
    //$scope.defaultProduct = angular.copy($scope.product);
    /*$scope.defaultProduct = {
      Name:''
      ,Images:[]
      ,Category:{ID:0,Name:'默认分类'}
      ,Barcode:''
      ,SupplierName:''
    };*/
    /*$scope.supplier = {
      Name:''
      ,Phone:''
    };*/
    $scope.$on('CategoryUpdate',function () {
      //$scope.productData.Category = CategoryService.activeCategory;
      //console.log('Product CategoryUpdate');
      console.log(CategoryService.activeCategory);
      $scope.product.CategoryID = CategoryService.activeCategory.ID;
      $scope.product.Category.ID = CategoryService.activeCategory.ID;
      $scope.product.Category.Name = CategoryService.activeCategory.Name;
    });
    $scope.barcodeScan = function () {
      $cordovaBarcodeScanner.scan()
        .then(
          function (barcodeData) {
            $scope.product.Barcode = barcodeData.text;
          }
          ,function (error) {

          }
        );
    };
    $scope.showActionSheet = function () {
      $ionicActionSheet.show({
        buttons:[{text:'拍照'},{text:'从相册中选取'}]
        ,cancelText:'<b>取消</b>'
        ,buttonClicked:function (index) {
          switch (index){
            case 0:
              self.camera();
              break;
            case 1:
              self.pickImage();
              break;
            default:
          }
        }
      });
    };
    self.camera = function () {
      // var options = {
      //  quality: 50,
      //
      //  destinationType: Camera.DestinationType.DATA_URL,
      //  sourceType: Camera.PictureSourceType.CAMERA,
      //  allowEdit: true,
      //  encodingType: Camera.EncodingType.JPEG,
      //  targetWidth: 100,
      //  targetHeight: 100,
      //  popoverOptions: CameraPopoverOptions,
      //  saveToPhotoAlbum: false,
      //  correctOrientation:true
      //  };
      //
      //  $cordovaCamera.getPicture(options).then(function(imageData) {
      //  var image = document.getElementById('myImage');
      //  image.src = "data:image/jpeg;base64," + imageData;
      //  }, function(err) {
      //  // error
      //  });
      /*var options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
      };

      $cordovaCamera.getPicture(options).then(function(imageURI) {
        $scope.product.Image.push(imageURI);
      }, function(err) {
        // error
      });*/

      var options = {
        destinationType: Camera.DestinationType.FILE_URI,
        //destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
      };

      $cordovaCamera.getPicture(options).then(function(imageURI) {
        /*var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageURI;*/
        if($scope.product.Images.length < 3){
          $scope.product.Images.push(imageURI);
        }

      }, function(err) {
        // error
      });
    };
    self.pickImage = function () {
      var options = {
        maximumImagesCount: 3,
        width: 0,
        height: 0,
        quality: 80
      };

      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          for (var i = 0; i < results.length; i++) {
            //console.log('Image URI: ' + results[i]);
            $scope.product.Images.push(results[i]);
          }
        }, function(error) {
          // error getting photos
        });
    };
    $scope.selectSupplier = function () {
      $ionicPopup.show({
        title:'新增供货商'
        ,scope:$scope
        ,templateUrl:'pages/supplier/supplierquickadd.html'
        ,buttons:[
          {
            text:'取消'
            ,type:'button-energized button-outline'
            ,onTap:function () {

            }
          }
          ,{
            text:'确定'
            ,type:'button-energized'
            ,onTap:function () {
              $scope.product.SupplierName = $scope.supplier.Name;
            }
          }
        ]
      });
    };
    $scope.save = function () {

    };
    $scope.saveAndNew = function () {
      //$scope.product = angular.copy($scope.defaultProduct);
    };
  }]);
