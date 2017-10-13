(function() {

  angular.module('app')
    .service('recipes', function ($http) {
      const vm = this;
      vm.recipes = [];
      vm.setRecipes = function (recipes) {
        this.recipes = recipes;
        console.log(this.recipes);
      }

      vm.getRecipes = function(recipe){
        $http.get(`/recipes?searchString=${recipe}`).then(function(data) {
          vm.recipes = data.data.matches;
          console.log(vm.recipes);
        });
      }
    })
}());
