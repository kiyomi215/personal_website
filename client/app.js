var personalWebsite = angular.module('personalWebsite', ['ngRoute', 'ngMaterial']);

personalWebsite.config(function($routeProvider) {
  $routeProvider

  // .when('/', {
  //   templateUrl: 'views/components/home/home.tpl.html',
  //   controller: 'home/home.ctrl.js'
  // })

  .when('/about', {
    templateUrl: 'client/views/components/about/about.tpl.html',
    controller: 'aboutController'
  })

  // .when('/projects', {
  //   templateUrl: 'views/components/projects/projects.tpl.html',
  //   controller: 'projects/projects.ctrl.js'
  // })

  .otherwise({redirectTo: '/'});

});

personalWebsite.controller('aboutController', function($scope) {
    $scope.test = 'This should be the about page.';
});

personalWebsite.controller('mainController', function($scope) {
    $scope.test = 'This should be the homepage.';
});