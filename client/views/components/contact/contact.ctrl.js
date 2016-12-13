"use strict";

angular.module('personalWebsite.contact', [])
  .controller('contactController', ['$scope', '$http', function($scope, $http) {
    var email = {
      name: $scope.contact.name,
      phone: $scope.contact.number,
      email: $scope.contact.email,
      message: $scope.contact.message,
      sendCopy: true
    };
    function sendEmail(email) {

      $http.post('/contact-form', email)
        .then(function(response) {
          console.log('Success! ', response.data);
        })
        .catch(function(err) {
          console.log('Error: ', err);
        })
    };

  }]);
