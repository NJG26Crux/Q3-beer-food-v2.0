angular.module('app', ['ngMaterial'])

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
  controller: function($mdSidenav){
    const vm = this;
     vm.toggleLeft = buildToggler('left');
    //  vm.toggleRight = buildToggler('right');

     function buildToggler(componentId) {
       return function() {
         $mdSidenav(componentId).toggle();
       };
     }
     // console.log ('I am going to read searchBeer')
     vm.searchBeer = function () {
       console.log ('I have been searched');
     }
  },
  template:
  `
  <div layout="column" style="height: 500px;" ng-cloak="" class="sidenavdemoCustomSidenav" ng-app="app">
    <section layout="row" flex="">
      <md-sidenav class="md-sidenav-left" md-component-id="left" md-disable-backdrop="" md-whiteframe="4">
        <md-toolbar class="md-theme-indigo">
          <h1 class="md-toolbar-tools">Beer Search</h1>
        </md-toolbar>
        <md-content layout-margin="">

          <!--************************ -->
          <form novalidate name="searchBeer" ng-submit="$ctrl.searchBeer()"> <!--$ctrl.-->

            <div class="formField dFlex" ng-class="{'has-error': searchBeer.id.$invalid && searchBeer.id.$touched,'has-success': searchBeer.id.$valid,}">
              <label for="id">Id:</label>
              <input type="number" name="id" class="form-control" required ng-minlength="1" ng-maxlength="4" ng-model="$ctrl.post.id" ng-model-options="{ updateOn: 'blur' }" />
              <div class="error-container" ng-show="searchBeer.id.$dirty && searchBeer.id.$invalid">
                <!-- <small class="error" ng-show="searchBeer.id.$error.required">Please input a Id</small> -->
                <small class="error" ng-show="searchBeer.id.$error.minlength">Id is required to be at least 1 characters</small>
                <small class="error" ng-show="searchBeer.id.$error.maxlength">Id cannot be longer than 4 characters</small>
              </div>
            </div>

            <div class="formField dFlex" ng-class="{'has-error': searchBeer.name.$invalid && searchBeer.name.$touched,'has-success': searchBeer.name.$valid,}">
              <label for="name">Name:</label>
              <input id="name" type="text" class="form-control" required ng-minlength="3" ng-model="$ctrl.post.name" ng-model-options="{ updateOn: 'blur' }"></input>
              <div class="error-container" ng-show="searchBeer.name.$dirty && searchBeer.name.$invalid">
                <small class="error" ng-show="searchBeer.name.$error.required">Please input a Name</small>
                <small class="error" ng-show="searchBeer.name.$error.minlength">Name is required to be at least 3 characters</small>
                <!-- <small class="error" ng-show="searchBeer.body.$error.maxlength">Title cannot be longer than 20 characters</small> -->
              </div>
            </div>

            <div class="form-group">
              <button type="submit" class="btn btn-primary formField"> <!-- ng-disabled="searchBeer.$invalid"-->
                Search
              </button>
            </div>

          </form>
          <!--************************ -->

          <p>
            This sidenav is not showing any backdrop, where users can click on it, to close the sidenav.
          </p>
          <md-button ng-click="$ctrl.toggleLeft()" class="md-accent">
            Close this Sidenav
          </md-button>
        </md-content>
      </md-sidenav>
      <md-content flex="" layout-padding="">
        <div layout="column" layout-align="top center">
          <h1>Hello World</h1>
          <p>
            Developers can also disable the backdrop of the sidenav.<br> This will disable the functionality to click outside to close the sidenav.
          </p>
          <div>
            <md-button ng-click="$ctrl.toggleLeft()" class="md-raised">
              Toggle Sidenav
            </md-button>
          </div>
        </div>
      </md-content>
    </section>
  </div>
  `
})
