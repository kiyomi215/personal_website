"use strict";

angular.module('personalWebsite.contact', [])
  .controller('contactController', ['$scope', '$http', function($scope, $http) {

    $scope.sendEmail = function(email) {
      $http.post('/contact-form', email)
      .then(function(response) {
        console.log('Success! ', response.data);
      })
      .catch(function(err) {
        console.log('Error: ', err);
      })
    };

    $scope.createEmail = function(){
      var email = {
      name: $scope.contactName,
      phone: $scope.contactNumber,
      email: $scope.contactEmail,
      message: $scope.contactMessage
      //sendCopy: true
      };
      console.log('here is the email: ', email);
      $scope.sendEmail(email);

    };


  }]);
