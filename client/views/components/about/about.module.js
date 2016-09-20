angular.module('personalWebsite.about', [])
  .config(['routeProvider', function($routeProvider) {
    $routeProvider

    .when('/about', {
    controller: 'AboutController',
    template: about.tpl.html
    });
  }])