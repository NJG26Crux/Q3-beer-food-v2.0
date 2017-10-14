
angular.module('app')
.component('recipeList', {
  controller: function(){
  // controller: ['recipes', function(recipes){
    const vm = this;
  },
  bindings:{
    recipes:'<'
  },
  templateUrl: 'template-recipes-list.html'
})
