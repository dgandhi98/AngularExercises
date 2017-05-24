angular.module("app", []);
angular.module("app").config(['$controllerProvider', function($controllerProvider){
  $controllerProvider.allowGlobals();
}]);
function MessageController() {
  this.message = "This is a model.";
}
function ScopedMessageController($scope) {
  $scope.message = "This is a scoped model.";
}
function CountController($scope) {
  $scope.count = function() {return 12};
}
function AdditionController($scope) {
  $scope.operand1 = 0;
  $scope.operand2 = 0;
  $scope.add = function() {
    return $scope.operand1 + $scope.operand2;
  }
  $scope.options = [0,1,2,3,4];
}
function AuthController($scope) {
  $scope.authorized3 = true;
  $scope.toggle = function() {
    $scope.authorized3 = !$scope.authorized3
  };
}
