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
    controller: function($mdSidenav, $http) {
      const vm = this;
      vm.toggleLeft = buildToggler('left');
      //  vm.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
          vm.leftSideNavOpen = !vm.leftSideNavOpen;
        };
      }
      vm.beerSearch = function() {
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

        console.log(searchString);

        $http.get(`/beers?search=${searchString}`).then(function(data) {
          // console.log(data.data);
          const beers = data.data
          for (i=0; i<beers.length ;i++) {
            // console.log(beers[i]);
            let add_start = [];
            let add_middle = [];
            let add_end = [];
            let add_dry = [];
            // console.log(beers[i].ingredients.hops);
            for (j=0; j<beers[i].ingredients.hops.length ;j++) {
              // console.log('***' + beers[i].ingredients.hops[j].name);
              if (beers[i].ingredients.hops[j].add === "start") {
                add_start.push(beers[i].ingredients.hops[j]);
              } else if (beers[i].ingredients.hops[j].add === "middle") {
                add_middle.push(beers[i].ingredients.hops[j]);
              } else if (beers[i].ingredients.hops[j].add === "end") {
                add_end.push(beers[i].ingredients.hops[j]);
              } else if (beers[i].ingredients.hops[j].add === "dry hop") {
                add_dry.push(beers[i].ingredients.hops[j]);
              }
            }
            // beers[i].ingredients.hops_add_start.push(add_start)
            // beers[i].ingredients.hops_add_middle.push(add_middle)
            // beers[i].ingredients.hops_add_end.push(add_end)
            // beers[i].ingredients.hops_add_dry.push(add_dry)

            beers[i].ingredients.hops = {'start' : add_start, 'middle' : add_middle, 'end' : add_end, 'dry' : add_dry}

            // console.log(beers[i].ingredients.hops);
            // console.log('*****************');
          }
          vm.data = beers;
          console.log(vm.data);
        });
      }
    },
    templateUrl: 'template-lftSideNav.html'
  })
