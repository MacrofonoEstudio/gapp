// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('garitoapp', ['ionic', 'garitoapp.controllers','ngCordova'])

app.run(function($ionicPlatform, $cordovaFacebook) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    alert('Ionic Ready');


    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider, $cordovaFacebookProvider) {



  $stateProvider  

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: "usersCtrl"
  })

  .state('app.home', {
    url: "/home",
    templateUrl: "templates/login.html"
  })

  .state('app.detail', {
    url: "/detail",
    templateUrl: "templates/detail.html"
  });


  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
