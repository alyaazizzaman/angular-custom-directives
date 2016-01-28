angular.module('CustomDirectiveApp', [])
  .directive('aaYumCheese', function() {
    return {
      restrict: 'E',
      template: '<img src="http://flexibristol.org/wp-content/uploads/2015/12/cheeses.jpg">'
    };
  });
