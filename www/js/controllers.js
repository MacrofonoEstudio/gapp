var gcontrollers = angular.module('garitoapp.controllers', ['ionic', 'ngCordova'])

gcontrollers.controller('usersCtrl', function($scope, $http, $ionicPlatform, $cordovaFacebook) {
  
  $http.jsonp('http://fideliapp1.herokuapp.com/jsonp?callback=JSON_CALLBACK').success(function(data) {
    $scope.users = data;
  });

  $ionicPlatform.ready(function() {

    $scope.facebookLogin1 = function() {
      alert('FB LOgin1!');

      var userId = "";
      $cordovaFacebook.login(["public_profile"])
        .then(function(success) {
            alert('FB LOgin2!');
            var user = success;
            // console.log(user.email);
            alert("authResponse: "+user.authResponse);
            alert("authResponse.accessToken: "+user.authResponse.accessToken);
            alert("authResponse.userID "+user.authResponse.userID);
            alert("authResponse.name "+user.authResponse.name);
            userId = user.authResponse.userID;
            alert("authResponse.email "+user.authResponse.email);
            $cordovaFacebook.api(userId + "/?fields=id,email", ["user_birthday"],
                  function (result) {
                      alert("Result: " + result);
                      alert("Email2: " + result.email);
                  },
                  function (error) {
                      alert("Failed: " + error);
            });


        }, function (error) {
          console.log("Error!!!!");
        });

    };
  });

  

}); 