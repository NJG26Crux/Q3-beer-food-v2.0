
angular.module('app')
.component('recipeList', {
  controller: function(){
    const vm = this;
  },
  bindings:{
    recipes:'<'
  },
  templateUrl: 'template-recipes-list.html'
})
