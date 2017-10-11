angular.module('app')
.component('rightSideNav', {
  controller: function($mdSidenav){
    const vm = this;
     vm.toggleLeft = buildToggler('right');
    //  vm.toggleRight = buildToggler('right');

     function buildToggler(componentId) {
       return function() {
         $mdSidenav(componentId).toggle();
       };
     }
     vm.searchFood = function () {
       console.log ('I have been searched on the right');
     }
  },
  templateUrl: 'template-rtSideNav.html'
})
