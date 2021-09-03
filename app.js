(function (){
'use sctrict';

angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
  $scope.name = "Felipe";
  $scope.sayHello = function (){
    return "Hello Coursera!"
  }
});

})();
