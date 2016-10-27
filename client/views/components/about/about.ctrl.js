"use strict";

angular.module('personalWebsite.about', [])
  .controller('aboutController', ['$scope', function($scope) {
    $scope.message = 'This is my ABOUT controller.';
  }]);
