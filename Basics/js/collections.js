angular.module('app', []);
angular.module('app').config(['$controllerProvider',function($contorllerProvider) {
  $contorllerProvider.allowGlobals();
}]);
function ItemsController($scope) {
  $scope.items = [
    {name:"Item 1", price:1.99},
    {name:"Item 2", price:2.99}
  ];
}
function ItemsControllerNest($scope) {
  $scope.items = [
    {name:"Item 1",
      items: [
        {name: "Item 1.1"},
        {name: "Item 1.2"}
      ],
      price:1.99},
    {name:"Item 2",
      items: [
        {name: "Item 2.1"},
        {name: "Item 2.2"}
      ],
      price:2.99}
  ];
}
function ItemsControllerCall($scope) {
  $scope.items = [
    {id:1, name:"Item 1"},
    {id:2, name:"Item 2"},
    {id:3, name:"Item 3"},
    {id:4, name:"Item 4"}
  ];
  $scope.destroy = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  }
}
