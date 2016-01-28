angular.module('CustomDirectiveApp', [])
  .directive('aaYumCheese', function() {
    return {
      restrict: 'E',
      templateUrl: 'cheese.html'
    };
  });
