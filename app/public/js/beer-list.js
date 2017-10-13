
angular.module('app')
.component('beerList', {
  controller: function(){
    const vm = this;
  },
  bindings:{
    beers:'<'
  },
  templateUrl: 'template-beer-list.html'
})
