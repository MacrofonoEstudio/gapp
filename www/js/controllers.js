var gcontrollers = angular.module('garitoapp.controllers', [])

gcontrollers.controller('usersCtrl', function($scope, $http) {
  $http.jsonp('http://fideliapp1.herokuapp.com/jsonp?callback=JSON_CALLBACK').success(function(data) {
    $scope.users = data;
  });

});