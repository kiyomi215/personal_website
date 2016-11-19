"use strict";

var personalWebsite = angular.module('personalWebsite', [
  'ngRoute',
  'ngMaterial',
  'ui.bootstrap',
  'ui.mask',
  'personalWebsite.home',
  'personalWebsite.about',
  'personalWebsite.projects',
  'personalWebsite.contact',
  'personalWebsite.blog'
]);

personalWebsite.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'views/components/home/home.tpl.html',
    controller: 'homeController'
  })

  .when('/about', {
    templateUrl: 'views/components/about/about.tpl.html',
    controller: 'aboutController'
  })

  .when('/projects', {
    templateUrl: 'views/components/projects/projects.tpl.html',
    controller: 'projectsController'
  })

  .when('/contact', {
    templateUrl: 'views/components/contact/contact.tpl.html',
    controller: 'contactController'
  })

    .when('/blog', {
    templateUrl: 'views/components/blog/blog.tpl.html',
    controller: 'blogController'
  })

  .otherwise({redirectTo: '/'});

});
