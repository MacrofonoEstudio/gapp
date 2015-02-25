var gcontrollers = angular.module('garitoapp.controllers', ['ionic', 'ngCordova'])

gcontrollers.controller('usersCtrl', function($scope, $http, $ionicPlatform, $cordovaFacebook) {
  
  $http.jsonp('http://fideliapp1.herokuapp.com/jsonp?callback=JSON_CALLBACK').success(function(data) {
    $scope.users = data;
  });

  $ionicPlatform.ready(function() {

    $scope.facebookLogin1 = function() {
      alert('FB LOgin!');
      $cordovaFacebook.login(["public_profile", "email", "user_friends"])
        .then(function(success) {
            alert('FB LOgin!');
            var user = success;
            console.log(user.name);
            alert(user.name);

        }, function (error) {
          console.log("Error!!!!");
        });
    };
  });

  

}); 