var gcontrollers = angular.module('garitoapp.controllers', ['ionic', 'ngCordova'])

gcontrollers.controller('usersCtrl', function($scope, $http, $ionicPlatform, $cordovaFacebook) {
  
  $http.jsonp('http://fideliapp1.herokuapp.com/jsonp?callback=JSON_CALLBACK').success(function(data) {
    $scope.users = data;
  });

  $ionicPlatform.ready(function() {

    $scope.facebookLogin1 = function() {
      alert('FB LOgin1!');

      
      $cordovaFacebook.login(["public_profile"])
        .then(function(success) {
            alert('FB LOgin2!');
            var user = success;
            // console.log(user.email);
            alert("authResponse: "+user.authResponse);
            alert("authResponse.accessToken: "+user.authResponse.accessToken);
            alert("authResponse.userID "+user.authResponse.userID);
            
            apiFb(user);


        }, function (error) {
          console.log("Error!!!!");
        });

        var apiFb = function (user){
          alert('$cordovaFacebook.api');
          $cordovaFacebook.api("me",["public_profile"])
          .then(function(success){
            alert("Result: " + success);
            alert("Name: " + success.name);
            alert("Id: " + success.id);

          },function(error){
            alert('Error!')
          });
         }; 

    };
  });

  

}); 