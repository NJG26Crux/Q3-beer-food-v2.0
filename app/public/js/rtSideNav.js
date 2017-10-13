angular.module('app')
  .component('rightSideNav', {
    controller: function($mdSidenav, $http, recipes) {
      const vm = this;
      vm.toggleLeft = buildToggler('right');
      //  vm.toggleRight = buildToggler('right');

      vm.$onInit = function(){
        vm.recipes = recipes;
      }
      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }
      vm.foodSearch = function() {
        console.log(vm.searchFood);
        let searchString = []
        if (vm.searchFood.name) {
          searchString.push('food=' + vm.searchFood.name);
        }
        console.log(searchString);
        $http.get(`/beers?search=${searchString}`).then(function(data) {
          let dishes = [];
          // console.log('data: ' + data.data[0]);
          for (i=0; i<data.data.length ;i++) {
            // console.log('beer: ' + data.data[i].food_pairing);
            // console.log('pair: ' + beer.food_pairing);
            for (j=0; j<data.data[i].food_pairing.length ;j++) {
              console.log('dish: ' + data.data[i].food_pairing[j]);
              console.log(' search: ' + vm.searchFood.name);
              if (data.data[i].food_pairing[j].toLowerCase().indexOf(vm.searchFood.name.toLowerCase()) !== -1 && dishes.includes(data.data[i].food_pairing[j]) === false) {
                dishes.push(data.data[i].food_pairing[j])
                console.log(dishes.includes(data.data[i].food_pairing[j]) === false);
                console.log('dishes: ' + dishes);
              }
            }
            console.log('final dishes: ' + dishes);
          }
          vm.data = data.data;
          vm.dishes = dishes
          // console.log(vm.data);
        });
      }
    },
    templateUrl: 'template-rtSideNav.html'
  })


  var string = "foo",
      substring = "oo";
  string.indexOf(substring) !== -1;
