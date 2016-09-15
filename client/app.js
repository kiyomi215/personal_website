var PersonalWebsite = angular.module('PersonalWebsite', ['ngRoute', 'ngMaterial']);

PersonalWebsite.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/about', {
    templateUrl: 'client/about/about.html'
  })

  .when('/projects', {
    templateUrl: 'client/projects/projects.html'
  })

  .otherwise({
    redirectTo: '/'
  });

}]);