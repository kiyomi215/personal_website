"use strict";

angular.module('personalWebsite.contact', [])
  .controller('contactController', ['$scope', '$http', function($scope, $http) {
    $scope.email = {
      name: $scope.contact.name,
      phone: $scope.contact.number,
      email: $scope.contact.email,
      message: $scope.contact.message,
      sendCopy: true
    };

    $scope.sendEmail = function($scope.email) {

      $http.post('/contact-form', $scope.email)
        .then(function(response) {
          console.log('Success! ', response.data);
        })
        .catch(function(err) {
          console.log('Error: ', err);
        })
    };

  }]);
