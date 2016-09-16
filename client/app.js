var PersonalWebsite = angular.module('PersonalWebsite', ['ngRoute', 'ngMaterial']);

PersonalWebsite.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'home/home.tpl.html',
    controller: 'home/home.ctrl.js'
  })

  .when('/about', {
    templateUrl: 'about/about.html',
    controller: 'about/about.ctrl.js'
  })

  .when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'projects/projects.ctrl.js'
  })

  .otherwise({redirectTo: '/'});

}]);