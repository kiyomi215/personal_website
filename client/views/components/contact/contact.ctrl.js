"use strict";

angular.module('personalWebsite.contact', [])
  .controller('contactController', ['$scope', '$http', function($scope, $http) {
    function sendEmail(email) {
      var email = {
        name: $scope.contact.name,
        phone: $scope.contact.number,
        email: $scope.contact.email,
        message: $scope.contact.message,
        sendCopy: true
      };

      $http.post('/contact-form', email)
        .then(function(email, status) {
          console.log('Success! 'email);
        })
        .catch(function(email, status) {
          console.log('Error: ', email);
        })
    };

  }]);
