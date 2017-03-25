/**
 * Created by ago on 2016/12/27.
 */
(function($scope,$corvodaToast,$corvodaBarcodeBarcodeScanner,$cordovaCamera) {
  $scope.productData = {
    Images: []
    , Barcode: ''
    , Category: {
      ID: 0
      , Name: '默认分类'
    }
  };
  $scope.$on('CategoryUpdate', function () {
    $scope.productData.Category = CategoryService.activeCategory;
  });
  $scope.scanBarcode = function () {
    $cordovaBarcodeScanner.scan().then(function (barcodeData) {
      $scope.productData.Barcode = barcodeData.text;
    }, function (error) {
    })
  };
  $scope.showActionSheet = function () {
    $ionicActionSheet.show({
      buttons: [{text: '拍照'}, {text: '从相册中选取'}]
      , cancelText: '<b>取消</b>'
      , buttonClicked: function (index) {
        switch (index) {
          case 0:
            camera();
            break;
          case 1:
            pickImage();
            break;
          default:
        }
      }
    });
  };
  var options = {
    destinaType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.CAMERA,
    allowEdit: true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 100,
    targetHeight: 100,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
  $cordovaCamera.getPicture(options).then(function (imageData) {
    $scope.productData.Images.push(imageURI);
  }, function (err) {
  });
})();
