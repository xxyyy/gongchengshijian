// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services','ngCordova','starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'pages/menu/menu.html',
    controller: 'AppCtrl'
  })
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'pages/welcome/welcome.html',
      controller: 'WelcomeCtrl'
    })
    .state('main', {
      url: '/',

      controller: 'MainCtrl'
    })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

    .state('forgotpassword', {
      url: '/forgotpassword',
      templateUrl: 'pages/forgotpassword/forgotpassword.html',
      controller:'ForgotPasswordCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'pages/login/login.html',
       controller:'LoginCtrl'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'pages/register_new/register_new.html',
      controller:'RegisterNewCtrl'
    })

    .state('app.home', {
      url: '/home',
      views:{
        'menuContent':{
          templateUrl: 'pages/home/home.html',
          controller:'HomeCtrl'
        }
      }
    })

    .state('app.categorylist', {
      url: '/categorylist',
      views:{
        'menuContent':{
          templateUrl: 'pages/category/categorylist.html',
          controller:'CategoryListCtrl'
        }
      }
    })
    .state('app.categoryadd', {
      url: '/categoryadd/:id/:name',
      views:{
        'menuContent':{
          templateUrl: 'pages/category/categoryadd.html',
          controller:'CategoryAddCtrl'
        }
      }
    })

    .state('app.shop', {
      url: '/shop',
      views:{
        'menuContent':{
          templateUrl: 'pages/shop/shop.html',
          controller:'ShopCtrl'
        }
      }
    })

    .state('app.shopedit', {
      url: '/shopedit',
      params:{title:null},
      views:{
        'menuContent':{
          templateUrl: 'pages/shop/shopedit.html',
          controller:'ShopEditCtrl'
        }
      }
    })
    .state('app.product', {
      url: '/product',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/product.html',
          controller: 'ProductCtrl'
        }
      }
    })
    .state('app.productlist', {
      url: '/productlist',
      views: {
        'menuContent': {
          templateUrl: 'pages/productmanagement/productlist.html',
          controller: 'ProductListCtrl'
        }
      }
    })
    .state('app.aboutme', {
      url: '/aboutme',
      views: {
        'menuContent': {
          templateUrl: 'pages/aboutme/aboutme.html',
          controller: 'AboutmeCtrl'
        }
      }
    })
    .state('app.member', {
      url: '/member',
      views: {
        'menuContent': {
          templateUrl: 'pages/member/member.html',
          controller: 'MemberCtrl'
        }
      }
    })
    .state('app.salescashier', {
      url: '/salescashier',
      views: {
        'menuContent': {
          templateUrl: 'pages/salescashier/addsales.html',
          controller: 'SalesCashierCtrl'
        }
      }
    })
    .state('app.expenditure', {
      url: '/expenditure',
      views: {
        'menuContent': {
          templateUrl: 'pages/expenditure/expenditure.html',
          controller: 'ExpenditureCtrl'
        }
      }
    })
    .state('app.salesearche', {
      url: '/salesearche',
      views: {
        'menuContent': {
          templateUrl: 'pages/saleseache/saleseache.html',
          controller: 'SaleSeacheCtrl'
        }
      }
    })
    .state('app.changepassword', {
      url: '/changepassword',
      params: {title: null},
      views: {
        'menuContent': {
          templateUrl: 'pages/changepassword/changepassword.html',
          controller: 'ChangepasswordCtrl'
        }
      }
    })
    .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent': {
          templateUrl: 'pages/setting/setting.html',
          controller: 'SettingCtrl'
        }
      }
    })
    .state('app.analyse', {
      url: '/analyse',
      views: {
        'menuContent': {
          templateUrl: 'pages/analyse/analyse.html',
          controller: 'AnalyseCtrl'
        }
      }
    })
    .state('app.supplier', {
      url: '/supplier',
      views: {
        'menuContent': {
          templateUrl: 'pages/supplier/supplier.html',
          controller: 'SupplierCtrl'
        }
      }
    })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
