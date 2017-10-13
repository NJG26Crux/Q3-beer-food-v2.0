
angular.module('app')
.component('foodList', {
  controller: function(){
    const vm = this;
  },
  bindings:{
    foods:'<'
  },
  templateUrl: 'template-food-list.html'
})
