"use strict";

angular.module('personalWebsite.contact', [])
  .controller('contactController', ['$scope', '$http', function($scope, $http) {
    function sendEmail(email) {
      var email = {
        sender: 'Keeley Nakamoto',
        recipient: $scope.contact.name,
        phone: $scope.contact.number,
        email: $scope.contact.email,
        message: $scope.contact.message,
        sendCopy: true
      }

      $http.post('/contact-form', email)
        .success(function(email, status, headers, config) {
          console.log(email);
        })
        .error(function(email, status, headers, config) {
          console.log('Error: ', email);
        })
    };

  }]);
