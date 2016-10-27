var personalWebsite = angular.module('personalWebsite', [
  'ngRoute',
  'ngMaterial',
  'personalWebsite.home',
  'personalWebsite.about',
  'personalWebsite.projects'
  'personalWebsite.blog',
]);

personalWebsite.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'client/views/components/home/home.tpl.html',
    controller: 'homeController'
  })

  .when('/about', {
    templateUrl: 'client/views/components/about/about.tpl.html',
    controller: 'aboutController'
  })

  .when('/projects', {
    templateUrl: 'client/views/components/projects/projects.tpl.html',
    controller: 'projectsController'
  })

  .when('/contact', {
    templateUrl: 'client/views/components/contact/contact.tpl.html',
    controller: 'contactController'
  })

    .when('/blog', {
    templateUrl: 'client/views/components/blog/blog.tpl.html',
    controller: 'blogController'
  })

  .otherwise({redirectTo: '/'});

});

// personalWebsite.controller('mainController', function($scope) {
//     $scope.test = 'This should be the homepage.';
// });
//
// personalWebsite.controller('aboutController', function($scope) {
//     $scope.test = 'This should be the about page.';
// });
//
// // personalWebsite.controller('projectsController', function($scope) {
// //     $scope.test = 'This should be the project page.';
// // });
//
// personalWebsite.controller('contactController', function($scope) {
//     $scope.test = 'This should be the contact page.';
// });
//
// personalWebsite.controller('blogController', function($scope) {
//     $scope.test = 'This should be the blog  page.';
// });
