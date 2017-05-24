angular.module("app", []);
angular.module("app").config(['$controllerProvider', function($controllerProvider){
  $controllerProvider.allowGlobals();
}]);
function NameController($scope) {
  $scope.name = "FirstName";
}
function SecondNameController($scope) {
  $scope.name = "SecondName";
}
function RootNameController($rootScope) {
  $rootScope.name = "First";
}
function SecondRootNameController($rootScope) {
  $rootScope.name = "Second";
}
function ChildNameController($scope) {
  $scope.childName = "Child";
}
function SumController($scope) {
  $scope.values = [1,2];
  $scope.newValue = 1;
  $scope.add = function() {
    $scope.values.push(parseInt($scope.newValue));
  }
  $scope.$watch('values', function() {
    $scope.sum = $scope.values.reduce(function(a,b) {
      return a+b;
    });
  }, true);
}
function EscapeController($scope) {
  $scope.message='';
  $element.bind('keyup', function (event) {
    if(event.keyCode === 27) {
      $scope.$apply(function() {
        $scope.message='';
      });
    }
  });
}
