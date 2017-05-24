//angular.module("app", []); //array second argument to denote a creation
angular.module("app", ['ngAnimate']); //Put dependencies in the array
//definiting a controller
var app = angular.module('app'); //singular argument to denote lookup
app.controller('MessageController', function($scope){
  $scope.message = 'This is a model.';
});

//Chained definitions
angular.module('app')
  .controller('MessageController2', function($scope){
  $scope.message = 'This is a model too.';
  })
  .controller('AnotherMessageController2', function($scope){
  $scope.message = 'This is another model too.';
  });
