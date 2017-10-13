
angular.module('app')
.component('beerList', {
  controller: ['recipes', function(recipes){
    const vm = this;

    vm.recipeSearch = function (dish) {
      console.log(dish);
      const searchString = dish.replace(/ /gi, '+');
      console.log(searchString);
      recipes.getRecipes(searchString);
    }
  }],
  bindings:{
    beers:'<'
  },
  templateUrl: 'template-beer-list.html'
})
