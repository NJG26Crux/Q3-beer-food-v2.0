
angular.module('app')
.component('foodList', {
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
    foods:'<'
  },
  templateUrl: 'template-food-list.html'
})
