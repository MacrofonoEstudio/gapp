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
