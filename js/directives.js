// angular.module('CustomDirectiveApp')
//   .directive('aaYumCheese', function() {
//     return {
//       restrict: 'E',
//       templateUrl: 'cheese.html'
//     };
//   });

angular.module('CustomDirectiveApp')
  .directive('aaYoyoDetails', function() {
    return {
      templateUrl: 'yoyo-details.html',
      scope: {
        yoyo: '=yoyoData'
      }
    };
  });
