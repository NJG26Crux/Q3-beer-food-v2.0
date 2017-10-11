
// angular
//   .module('app') //, 'ngMessages', 'material.svgAssetsCache'
//   .controller('lftSideNav', function ($scope, $timeout, $mdSidenav) {
//     // const vm = this
//     $scope.toggleLeft = buildToggler('left');
//     $scope.toggleRight = buildToggler('right');
//
//     function buildToggler(componentId) {
//       return function() {
//         $mdSidenav(componentId).toggle();
//       };
//     }
//     // console.log ('I am going to read searchBeer')
//     const vm = this
//     vm.searchBeer = function () {
//       console.log ('I have been searched');
//     }
//   });


angular.module('app')
.component('leftSideNav', {
  controller: function($mdSidenav){
    const vm = this;
     vm.toggleLeft = buildToggler('left');
    //  vm.toggleRight = buildToggler('right');

     function buildToggler(componentId) {
       return function() {
         $mdSidenav(componentId).toggle();
       };
     }
     vm.searchBeer = function () {
       
       console.log ('I have been searched');
     }
  },
  templateUrl: 'template-lftSideNav.html'
})
