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
