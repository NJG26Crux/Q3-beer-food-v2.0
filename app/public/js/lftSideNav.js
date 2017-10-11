
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
  controller: function($mdSidenav, $http){
    const vm = this;
     vm.toggleLeft = buildToggler('left');
    //  vm.toggleRight = buildToggler('right');

     function buildToggler(componentId) {
       return function() {
         $mdSidenav(componentId).toggle();
       };
     }
     vm.beerSearch = function () {
       console.log(vm.searchBeer);
// vm.searchBeer.id

        let searchVar = []

       if (vm.searchBeer.id) {
         searchVar.push('ids=' + vm.searchBeer.id);
       }
       if (vm.searchBeer.name) {
         searchVar.push('beer_name=' + vm.searchBeer.name);
       }
       if (vm.searchBeer.abvgt) {
         searchVar.push('abv_gt=' + vm.searchBeer.abvgt);
       }
       if (vm.searchBeer.abvlt) {
         searchVar.push('abv_lt=' + vm.searchBeer.abvlt);
       }
       if (vm.searchBeer.ibugt) {
         searchVar.push('ibu_gt=' + vm.searchBeer.ibugt);
       }
       if (vm.searchBeer.ibult) {
         searchVar.push('ibu_lt=' + vm.searchBeer.ibult);
       }
       if (vm.searchBeer.ebcgt) {
         searchVar.push('ebc_gt=' + vm.searchBeer.ebcgt);
       }
       if (vm.searchBeer.ebclt) {
         searchVar.push('ebc_lt=' + vm.searchBeer.ebclt);
       }
       if (vm.searchBeer.yeast) {
         searchVar.push('yeast=' + vm.searchBeer.yeast);
       }
       if (vm.searchBeer.hops) {
         searchVar.push('hops=' + vm.searchBeer.hops);
       }
       if (vm.searchBeer.malt) {
         searchVar.push('malt=' + vm.searchBeer.malt);
       }
      //  if (food) {
      //    searchVar.push('food=' + food);
      //  }

       const searchString = searchVar.join('|');

       console.log (searchString);

       $http.get(`/beers?search=${searchString}`).then(function(data) {
         console.log(data);
       });
     }
  },
  templateUrl: 'template-lftSideNav.html'
})
