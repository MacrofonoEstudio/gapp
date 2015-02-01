var gcontrollers = angular.module('garitoapp.controllers', [])

gcontrollers.controller('usersCtrl', function($scope, $http) {
  $http.jsonp('http://fideliapp1.herokuapp.com/jsonp?callback=JSON_CALLBACK').success(function(data) {
    $scope.users = data;
  });

});


gcontrollers.controller('FbCtrl', function($scope, $cordovaFacebook) {

  $scope.facebookLogin = function() {
    $cordovaFacebook.login(["public_profile", "email", "user_friends"])
      .then(function(success) {

          var user = success;
          console.log(user.name);

      }, function (error) {
        console.log("Error!!!!");
      });
  };
   
});    