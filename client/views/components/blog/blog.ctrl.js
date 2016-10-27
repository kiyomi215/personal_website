"use strict";

angular.module('personalWebsite.blog', [])
  .controller('blogController', ['$scope', function($scope) {
    $scope.message = 'This is my BLOG controller.';
  }]);
