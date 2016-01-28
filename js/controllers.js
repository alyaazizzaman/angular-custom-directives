angular.module('CustomDirectiveApp')
  .controller("MainController", [MainController]);

function MainController(){
  var vm = this;
  vm.title = "Angular Template";
}
