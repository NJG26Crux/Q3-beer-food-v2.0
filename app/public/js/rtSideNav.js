angular.module('app')
.component('rightSideNav', {
  controller: function($mdSidenav, $http){
    const vm = this;
     vm.toggleLeft = buildToggler('right');
    //  vm.toggleRight = buildToggler('right');

     function buildToggler(componentId) {
       return function() {
         $mdSidenav(componentId).toggle();
       };
     }
     vm.foodSearch = function () {
       console.log (vm.searchFood);
       let searchString = []
        if (vm.searchFood.name) {
          searchString.push('food=' + vm.searchFood.name);
        }
        console.log(searchString);
        $http.get(`/beers?search=${searchString}`).then(function(data) {
          console.log(data);
     });
   }
  },
  templateUrl: 'template-rtSideNav.html'
})
