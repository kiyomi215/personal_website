"use strict";

angular.module('personalWebsite.home', [])
  .controller('homeController', ['$scope', function($scope) {
  $scope.message = 'This is my HOME controller.';
}])
