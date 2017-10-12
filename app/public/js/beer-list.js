
angular.module('app')
.component('beerList', {
  controller: function(){
    const vm = this;
  },
  bindings:{
    beers:'<'
  },
  template:`
    {{$ctrl.beers}}
    <ang-accordion>
      <div ng-repeat="beer in {{$ctrl.beers}}"
      <collapsible-item item-title="Some Heading">
        <div>This is regular html code</div>
      </collapsible-item>

    </ang-accordion>
  `
})
