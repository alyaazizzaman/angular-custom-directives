angular.module('CustomDirectiveApp', [])
  .controller('YoyoController', ['$scope', function($scope) {
    $scope.yoyo = {name: 'Duncan Metal Drifter',
      img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
    };
  }]);
